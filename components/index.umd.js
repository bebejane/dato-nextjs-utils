!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("next-seo"),require("react-markdown"),require("remark-gfm"),require("next/link.js"),require("markdown-truncate"),require("remark-breaks")):"function"==typeof define&&define.amd?define(["exports","react","next-seo","react-markdown","remark-gfm","next/link.js","markdown-truncate","remark-breaks"],t):t((e||self).components={},e.react,e.nextSeo,e.reactMarkdown,e.remarkGfm,e.Link,e.markdownTruncate,e.remarkBreaks)}(this,function(e,t,i,r,n,a,o,l){function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=/*#__PURE__*/u(t),s=/*#__PURE__*/u(r),f=/*#__PURE__*/u(n),d=/*#__PURE__*/u(a),m=/*#__PURE__*/u(o),g=/*#__PURE__*/u(l);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},p.apply(this,arguments)}var h=function(e){var t,i=e.seo,r=e.site,n=void 0===r?{}:r,a=e.title,o=e.description,l=e.noindex,u=void 0!==l&&l,c=b({seo:void 0===i?{}:i,site:n}),s=n.globalSeo,f=n.favicon,d=f?f.map(function(e){return p({},e.attributes)}):[],m=v(c["og:image"],c["og:image:width"],c["og:image:height"]),g={openGraph:{title:a,images:m,description:o=(null!=(t=o)?t:c.description)?c.description:s?null==s?void 0:s.fallbackSeo.description:void 0,locale:c["og:locale"],type:c["og:type"],site_name:c["og:site_name"]},twitter:{title:a,image:c["og:image"],handle:null==s?void 0:s.twitterAccount,site:null==s?void 0:s.twitterAccount,cardType:"summary_large_image"},noindex:u,nofollow:u,meta:c,title:a,description:o,favicons:d,globalSeo:s,images:m};return console.log(g),g},v=function(e,t,i){if(e)return e.split("?"),[{url:e,width:t,height:i}]},b=function(e){var t=e.seo,i=e.site;if(!t||!i)return[];var r=(i||{}).globalSeo,n=(r||{}).fallbackSeo,a=(Array.isArray(t)?t:t.tags)||[],o=a.filter(function(e){return"title"===e.tag})[0];o&&r&&r&&o.content.startsWith(r.siteName)&&(o=p({},o,{content:r.siteName+" – "+o.content})),a=a.map(function(e){return"title"!==e.tag?e:o});var l={};if(a.forEach(function(e){l[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!l["og:image"]&&null!=n&&n.image){var u=1-(n.image.width-1e3)/n.image.width;l["og:image"]=n.image.url+"?w=1000",l["og:image:width"]=1e3,l["og:image:height"]=Math.round(n.image.height*u)}return l};e.DatoMarkdown=function(e){var t=e.children,i=e.truncate,r=e.className,n=e.sentances;if(!t)return null;var a=i?m.default(t,{limit:i,ellipsis:!0}):n?function(e,t){if(!e)return e;var i=e.split(".");return i.length>=t?i.slice(0,t).join(" ")+"...":e}(t,n):t;/*#__PURE__*/return c.default.createElement(s.default,{remarkPlugins:[f.default,g.default],className:r,children:a,components:{a:function(e){/*#__PURE__*/return c.default.createElement(d.default,{scroll:!1,href:e.href},/*#__PURE__*/c.default.createElement("a",null,e.children[0]))}}})},e.DatoSEO=function(e){var t=h(e);/*#__PURE__*/return c.default.createElement(i.NextSeo,t)},e.DefaultDatoSEO=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=h(e),a=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):"")+" %s";/*#__PURE__*/return c.default.createElement(i.DefaultSeo,p({},n,{titleTemplate:a,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))}});
//# sourceMappingURL=index.umd.js.map
