import type { NextApiRequest, NextApiResponse } from "next";
export default function withWebPreviews(generatePreviewUrl: (record: any) => Promise<string>): (req: NextApiRequest, res: NextApiResponse) => void;
