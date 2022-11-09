/// <reference types="react" />
declare type DatoSEOProps = {
    seo?: any;
    site?: any;
    title?: string;
    subtitle?: string;
    description?: string;
    noindex?: boolean;
};
declare const DatoSEO: ({ seo, site, title, subtitle, description, noindex }: DatoSEOProps) => JSX.Element;
export default DatoSEO;
declare type DefaultSEOProps = {
    site: any;
    path: string;
    title?: string;
    siteTitle?: string;
    description?: any;
};
export declare const DefaultDatoSEO: ({ site, path, siteTitle, title, description }: DefaultSEOProps) => JSX.Element;
