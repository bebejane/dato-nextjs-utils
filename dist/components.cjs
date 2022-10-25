var t=require("react-markdown"),e=require("remark-gfm"),i=require("next/link.js"),r=require("markdown-truncate"),n=require("remark-breaks"),a=require("next-seo");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=/*#__PURE__*/o(t),u=/*#__PURE__*/o(e),s=/*#__PURE__*/o(i),c=/*#__PURE__*/o(r),g=/*#__PURE__*/o(n);function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},f.apply(this,arguments)}exports.DatoMarkdown=function(t){var e=t.children,i=t.truncate,r=t.className,n=t.sentances;if(!e)return null;var a=i?c.default(e,{limit:i,ellipsis:!0}):n?function(t,e){if(!t)return t;var i=t.split(".");return i.length>=e?i.slice(0,e).join(" ")+"...":t}(e,n):e;return h(l.default,{remarkPlugins:[u.default,g.default],className:r,children:a,components:{a:function(t){return h(s.default,{scroll:!1,href:t.href,prefetch:!1},h("a",null,t.children[0]))}}})},exports.DatoSEO=function(t){var e=t.seo,i=t.site,r=void 0===i?{}:i,n=t.pathname,o=t.title,l=t.subtitle,u=t.description,s=t.noindex,c=void 0!==s&&s,g=function(t){var e=t.seo,i=t.site,r=t.pathname;if(!e||!i)return[];var n=(i||{}).globalSeo,a=(n||{}).fallbackSeo,o=(Array.isArray(e)?e:e.tags)||[],l=o.filter(function(t){return"title"===t.tag})[0];l&&n&&("/"===r?l=f({},l,{content:n.siteName}):n&&l.content.startsWith(n.siteName)&&(l=f({},l,{content:n.siteName+" – "+l.content}))),o=o.map(function(t){return"title"!==t.tag?t:l});var u={};if(o.forEach(function(t){u[t.attributes?t.attributes.property||t.attributes.name:t.tag]=t.attributes?t.attributes.content||t.attributes:t.content}),!u["og:image"]&&null!=a&&a.image){var s=1-(a.image.width-1e3)/a.image.width;u["og:image"]=a.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(a.image.height*s)}return u}({seo:void 0===e?{}:e,site:r,pathname:n}),d=r.globalSeo,m=r.favicon,p=m?m.map(function(t){return f({},t.attributes)}):[],v=function(t,e,i){if(t)return t.split("?"),[{url:t,width:e,height:i}]}(g["og:image"],g["og:image:width"],g["og:image:height"]),b=""+process.env.NEXT_PUBLIC_SITE_URL+(n||"");return o=(o=o||(d?null==d?void 0:d.siteName:"Site title"))+" "+(null!=d&&d.titleSuffix?" "+(null==d?void 0:d.titleSuffix):"")+(l?" "+l:""),u=u||(g.description?g.description:d?null==d?void 0:d.fallbackSeo.description:"Site description"),h(a.NextSeo,{title:o,description:u,canonical:b,openGraph:{url:b,title:o,description:u,images:v,locale:g["og:locale"],type:g["og:type"],site_name:g["og:site_name"]},twitter:{title:o,image:g["og:image"],handle:null==d?void 0:d.twitterAccount,site:null==d?void 0:d.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:p,noindex:c,nofollow:c})};
//# sourceMappingURL=components.cjs.map
