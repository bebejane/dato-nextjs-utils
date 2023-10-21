declare type PreviewLink = {
    label: string;
    url: string;
};
declare type RevalidateResponse = {
    revalidated: boolean;
    paths: string[];
    delays: number;
    event_type: string;
};
declare type TestResult = {
    model: string;
    previews?: PreviewLink[];
    revalidate?: RevalidateResponse;
};
export declare function testApiEndpoints(): Promise<any[]>;
export declare const testResultsToString: (results: TestResult[]) => string;
export declare const testResultsToHtml: (results: TestResult[]) => string;
export {};
