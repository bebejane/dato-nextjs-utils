import { TypedDocumentNode } from '@apollo/client/core/types.js';
export declare type ApiQueryOptions = {
    variables?: any | any[];
    preview?: boolean;
};
export declare const client: any;
export declare const SEOQuery: (schema: string) => TypedDocumentNode;
export declare const apiQuery: (query: TypedDocumentNode | TypedDocumentNode[], options?: ApiQueryOptions) => Promise<any>;
