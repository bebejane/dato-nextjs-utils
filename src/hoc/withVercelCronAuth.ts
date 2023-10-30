import type { NextApiRequest, NextApiResponse } from 'next'

export default function withVercelCronAuth(callback: (req: NextApiRequest, res: NextApiResponse) => void): (req: NextApiRequest, res: NextApiResponse) => void {

  return async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.headers?.authorization === `Basic ${process.env.CRON_SECRET}`)
      return callback(req, res)
    else
      return res.status(401).send('Access denied')
  }
}