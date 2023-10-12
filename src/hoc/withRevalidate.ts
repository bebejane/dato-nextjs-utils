import type { NextApiRequest, NextApiResponse } from 'next'

export const basicAuth = (req: NextApiRequest) => {

  if (!process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASSWORD)
    throw new Error('BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env')

  const basicAuth = req.headers.authorization

  if (!basicAuth)
    return true;

  const auth = basicAuth.split(' ')[1]
  const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
  return user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD
}

export default function withRevalidate(callback: (record: any, revalidate: (paths: string[]) => Promise<void>) => Promise<void>): (req: NextApiRequest, res: NextApiResponse) => void {

  return async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'GET' && req.query?.ping)
      return res.status(200).send('pong')

    if (!basicAuth(req))
      return res.status(401).send('Access denied')

    const payload = req.body;

    if (!payload || !payload.entity)
      throw 'Payload is empty'

    const { entity, related_entities, event_type, meta } = payload
    const model = related_entities.find(({ id }) => id === entity.relationships?.item_type?.data?.id)

    if (!model)
      throw new Error(`Model not found in payload`)

    const record = { ...entity.attributes, model: model.attributes }
    const delay = new Date().getTime() - new Date(event_type === 'publish' ? meta.published_at : event_type === 'create' ? meta.created_at : meta.updated_at).getTime()

    callback(record, async (paths) => {
      try {
        if (!paths || !paths.length)
          throw 'Nothing to revalidate';

        await Promise.all(paths.map(p => res.revalidate(p)))

        console.log(`revalidate${delay ? ` (${delay}ms)` : ''}`, paths)

        return res.json({ revalidated: true, paths, delay })
      } catch (err) {
        console.log('Error revalidating', paths)
        console.log(err)
        return res.json({ revalidated: false, err })
      }
    })
  }
}


