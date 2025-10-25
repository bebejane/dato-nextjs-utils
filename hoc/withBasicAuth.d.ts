import type { NextApiRequest, NextApiResponse } from 'next';
export default function withBasicAuth(callback: (req: NextApiRequest, res: NextApiResponse) => void, options?: {
    username: string;
    password: string;
}): (req: NextApiRequest, res: NextApiResponse) => void;
