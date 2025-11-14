import type { NextApiRequest, NextApiResponse } from 'next';
export default function withCors(callback: (req: NextApiRequest, res: NextApiResponse) => void, options?: {
    origin: string;
    methods: string[];
}): (req: NextApiRequest, res: NextApiResponse) => void;
