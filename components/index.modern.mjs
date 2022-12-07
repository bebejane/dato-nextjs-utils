import t from"react";import{DefaultSeo as e,NextSeo as i}from"next-seo";import r from"react-markdown";import n from"remark-gfm";import a from"next/link.js";import o from"markdown-truncate";import l from"remark-breaks";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},s.apply(this,arguments)}var c=function(i){var r,n;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var a=u(i),o=i.siteTitle+(null!=(r=a.globalSeo)&&r.titleSuffix?" "+(null==(n=a.globalSeo)?void 0:n.titleSuffix):"")+" %s";/*#__PURE__*/return t.createElement(e,s({},a,{titleTemplate:o,defaultTitle:i.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(i.path||""),additionalLinkTags:a.favicons}))},m=function(e){var r=u(e);/*#__PURE__*/return t.createElement(i,r)},u=function(t){var e=t.seo,i=t.site,r=void 0===i?{}:i,n=t.title,a=t.description,o=t.noindex,l=void 0!==o&&o,c=f({seo:void 0===e?{}:e,site:r}),m=r.globalSeo,u=r.favicon,d=u?u.map(function(t){return s({},t.attributes)}):[],p=g(c["og:image"],c["og:image:width"],c["og:image:height"]);return a||(a=c.description?c.description:m?null==m?void 0:m.fallbackSeo.description:void 0),{openGraph:{title:n,images:p,description:a,locale:c["og:locale"],type:c["og:type"],site_name:c["og:site_name"]},twitter:{title:n,image:c["og:image"],handle:null==m?void 0:m.twitterAccount,site:null==m?void 0:m.twitterAccount,cardType:"summary_large_image"},noindex:l,nofollow:l,meta:c,title:n,description:a,favicons:d,globalSeo:m,images:p}},g=function(t,e,i){if(t)return t.split("?"),[{url:t,width:e,height:i}]},f=function(t){var e=t.seo,i=t.site;if(!e||!i)return[];var r=(i||{}).globalSeo,n=(r||{}).fallbackSeo,a=(Array.isArray(e)?e:e.tags)||[],o=a.filter(function(t){return"title"===t.tag})[0];o&&r&&r&&o.content.startsWith(r.siteName)&&(o=s({},o,{content:r.siteName+" – "+o.content})),a=a.map(function(t){return"title"!==t.tag?t:o});var l={};if(a.forEach(function(t){l[t.attributes?t.attributes.property||t.attributes.name:t.tag]=t.attributes?t.attributes.content||t.attributes:t.content}),!l["og:image"]&&null!=n&&n.image){var c=1-(n.image.width-1e3)/n.image.width;l["og:image"]=n.image.url+"?w=1000",l["og:image:width"]=1e3,l["og:image:height"]=Math.round(n.image.height*c)}return l},d=function(e){var i=e.children,s=e.truncate,c=e.className,m=e.sentances,u=e.allowedElements,g=e.scroll,f=void 0!==g&&g;if(!i)return null;var d=s?o(i,{limit:s,ellipsis:!0}):m?function(t,e){if(!t)return t;var i=t.split(".");return i.length>=e?i.slice(0,e).join(" ")+"...":t}(i,m):i;/*#__PURE__*/return t.createElement(r,{remarkPlugins:[n,l],className:c,children:d,allowedElements:u,components:{a:function(e){/*#__PURE__*/return t.createElement(a,{scroll:f,href:e.href},/*#__PURE__*/t.createElement("a",null,e.children[0]))}}})};export{d as DatoMarkdown,m as DatoSEO,c as DefaultDatoSEO};
//# sourceMappingURL=index.modern.mjs.map
