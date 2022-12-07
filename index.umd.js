!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client"),require("react"),require("next/router.js"),require("next-seo"),require("react-markdown"),require("remark-gfm"),require("next/link.js"),require("markdown-truncate"),require("remark-breaks")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client","react","next/router.js","next-seo","react-markdown","remark-gfm","next/link.js","markdown-truncate","remark-breaks"],t):t((e||self).index={},e.core_cjs,e.batchHttpLink_js,e.cmaClient,e.react,e.router_js,e.nextSeo,e.reactMarkdown,e.remarkGfm,e.Link,e.markdownTruncate,e.remarkBreaks)}(this,function(e,t,r,n,o,i,a,u,s,c,l,d){function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=/*#__PURE__*/f(o),v=/*#__PURE__*/f(u),h=/*#__PURE__*/f(s),p=/*#__PURE__*/f(c),g=/*#__PURE__*/f(l),w=/*#__PURE__*/f(d);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}var P,E,b,S="undefined"==typeof window,_=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",A=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,T=process.env.GRAPHQL_ENVIRONMENT,k={uri:_,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return y({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},I=function(e,t){void 0===e&&(e=!1),void 0===t&&(t=A);var n={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return e&&(n["X-Include-Drafts"]=!0),T&&(n["X-Environment"]=T),new r.BatchHttpLink(y({},k,{headers:n}))},j=I(!1,A),q=I(!0,A),N=new t.ApolloClient({link:j,cache:new t.InMemoryCache,ssrMode:S,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),L=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!A&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){N.setLink(a?I(i,a):i?q:j);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return N.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=y({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},x=function(e,r){return t.gql("query GetSEO{\n    seo: "+e+" "+(r?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},H=t.gql(P||(E=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],b||(b=E.slice(0)),E.raw=b,P=E)),R=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,a=e.noindex,u=void 0!==a&&a,s=C({seo:void 0===t?{}:t,site:n}),c=n.globalSeo,l=n.favicon,d=l?l.map(function(e){return y({},e.attributes)}):[],f=O(s["og:image"],s["og:image:width"],s["og:image:height"]);return i||(i=s.description?s.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:f,description:i,locale:s["og:locale"],type:s["og:type"],site_name:s["og:site_name"]},twitter:{title:o,image:s["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:u,nofollow:u,meta:s,title:o,description:i,favicons:d,globalSeo:c,images:f}},O=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},C=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],a=i.filter(function(e){return"title"===e.tag})[0];a&&n&&n&&a.content.startsWith(n.siteName)&&(a=y({},a,{content:n.siteName+" – "+a.content})),i=i.map(function(e){return"title"!==e.tag?e:a});var u={};if(i.forEach(function(e){u[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!u["og:image"]&&null!=o&&o.image){var s=1-(o.image.width-1e3)/o.image.width;u["og:image"]=o.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(o.image.height*s)}return u};e.DatoMarkdown=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances,i=e.allowedElements,a=e.scroll,u=void 0===a||a;if(!t)return null;var s=r?g.default(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return m.default.createElement(v.default,{remarkPlugins:[h.default,w.default],className:n,children:s,allowedElements:i,components:{a:function(e){/*#__PURE__*/return m.default.createElement(p.default,{scroll:u,href:e.href},e.children[0])}}})},e.DatoSEO=function(e){var t=R(e);/*#__PURE__*/return m.default.createElement(a.NextSeo,t)},e.DefaultDatoSEO=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=R(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):"")+" %s";/*#__PURE__*/return m.default.createElement(a.DefaultSeo,y({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},e.SEOQuery=x,e.apiQuery=L,e.client=N,e.datoError=function(e){return console.error(e),e.message||e},e.useApiQuery=function(e,t){var r,n,i=void 0===t?{}:t,a=i.variables,u=i.initialData,s=i.pageSize;console.log("useApiQuery");var c=o.useState(u),l=c[0],d=c[1],f=o.useState(s?{no:1,count:0,size:s,end:(null==(r=u.pagination)?void 0:r.count)>0&&(null==(n=u.pagination)?void 0:n.count)<=s}:void 0),m=f[0],v=f[1],h=o.useState(),p=h[0],g=h[1],w=o.useState(!1),P=w[0],E=w[1],b=o.useCallback(function(t){return E(!0),L(e,{variables:t||a}).then(function(e){var t,r,n=(t=e,(r=l)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return d(n),n}).catch(function(e){return g(e)}).finally(function(){return E(!1)})},[e,a,l]);return o.useEffect(function(){!u&&b()},[u,b]),{data:l,error:p,loading:P,loadMore:function(e){return b(e)},nextPage:function(){try{return m?Promise.resolve(b(y({},a,{first:m.size,skip:m.no*m.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=m.no+1,o=y({},m,{no:n,count:r,end:n*s>=r});return v(o),o}):Promise.resolve(g(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:m}},e.usePreviousRoute=function(){var e=globalThis.localStorage,t=i.useRouter(),r=o.useState(void 0!==e?e.getItem("previousRoute"):null),n=r[0],a=r[1];return o.useEffect(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),a(r))},[t.asPath,e]),o.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),n},e.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=o.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),n=r[0],i=r[1],a=o.useRef(n),u=o.useCallback(function(){clearTimeout(a.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),u=!t&&window.innerHeight+o>=r-e,s={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:u,isScrolledUp:o<a.current.scrolledPosition,isScrolledDown:o>a.current.scrolledPosition,scrolledPosition:o,documentHeight:r,viewportHeight:n,timer:a.current.timer};i(s),a.current=y({},s,{timer:setTimeout(function(){return i(y({},s,{isScrolling:!1}))},100)})},[t,e]);return o.useEffect(function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}},[u]),n},e.useTransitionFix=function(){return o.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},e.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[H];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(x(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(L(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:y({},n),revalidate:r})):{props:y({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug,n=r?r.startsWith("/")?r:"/"+r:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:n}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(t,r){try{var o;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var i=null==(o=t.body)?void 0:o.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,o,i=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(o=r.data)?void 0:o.id;if(!i)throw"Model id not found in payload!";console.log("resolve modelId",i);var a=n.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(a.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i;return console.log("revalidate",r.api_key),y({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){e(t,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidating done!"),r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
