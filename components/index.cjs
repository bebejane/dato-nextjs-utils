var t=require("react"),e=require("next-seo"),i=require("react-markdown"),a=require("remark-gfm"),r=require("next/link.js"),n=require("markdown-truncate"),o=require("remark-breaks");function l(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var u=/*#__PURE__*/l(t),c=/*#__PURE__*/l(i),s=/*#__PURE__*/l(a),f=/*#__PURE__*/l(r),d=/*#__PURE__*/l(n),m=/*#__PURE__*/l(o);function g(){return g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},g.apply(this,arguments)}exports.DatoMarkdown=function(t){var e=t.children,i=t.truncate,a=t.className,r=t.sentances;if(!e)return null;var n=i?d.default(e,{limit:i,ellipsis:!0}):r?function(t,e){if(!t)return t;var i=t.split(".");return i.length>=e?i.slice(0,e).join(" ")+"...":t}(e,r):e;/*#__PURE__*/return u.default.createElement(c.default,{remarkPlugins:[s.default,m.default],className:a,children:n,components:{a:function(t){/*#__PURE__*/return u.default.createElement(f.default,{scroll:!1,href:t.href},/*#__PURE__*/u.default.createElement("a",null,t.children[0]))}}})},exports.DatoSEO=function(t){var i=t.seo,a=t.site,r=void 0===a?{}:a,n=t.pathname,o=t.title,l=t.subtitle,c=t.description,s=t.noindex,f=void 0!==s&&s,d=function(t){var e=t.seo,i=t.site,a=t.pathname;if(!e||!i)return[];var r=(i||{}).globalSeo,n=(r||{}).fallbackSeo,o=(Array.isArray(e)?e:e.tags)||[],l=o.filter(function(t){return"title"===t.tag})[0];l&&r&&("/"===a?l=g({},l,{content:r.siteName}):r&&l.content.startsWith(r.siteName)&&(l=g({},l,{content:r.siteName+" – "+l.content}))),o=o.map(function(t){return"title"!==t.tag?t:l});var u={};if(o.forEach(function(t){u[t.attributes?t.attributes.property||t.attributes.name:t.tag]=t.attributes?t.attributes.content||t.attributes:t.content}),!u["og:image"]&&null!=n&&n.image){var c=1-(n.image.width-1e3)/n.image.width;u["og:image"]=n.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(n.image.height*c)}return u}({seo:void 0===i?{}:i,site:r,pathname:n}),m=r.globalSeo,p=r.favicon,h=p?p.map(function(t){return g({},t.attributes)}):[],v=function(t,e,i){if(t)return t.split("?"),[{url:t,width:e,height:i}]}(d["og:image"],d["og:image:width"],d["og:image:height"]),b=""+process.env.NEXT_PUBLIC_SITE_URL+(n||"");o=function(t,e,i){return!t&&e&&(t=e.siteName),(null!=e&&e.titleSuffix||i)&&(t+=null!=e&&e.titleSuffix&&i?" "+(null==e?void 0:e.titleSuffix)+" "+i:""),t}(o,m,l),c||(c=d.description?d.description:m?null==m?void 0:m.fallbackSeo.description:void 0);var w={canonical:b,openGraph:{url:b,title:o,images:v,locale:d["og:locale"],type:d["og:type"],site_name:d["og:site_name"]},twitter:{title:o,image:d["og:image"],handle:null==m?void 0:m.twitterAccount,site:null==m?void 0:m.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:h,noindex:f,nofollow:f};return o&&(w.title=o),c&&(w.description=c,w.openGraph.description=c),/*#__PURE__*/u.default.createElement(e.NextSeo,w)},exports.DefaultDatoSEO=function(t){var i=t.site,a=t.siteTitle,r=t.title,n=t.description,o=i.globalSeo,l=i.favicon,c=i.globalSeo.fallbackSeo,s=l?l.map(function(t){return g({},t.attributes)}):[],f=o.twitterAccount?"https://twitter.com/"+o.twitterAccount.replace("@",""):void 0;/*#__PURE__*/return u.default.createElement(e.DefaultSeo,{title:r||a,titleTemplate:a+(null!=o&&o.titleSuffix?" "+(null==o?void 0:o.titleSuffix):"")+" %s",description:n,additionalLinkTags:s,openGraph:{type:"website",locale:o.locale,site_name:o.siteName},twitter:{handle:o.twitterAccount,site:f,cardType:c.twitterCard}})};
//# sourceMappingURL=index.cjs.map
