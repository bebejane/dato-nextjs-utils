import t from"react";import{NextSeo as e,DefaultSeo as i}from"next-seo";import r from"react-markdown";import n from"remark-gfm";import a from"next/link.js";import o from"markdown-truncate";import l from"remark-breaks";function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},c.apply(this,arguments)}var s=function(i){var r=i.seo,n=i.site,a=void 0===n?{}:n,o=i.pathname,l=i.title,s=i.subtitle,u=i.description,p=i.noindex,d=void 0!==p&&p,h=g({seo:void 0===r?{}:r,site:a,pathname:o}),v=a.globalSeo,b=a.favicon,w=b?b.map(function(t){return c({},t.attributes)}):[],k=m(h["og:image"],h["og:image:width"],h["og:image:height"]),y=""+process.env.NEXT_PUBLIC_SITE_URL+(o||"");return l=f(l,v,s),u||(u=h.description?h.description:v?null==v?void 0:v.fallbackSeo.description:void 0),/*#__PURE__*/t.createElement(e,{title:l,description:u,canonical:y,openGraph:{url:y,title:l,description:u,images:k,locale:h["og:locale"],type:h["og:type"],site_name:h["og:site_name"]},twitter:{title:l,image:h["og:image"],handle:null==v?void 0:v.twitterAccount,site:null==v?void 0:v.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:w,noindex:d,nofollow:d})},u=function(e){var r=e.site,n=e.title,a=e.subtitle,o=e.description,l=r.globalSeo,s=r.favicon,u=r.globalSeo.fallbackSeo,m=s?s.map(function(t){return c({},t.attributes)}):[],g=l.twitterAccount?"https://twitter.com/"+l.twitterAccount.replace("@",""):void 0;return n=f(n,l,a),/*#__PURE__*/t.createElement(i,{title:n,description:o,additionalLinkTags:m,openGraph:{type:"website",locale:l.locale,site_name:l.siteName},twitter:{handle:l.twitterAccount,site:g,cardType:u.twitterCard}})},m=function(t,e,i){if(t)return t.split("?"),[{url:t,width:e,height:i}]},g=function(t){var e=t.seo,i=t.site,r=t.pathname;if(!e||!i)return[];var n=(i||{}).globalSeo,a=(n||{}).fallbackSeo,o=(Array.isArray(e)?e:e.tags)||[],l=o.filter(function(t){return"title"===t.tag})[0];l&&n&&("/"===r?l=c({},l,{content:n.siteName}):n&&l.content.startsWith(n.siteName)&&(l=c({},l,{content:n.siteName+" – "+l.content}))),o=o.map(function(t){return"title"!==t.tag?t:l});var s={};if(o.forEach(function(t){s[t.attributes?t.attributes.property||t.attributes.name:t.tag]=t.attributes?t.attributes.content||t.attributes:t.content}),!s["og:image"]&&null!=a&&a.image){var u=1-(a.image.width-1e3)/a.image.width;s["og:image"]=a.image.url+"?w=1000",s["og:image:width"]=1e3,s["og:image:height"]=Math.round(a.image.height*u)}return s},f=function(t,e,i){return!t&&e&&(t=e.siteName),(null!=e&&e.titleSuffix||i)&&(t+=null!=e&&e.titleSuffix&&i?" "+(null==e?void 0:e.titleSuffix)+" "+i:""),t},p=function(e){var i=e.children,c=e.truncate,s=e.className,u=e.sentances;if(!i)return null;var m=c?o(i,{limit:c,ellipsis:!0}):u?function(t,e){if(!t)return t;var i=t.split(".");return i.length>=e?i.slice(0,e).join(" ")+"...":t}(i,u):i;/*#__PURE__*/return t.createElement(r,{remarkPlugins:[n,l],className:s,children:m,components:{a:function(e){/*#__PURE__*/return t.createElement(a,{scroll:!1,href:e.href},/*#__PURE__*/t.createElement("a",null,e.children[0]))}}})};export{p as DatoMarkdown,s as DatoSEO,u as DefaultDatoSEO};
//# sourceMappingURL=index.modern.mjs.map
