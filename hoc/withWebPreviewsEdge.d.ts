import { NextRequest, NextResponse } from "next/server.js";
export declare type PreviewLink = {
    label: string;
    url: string;
};
export default function withWebPreviewsEdge(generatePreviewUrl: (record: any) => Promise<string | null>): (req: NextRequest, res: NextResponse) => void;
