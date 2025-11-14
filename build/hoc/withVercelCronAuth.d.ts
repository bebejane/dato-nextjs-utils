import type { NextApiRequest, NextApiResponse } from 'next/types';
export default function withVercelCronAuth(callback: (req: NextApiRequest, res: NextApiResponse) => void): (req: NextApiRequest, res: NextApiResponse) => void;
