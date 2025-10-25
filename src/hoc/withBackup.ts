import type { NextApiRequest, NextApiResponse } from 'next';
import withBasicAuth from './withBasicAuth.js';
import { buildClient } from '@datocms/cma-client';

const withBackup = withBasicAuth(async (req: NextApiRequest, res: NextApiResponse) => {
	if (!process.env.DATOCMS_ENVIRONMENT) return res.status(500).send('DATOCMS_ENVIRONMENT not set in .env');
	if (!process.env.DATOCMS_API_TOKEN) return res.status(500).send('DATOCMS_API_TOKEN not set in .env');

	try {
		const maxBackups = req.query.max ? parseInt(req.query.max as string) : 1;
		const backupPrefix = 'auto-backup-';
		const client = buildClient({
			environment: process.env.DATOCMS_ENVIRONMENT,
			apiToken: process.env.DATOCMS_API_TOKEN,
			requestTimeout: 3000,
		});
		const backups = (await client.environments.list())
			.filter((e) => e.id.startsWith('auto-backup') && e.meta.primary === false)
			.sort((a, b) => (a.id.replace(backupPrefix, '') > b.id.replace(backupPrefix, '') ? -1 : 1));
		const today = new Date().toISOString().replace('T', '-').replaceAll(':', '-').replace('Z', '').split('.')[0];
		const name = `auto-backup-${today}`;

		console.log('Last backup was: ', backups[0]?.id ?? 'none');
		console.log('Max backups: ', maxBackups);
		console.log('Creating backup...', name);

		for (let i = 0; i < backups.reverse().slice(maxBackups - 1).length; i++) {
			try {
				console.log('Deleting old backup...', backups[i].id);
				await client.environments.destroy(backups[i].id);
			} catch (e) {
				console.error(e);
			}
		}

		await client.environments.fork(
			process.env.DATOCMS_ENVIRONMENT,
			{ id: name },
			{
				immediate_return: false,
				fast: true,
				force: true,
			}
		);

		console.log('Backup done!');
		return res.status(200).send(`Backup done ${process.env.DATOCMS_ENVIRONMENT} > ${name}`);
	} catch (e) {
		console.log(e);
		return res.status(500).send(`Backup failed: ${e.message}`);
	}
});

export default withBackup;
export const maxDuration = 30;
