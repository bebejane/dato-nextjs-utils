import { TypedDocumentNode } from '@apollo/client/core/core.cjs';
export declare const client: any;
export type ApiQueryOptions = {
    variables?: any | any[];
    preview?: boolean;
    apiToken?: string;
    environment?: string;
    excludeInvalid?: boolean;
};
export declare const apiQuery: (query: TypedDocumentNode | TypedDocumentNode[], options?: ApiQueryOptions) => Promise<any>;
export declare const checkIsPaganationQuery: (doc: TypedDocumentNode) => boolean;
export declare const apiQueryAll: (doc: TypedDocumentNode, opt?: ApiQueryOptions, options?: {
    batchSize: number;
    delay: number;
}) => Promise<any>;
export declare const SEOQuery: (model: string, id?: string) => TypedDocumentNode;
export declare const datoError: (err: Error) => string | Error;
