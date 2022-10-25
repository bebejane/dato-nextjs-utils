/// <reference types="react" resolution-mode="require"/>
declare const DatoSEO: ({ seo, site, pathname, title, subtitle, description, noindex }: any) => JSX.Element;
declare const DefaultDatoSEO: ({ site, url }: {
    site: any;
    url: any;
}) => JSX.Element;
export { DefaultDatoSEO };
export default DatoSEO;
