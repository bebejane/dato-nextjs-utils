import { NextRequest, NextResponse } from 'next/server.js'

export default function withVercelCronAuthEdge(callback: (req: NextRequest, res: NextResponse) => void): (req: NextRequest, res: NextResponse) => void {

  return async (req: NextRequest, res: NextResponse) => {
    if (!process.env.CRON_SECRET)
      throw new Error('CRON_SECRET not set in .env')

    if (req.headers.get('authorization') === `Bearer ${process.env.CRON_SECRET}`)
      return callback(req, res)
    else
      return new Response('Access denied', { status: 401 })
  }
}