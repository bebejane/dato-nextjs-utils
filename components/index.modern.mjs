import t from"react";import{NextSeo as e,DefaultSeo as i}from"next-seo";import r from"react-markdown";import n from"remark-gfm";import a from"next/link.js";import o from"markdown-truncate";import l from"remark-breaks";function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},c.apply(this,arguments)}var s=function(i){var r=i.seo,n=i.site,a=void 0===n?{}:n,o=i.pathname,l=i.title,s=i.subtitle,m=i.description,p=i.noindex,f=void 0!==p&&p,d=g({seo:void 0===r?{}:r,site:a,pathname:o}),h=a.globalSeo,v=a.favicon,b=v?v.map(function(t){return c({},t.attributes)}):[],w=u(d["og:image"],d["og:image:width"],d["og:image:height"]),y=""+process.env.NEXT_PUBLIC_SITE_URL+(o||"");/*#__PURE__*/return t.createElement(e,{title:l=(l=l||(h?null==h?void 0:h.siteName:"Site title"))+" "+(null!=h&&h.titleSuffix?" "+(null==h?void 0:h.titleSuffix):"")+(s?" "+s:""),description:m=m||(d.description?d.description:h?null==h?void 0:h.fallbackSeo.description:"Site description"),canonical:y,openGraph:{url:y,title:l,description:m,images:w,locale:d["og:locale"],type:d["og:type"],site_name:d["og:site_name"]},twitter:{title:l,image:d["og:image"],handle:null==h?void 0:h.twitterAccount,site:null==h?void 0:h.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:b,noindex:f,nofollow:f})},m=function(e){var r=e.site,n=e.title,a=e.description,o=r.globalSeo,l=r.globalSeo.fallbackSeo,c=o.twitterAccount?"https://twitter.com/"+o.twitterAccount.replace("@",""):void 0;/*#__PURE__*/return t.createElement(i,{title:n,description:a,openGraph:{type:"website",locale:o.locale,site_name:o.siteName},twitter:{handle:o.twitterAccount,site:c,cardType:l.twitterCard}})},u=function(t,e,i){if(t)return t.split("?"),[{url:t,width:e,height:i}]},g=function(t){var e=t.seo,i=t.site,r=t.pathname;if(!e||!i)return[];var n=(i||{}).globalSeo,a=(n||{}).fallbackSeo,o=(Array.isArray(e)?e:e.tags)||[],l=o.filter(function(t){return"title"===t.tag})[0];l&&n&&("/"===r?l=c({},l,{content:n.siteName}):n&&l.content.startsWith(n.siteName)&&(l=c({},l,{content:n.siteName+" – "+l.content}))),o=o.map(function(t){return"title"!==t.tag?t:l});var s={};if(o.forEach(function(t){s[t.attributes?t.attributes.property||t.attributes.name:t.tag]=t.attributes?t.attributes.content||t.attributes:t.content}),!s["og:image"]&&null!=a&&a.image){var m=1-(a.image.width-1e3)/a.image.width;s["og:image"]=a.image.url+"?w=1000",s["og:image:width"]=1e3,s["og:image:height"]=Math.round(a.image.height*m)}return s},p=function(e){var i=e.children,c=e.truncate,s=e.className,m=e.sentances;if(!i)return null;var u=c?o(i,{limit:c,ellipsis:!0}):m?function(t,e){if(!t)return t;var i=t.split(".");return i.length>=e?i.slice(0,e).join(" ")+"...":t}(i,m):i;/*#__PURE__*/return t.createElement(r,{remarkPlugins:[n,l],className:s,children:u,components:{a:function(e){/*#__PURE__*/return t.createElement(a,{scroll:!1,href:e.href},/*#__PURE__*/t.createElement("a",null,e.children[0]))}}})};export{p as DatoMarkdown,s as DatoSEO,m as DefaultDatoSEO};
//# sourceMappingURL=index.modern.mjs.map
