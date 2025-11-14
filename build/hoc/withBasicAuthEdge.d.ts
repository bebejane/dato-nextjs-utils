import type { NextRequest, NextResponse } from 'next/server.js';
export default function withBasicAuthEdge(callback: (req: NextRequest, res: NextResponse) => void, options?: {
    username: string;
    password: string;
}): (req: NextRequest, res: NextResponse) => void;
