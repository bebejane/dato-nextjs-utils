import { NextRequest, NextResponse } from "next/server.js";
export declare type WebPreviewOptions = {
    links?: PreviewLink[];
};
export declare type PreviewLink = {
    label: string;
    url: string;
};
export default function withWebPreviewsEdge(generatePreviewUrl: (record: any) => Promise<string>, opt?: WebPreviewOptions): (req: NextRequest, res: NextResponse) => void;
