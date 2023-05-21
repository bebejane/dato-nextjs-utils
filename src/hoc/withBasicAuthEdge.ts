import type { NextRequest, NextResponse } from 'next/server.js'

export default function withBasicAuthEdge(callback: (req: NextRequest, res: NextResponse) => void): (req: NextRequest, res: NextResponse) => void {

  return async (req: NextRequest, res: NextResponse) => {

    const basicAuth = req.headers.get('authorization')

    if (!basicAuth)
      return new Response('Access denied', { status: 401 })

    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
    const isAuthorized = user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD

    if (!isAuthorized)
      return new Response('Access denied. Wrong password or username.', { status: 401 })

    return callback(req, res)
  }
}