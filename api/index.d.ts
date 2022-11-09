import { TypedDocumentNode } from '@apollo/client/core/types.js';
export declare const client: any;
export declare type ApiQueryOptions = {
    variables?: any | any[];
    preview?: boolean;
    apiToken?: string;
};
export declare const apiQuery: (query: TypedDocumentNode | TypedDocumentNode[], options?: ApiQueryOptions) => Promise<any>;
export declare const SEOQuery: (model: string, id?: string) => TypedDocumentNode;
export declare const datoError: (err: Error) => string | Error;
