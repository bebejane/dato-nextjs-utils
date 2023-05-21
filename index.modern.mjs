import{ApolloClient as e,InMemoryCache as t,gql as r}from"@apollo/client/core/core.cjs";import{BatchHttpLink as n}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import i,{useState as s,useEffect as a,useCallback as u,useRef as c}from"react";import{useRouter as l}from"next/router.js";import{DefaultSeo as d,NextSeo as f}from"next-seo";import v from"react-markdown";import m from"remark-gfm";import p from"next/link.js";import h from"markdown-truncate";import g from"remark-breaks";function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}var w,E,y,A="undefined"==typeof window,T=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",S=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,_=null!=(w=null!=(E=process.env.DATOCMS_ENVIRONMENT)?E:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?w:"main",I=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,b={uri:T,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return P({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},C=function(e,t){void 0===e&&(e=!1);var r={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return(e||I)&&(r["X-Include-Drafts"]=!0),_&&(r["X-Environment"]=_),new n(P({},b,{headers:r}))},O=C(!1,S),R=C(!0,S),N=new e({link:O,cache:new t,ssrMode:A,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),L=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,s=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!S&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){N.setLink(s?C(i,s):i?R:O);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return N.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=P({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},H=function(e,t){return r("query GetSEO{\n    seo: "+e+" "+(t?'( filter: { id: { eq: "'+t+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},U=function(e){return console.error(e),e.message||e};function j(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[D];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(H(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(L(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:P({},n),revalidate:r})):{props:P({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}}var k,x,D=r(y||(k=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],x||(x=k.slice(0)),k.raw=x,y=k)),B=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug,n=r?r.startsWith("/")?r:"/"+r:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:n}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function M(e){return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return Promise.resolve(r.status(200).send("ok"));if(!t.body)throw new Error("No body found in request");var n=t.body;return Promise.resolve(e(n)).then(function(e){var t,o,i,s,a=[],u=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(a.push({label:"Live",url:""+u+e}),console.log(n.item),console.log(null==n||null==(t=n.item)||null==(o=t.attributes)?void 0:o.status),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(i=n.item)||null==(s=i.meta)?void 0:s.status)&&a.push({label:"Preview",url:u+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),r.status(200).json({previewLinks:a})})}catch(e){return Promise.reject(e)}}}var q=function(e,t,r){try{var n,o,i=P({},V,r),s=t.headers;return Promise.resolve(X(e,null!=(n=i.origin)&&n)).then(function(r){var n=function(e,t){"Vary"===t?s.append(t,e):s.set(t,e)};if(!r)return t;r.forEach(n),i.credentials&&s.set("Access-Control-Allow-Credentials","true");var a=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return a&&s.set("Access-Control-Expose-Headers",a),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,s.set("Access-Control-Allow-Methods",o)),function(e,t){var r=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),t&&r.set("Access-Control-Allow-Headers",t),r}(e,i.allowedHeaders).forEach(n),"number"==typeof i.maxAge&&s.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?t:(s.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:s}))):t})}catch(e){return Promise.reject(e)}},X=function(e,t){try{var r=function(e){if(e)return function(e,t){var r=new Headers;return"*"===t?r.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(r.set("Access-Control-Allow-Origin",t),r.append("Vary","Origin")):(z(null!=e?e:"",t)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}(n,e)},n=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(n,e):t).then(r):r("function"==typeof t?t(n,e):t))}catch(e){return Promise.reject(e)}},V={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function z(e,t){return Array.isArray(t)?t.some(function(t){return z(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function G(e){var t={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(r,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");return"OPTIONS"===r.method?Promise.resolve(q(r,new Response("ok",{status:200}),t)):Promise.resolve(r.json()).then(function(n){if(!n)throw new Error("No form data in request body");return Promise.resolve(e(n)).then(function(e){var o,i,s=[],a=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(s.push({label:"Live",url:""+a+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(o=n.item)||null==(i=o.meta)?void 0:i.status)&&s.push({label:"Preview",url:a+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),q(r,new Response(JSON.stringify({previewLinks:s}),{status:200,headers:{"Content-Type":"application/json"}}),t)})})}catch(e){return Promise.reject(e)}}}function W(e){return function(t,r){try{var n;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var i=null==(n=t.body)?void 0:n.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,n,i=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(n=r.data)?void 0:n.id;if(!i)throw"Model id not found in payload!";var s=o({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(s.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(s.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i+" ("+r.api_key+")";return console.log("revalidate",r.api_key),P({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){t._payload=i,e(t,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidating done!"),r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}function Q(e){return function(t,r){try{var n=t.headers.authorization;if(!n)return Promise.resolve(r.status(401).send("Access denied"));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(t,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function J(e){return function(t,r){try{var n=t.headers.get("authorization");if(!n)return Promise.resolve(new Response("Access denied",{status:401}));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(t,r):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}}var K=function(e,t){var r,n,o,i=void 0===t?{}:t,c=i.variables,l=i.initialData,d=i.pageSize,f=i.preview,v=void 0!==f&&f,m=s(l),p=m[0],h=m[1],g=s(l),w=g[0],E=g[1],y=s(d?{no:1,count:(null==(r=l.pagination)?void 0:r.count)||0,size:d,end:(null==(n=l.pagination)?void 0:n.count)>0&&(null==(o=l.pagination)?void 0:o.count)<=d}:void 0),A=y[0],T=y[1],S=s(),_=S[0],I=S[1],b=s(!1),C=b[0],O=b[1];a(function(){JSON.stringify(l)!==JSON.stringify(p)&&(E(l),h(l))},[l]);var R=u(function(t){return O(!0),L(e,{variables:P({},c,t),preview:v}).then(function(e){var t=H(e,w);return E(t),t}).finally(function(){return O(!1)})},[e,c,w]),N=u(function(){try{if(!A)return Promise.resolve(I(new Error("No page size set!")));var e=A.size,t=A.no*A.size;return Promise.resolve(t>A.count&&A.count>0?A:function(r,n){try{var o=Promise.resolve(R(P({},c.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=A.no+1,o=P({},A,{no:n,count:r,end:n*d>=r});return T(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return I(e),A}))}catch(e){return Promise.reject(e)}},[A,c,d,T,I,R]),H=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return a(function(){!l&&R()},[l,R]),{data:w,error:_,loading:C,loadMore:function(e){return R(e)},nextPage:N,page:A}},Y=function(){var e=globalThis.localStorage,t=l(),r=s(void 0!==e?e.getItem("previousRoute"):null),n=r[0],o=r[1];return a(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),o(r))},[t.asPath,e]),a(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),n};function F(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=s({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),n=r[0],o=r[1],i=c(n),l=u(function(){clearTimeout(i.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,s=t?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!t&&window.innerHeight+s>=r-e,u={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:s<i.current.scrolledPosition,isScrolledDown:s>i.current.scrolledPosition,scrolledPosition:s,documentHeight:r,viewportHeight:n,timer:i.current.timer};o(u),i.current=P({},u,{timer:setTimeout(function(){return o(P({},u,{isScrolling:!1}))},100)})},[t,e]);return a(function(){return l(),window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}},[l]),n}var Z=function(){return a(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},$=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=te(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):" —")+" %s";/*#__PURE__*/return i.createElement(d,P({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},ee=function(e){var t=te(e);/*#__PURE__*/return i.createElement(f,t)},te=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,s=e.noindex,a=void 0!==s&&s,u=ne({seo:void 0===t?{}:t,site:n}),c=n.globalSeo,l=n.favicon,d=l?l.map(function(e){return P({},e.attributes)}):[],f=re(u["og:image"],u["og:image:width"],u["og:image:height"]);return i||(i=u.description?u.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:f,description:i,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:o,image:u["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:a,nofollow:a,meta:u,title:o,description:i,favicons:d,globalSeo:c,images:f}},re=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},ne=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],s=i.filter(function(e){return"title"===e.tag})[0];s&&n&&n&&s.content.startsWith(n.siteName)&&(s=P({},s,{content:n.siteName+" – "+s.content})),i=i.map(function(e){return"title"!==e.tag?e:s});var a={};if(i.forEach(function(e){a[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!a["og:image"]&&null!=o&&o.image){var u=1-(o.image.width-1e3)/o.image.width;a["og:image"]=o.image.url+"?w=1000",a["og:image:width"]=1e3,a["og:image:height"]=Math.round(o.image.height*u)}return a},oe=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances,s=e.allowedElements,a=e.scroll,u=void 0===a||a,c=e.disableBreaks,l=void 0!==c&&c;if(!t)return null;var d=r?h(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return i.createElement(v,{remarkPlugins:l?[m]:[m,g],className:n,children:d,allowedElements:s,components:{a:function(e){/*#__PURE__*/return i.createElement(p,{scroll:u,href:e.href},e.children[0])}}})};export{oe as DatoMarkdown,ee as DatoSEO,$ as DefaultDatoSEO,H as SEOQuery,L as apiQuery,N as client,U as datoError,K as useApiQuery,Y as usePreviousRoute,F as useScrollInfo,Z as useTransitionFix,Q as withBasicAuth,J as withBasicAuthEdge,j as withGlobalProps,B as withPreview,W as withRevalidate,M as withWebPreviews,G as withWebPreviewsEdge};
//# sourceMappingURL=index.modern.mjs.map
