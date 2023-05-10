var e=require("@apollo/client/core/core.cjs"),t=require("@apollo/client/link/batch-http/batchHttpLink.js"),r=require("@datocms/cma-client"),n=require("react"),o=require("next/router.js"),i=require("next-seo"),a=require("react-markdown"),s=require("remark-gfm"),u=require("next/link.js"),c=require("markdown-truncate"),l=require("remark-breaks");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f,v,m=/*#__PURE__*/d(n),p=/*#__PURE__*/d(a),h=/*#__PURE__*/d(s),g=/*#__PURE__*/d(u),w=/*#__PURE__*/d(c),P=/*#__PURE__*/d(l);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}var y,S,_,T="undefined"==typeof window,b=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",A=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,I=null!=(f=null!=(v=process.env.DATOCMS_ENVIRONMENT)?v:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?f:"main",N=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,O={uri:b,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return E({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},C=function(e,r){void 0===e&&(e=!1);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return(e||N)&&(n["X-Include-Drafts"]=!0),I&&(n["X-Environment"]=I),new t.BatchHttpLink(E({},O,{headers:n}))},L=C(!1,A),R=C(!0,A),x=new e.ApolloClient({link:L,cache:new e.InMemoryCache,ssrMode:T,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),k=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!A&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){x.setLink(a?C(i,a):i?R:L);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return x.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=E({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},q=function(t,r){return e.gql("query GetSEO{\n    seo: "+t+" "+(r?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},H=e.gql(y||(S=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],_||(_=S.slice(0)),S.raw=_,y=S)),j=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,a=e.noindex,s=void 0!==a&&a,u=U({seo:void 0===t?{}:t,site:n}),c=n.globalSeo,l=n.favicon,d=l?l.map(function(e){return E({},e.attributes)}):[],f=D(u["og:image"],u["og:image:width"],u["og:image:height"]);return i||(i=u.description?u.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:f,description:i,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:o,image:u["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:s,nofollow:s,meta:u,title:o,description:i,favicons:d,globalSeo:c,images:f}},D=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},U=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],a=i.filter(function(e){return"title"===e.tag})[0];a&&n&&n&&a.content.startsWith(n.siteName)&&(a=E({},a,{content:n.siteName+" – "+a.content})),i=i.map(function(e){return"title"!==e.tag?e:a});var s={};if(i.forEach(function(e){s[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!s["og:image"]&&null!=o&&o.image){var u=1-(o.image.width-1e3)/o.image.width;s["og:image"]=o.image.url+"?w=1000",s["og:image:width"]=1e3,s["og:image:height"]=Math.round(o.image.height*u)}return s};exports.DatoMarkdown=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances,i=e.allowedElements,a=e.scroll,s=void 0===a||a,u=e.disableBreaks,c=void 0!==u&&u;if(!t)return null;var l=r?w.default(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return m.default.createElement(p.default,{remarkPlugins:c?[h.default]:[h.default,P.default],className:n,children:l,allowedElements:i,components:{a:function(e){/*#__PURE__*/return m.default.createElement(g.default,{scroll:s,href:e.href},e.children[0])}}})},exports.DatoSEO=function(e){var t=j(e);/*#__PURE__*/return m.default.createElement(i.NextSeo,t)},exports.DefaultDatoSEO=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=j(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):" —")+" %s";/*#__PURE__*/return m.default.createElement(i.DefaultSeo,E({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},exports.SEOQuery=q,exports.apiQuery=k,exports.client=x,exports.datoError=function(e){return console.error(e),e.message||e},exports.useApiQuery=function(e,t){var r,o,i,a=void 0===t?{}:t,s=a.variables,u=a.initialData,c=a.pageSize,l=a.preview,d=void 0!==l&&l,f=n.useState(u),v=f[0],m=f[1],p=n.useState(u),h=p[0],g=p[1],w=n.useState(c?{no:1,count:(null==(r=u.pagination)?void 0:r.count)||0,size:c,end:(null==(o=u.pagination)?void 0:o.count)>0&&(null==(i=u.pagination)?void 0:i.count)<=c}:void 0),P=w[0],y=w[1],S=n.useState(),_=S[0],T=S[1],b=n.useState(!1),A=b[0],I=b[1];n.useEffect(function(){JSON.stringify(u)!==JSON.stringify(v)&&(g(u),m(u))},[u]);var N=n.useCallback(function(t){return I(!0),k(e,{variables:E({},s,t),preview:d}).then(function(e){var t=C(e,h);return g(t),t}).finally(function(){return I(!1)})},[e,s,h]),O=n.useCallback(function(){try{if(!P)return Promise.resolve(T(new Error("No page size set!")));var e=P.size,t=P.no*P.size;return Promise.resolve(t>P.count&&P.count>0?P:function(r,n){try{var o=Promise.resolve(N(E({},s.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=P.no+1,o=E({},P,{no:n,count:r,end:n*c>=r});return y(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return T(e),P}))}catch(e){return Promise.reject(e)}},[P,s,c,y,T,N]),C=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return n.useEffect(function(){!u&&N()},[u,N]),{data:h,error:_,loading:A,loadMore:function(e){return N(e)},nextPage:O,page:P}},exports.usePreviousRoute=function(){var e=globalThis.localStorage,t=o.useRouter(),r=n.useState(void 0!==e?e.getItem("previousRoute"):null),i=r[0],a=r[1];return n.useEffect(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),a(r))},[t.asPath,e]),n.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),i},exports.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=n.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),o=r[0],i=r[1],a=n.useRef(o),s=n.useCallback(function(){clearTimeout(a.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),s=!t&&window.innerHeight+o>=r-e,u={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:s,isScrolledUp:o<a.current.scrolledPosition,isScrolledDown:o>a.current.scrolledPosition,scrolledPosition:o,documentHeight:r,viewportHeight:n,timer:a.current.timer};i(u),a.current=E({},u,{timer:setTimeout(function(){return i(E({},u,{isScrolling:!1}))},100)})},[t,e]);return n.useEffect(function(){return s(),window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}},[s]),o},exports.useTransitionFix=function(){return n.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},exports.withBasicAuth=function(e){return function(t,r){try{var n=t.headers.authorization;if(!n)return Promise.resolve(r.status(401).send("Access denied"));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),a=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(a?e(t,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}},exports.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[H];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(q(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(k(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:E({},n),revalidate:r})):{props:E({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug,n=r?r.startsWith("/")?r:"/"+r:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:n}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(t,n){try{var o;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(n.status(401).send("Access denied"));var i=null==(o=t.body)?void 0:o.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,n,o,i=null==e||null==(t=e.relationships)||null==(n=t.item_type)||null==(o=n.data)?void 0:o.id;if(!i)throw"Model id not found in payload!";var a=r.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(a.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i+" ("+r.api_key+")";return console.log("revalidate",r.api_key),E({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){t._payload=i,e(t,function(e){try{return Promise.resolve(function(t,r){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return console.log("revalidating done!"),n.json({revalidated:!0,paths:e})})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.error(e),n.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviews=function(e){return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return Promise.resolve(r.status(200).send("ok"));if(!t.body)throw new Error("No body found in request");var n=t.body;return Promise.resolve(e(n)).then(function(e){var t,o=[],i=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(o.push({label:"Live",url:""+i+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(t=n.item)?void 0:t.status)&&o.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),r.status(200).json({previewLinks:o})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
