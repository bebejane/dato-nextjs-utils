import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs';
import { BatchHttpLink } from "@apollo/client/link/batch-http/batchHttpLink.js";
import { TypedDocumentNode } from '@apollo/client/core/types.js';
import { gql } from "@apollo/client/core/core.cjs";

const isServer = typeof window === 'undefined';
const GRAPHQL_API_ENDPOINT = process.env.GRAPHQL_API_ENDPOINT || process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT || `https://graphql.datocms.com`;
const GRAPHQL_API_TOKEN = process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN || process.env.GRAPHQL_API_TOKEN
const GRAPHQL_ENVIRONMENT = process.env.GRAPHQL_ENVIRONMENT

const loggingFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {

  const queries = init ? JSON.parse(init.body.toString()) : undefined;
  const operations = queries ? Array.isArray(queries) ? queries.map((op: { operationName: string }) => op.operationName) : [queries.operationName] : [];
  const requestName = `${operations.join(', ')}`
  const response = await fetch(input, init)
  const t = new Date().getTime()

  return {
    ...response,
    async text() {
      const result = await response.text()
      console.log("\x1b[33m%s\x1b[0m", 'gql  ', `- ${requestName}`, `- ${new Date().getTime() - t}ms`)
      return result
    }
  }
}

const linkConfig = {
  uri: GRAPHQL_API_ENDPOINT,
  fetch: process.env.LOG_GRAPHQL === 'true' ? loggingFetch : undefined,
  batchMax: 10,
  batchInterval: 50
}

const createLink = (preview: boolean = false, apiToken: string = GRAPHQL_API_TOKEN) => {
  const headers = {
    'Authorization': `Bearer ${apiToken}`,
    'X-Exclude-Invalid': true
  }

  if (preview)
    headers['X-Include-Drafts'] = true

  if (GRAPHQL_ENVIRONMENT)
    headers['X-Environment'] = GRAPHQL_ENVIRONMENT

  return new BatchHttpLink({
    ...linkConfig,
    headers
  })
}

const link = createLink(false, GRAPHQL_API_TOKEN)
const previewLink = createLink(true, GRAPHQL_API_TOKEN)

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: isServer,
  defaultOptions: {
    query: {
      fetchPolicy: process.env.DEV_CACHE ? 'cache-first' : 'no-cache',
      errorPolicy: 'all',
    }
  }
});

export type ApiQueryOptions = {
  variables?: any | any[],
  preview?: boolean,
  apiToken?: string,
  environment?: string
}

export const apiQuery = async (query: TypedDocumentNode | TypedDocumentNode[], options?: ApiQueryOptions): Promise<any> => {

  const { variables, preview = false, apiToken } = options || {}
  console.log(options);

  if (query === null)
    throw new Error('Invalid query! Query is empty')

  if (!GRAPHQL_API_TOKEN && !apiToken)
    throw new Error('No graphql api token exists in .env')

  try {

    client.setLink(apiToken ? createLink(preview, apiToken) : preview ? previewLink : link)

    const batch = (Array.isArray(query) ? query : [query]).map((q, idx) => {
      const vars = Array.isArray(variables) && variables.length > idx - 1 ? variables[idx] : variables || {}
      return client.query({ query: q, variables: vars })
    })

    const data = await Promise.all(batch)

    const errorMessages: string[] = []
    data.filter(({ errors }) => errors).forEach(({ errors }) => {
      errors.map(e => e.message).forEach((message) => errorMessages.push(message))
    })

    if (errorMessages.length)
      throw new Error(errorMessages.join('. '))

    let result = {}
    data.forEach((res) => result = { ...result, ...res?.data })
    return result

  } catch (err) {
    throw err
  }
}

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
  return gql(q) as TypedDocumentNode
}

export const datoError = (err: Error) => {
  console.error(err)
  return err.message || err
}
