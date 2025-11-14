export default function withRevalidate(callback) {
    return async (req, res) => {
        if (req.method === 'GET' && req.query?.ping)
            return res.status(200).send('pong');
        if (!basicAuth(req))
            return res.status(401).send('Access denied');
        const payload = req.body;
        if (!payload || !payload?.entity)
            return res.status(400).send('Payload empty or missing entity');
        const { entity, related_entities, event_type } = payload;
        const model = related_entities.find(({ id }) => id === entity.relationships?.item_type?.data?.id);
        if (!model)
            return res.status(400).send('Model not found in payload');
        const record = { id: entity.id, ...entity.attributes, model: model.attributes };
        const delay = Date.now() - Math.max(new Date(entity.meta.updated_at).getTime(), new Date(entity.meta.published_at).getTime(), new Date(entity.meta.created_at).getTime());
        callback(record, async (paths) => {
            try {
                if (!paths)
                    return res.status(400).send('Nothing to revalidate. Paths empty');
                if (paths.length === 0)
                    return res.status(200).json({ revalidated: false, paths, delay, event_type });
                for (const path of paths) {
                    try {
                        await res.revalidate(path);
                    }
                    catch (err) {
                        console.error(err);
                        console.log('Error revalidating', path);
                        throw err;
                    }
                }
                console.log(`revalidate${delay && !['unpublish', 'delete'].includes(event_type) ? ` (${delay}ms)` : ''} ${event_type}`, paths);
                return res.status(200).json({ revalidated: true, paths, delay, event_type });
            }
            catch (err) {
                console.log('Error revalidating', paths);
                //console.error(err)
                return res.status(200).json({ revalidated: false, paths, err: err.message, delay, event_type });
            }
        });
    };
}
export const basicAuth = (req) => {
    if (!process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASSWORD)
        throw new Error('BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env');
    const basicAuth = req.headers.authorization;
    if (!basicAuth)
        return true;
    const auth = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');
    return user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD;
};
//# sourceMappingURL=withRevalidate.js.map