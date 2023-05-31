import type { NextApiRequest, NextApiResponse } from "next"

export default function withWebPreviews(generatePreviewUrl: (record: any) => Promise<string>): (req: NextApiRequest, res: NextApiResponse) => void {

  return async (req: NextApiRequest, res: NextApiResponse) => {

    if (!process.env.NEXT_PUBLIC_SITE_URL && !process.env.SITE_URL)
      throw new Error('NEXT_PUBLIC_SITE_URL is not set in .env')

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS')
      return res.status(200).send('ok');

    if (!req.body)
      throw new Error('No body found in request')

    const payload = req.body
    const path = await generatePreviewUrl(payload);
    const previewLinks = []
    const baseUrl = path?.startsWith('https://') ? '' : process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL

    if (path) {
      previewLinks.push({ label: 'Live', url: `${baseUrl}${path}` })

      if (process.env.DATOCMS_PREVIEW_SECRET && payload?.item?.meta?.status !== 'published')
        previewLinks.push({ label: 'Preview', url: `${baseUrl}/api/preview?slug=${path}&secret=${process.env.DATOCMS_PREVIEW_SECRET}` })
    }

    return res.status(200).json({ previewLinks });
  }
}