export default function withCors(callback, options) {
    return async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', options?.origin || '*');
        res.setHeader('Access-Control-Allow-Methods', options?.methods?.join(',') || 'POST,GET,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        if (req.method === 'OPTIONS')
            return res.status(200).send('ok');
        return callback(req, res);
    };
}
//# sourceMappingURL=withCors.js.map