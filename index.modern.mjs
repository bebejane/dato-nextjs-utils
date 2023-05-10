import{ApolloClient as e,InMemoryCache as t,gql as r}from"@apollo/client/core/core.cjs";import{BatchHttpLink as n}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import i,{useState as a,useEffect as s,useCallback as u,useRef as c}from"react";import{useRouter as l}from"next/router.js";import{DefaultSeo as d,NextSeo as v}from"next-seo";import f from"react-markdown";import m from"remark-gfm";import p from"next/link.js";import h from"markdown-truncate";import g from"remark-breaks";function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}var w,E,y,_="undefined"==typeof window,T=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",S=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,A=null!=(w=null!=(E=process.env.DATOCMS_ENVIRONMENT)?E:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?w:"main",b=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,I={uri:T,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return P({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},N=function(e,t){void 0===e&&(e=!1);var r={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return(e||b)&&(r["X-Include-Drafts"]=!0),A&&(r["X-Environment"]=A),new n(P({},I,{headers:r}))},L=N(!1,S),O=N(!0,S),R=new e({link:L,cache:new t,ssrMode:_,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),C=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!S&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){R.setLink(a?N(i,a):i?O:L);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return R.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=P({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},H=function(e,t){return r("query GetSEO{\n    seo: "+e+" "+(t?'( filter: { id: { eq: "'+t+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},k=function(e){return console.error(e),e.message||e};function j(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[M];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(H(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(C(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:P({},n),revalidate:r})):{props:P({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}}var U,D,M=r(y||(U=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],D||(D=U.slice(0)),U.raw=D,y=U)),q=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug,n=r?r.startsWith("/")?r:"/"+r:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:n}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function x(e){return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return Promise.resolve(r.status(200).send("ok"));if(!t.body)throw new Error("No body found in request");var n=t.body;return Promise.resolve(e(n)).then(function(e){var t,o,i,a,s=[],u=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(s.push({label:"Live",url:""+u+e}),console.log(n.item),console.log(null==n||null==(t=n.item)||null==(o=t.attributes)?void 0:o.status),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(i=n.item)||null==(a=i.attributes)?void 0:a.status)&&s.push({label:"Preview",url:u+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),r.status(200).json({previewLinks:s})})}catch(e){return Promise.reject(e)}}}function B(e){return function(t,r){try{var n;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var i=null==(n=t.body)?void 0:n.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,n,i=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(n=r.data)?void 0:n.id;if(!i)throw"Model id not found in payload!";var a=o({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(a.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i+" ("+r.api_key+")";return console.log("revalidate",r.api_key),P({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){t._payload=i,e(t,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidating done!"),r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}function X(e){return function(t,r){try{var n=t.headers.authorization;if(!n)return Promise.resolve(r.status(401).send("Access denied"));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),a=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(a?e(t,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}var G=function(e,t){var r,n,o,i=void 0===t?{}:t,c=i.variables,l=i.initialData,d=i.pageSize,v=i.preview,f=void 0!==v&&v,m=a(l),p=m[0],h=m[1],g=a(l),w=g[0],E=g[1],y=a(d?{no:1,count:(null==(r=l.pagination)?void 0:r.count)||0,size:d,end:(null==(n=l.pagination)?void 0:n.count)>0&&(null==(o=l.pagination)?void 0:o.count)<=d}:void 0),_=y[0],T=y[1],S=a(),A=S[0],b=S[1],I=a(!1),N=I[0],L=I[1];s(function(){JSON.stringify(l)!==JSON.stringify(p)&&(E(l),h(l))},[l]);var O=u(function(t){return L(!0),C(e,{variables:P({},c,t),preview:f}).then(function(e){var t=H(e,w);return E(t),t}).finally(function(){return L(!1)})},[e,c,w]),R=u(function(){try{if(!_)return Promise.resolve(b(new Error("No page size set!")));var e=_.size,t=_.no*_.size;return Promise.resolve(t>_.count&&_.count>0?_:function(r,n){try{var o=Promise.resolve(O(P({},c.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=_.no+1,o=P({},_,{no:n,count:r,end:n*d>=r});return T(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return b(e),_}))}catch(e){return Promise.reject(e)}},[_,c,d,T,b,O]),H=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return s(function(){!l&&O()},[l,O]),{data:w,error:A,loading:N,loadMore:function(e){return O(e)},nextPage:R,page:_}},z=function(){var e=globalThis.localStorage,t=l(),r=a(void 0!==e?e.getItem("previousRoute"):null),n=r[0],o=r[1];return s(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),o(r))},[t.asPath,e]),s(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),n};function Q(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=a({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),n=r[0],o=r[1],i=c(n),l=u(function(){clearTimeout(i.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,a=t?0:Math.max(0,Math.ceil(window.pageYOffset)),s=!t&&window.innerHeight+a>=r-e,u={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:s,isScrolledUp:a<i.current.scrolledPosition,isScrolledDown:a>i.current.scrolledPosition,scrolledPosition:a,documentHeight:r,viewportHeight:n,timer:i.current.timer};o(u),i.current=P({},u,{timer:setTimeout(function(){return o(P({},u,{isScrolling:!1}))},100)})},[t,e]);return s(function(){return l(),window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}},[l]),n}var V=function(){return s(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},W=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=Y(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):" —")+" %s";/*#__PURE__*/return i.createElement(d,P({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},K=function(e){var t=Y(e);/*#__PURE__*/return i.createElement(v,t)},Y=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,a=e.noindex,s=void 0!==a&&a,u=J({seo:void 0===t?{}:t,site:n}),c=n.globalSeo,l=n.favicon,d=l?l.map(function(e){return P({},e.attributes)}):[],v=F(u["og:image"],u["og:image:width"],u["og:image:height"]);return i||(i=u.description?u.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:v,description:i,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:o,image:u["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:s,nofollow:s,meta:u,title:o,description:i,favicons:d,globalSeo:c,images:v}},F=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},J=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],a=i.filter(function(e){return"title"===e.tag})[0];a&&n&&n&&a.content.startsWith(n.siteName)&&(a=P({},a,{content:n.siteName+" – "+a.content})),i=i.map(function(e){return"title"!==e.tag?e:a});var s={};if(i.forEach(function(e){s[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!s["og:image"]&&null!=o&&o.image){var u=1-(o.image.width-1e3)/o.image.width;s["og:image"]=o.image.url+"?w=1000",s["og:image:width"]=1e3,s["og:image:height"]=Math.round(o.image.height*u)}return s},Z=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances,a=e.allowedElements,s=e.scroll,u=void 0===s||s,c=e.disableBreaks,l=void 0!==c&&c;if(!t)return null;var d=r?h(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return i.createElement(f,{remarkPlugins:l?[m]:[m,g],className:n,children:d,allowedElements:a,components:{a:function(e){/*#__PURE__*/return i.createElement(p,{scroll:u,href:e.href},e.children[0])}}})};export{Z as DatoMarkdown,K as DatoSEO,W as DefaultDatoSEO,H as SEOQuery,C as apiQuery,R as client,k as datoError,G as useApiQuery,z as usePreviousRoute,Q as useScrollInfo,V as useTransitionFix,X as withBasicAuth,j as withGlobalProps,q as withPreview,B as withRevalidate,x as withWebPreviews};
//# sourceMappingURL=index.modern.mjs.map
