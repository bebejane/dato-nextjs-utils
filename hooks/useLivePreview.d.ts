import { DocumentNode } from '@apollo/client/core/core.cjs';
export declare type LivePreviewOptions = {
    preview: boolean;
    variables?: any;
    apiToken?: string;
};
export default function useLivePreview(query: DocumentNode, initialData?: any, options?: LivePreviewOptions): {
    data: any;
    error: import("datocms-listen").ChannelErrorData;
    status: import("datocms-listen").ConnectionStatus;
};
