import type { NextApiRequest, NextApiResponse } from 'next';
export declare const basicAuth: (req: NextApiRequest) => boolean;
export default function withRevalidate(callback: (record: any, revalidate: (paths: string[]) => Promise<void>) => Promise<void>): (req: NextApiRequest, res: NextApiResponse) => void;
