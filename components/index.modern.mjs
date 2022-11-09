import t from"react";import{NextSeo as e,DefaultSeo as i}from"next-seo";import r from"react-markdown";import n from"remark-gfm";import a from"next/link.js";import o from"markdown-truncate";import l from"remark-breaks";function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},c.apply(this,arguments)}var s=function(i){var r=i.seo,n=i.site,a=void 0===n?{}:n,o=i.title,l=i.subtitle,s=i.description,u=i.noindex,g=void 0!==u&&u,d=f({seo:void 0===r?{}:r,site:a,pathname:i.pathname}),h=a.globalSeo,v=a.favicon,b=v?v.map(function(t){return c({},t.attributes)}):[],w=m(d["og:image"],d["og:image:width"],d["og:image:height"]);o=p(o,h,l),s||(s=d.description?d.description:h?null==h?void 0:h.fallbackSeo.description:void 0);var S={openGraph:{title:o,images:w,locale:d["og:locale"],type:d["og:type"],site_name:d["og:site_name"]},twitter:{title:o,image:d["og:image"],handle:null==h?void 0:h.twitterAccount,site:null==h?void 0:h.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:b,noindex:g,nofollow:g};return o&&(S.title=o),s&&(S.description=s,S.openGraph.description=s),/*#__PURE__*/t.createElement(e,S)},u=function(e){var r=e.site,n=e.path,a=e.siteTitle,o=e.title,l=e.description,s=r.globalSeo,u=r.favicon,m=r.globalSeo.fallbackSeo,f=u?u.map(function(t){return c({},t.attributes)}):[],p=s.twitterAccount?"https://twitter.com/"+s.twitterAccount.replace("@",""):void 0;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";/*#__PURE__*/return t.createElement(i,{title:o,titleTemplate:a+(null!=s&&s.titleSuffix?" "+(null==s?void 0:s.titleSuffix):"")+" %s",defaultTitle:a,description:l,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(n||""),additionalLinkTags:f,openGraph:{type:"website",locale:s.locale,site_name:s.siteName},twitter:{handle:s.twitterAccount,site:p,cardType:m.twitterCard}})},m=function(t,e,i){if(t)return t.split("?"),[{url:t,width:e,height:i}]},f=function(t){var e=t.seo,i=t.site,r=t.pathname;if(!e||!i)return[];var n=(i||{}).globalSeo,a=(n||{}).fallbackSeo,o=(Array.isArray(e)?e:e.tags)||[],l=o.filter(function(t){return"title"===t.tag})[0];l&&n&&("/"===r?l=c({},l,{content:n.siteName}):n&&l.content.startsWith(n.siteName)&&(l=c({},l,{content:n.siteName+" – "+l.content}))),o=o.map(function(t){return"title"!==t.tag?t:l});var s={};if(o.forEach(function(t){s[t.attributes?t.attributes.property||t.attributes.name:t.tag]=t.attributes?t.attributes.content||t.attributes:t.content}),!s["og:image"]&&null!=a&&a.image){var u=1-(a.image.width-1e3)/a.image.width;s["og:image"]=a.image.url+"?w=1000",s["og:image:width"]=1e3,s["og:image:height"]=Math.round(a.image.height*u)}return s},p=function(t,e,i){return!t&&e&&(t=e.siteName),(null!=e&&e.titleSuffix||i)&&(t+=null!=e&&e.titleSuffix&&i?" "+(null==e?void 0:e.titleSuffix)+" "+i:""),t},g=function(e){var i=e.children,c=e.truncate,s=e.className,u=e.sentances;if(!i)return null;var m=c?o(i,{limit:c,ellipsis:!0}):u?function(t,e){if(!t)return t;var i=t.split(".");return i.length>=e?i.slice(0,e).join(" ")+"...":t}(i,u):i;/*#__PURE__*/return t.createElement(r,{remarkPlugins:[n,l],className:s,children:m,components:{a:function(e){/*#__PURE__*/return t.createElement(a,{scroll:!1,href:e.href},/*#__PURE__*/t.createElement("a",null,e.children[0]))}}})};export{g as DatoMarkdown,s as DatoSEO,u as DefaultDatoSEO};
//# sourceMappingURL=index.modern.mjs.map
