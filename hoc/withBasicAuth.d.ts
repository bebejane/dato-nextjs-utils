import type { NextApiRequest, NextApiResponse } from 'next';
export default function withBasicAuth(callback: (req: NextApiRequest, res: NextApiResponse) => void): (req: NextApiRequest, res: NextApiResponse) => void;
