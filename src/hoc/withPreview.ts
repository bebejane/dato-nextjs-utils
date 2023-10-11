import type { NextApiRequest, NextApiResponse } from "next"

export default async function withPreview(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET' && req.query?.ping)
    return res.status(200).send('pong')

  if (!process.env.DATOCMS_PREVIEW_SECRET)
    return res.status(500).json({ message: `DATOCMS_PREVIEW_SECRET env not set` })

  if (req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET)
    return res.status(500).json({ message: `Invalid token` })

  if (!req.query.slug)
    return res.status(500).json({ message: 'Invalid slug' })

  const { slug } = req.query as { slug: string }
  const Location = slug ? slug.startsWith('/') ? slug : `/${slug}` : '/'

  try {
    res.setPreviewData({}, { maxAge: 3 })
    res.writeHead(307, { Location })
    res.end()
  } catch (err) {
    console.error(err)
    return res.status(401).json({ message: 'Error previewing page!' })
  }
}