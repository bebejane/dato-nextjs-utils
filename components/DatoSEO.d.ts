/// <reference types="react" />
declare type DatoSEOProps = {
    seo?: any;
    site?: any;
    pathname: string;
    title?: string;
    subtitle?: string;
    description?: string;
    noindex?: boolean;
};
declare const DatoSEO: ({ seo, site, pathname, title, subtitle, description, noindex }: DatoSEOProps) => JSX.Element;
export default DatoSEO;
declare type DefaultSEOProps = {
    site: any;
    title?: string;
    siteTitle?: string;
    description?: any;
};
export declare const DefaultDatoSEO: ({ site, siteTitle, title, description }: DefaultSEOProps) => JSX.Element;
