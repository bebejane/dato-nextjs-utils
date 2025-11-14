export default function withWebPreviews(generatePreviewUrl) {
    return async (req, res) => {
        if (!process.env.NEXT_PUBLIC_SITE_URL && !process.env.SITE_URL)
            throw new Error('NEXT_PUBLIC_SITE_URL is not set in .env');
        if (!process.env.DATOCMS_PREVIEW_SECRET)
            throw new Error('DATOCMS_PREVIEW_SECRET is not set in .env');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Content-Type', 'application/json');
        if (req.method === 'OPTIONS')
            return res.status(200).send('ok');
        if (!req.body)
            throw new Error('No body found in request');
        const payload = req.body;
        const previewLinks = [];
        let path = await generatePreviewUrl(payload);
        let baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
        const isExternal = path?.startsWith('https://');
        if (isExternal) {
            const url = new URL(path);
            baseUrl = url.origin;
            path = url.pathname;
        }
        if (path) {
            previewLinks.push({ label: 'Live', url: `${baseUrl}${path}` });
            previewLinks.push({ label: 'Preview', url: `${baseUrl}/api/preview?slug=${path}&secret=${process.env.DATOCMS_PREVIEW_SECRET}` });
        }
        return res.status(200).json({ previewLinks });
    };
}
//# sourceMappingURL=withWebPreviews.js.map