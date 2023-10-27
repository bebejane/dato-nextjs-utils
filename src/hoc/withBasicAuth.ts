import type { NextApiRequest, NextApiResponse } from 'next'

export default function withBasicAuth(callback: (req: NextApiRequest, res: NextApiResponse) => void, options?: { username: string, password: string }): (req: NextApiRequest, res: NextApiResponse) => void {

  return async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'OPTIONS')
      return callback(req, res)

    if (process.env.NODE_ENV === 'development')
      return callback(req, res)

    const basicAuth = req.headers.authorization

    if (!process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASSWORD)
      throw new Error('Basic auth not set up in .env')

    if (!basicAuth || !process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASSWORD) {
      res.setHeader('WWW-Authenticate', 'Basic realm="NodeJs", charset="UTF-8"')
      return res.status(401).send('Access denied')
    }

    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
    const username = options?.username || process.env.BASIC_AUTH_USER
    const password = options?.password || process.env.BASIC_AUTH_PASSWORD
    const isAuthorized = user === username && pwd === password

    if (!isAuthorized)
      return res.status(401).send('Access denied')

    return callback(req, res)
  }
}


