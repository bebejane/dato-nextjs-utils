import type { NextApiRequest, NextApiResponse } from "next";
export declare type PreviewLink = {
    label: string;
    url: string;
};
export default function withWebPreviews(generatePreviewUrl: (record: any) => Promise<string>): (req: NextApiRequest, res: NextApiResponse) => void;
