/// <reference types="react" />
declare const DatoSEO: ({ seo, site, pathname, title, subtitle, description, noindex }: any) => JSX.Element;
declare const DefaultDatoSEO: ({ site, url, title, description }: {
    site: any;
    url: any;
    title: any;
    description: any;
}) => JSX.Element;
export { DefaultDatoSEO };
export default DatoSEO;
