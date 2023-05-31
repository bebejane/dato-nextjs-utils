!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client"),require("react"),require("next/router.js"),require("next-seo"),require("react-markdown"),require("remark-gfm"),require("next/link.js"),require("markdown-truncate"),require("remark-breaks")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client","react","next/router.js","next-seo","react-markdown","remark-gfm","next/link.js","markdown-truncate","remark-breaks"],t):t((e||self).index={},e.core_cjs,e.batchHttpLink_js,e.cmaClient,e.react,e.router_js,e.nextSeo,e.reactMarkdown,e.remarkGfm,e.Link,e.markdownTruncate,e.remarkBreaks)}(this,function(e,t,r,n,o,i,s,a,u,c,l,d){function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var v,p,m=/*#__PURE__*/f(o),h=/*#__PURE__*/f(a),g=/*#__PURE__*/f(u),w=/*#__PURE__*/f(c),E=/*#__PURE__*/f(l),P=/*#__PURE__*/f(d);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}var A,S,T,_="undefined"==typeof window,b=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",I=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,C=null!=(v=null!=(p=process.env.DATOCMS_ENVIRONMENT)?p:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?v:"main",O=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,R={uri:b,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return y({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},L=function(e,t){void 0===e&&(e=!1);var n={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return(e||O)&&(n["X-Include-Drafts"]=!0),C&&(n["X-Environment"]=C),new r.BatchHttpLink(y({},R,{headers:n}))},N=L(!1,I),k=L(!0,I),H=new t.ApolloClient({link:N,cache:new t.InMemoryCache,ssrMode:_,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),j=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,s=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!I&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){H.setLink(s?L(i,s):i?k:N);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return H.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=y({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},U=function(e,r){return t.gql("query GetSEO{\n    seo: "+e+" "+(r?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},x=t.gql(A||(S=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],T||(T=S.slice(0)),S.raw=T,A=S)),q=function(e,t,r){try{var n,o,i=y({},B,r),s=t.headers;return Promise.resolve(D(e,null!=(n=i.origin)&&n)).then(function(r){var n=function(e,t){"Vary"===t?s.append(t,e):s.set(t,e)};if(!r)return t;r.forEach(n),i.credentials&&s.set("Access-Control-Allow-Credentials","true");var a=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return a&&s.set("Access-Control-Expose-Headers",a),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,s.set("Access-Control-Allow-Methods",o)),function(e,t){var r=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),t&&r.set("Access-Control-Allow-Headers",t),r}(e,i.allowedHeaders).forEach(n),"number"==typeof i.maxAge&&s.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?t:(s.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:s}))):t})}catch(e){return Promise.reject(e)}},D=function(e,t){try{var r=function(e){if(e)return function(e,t){var r=new Headers;return"*"===t?r.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(r.set("Access-Control-Allow-Origin",t),r.append("Vary","Origin")):(M(null!=e?e:"",t)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}(n,e)},n=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(n,e):t).then(r):r("function"==typeof t?t(n,e):t))}catch(e){return Promise.reject(e)}},B={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function M(e,t){return Array.isArray(t)?t.some(function(t){return M(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}var X=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,s=e.noindex,a=void 0!==s&&s,u=G({seo:void 0===t?{}:t,site:n}),c=n.globalSeo,l=n.favicon,d=l?l.map(function(e){return y({},e.attributes)}):[],f=W(u["og:image"],u["og:image:width"],u["og:image:height"]);return i||(i=u.description?u.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:f,description:i,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:o,image:u["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:a,nofollow:a,meta:u,title:o,description:i,favicons:d,globalSeo:c,images:f}},W=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},G=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],s=i.filter(function(e){return"title"===e.tag})[0];s&&n&&n&&s.content.startsWith(n.siteName)&&(s=y({},s,{content:n.siteName+" – "+s.content})),i=i.map(function(e){return"title"!==e.tag?e:s});var a={};if(i.forEach(function(e){a[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!a["og:image"]&&null!=o&&o.image){var u=1-(o.image.width-1e3)/o.image.width;a["og:image"]=o.image.url+"?w=1000",a["og:image:width"]=1e3,a["og:image:height"]=Math.round(o.image.height*u)}return a};e.DatoMarkdown=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances,i=e.allowedElements,s=e.scroll,a=void 0===s||s,u=e.disableBreaks,c=void 0!==u&&u;if(!t)return null;var l=r?E.default(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return m.default.createElement(h.default,{remarkPlugins:c?[g.default]:[g.default,P.default],className:n,children:l,allowedElements:i,components:{a:function(e){/*#__PURE__*/return m.default.createElement(w.default,{scroll:a,href:e.href},e.children[0])}}})},e.DatoSEO=function(e){var t=X(e);/*#__PURE__*/return m.default.createElement(s.NextSeo,t)},e.DefaultDatoSEO=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=X(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):" —")+" %s";/*#__PURE__*/return m.default.createElement(s.DefaultSeo,y({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},e.SEOQuery=U,e.apiQuery=j,e.client=H,e.datoError=function(e){return console.error(e),e.message||e},e.useApiQuery=function(e,t){var r,n,i,s=void 0===t?{}:t,a=s.variables,u=s.initialData,c=s.pageSize,l=s.preview,d=void 0!==l&&l,f=o.useState(u),v=f[0],p=f[1],m=o.useState(u),h=m[0],g=m[1],w=o.useState(c?{no:1,count:(null==(r=u.pagination)?void 0:r.count)||0,size:c,end:(null==(n=u.pagination)?void 0:n.count)>0&&(null==(i=u.pagination)?void 0:i.count)<=c}:void 0),E=w[0],P=w[1],A=o.useState(),S=A[0],T=A[1],_=o.useState(!1),b=_[0],I=_[1];o.useEffect(function(){JSON.stringify(u)!==JSON.stringify(v)&&(g(u),p(u))},[u]);var C=o.useCallback(function(t){return I(!0),j(e,{variables:y({},a,t),preview:d}).then(function(e){var t=R(e,h);return g(t),t}).finally(function(){return I(!1)})},[e,a,h]),O=o.useCallback(function(){try{if(!E)return Promise.resolve(T(new Error("No page size set!")));var e=E.size,t=E.no*E.size;return Promise.resolve(t>E.count&&E.count>0?E:function(r,n){try{var o=Promise.resolve(C(y({},a.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=E.no+1,o=y({},E,{no:n,count:r,end:n*c>=r});return P(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return T(e),E}))}catch(e){return Promise.reject(e)}},[E,a,c,P,T,C]),R=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return o.useEffect(function(){!u&&C()},[u,C]),{data:h,error:S,loading:b,loadMore:function(e){return C(e)},nextPage:O,page:E}},e.usePreviousRoute=function(){var e=globalThis.localStorage,t=i.useRouter(),r=o.useState(void 0!==e?e.getItem("previousRoute"):null),n=r[0],s=r[1];return o.useEffect(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),s(r))},[t.asPath,e]),o.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),n},e.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=o.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),n=r[0],i=r[1],s=o.useRef(n),a=o.useCallback(function(){clearTimeout(s.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!t&&window.innerHeight+o>=r-e,u={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:o<s.current.scrolledPosition,isScrolledDown:o>s.current.scrolledPosition,scrolledPosition:o,documentHeight:r,viewportHeight:n,timer:s.current.timer};i(u),s.current=y({},u,{timer:setTimeout(function(){return i(y({},u,{isScrolling:!1}))},100)})},[t,e]);return o.useEffect(function(){return a(),window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[a]),n},e.useTransitionFix=function(){return o.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},e.withBasicAuth=function(e){return function(t,r){try{var n=t.headers.authorization;if(!n)return Promise.resolve(r.status(401).send("Access denied"));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(t,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}},e.withBasicAuthEdge=function(e){return function(t,r){try{var n=t.headers.get("authorization");if(!n)return Promise.resolve(new Response("Access denied",{status:401}));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(t,r):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},e.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[x];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(U(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(j(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:y({},n),revalidate:r})):{props:y({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug,n=r?r.startsWith("/")?r:"/"+r:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:n}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(t,r){try{var o;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var i=null==(o=t.body)?void 0:o.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,o,i=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(o=r.data)?void 0:o.id;if(!i)throw"Model id not found in payload!";var s=n.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(s.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(s.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i+" ("+r.api_key+")";return console.log("revalidate",r.api_key),y({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){t._payload=i,e(t,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidating done!"),r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},e.withWebPreviews=function(e){return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return Promise.resolve(r.status(200).send("ok"));if(!t.body)throw new Error("No body found in request");var n=t.body;return Promise.resolve(e(n)).then(function(e){var t,o,i=[],s=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(i.push({label:"Live",url:""+s+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(t=n.item)||null==(o=t.meta)?void 0:o.status)&&i.push({label:"Preview",url:s+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),r.status(200).json({previewLinks:i})})}catch(e){return Promise.reject(e)}}},e.withWebPreviewsEdge=function(e){var t={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(r,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");return"OPTIONS"===r.method?Promise.resolve(q(r,new Response("ok",{status:200}),t)):Promise.resolve(r.json()).then(function(n){if(!n)throw new Error("No form data in request body");return Promise.resolve(e(n)).then(function(e){var o,i,s=[],a=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(s.push({label:"Live",url:""+a+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(o=n.item)||null==(i=o.meta)?void 0:i.status)&&s.push({label:"Preview",url:a+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),q(r,new Response(JSON.stringify({previewLinks:s}),{status:200,headers:{"Content-Type":"application/json"}}),t)})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
