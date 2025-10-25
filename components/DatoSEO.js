import { jsx as _jsx } from "react/jsx-runtime";
import { NextSeo, DefaultSeo } from 'next-seo';
export const DefaultDatoSEO = (props) => {
    if (!process.env.NEXT_PUBLIC_SITE_URL)
        throw 'Set NEXT_PUBLIC_SITE_URL env variable';
    const data = parseProps(props);
    const titleTemplate = `${props.siteTitle}${data.globalSeo?.titleSuffix ? ` ${data.globalSeo?.titleSuffix}` : ' —'} %s`;
    return (_jsx(DefaultSeo, { ...data, titleTemplate: titleTemplate, defaultTitle: props.siteTitle, canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${props.path || ''}`, additionalLinkTags: data.favicons }));
};
const DatoSEO = (props) => {
    const data = parseProps(props);
    return _jsx(NextSeo, { ...data });
};
export default DatoSEO;
const parseProps = ({ seo = {}, site = {}, title, description, noindex = false }) => {
    const meta = parseDatoMetaTags({ seo, site });
    const { globalSeo, favicon } = site;
    const favicons = favicon ? favicon.map(({ attributes }) => { return { ...attributes }; }) : [];
    const images = generateImages(meta["og:image"], meta["og:image:width"], meta["og:image:height"]);
    if (!description)
        description = meta.description ? meta.description : globalSeo ? globalSeo?.fallbackSeo.description : undefined;
    const props = {
        openGraph: {
            title,
            images,
            description,
            locale: meta["og:locale"],
            type: meta["og:type"],
            site_name: meta["og:site_name"],
        },
        twitter: {
            title,
            image: meta["og:image"],
            handle: globalSeo?.twitterAccount,
            site: globalSeo?.twitterAccount,
            cardType: 'summary_large_image',
        },
        noindex: noindex,
        nofollow: noindex,
        meta,
        title,
        description,
        favicons,
        globalSeo,
        images
    };
    return props;
};
const generateImages = (url, width, height) => {
    if (!url)
        return undefined;
    const baseURL = url.split("?")[0];
    const images = [{
            url,
            width,
            height
        }];
    return images;
};
const parseDatoMetaTags = ({ seo, site }) => {
    if (!seo || !site)
        return [];
    const { globalSeo } = site || {};
    const { fallbackSeo } = globalSeo || {};
    const tags = Array.isArray(seo) ? seo : seo.tags;
    let metaTags = tags || [];
    let titleTag = metaTags.filter(m => m.tag === "title")[0];
    if (titleTag && globalSeo) {
        if (globalSeo && titleTag.content.startsWith(globalSeo.siteName))
            titleTag = { ...titleTag, content: `${globalSeo.siteName} – ${titleTag.content}` };
    }
    metaTags = metaTags.map(t => { return t.tag !== 'title' ? t : titleTag; });
    const meta = {};
    metaTags.forEach(t => {
        const prop = t.attributes ? t.attributes.property || t.attributes.name : t.tag;
        const value = t.attributes ? t.attributes.content || t.attributes : t.content;
        meta[prop] = value;
    });
    if (!meta['og:image'] && fallbackSeo?.image) {
        const width = 1000;
        const scaleRatio = 1.0 - ((fallbackSeo.image.width - width) / fallbackSeo.image.width);
        meta['og:image'] = `${fallbackSeo.image.url}?w=1000`;
        meta["og:image:width"] = width;
        meta["og:image:height"] = Math.round(fallbackSeo.image.height * scaleRatio);
    }
    return meta;
};
//# sourceMappingURL=DatoSEO.js.map