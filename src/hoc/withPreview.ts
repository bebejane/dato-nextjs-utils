import type { NextApiRequest, NextApiResponse } from "next"

export default async function withPreview(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET' && req.query?.ping)
    return res.status(200).send('pong')

  if (req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET || !req.query.slug)
    return res.status(401).json({ message: 'Invalid token' })

  const { slug } = req.query as { slug: string }

  const Location = slug ? slug.startsWith('/') ? slug : `/${slug}` : '/'

  try {
    res.setPreviewData({}, { maxAge: 10 })
    res.writeHead(307, { Location })
    res.end()
  } catch (err) {
    console.error(err)
    return res.status(401).json({ message: 'Error previewing page!' })
  }
}