import type { NextRequest, NextResponse } from 'next/server.js';
export default function withBasicAuthEdge(callback: (req: NextRequest, res: NextResponse) => void): (req: NextRequest, res: NextResponse) => void;
