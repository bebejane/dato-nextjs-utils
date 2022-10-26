import t from"react";import{NextSeo as e}from"next-seo";import i from"react-markdown";import r from"remark-gfm";import n from"next/link.js";import a from"markdown-truncate";import o from"remark-breaks";function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},l.apply(this,arguments)}var c=function(i){var r=i.seo,n=i.site,a=void 0===n?{}:n,o=i.pathname,c=i.title,u=i.subtitle,g=i.description,f=i.noindex,p=void 0!==f&&f,d=m({seo:void 0===r?{}:r,site:a,pathname:o}),h=a.globalSeo,v=a.favicon,b=v?v.map(function(t){return l({},t.attributes)}):[],w=s(d["og:image"],d["og:image:width"],d["og:image:height"]),k=""+process.env.NEXT_PUBLIC_SITE_URL+(o||"");/*#__PURE__*/return t.createElement(e,{title:c=(c=c||(h?null==h?void 0:h.siteName:"Site title"))+" "+(null!=h&&h.titleSuffix?" "+(null==h?void 0:h.titleSuffix):"")+(u?" "+u:""),description:g=g||(d.description?d.description:h?null==h?void 0:h.fallbackSeo.description:"Site description"),canonical:k,openGraph:{url:k,title:c,description:g,images:w,locale:d["og:locale"],type:d["og:type"],site_name:d["og:site_name"]},twitter:{title:c,image:d["og:image"],handle:null==h?void 0:h.twitterAccount,site:null==h?void 0:h.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:b,noindex:p,nofollow:p})},s=function(t,e,i){if(t)return t.split("?"),[{url:t,width:e,height:i}]},m=function(t){var e=t.seo,i=t.site,r=t.pathname;if(!e||!i)return[];var n=(i||{}).globalSeo,a=(n||{}).fallbackSeo,o=(Array.isArray(e)?e:e.tags)||[],c=o.filter(function(t){return"title"===t.tag})[0];c&&n&&("/"===r?c=l({},c,{content:n.siteName}):n&&c.content.startsWith(n.siteName)&&(c=l({},c,{content:n.siteName+" – "+c.content}))),o=o.map(function(t){return"title"!==t.tag?t:c});var s={};if(o.forEach(function(t){s[t.attributes?t.attributes.property||t.attributes.name:t.tag]=t.attributes?t.attributes.content||t.attributes:t.content}),!s["og:image"]&&null!=a&&a.image){var m=1-(a.image.width-1e3)/a.image.width;s["og:image"]=a.image.url+"?w=1000",s["og:image:width"]=1e3,s["og:image:height"]=Math.round(a.image.height*m)}return s},u=function(e){var l=e.children,c=e.truncate,s=e.className,m=e.sentances;if(!l)return null;var u=c?a(l,{limit:c,ellipsis:!0}):m?function(t,e){if(!t)return t;var i=t.split(".");return i.length>=e?i.slice(0,e).join(" ")+"...":t}(l,m):l;/*#__PURE__*/return t.createElement(i,{remarkPlugins:[r,o],className:s,children:u,components:{a:function(e){/*#__PURE__*/return t.createElement(n,{scroll:!1,href:e.href},/*#__PURE__*/t.createElement("a",null,e.children[0]))}}})};export{u as DatoMarkdown,c as DatoSEO};
//# sourceMappingURL=index.modern.mjs.map
