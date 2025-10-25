import { useQuerySubscription } from 'react-datocms';
import * as listen from 'datocms-listen';
//@ts-ignore
import { DocumentNode } from '@apollo/client/core/core.cjs';

const GRAPHQL_API_TOKEN = process.env.GRAPHQL_API_TOKEN || process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN;

export type LivePreviewOptions = {
	preview: boolean;
	variables?: any;
	apiToken?: string;
};

export default function useLivePreview(
	query: DocumentNode,
	initialData: any = {},
	options: LivePreviewOptions = {
		preview: false,
		variables: {},
	}
) {
	const { data, error, status } = useQuerySubscription({
		token: options.apiToken || GRAPHQL_API_TOKEN,
		query: query,
		initialData,
		variables: options.variables,
		enabled: options.preview,
		includeDrafts: options.preview,
		excludeInvalid: true,
		reconnectionPeriod: 5000,
	});

	return { data, error, status };
}

// http://localhost:3000/api/preview?slug=/posts/testar&secret=jcV0Zcu6Yyl9
