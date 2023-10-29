import type { NextApiRequest, NextApiResponse } from "next";
export declare type PreviewLink = {
    label: string;
    url: string;
};
export default function withWebPreviews(generatePreviewUrl: (record: any) => Promise<string | null>): (req: NextApiRequest, res: NextApiResponse) => void;
