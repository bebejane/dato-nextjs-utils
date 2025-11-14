export default function withVercelCronAuth(callback) {
    return async (req, res) => {
        if (!process.env.CRON_SECRET)
            throw new Error('CRON_SECRET not set in .env');
        if (req.headers?.authorization === `Bearer ${process.env.CRON_SECRET}`)
            return callback(req, res);
        else
            return res.status(401).send('Access denied');
    };
}
//# sourceMappingURL=withVercelCronAuth.js.map