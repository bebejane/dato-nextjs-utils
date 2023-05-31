import { NextRequest, NextResponse } from "next/server.js";
import cors from '../utils/cors.js'

export default function withWebPreviewsEdge(generatePreviewUrl: (record: any) => Promise<string>): (req: NextRequest, res: NextResponse) => void {

  const corsOptions = {
    origin: '*',
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
  }

  return async (req: NextRequest, res: NextResponse) => {

    if (!process.env.NEXT_PUBLIC_SITE_URL && !process.env.SITE_URL)
      throw new Error('NEXT_PUBLIC_SITE_URL is not set in .env')

    if (req.method === 'OPTIONS')
      return cors(req, new Response('ok', { status: 200 }), corsOptions)

    const payload = await req.json()

    if (!payload)
      throw new Error('No form data in request body')

    const path = await generatePreviewUrl(payload);
    const previewLinks = []
    const baseUrl = path?.startsWith('https://') ? '' : process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL

    if (path) {
      previewLinks.push({ label: 'Live', url: `${baseUrl}${path}` })
      if (process.env.DATOCMS_PREVIEW_SECRET && payload?.item?.meta?.status !== 'published')
        previewLinks.push({ label: 'Preview', url: `${baseUrl}/api/preview?slug=${path}&secret=${process.env.DATOCMS_PREVIEW_SECRET}` })
    }

    return cors(
      req,
      new Response(JSON.stringify({ previewLinks }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }), corsOptions)
  }
}