import type { NextApiRequest, NextApiResponse } from "next";
export declare type WebPreviewOptions = {
    links?: PreviewLink[];
};
export declare type PreviewLink = {
    label: string;
    url: string;
};
export default function withWebPreviews(generatePreviewUrl: (record: any) => Promise<string>, opt?: WebPreviewOptions): (req: NextApiRequest, res: NextApiResponse) => void;
