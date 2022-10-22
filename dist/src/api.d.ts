import { ApolloClient } from '@apollo/client';
import { TypedDocumentNode } from '@apollo/client';
export declare type ApiQueryOptions = {
    variables?: any | any[];
    preview?: boolean;
};
export declare const client: ApolloClient<import("@apollo/client").NormalizedCacheObject>;
export declare const SEOQuery: (schema: string) => TypedDocumentNode;
export declare const apiQuery: (query: TypedDocumentNode | TypedDocumentNode[], options?: ApiQueryOptions) => Promise<any>;
