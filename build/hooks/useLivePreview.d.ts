import * as listen from 'datocms-listen';
import { DocumentNode } from '@apollo/client/core/core.cjs';
export type LivePreviewOptions = {
    preview: boolean;
    variables?: any;
    apiToken?: string;
};
export default function useLivePreview(query: DocumentNode, initialData?: any, options?: LivePreviewOptions): {
    data: any;
    error: listen.ChannelErrorData;
    status: listen.ConnectionStatus;
};
