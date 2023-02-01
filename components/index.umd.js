!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("next-seo"),require("react-markdown"),require("remark-gfm"),require("next/link.js"),require("markdown-truncate"),require("remark-breaks")):"function"==typeof define&&define.amd?define(["exports","react","next-seo","react-markdown","remark-gfm","next/link.js","markdown-truncate","remark-breaks"],t):t((e||self).components={},e.react,e.nextSeo,e.reactMarkdown,e.remarkGfm,e.Link,e.markdownTruncate,e.remarkBreaks)}(this,function(e,t,i,r,a,n,o,l){function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=/*#__PURE__*/u(t),c=/*#__PURE__*/u(r),f=/*#__PURE__*/u(a),d=/*#__PURE__*/u(n),m=/*#__PURE__*/u(o),g=/*#__PURE__*/u(l);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},p.apply(this,arguments)}var v=function(e){var t=e.seo,i=e.site,r=void 0===i?{}:i,a=e.title,n=e.description,o=e.noindex,l=void 0!==o&&o,u=b({seo:void 0===t?{}:t,site:r}),s=r.globalSeo,c=r.favicon,f=c?c.map(function(e){return p({},e.attributes)}):[],d=h(u["og:image"],u["og:image:width"],u["og:image:height"]);return n||(n=u.description?u.description:s?null==s?void 0:s.fallbackSeo.description:void 0),{openGraph:{title:a,images:d,description:n,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:a,image:u["og:image"],handle:null==s?void 0:s.twitterAccount,site:null==s?void 0:s.twitterAccount,cardType:"summary_large_image"},noindex:l,nofollow:l,meta:u,title:a,description:n,favicons:f,globalSeo:s,images:d}},h=function(e,t,i){if(e)return e.split("?"),[{url:e,width:t,height:i}]},b=function(e){var t=e.seo,i=e.site;if(!t||!i)return[];var r=(i||{}).globalSeo,a=(r||{}).fallbackSeo,n=(Array.isArray(t)?t:t.tags)||[],o=n.filter(function(e){return"title"===e.tag})[0];o&&r&&r&&o.content.startsWith(r.siteName)&&(o=p({},o,{content:r.siteName+" – "+o.content})),n=n.map(function(e){return"title"!==e.tag?e:o});var l={};if(n.forEach(function(e){l[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!l["og:image"]&&null!=a&&a.image){var u=1-(a.image.width-1e3)/a.image.width;l["og:image"]=a.image.url+"?w=1000",l["og:image:width"]=1e3,l["og:image:height"]=Math.round(a.image.height*u)}return l};e.DatoMarkdown=function(e){var t=e.children,i=e.truncate,r=e.className,a=e.sentances,n=e.allowedElements,o=e.scroll,l=void 0===o||o,u=e.disableBreaks,p=void 0!==u&&u;if(!t)return null;var v=i?m.default(t,{limit:i,ellipsis:!0}):a?function(e,t){if(!e)return e;var i=e.split(".");return i.length>=t?i.slice(0,t).join(" ")+"...":e}(t,a):t;/*#__PURE__*/return s.default.createElement(c.default,{remarkPlugins:p?[f.default]:[f.default,g.default],className:r,children:v,allowedElements:n,components:{a:function(e){/*#__PURE__*/return s.default.createElement(d.default,{scroll:l,href:e.href},e.children[0])}}})},e.DatoSEO=function(e){var t=v(e);/*#__PURE__*/return s.default.createElement(i.NextSeo,t)},e.DefaultDatoSEO=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var a=v(e),n=e.siteTitle+(null!=(t=a.globalSeo)&&t.titleSuffix?" "+(null==(r=a.globalSeo)?void 0:r.titleSuffix):"")+" %s";/*#__PURE__*/return s.default.createElement(i.DefaultSeo,p({},a,{titleTemplate:n,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:a.favicons}))}});
//# sourceMappingURL=index.umd.js.map
