export declare type UseApiQueryProps = {
    variables?: any;
    initialData?: any;
    pageSize?: number;
};
export declare type Pagination = {
    no: number;
    count: number;
    size: number;
    end: boolean;
};
declare const useApiQuery: <T>(document: TypedDocumentNode, { variables, initialData, pageSize }?: UseApiQueryProps) => {
    data: T;
    error: Error;
    loading: boolean;
    loadMore: (vars: any) => Promise<any>;
    nextPage: () => Promise<void | {
        no: number;
        count: any;
        end: boolean;
        size: number;
    }>;
    page: Pagination;
};
export default useApiQuery;
