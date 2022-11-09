/// <reference types="react" />
declare type DefaultSEOProps = {
    site: any;
    path: string;
    title?: string;
    siteTitle?: string;
    description?: string;
};
declare type DatoSEOProps = DefaultSEOProps & {
    seo?: any;
    noindex?: boolean;
};
declare const DatoSEO: (props: DatoSEOProps) => JSX.Element;
export default DatoSEO;
export declare const DefaultDatoSEO: (props: DefaultSEOProps) => JSX.Element;
