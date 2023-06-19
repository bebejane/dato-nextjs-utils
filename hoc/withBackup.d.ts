import type { NextApiRequest, NextApiResponse } from 'next';
export declare const basicAuth: (req: NextApiRequest) => boolean;
export default function withBackup(req: NextApiRequest, res: NextApiResponse): Promise<void | Response>;
