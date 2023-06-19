import type { NextApiRequest, NextApiResponse } from 'next'

export default function withBasicAuth(callback: (req: NextApiRequest, res: NextApiResponse) => void): (req: NextApiRequest, res: NextApiResponse) => void {

  return async (req: NextApiRequest, res: NextApiResponse) => {

    const basicAuth = req.headers.authorization

    if (!process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASSWORD)
      throw new Error('Basic auth not set up in .env')

    if (!basicAuth || !process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASSWORD)
      return res.status(401).send('Access denied')

    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
    const isAuthorized = user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD

    if (!isAuthorized)
      return res.status(401).send('Access denied')

    return callback(req, res)
  }
}


