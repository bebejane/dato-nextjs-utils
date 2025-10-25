import type { NextApiRequest, NextApiResponse } from 'next'

export default function withCors(callback: (req: NextApiRequest, res: NextApiResponse) => void, options?: { origin: string, methods: string[] }): (req: NextApiRequest, res: NextApiResponse) => void {

  return async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Origin', options?.origin || '*');
    res.setHeader('Access-Control-Allow-Methods', options?.methods?.join(',') || 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS')
      return res.status(200).send('ok');

    return callback(req, res)
  }
}


