import type { NextApiRequest, NextApiResponse } from 'next'
import withBasicAuth from './withBasicAuth.js';
import { buildClient } from '@datocms/cma-client';

//const withBackup = withBasicAuth(async (req: NextApiRequest, res: NextApiResponse) => {
const withBackup = async (req: NextApiRequest, res: NextApiResponse) => {

  const backupPrefix = 'auto-backup-'
  const maxBackups = req.query.max ? parseInt(req.query.max as string) : 1
  const secret = req.query?.secret ?? null

  if (!process.env.DATOCMS_ENVIRONMENT)
    return res.status(500).send('DATOCMS_ENVIRONMENT not set in .env')
  if (!process.env.DATOCMS_API_TOKEN)
    return res.status(500).send('DATOCMS_API_TOKEN not set in .env')
  if (!process.env.BASIC_AUTH_PASSWORD)
    return res.status(500).send('BASIC_AUTH_PASSWORD not set in .env')
  if (!secret || secret !== process.env.BASIC_AUTH_PASSWORD)
    return res.status(401).send('Unnauthorized')

  const client = buildClient({ environment: process.env.DATOCMS_ENVIRONMENT, apiToken: process.env.DATOCMS_API_TOKEN, requestTimeout: 3000 })
  const backups = (await client.environments.list()).filter(e => e.id.startsWith('auto-backup') && e.meta.primary === false).sort((a, b) => a.id.replace(backupPrefix, '') > b.id.replace(backupPrefix, '') ? -1 : 1)
  const today = new Date().toISOString().replace('T', '-').replaceAll(':', '-').replace('Z', '').split('.')[0]
  const name = `auto-backup-${today}`

  console.log('max backups', maxBackups)
  console.log('last backup was', backups[0]?.id ?? 'none')
  console.log('creating backup', name)

  try {

    await client.environments.fork(process.env.DATOCMS_ENVIRONMENT, { id: name }, {
      immediate_return: false,
      fast: false,
      force: true
    })

    for (let i = 0; i < backups.reverse().slice(maxBackups - 1).length; i++) {
      console.log('deleting old backup...', backups[i].id)
      await client.environments.destroy(backups[i].id)
    }
    console.log('backup done!')
  } catch (e) {
    console.error(e)
    return res.status(401).send(`backup failed: ${e.message}`)
  }

  return res.status(200).send('OK')

}

export default withBackup