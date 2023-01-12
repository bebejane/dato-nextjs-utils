export declare type DefaultSEOProps = {
    site?: any;
    path?: string;
    title?: string;
    siteTitle?: string;
    description?: string;
};
export declare type DatoSEOProps = DefaultSEOProps & {
    seo?: any;
    noindex?: boolean;
};
export declare const DefaultDatoSEO: (props: DefaultSEOProps) => any;
declare const DatoSEO: (props: DatoSEOProps) => any;
export default DatoSEO;
