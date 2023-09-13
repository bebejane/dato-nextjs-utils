var e=require("react"),t=require("next-seo"),i=require("react-markdown"),r=require("remark-gfm"),a=require("next/link.js"),n=require("markdown-truncate"),o=require("remark-breaks");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=/*#__PURE__*/l(e),s=/*#__PURE__*/l(i),c=/*#__PURE__*/l(r),f=/*#__PURE__*/l(a),d=/*#__PURE__*/l(n),g=/*#__PURE__*/l(o);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},m.apply(this,arguments)}var v=function(e){var t=e.seo,i=e.site,r=void 0===i?{}:i,a=e.title,n=e.description,o=e.noindex,l=void 0!==o&&o,u=h({seo:void 0===t?{}:t,site:r}),s=r.globalSeo,c=r.favicon,f=c?c.map(function(e){return m({},e.attributes)}):[],d=p(u["og:image"],u["og:image:width"],u["og:image:height"]);return n||(n=u.description?u.description:s?null==s?void 0:s.fallbackSeo.description:void 0),{openGraph:{title:a,images:d,description:n,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:a,image:u["og:image"],handle:null==s?void 0:s.twitterAccount,site:null==s?void 0:s.twitterAccount,cardType:"summary_large_image"},noindex:l,nofollow:l,meta:u,title:a,description:n,favicons:f,globalSeo:s,images:d}},p=function(e,t,i){if(e)return e.split("?"),[{url:e,width:t,height:i}]},h=function(e){var t=e.seo,i=e.site;if(!t||!i)return[];var r=(i||{}).globalSeo,a=(r||{}).fallbackSeo,n=(Array.isArray(t)?t:t.tags)||[],o=n.filter(function(e){return"title"===e.tag})[0];o&&r&&r&&o.content.startsWith(r.siteName)&&(o=m({},o,{content:r.siteName+" – "+o.content})),n=n.map(function(e){return"title"!==e.tag?e:o});var l={};if(n.forEach(function(e){l[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!l["og:image"]&&null!=a&&a.image){var u=1-(a.image.width-1e3)/a.image.width;l["og:image"]=a.image.url+"?w=1000",l["og:image:width"]=1e3,l["og:image:height"]=Math.round(a.image.height*u)}return l};exports.DatoMarkdown=function(e){var t=e.children,i=e.truncate,r=e.className,a=e.components,n=e.sentances,o=e.allowedElements,l=e.scroll,m=void 0===l||l,v=e.disableBreaks,p=void 0!==v&&v;if(!t)return null;var h=i?d.default(t,{limit:i,ellipsis:!0}):n?function(e,t){if(!e)return e;var i=e.split(".");return i.length>=t?i.slice(0,t).join(" ")+"...":e}(t,n):t;/*#__PURE__*/return u.default.createElement(s.default,{remarkPlugins:p?[c.default]:[c.default,g.default],className:r,children:h,allowedElements:o,components:null!=a?a:{a:function(e){/*#__PURE__*/return u.default.createElement(f.default,{scroll:m,href:e.href},e.children[0])}}})},exports.DatoSEO=function(e){var i=v(e);/*#__PURE__*/return u.default.createElement(t.NextSeo,i)},exports.DefaultDatoSEO=function(e){var i,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var a=v(e),n=e.siteTitle+(null!=(i=a.globalSeo)&&i.titleSuffix?" "+(null==(r=a.globalSeo)?void 0:r.titleSuffix):" —")+" %s";/*#__PURE__*/return u.default.createElement(t.DefaultSeo,m({},a,{titleTemplate:n,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:a.favicons}))};
//# sourceMappingURL=index.cjs.map
