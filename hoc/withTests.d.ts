import type { NextApiRequest, NextApiResponse } from 'next';
export default function withTests(req: NextApiRequest, res: NextApiResponse): Promise<void>;
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
export declare function testApiEndpoints(): Promise<TestResult[]>;
export declare const testResultsToString: (results: TestResult[]) => string;
export declare const testResultsToHtml: (results: TestResult[]) => string;
export {};
