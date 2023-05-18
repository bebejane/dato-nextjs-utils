import { NextRequest, NextResponse } from "next/server.js";
export default function withWebPreviewsEdge(generatePreviewUrl: (record: any) => Promise<string>): (req: NextRequest, res: NextResponse) => void;
