import type { NextApiRequest, NextApiResponse } from 'next'
import { buildClient } from '@datocms/cma-client';

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

export default async function withBackup(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET' && req.query?.ping)
    return res.status(200).send('pong')

  if (!basicAuth(req))
    return res.status(401).send('Access denied')
  if (!process.env.DATOCMS_ENVIRONMENT)
    return res.status(401).send('DATOCMS_ENVIRONMENT not set in .env')
  if (!process.env.DATOCMS_API_TOKEN)
    return res.status(401).send('DATOCMS_API_TOKEN not set in .env')

  const client = buildClient({ environment: process.env.DATOCMS_ENVIRONMENT, apiToken: process.env.DATOCMS_API_TOKEN, requestTimeout: 3000 })
  const backups = (await client.environments.list()).filter(e => e.id.startsWith('auto-backup'))
  const today = new Date().toISOString().split('T')[0]
  const name = `auto-backup ${today}`
  console.log('Last backup was: ', backups.sort((a, b) => a.id.replace('auto-backup ', '') > b.id.replace('auto-backup ', '') ? -1 : 1)[0]?.id)

  console.log('Creating backup...', name)
  const backup = await client.environments.fork(process.env.DATOCMS_ENVIRONMENT, { name })

  for (let i = 0; i < backups.length; i++) {
    console.log('Deleting old backup...', backups[i].id)
    await client.environments.destroy(backups[i].id)
  }
  console.log('Backup done!', backup.id)

  return res.status(200).send('OK')

}


