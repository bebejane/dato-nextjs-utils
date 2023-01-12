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
    data: any;
    error: any;
    loading: any;
    loadMore: (vars: any) => any;
    nextPage: () => Promise<any>;
    page: any;
};
export default useApiQuery;
