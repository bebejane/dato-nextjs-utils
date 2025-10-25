export type DefaultSEOProps = {
    site?: any;
    path?: string;
    title?: string;
    siteTitle?: string;
    description?: string;
};
export type DatoSEOProps = DefaultSEOProps & {
    seo?: any;
    noindex?: boolean;
};
export declare const DefaultDatoSEO: (props: DefaultSEOProps) => import("react/jsx-runtime").JSX.Element;
declare const DatoSEO: (props: DatoSEOProps) => import("react/jsx-runtime").JSX.Element;
export default DatoSEO;
