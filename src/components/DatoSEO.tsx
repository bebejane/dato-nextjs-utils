import React from 'react';
import { NextSeo, DefaultSeo } from 'next-seo';

type DatoSEOProps = {
  seo?: any,
  site?: any,
  pathname: string,
  title?: string,
  subtitle?: string,
  description?: string,
  noindex?: boolean
}

const DatoSEO = ({
  seo = {},
  site = {},
  pathname,
  title,
  subtitle,
  description,
  noindex = false
}: DatoSEOProps) => {

  const meta = parseDatoMetaTags({ seo, site, pathname })
  const { globalSeo, favicon } = site
  const favicons = favicon ? favicon.map(({ attributes }) => { return { ...attributes } }) : [];
  const images = generateImages(meta["og:image"], meta["og:image:width"], meta["og:image:height"])
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname || ''}`

  title = buildTitle(title, globalSeo, subtitle)

  if (!description)
    description = meta.description ? meta.description : globalSeo ? globalSeo?.fallbackSeo.description : undefined;

  const twitterProps: any = {
    title,
    image: meta["og:image"],
    handle: globalSeo?.twitterAccount,
    site: globalSeo?.twitterAccount,
    cardType: 'summary_large_image',
  }

  const props = {
    canonical: url,
    openGraph: {
      url,
      title,
      images,
      locale: meta["og:locale"],
      type: meta["og:type"],
      site_name: meta["og:site_name"],
    },
    twitter: twitterProps,
    additionalLinkTags: favicons,
    noindex: noindex,
    nofollow: noindex,
  }

  if (title)
    props['title'] = title
  if (description) {
    props['description'] = description
    props.openGraph['description'] = description
  }

  return (
    <NextSeo {...props} />
  )
}
export default DatoSEO;

type DefaultSEOProps = {
  site: any,
  title?: string,
  siteTitle?: string,
  description?: any,
}

export const DefaultDatoSEO = ({ site, siteTitle, title, description }: DefaultSEOProps) => {

  const { globalSeo, favicon, globalSeo: { fallbackSeo } } = site
  const favicons = favicon ? favicon.map(({ attributes }) => { return { ...attributes } }) : [];
  const twitterSite = globalSeo.twitterAccount ? `https://twitter.com/${globalSeo.twitterAccount.replace("@", "")}` : undefined

  //title = buildTitle(title, globalSeo, subtitle)

  return (
    <DefaultSeo
      title={title}
      titleTemplate={`${siteTitle}${globalSeo?.titleSuffix ? ` ${globalSeo?.titleSuffix}` : ''} %s`}
      defaultTitle={siteTitle}
      description={description}
      additionalLinkTags={favicons}
      openGraph={{
        type: 'website',
        locale: globalSeo.locale,
        site_name: globalSeo.siteName,
      }}
      twitter={{
        handle: globalSeo.twitterAccount,
        site: twitterSite,
        cardType: fallbackSeo.twitterCard,
      }}
    />
  )
}

const generateImages = (url, width, height): any => {
  if (!url) return undefined
  const baseURL = url.split("?")[0]
  const images = [{
    url,
    width,
    height
  }]
  return images
}

const parseDatoMetaTags = ({ seo, site, pathname }: any): any => {

  if (!seo || !site) return []

  const { globalSeo } = site || {};
  const { fallbackSeo } = globalSeo || {};
  const tags = Array.isArray(seo) ? seo : seo.tags;

  let metaTags = tags || []
  let titleTag = metaTags.filter(m => m.tag === "title")[0]

  if (titleTag && globalSeo) {
    if (pathname === "/")
      titleTag = { ...titleTag, content: globalSeo.siteName }
    else if (globalSeo && titleTag.content.startsWith(globalSeo.siteName))
      titleTag = { ...titleTag, content: `${globalSeo.siteName} – ${titleTag.content}` }
  }

  metaTags = metaTags.map(t => { return t.tag !== 'title' ? t : titleTag })

  const meta = {}

  metaTags.forEach(t => {
    const prop = t.attributes ? t.attributes.property || t.attributes.name : t.tag;
    const value = t.attributes ? t.attributes.content || t.attributes : t.content;
    meta[prop] = value
  })

  if (!meta['og:image'] && fallbackSeo?.image) {
    const width = 1000;
    const scaleRatio = 1.0 - ((fallbackSeo.image.width - width) / fallbackSeo.image.width)
    meta['og:image'] = `${fallbackSeo.image.url}?w=1000`
    meta["og:image:width"] = width
    meta["og:image:height"] = Math.round(fallbackSeo.image.height * scaleRatio)
  }
  return meta
}

const buildTitle = (title?: string, globalSeo?: any, subtitle?: string) => {

  if (!title && globalSeo)
    title = globalSeo.siteName

  if (globalSeo?.titleSuffix || subtitle)
    title = `${title}${globalSeo?.titleSuffix && subtitle ? ` ${globalSeo?.titleSuffix} ${subtitle}` : ''}`;

  return title;
}