!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("next-seo"),require("react-markdown"),require("remark-gfm"),require("next/link.js"),require("markdown-truncate"),require("remark-breaks")):"function"==typeof define&&define.amd?define(["exports","react","next-seo","react-markdown","remark-gfm","next/link.js","markdown-truncate","remark-breaks"],t):t((e||self).components={},e.react,e.nextSeo,e.reactMarkdown,e.remarkGfm,e.Link,e.markdownTruncate,e.remarkBreaks)}(this,function(e,t,i,r,n,a,o,l){function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=/*#__PURE__*/u(t),s=/*#__PURE__*/u(r),d=/*#__PURE__*/u(n),f=/*#__PURE__*/u(a),m=/*#__PURE__*/u(o),g=/*#__PURE__*/u(l);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},p.apply(this,arguments)}e.DatoMarkdown=function(e){var t=e.children,i=e.truncate,r=e.className,n=e.sentances;if(!t)return null;var a=i?m.default(t,{limit:i,ellipsis:!0}):n?function(e,t){if(!e)return e;var i=e.split(".");return i.length>=t?i.slice(0,t).join(" ")+"...":e}(t,n):t;/*#__PURE__*/return c.default.createElement(s.default,{remarkPlugins:[d.default,g.default],className:r,children:a,components:{a:function(e){/*#__PURE__*/return c.default.createElement(f.default,{scroll:!1,href:e.href},/*#__PURE__*/c.default.createElement("a",null,e.children[0]))}}})},e.DatoSEO=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,a=e.pathname,o=e.title,l=e.subtitle,u=e.description,s=e.noindex,d=void 0!==s&&s,f=function(e){var t=e.seo,i=e.site,r=e.pathname;if(!t||!i)return[];var n=(i||{}).globalSeo,a=(n||{}).fallbackSeo,o=(Array.isArray(t)?t:t.tags)||[],l=o.filter(function(e){return"title"===e.tag})[0];l&&n&&("/"===r?l=p({},l,{content:n.siteName}):n&&l.content.startsWith(n.siteName)&&(l=p({},l,{content:n.siteName+" – "+l.content}))),o=o.map(function(e){return"title"!==e.tag?e:l});var u={};if(o.forEach(function(e){u[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!u["og:image"]&&null!=a&&a.image){var c=1-(a.image.width-1e3)/a.image.width;u["og:image"]=a.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(a.image.height*c)}return u}({seo:void 0===t?{}:t,site:n,pathname:a}),m=n.globalSeo,g=n.favicon,h=g?g.map(function(e){return p({},e.attributes)}):[],b=function(e,t,i){if(e)return e.split("?"),[{url:e,width:t,height:i}]}(f["og:image"],f["og:image:width"],f["og:image:height"]),w=""+process.env.NEXT_PUBLIC_SITE_URL+(a||"");/*#__PURE__*/return c.default.createElement(i.NextSeo,{title:o=(o=o||(m?null==m?void 0:m.siteName:"Site title"))+" "+(null!=m&&m.titleSuffix?" "+(null==m?void 0:m.titleSuffix):"")+(l?" "+l:""),description:u=u||(f.description?f.description:m?null==m?void 0:m.fallbackSeo.description:"Site description"),canonical:w,openGraph:{url:w,title:o,description:u,images:b,locale:f["og:locale"],type:f["og:type"],site_name:f["og:site_name"]},twitter:{title:o,image:f["og:image"],handle:null==m?void 0:m.twitterAccount,site:null==m?void 0:m.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:h,noindex:d,nofollow:d})},e.DefaultDatoSEO=function(e){var t=e.site,r=e.title,n=e.description,a=t.globalSeo,o=t.globalSeo.fallbackSeo,l=a.twitterAccount?"https://twitter.com/"+a.twitterAccount.replace("@",""):void 0;/*#__PURE__*/return c.default.createElement(i.DefaultSeo,{title:r,description:n,openGraph:{type:"website",locale:a.locale,site_name:a.siteName},twitter:{handle:a.twitterAccount,site:l,cardType:o.twitterCard}})}});
//# sourceMappingURL=index.umd.js.map
