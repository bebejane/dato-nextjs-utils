//@ts-ignore
import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs';
import { BatchHttpLink } from '@apollo/client/link/batch-http/batchHttpLink.js';
//@ts-ignore
import { TypedDocumentNode } from '@apollo/client/core/core.cjs';
//@ts-ignore
import { gql } from '@apollo/client/core/core.cjs';

const isServer = typeof window === 'undefined';
const GRAPHQL_API_ENDPOINT =
	process.env.GRAPHQL_API_ENDPOINT || process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT || `https://graphql.datocms.com`;
const GRAPHQL_API_TOKEN = process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN || process.env.GRAPHQL_API_TOKEN;
const GRAPHQL_ENVIRONMENT = process.env.DATOCMS_ENVIRONMENT ?? process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT ?? 'main';
const GRAPHQL_INCLUDE_DRAFTS = process.env.DATOCMS_INCLUDE_DRAFTS
	? process.env.DATOCMS_INCLUDE_DRAFTS === 'true'
		? true
		: false
	: false;

const loggingFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
	const queries = init ? JSON.parse(init.body.toString()) : undefined;
	const operations = queries
		? Array.isArray(queries)
			? queries.map((op: { operationName: string }) => op.operationName)
			: [queries.operationName]
		: [];
	const requestName = `${operations.join(', ')}`;
	const response = await fetch(input, init);
	const t = new Date().getTime();

	return {
		...response,
		async text() {
			const result = await response.text();
			console.log('\x1b[33m%s\x1b[0m', 'gql  ', `- ${requestName}`, `- ${new Date().getTime() - t}ms`);
			return result;
		},
	};
};

const linkConfig = {
	uri: GRAPHQL_API_ENDPOINT,
	fetch: process.env.LOG_GRAPHQL === 'true' ? loggingFetch : undefined,
	batchMax: 10,
	batchInterval: 50,
};

const createLink = (preview: boolean = false, apiToken: string, excludeInvalid: boolean = true) => {
	const headers = {
		'Authorization': `Bearer ${apiToken}`,
		'X-Exclude-Invalid': excludeInvalid ? 'true' : 'false',
	};

	const includeDrafts = preview || GRAPHQL_INCLUDE_DRAFTS;
	if (includeDrafts) headers['X-Include-Drafts'] = true;

	if (GRAPHQL_ENVIRONMENT) headers['X-Environment'] = GRAPHQL_ENVIRONMENT;

	return new BatchHttpLink({
		...linkConfig,
		headers,
	});
};

const link = createLink(false, GRAPHQL_API_TOKEN);
const previewLink = createLink(true, GRAPHQL_API_TOKEN);

export const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
	ssrMode: isServer,
	defaultOptions: {
		query: {
			fetchPolicy: process.env.DEV_CACHE ? 'cache-first' : 'no-cache',
			errorPolicy: 'all',
		},
	},
});

export type ApiQueryOptions = {
	variables?: any | any[];
	preview?: boolean;
	apiToken?: string;
	environment?: string;
	excludeInvalid?: boolean;
};

export const apiQuery = async (
	query: TypedDocumentNode | TypedDocumentNode[],
	options?: ApiQueryOptions
): Promise<any> => {
	const { variables, preview = false, apiToken, excludeInvalid = true } = options || {};

	if (query === null) throw new Error('Invalid query! Query is empty');

	if (!GRAPHQL_API_TOKEN && !apiToken) throw new Error('No graphql api token exists in .env');

	try {
		client.setLink(apiToken ? createLink(preview, apiToken, excludeInvalid) : preview ? previewLink : link);

		const batch = (Array.isArray(query) ? query : [query]).map((q, idx) => {
			const vars = Array.isArray(variables) && variables.length > idx - 1 ? variables[idx] : variables || {};
			return client.query({ query: q, variables: vars });
		});

		const data = await Promise.all(batch);

		const errorMessages: string[] = [];
		data
			.filter(({ errors }) => errors)
			.forEach(({ errors }) => {
				errors.map((e) => e.message).forEach((message) => errorMessages.push(message));
			});

		if (errorMessages.length) throw new Error(errorMessages.join('. '));

		let result = {};
		data.forEach((res) => (result = { ...result, ...res?.data }));
		return result;
	} catch (err) {
		throw err;
	}
};

export const checkIsPaganationQuery = (doc: TypedDocumentNode): boolean => {
	//@ts-ignore
	const operation = doc.definitions.find((d) => d.kind === 'OperationDefinition');

	if (!operation) throw new Error('Not a pagable query. Missing operation definition');

	const { selectionSet, variableDefinitions } = operation as any;

	if (!selectionSet.selections.find((s) => s.alias?.value === 'pagination'))
		throw new Error('Not a pagable query. Missing pagination field');
	if (!variableDefinitions.find((v) => v.variable.name.value === 'first'))
		throw new Error('Not a pagable query. Missing $first variable');
	if (!variableDefinitions.find((v) => v.variable.name.value === 'skip'))
		throw new Error('Not a pagable query. Missing $skip variable');

	return true;
};

export const apiQueryAll = async (
	doc: TypedDocumentNode,
	opt: ApiQueryOptions = {},
	options = { batchSize: 50, delay: 100 }
): Promise<any> => {
	checkIsPaganationQuery(doc);

	const results = {};
	let size = 100;
	let skip = 0;

	const res = await apiQuery(doc, { variables: { ...opt.variables, first: size, skip } });

	if (res.pagination?.count === undefined) throw new Error('Not a pagable query');

	const { count } = res.pagination;

	const mergeProps = (res) => {
		const props = Object.keys(res);

		for (let i = 0; i < props.length; i++) {
			const k = props[i];
			const el = res[props[i]];
			if (Array.isArray(el)) {
				results[k] = !results[k] ? el : results[k].concat(el);
			} else results[k] = el;
		}
	};

	const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult =>
		input.status === 'rejected';

	const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> =>
		input.status === 'fulfilled';

	mergeProps(res);

	let reqs = [];
	for (let skip = size; skip < count; skip += size) {
		if (reqs.length < options.batchSize && skip + size < count)
			reqs.push(apiQuery(doc, { variables: { ...opt.variables, first: size, skip } }));
		else {
			reqs.push(apiQuery(doc, { variables: { ...opt.variables, first: size, skip } }));

			const data = await Promise.allSettled(reqs);
			const error = data.find(isRejected)?.reason;

			if (error) throw new Error(error);

			for (let x = 0; x < data.length; x++) {
				//@ts-ignore
				mergeProps(data[x].value);
			}
			await new Promise((r) => setTimeout(r, options.delay));
			reqs = [];
		}
	}
	return results;
};

export const SEOQuery = (model: string, id?: string): TypedDocumentNode => {
	const q = `query GetSEO{
    seo: ${model} ${id ? `( filter: { id: { eq: "${id}" } })` : ''} {
      id 
      tags: _seoMetaTags {
        attributes 
        content 
        tag
      }
    }
  }`;
	return gql(q) as TypedDocumentNode;
};

export const datoError = (err: Error) => {
	console.error(err);
	return err.message || err;
};
