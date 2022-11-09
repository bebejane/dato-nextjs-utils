var e=require("@apollo/client/core/core.cjs"),t=require("@apollo/client/link/batch-http/batchHttpLink.js"),r=require("@datocms/cma-client"),n=require("react"),i=require("next/router.js"),o=require("next-seo"),a=require("react-markdown"),u=require("remark-gfm"),s=require("next/link.js"),l=require("markdown-truncate"),c=require("remark-breaks");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=/*#__PURE__*/f(n),m=/*#__PURE__*/f(a),v=/*#__PURE__*/f(u),p=/*#__PURE__*/f(s),h=/*#__PURE__*/f(l),g=/*#__PURE__*/f(c);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}var y,P,b,E="undefined"==typeof window,S=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",A=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,_={uri:S,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return w({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},T=function(e,r){void 0===e&&(e=!1),void 0===r&&(r=A);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return e&&(n["X-Include-Drafts"]=!0),new t.BatchHttpLink(w({},_,{headers:n}))},x=T(!1,A),I=T(!0,A),q=new e.ApolloClient({link:x,cache:new e.InMemoryCache,ssrMode:E,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),k=function(e,t){try{var r=t||{},n=r.variables,i=r.preview,o=void 0!==i&&i,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!A)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var i=function(){q.setLink(a?T(o,a):o?I:x);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return q.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=w({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},N=function(t,r){return e.gql("query GetSEO{\n    seo: "+t+' ( filter: { id: { eq: "'+r+'" } }) {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }')},L=e.gql(y||(P=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],b||(b=P.slice(0)),P.raw=b,y=P));exports.DatoMarkdown=function(e){var t=e.children,r=e.truncate,n=e.className,i=e.sentances;if(!t)return null;var o=r?h.default(t,{limit:r,ellipsis:!0}):i?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,i):t;/*#__PURE__*/return d.default.createElement(m.default,{remarkPlugins:[v.default,g.default],className:n,children:o,components:{a:function(e){/*#__PURE__*/return d.default.createElement(p.default,{scroll:!1,href:e.href},/*#__PURE__*/d.default.createElement("a",null,e.children[0]))}}})},exports.DatoSEO=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,i=e.title,a=e.subtitle,u=e.description,s=e.noindex,l=void 0!==s&&s,c=function(e){var t=e.seo,r=e.site,n=e.pathname;if(!t||!r)return[];var i=(r||{}).globalSeo,o=(i||{}).fallbackSeo,a=(Array.isArray(t)?t:t.tags)||[],u=a.filter(function(e){return"title"===e.tag})[0];u&&i&&("/"===n?u=w({},u,{content:i.siteName}):i&&u.content.startsWith(i.siteName)&&(u=w({},u,{content:i.siteName+" – "+u.content}))),a=a.map(function(e){return"title"!==e.tag?e:u});var s={};if(a.forEach(function(e){s[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!s["og:image"]&&null!=o&&o.image){var l=1-(o.image.width-1e3)/o.image.width;s["og:image"]=o.image.url+"?w=1000",s["og:image:width"]=1e3,s["og:image:height"]=Math.round(o.image.height*l)}return s}({seo:void 0===t?{}:t,site:n,pathname:e.pathname}),f=n.globalSeo,m=n.favicon,v=m?m.map(function(e){return w({},e.attributes)}):[],p=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]}(c["og:image"],c["og:image:width"],c["og:image:height"]);i=function(e,t,r){return!e&&t&&(e=t.siteName),(null!=t&&t.titleSuffix||r)&&(e+=null!=t&&t.titleSuffix&&r?" "+(null==t?void 0:t.titleSuffix)+" "+r:""),e}(i,f,a),u||(u=c.description?c.description:f?null==f?void 0:f.fallbackSeo.description:void 0);var h={openGraph:{title:i,images:p,locale:c["og:locale"],type:c["og:type"],site_name:c["og:site_name"]},twitter:{title:i,image:c["og:image"],handle:null==f?void 0:f.twitterAccount,site:null==f?void 0:f.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:v,noindex:l,nofollow:l};return i&&(h.title=i),u&&(h.description=u,h.openGraph.description=u),/*#__PURE__*/d.default.createElement(o.NextSeo,h)},exports.DefaultDatoSEO=function(e){var t=e.site,r=e.path,n=e.siteTitle,i=e.title,a=e.description,u=t.globalSeo,s=t.favicon,l=t.globalSeo.fallbackSeo,c=s?s.map(function(e){return w({},e.attributes)}):[],f=u.twitterAccount?"https://twitter.com/"+u.twitterAccount.replace("@",""):void 0;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";/*#__PURE__*/return d.default.createElement(o.DefaultSeo,{title:i,titleTemplate:n+(null!=u&&u.titleSuffix?" "+(null==u?void 0:u.titleSuffix):"")+" %s",defaultTitle:n,description:a,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(r||""),additionalLinkTags:c,openGraph:{type:"website",locale:u.locale,site_name:u.siteName},twitter:{handle:u.twitterAccount,site:f,cardType:l.twitterCard}})},exports.SEOQuery=N,exports.apiQuery=k,exports.client=q,exports.datoError=function(e){return console.error(e),e.message||e},exports.useApiQuery=function(e,t){var r,i,o=void 0===t?{}:t,a=o.variables,u=o.initialData,s=o.pageSize;console.log("useApiQuery");var l=n.useState(u),c=l[0],f=l[1],d=n.useState(s?{no:1,count:0,size:s,end:(null==(r=u.pagination)?void 0:r.count)>0&&(null==(i=u.pagination)?void 0:i.count)<=s}:void 0),m=d[0],v=d[1],p=n.useState(),h=p[0],g=p[1],y=n.useState(!1),P=y[0],b=y[1],E=n.useCallback(function(t){return b(!0),k(e,{variables:t||a}).then(function(e){var t,r,n=(t=e,(r=c)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return f(n),n}).catch(function(e){return g(e)}).finally(function(){return b(!1)})},[e,a,c]);return n.useEffect(function(){!u&&E()},[u,E]),{data:c,error:h,loading:P,loadMore:function(e){return E(e)},nextPage:function(){try{return m?Promise.resolve(E(w({},a,{first:m.size,skip:m.no*m.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=m.no+1,i=w({},m,{no:n,count:r,end:n*s>=r});return v(i),i}):Promise.resolve(g(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:m}},exports.usePreviousRoute=function(){var e=globalThis.sessionStorage,t=i.useRouter(),r=n.useState(void 0!==e?e.getItem("previousRoute"):null),o=r[0],a=r[1];return n.useEffect(function(){var r=e.getItem("currentRoute");r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),a(r))},[t.asPath,e]),n.useEffect(function(){var t=function(t){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)}}),o},exports.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=n.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),i=r[0],o=r[1],a=n.useRef(i),u=n.useCallback(function(){clearTimeout(a.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,i=t?0:Math.max(0,Math.ceil(window.pageYOffset)),u=!t&&window.innerHeight+i>=r-e,s={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:u,isScrolledUp:i<a.current.scrolledPosition,isScrolledDown:i>a.current.scrolledPosition,scrolledPosition:i,documentHeight:r,viewportHeight:n,timer:a.current.timer};o(s),a.current=w({},s,{timer:setTimeout(function(){return o(w({},s,{isScrolling:!1}))},100)})},[t,e]);return n.useEffect(function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}},[u]),i},exports.useTransitionFix=function(){return n.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},exports.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[L];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(N(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(k(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:w({},n),revalidate:r})):{props:w({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(t,n){try{var i;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(n.status(401).send("Access denied"));var o=null==(i=t.body)?void 0:i.entity;if(!o)throw"Payload is empty";return Promise.resolve(function(e){try{var t,n,i,o=null==e||null==(t=e.relationships)||null==(n=t.item_type)||null==(i=n.data)?void 0:i.id;if(!o)throw"Model id not found in payload!";console.log("resolve modelId",o);var a=r.buildClient({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===o});return Promise.resolve(a.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+o;return console.log("revalidate",r.api_key),w({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(o)).then(function(t){e(t,function(e){try{return Promise.resolve(function(t,r){try{var i=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return console.log("revalidating done!"),n.json({revalidated:!0,paths:e})})}()}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(e){return console.error(e),n.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
