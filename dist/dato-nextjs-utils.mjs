import{ApolloClient as e,InMemoryCache as t,gql as r}from"@apollo/client";import{BatchHttpLink as n}from"@apollo/client/link/batch-http";import{useRouter as o}from"next/router";import{useState as i,useEffect as a,useRef as s,useCallback as u}from"react";import{buildClient as c}from"@datocms/cma-client-node";import l from"react-markdown";import m from"remark-gfm";import d from"next/link";import f from"markdown-truncate";import v from"remark-breaks";import{NextSeo as p}from"next-seo";var g={__proto__:null,isServer:"undefined"==typeof window};function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}var y="undefined"==typeof window,P=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",b=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,E={uri:P,fetch:process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return w({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:"Bearer "+b}},_=new n(E),A=new n(w({},E,{headers:w({},E.headers,{"X-Include-Drafts":!0})})),S=new e({link:_,cache:new t,ssrMode:y,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),T=function(e){return r("query GetSEO {seo: "+e+" {id tags: _seoMetaTags {attributes content tag}}}")},I=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o;if(null===e)throw new Error("Invalid query! Query is empty");if(!b)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){S.setLink(i?A:_);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return S.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=w({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},N=function(){var e=globalThis.sessionStorage,t=o(),r=i(void 0!==e?e.getItem("previousRoute"):null),n=r[0],s=r[1];return a(function(){var r=e.getItem("currentRoute");r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),s(r))},[t.asPath,e]),a(function(){var t=function(t){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)}}),n};function H(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=i({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),n=r[0],o=r[1],c=s(n),l=u(function(){clearTimeout(c.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,i=t?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!t&&window.innerHeight+i>=r-e,s={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:i<c.current.scrolledPosition,isScrolledDown:i>c.current.scrolledPosition,scrolledPosition:i,documentHeight:r,viewportHeight:n,timer:c.current.timer};o(s),c.current=w({},s,{timer:setTimeout(function(){return o(w({},s,{isScrolling:!1}))},100)})},[t,e]);return a(function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}},[l]),n}var k,x=function(){return a(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};function L(e){return function(t,r){try{var n;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var o=null==(n=t.body)?void 0:n.entity;if(!o)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,n,o=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(n=r.data)?void 0:n.id;if(!o)throw"Model id not found in payload!";console.log("resolve modelId",o);var i=c({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===o});return Promise.resolve(i.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+o;return console.log("revalidate",r.api_key),w({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(o)).then(function(t){e(t,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidating done!"),r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}function j(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[R];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(T(e.seo)),function(e){try{return Promise.resolve(I(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:w({},n),revalidate:r})):{props:w({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}}var q,O,R=r(k||(q=["\n  site: _site {\n    favicon: faviconMetaTags {\n    attributes\n    content\n    tag\n  }\n  globalSeo {\n    facebookPageUrl\n    siteName\n    titleSuffix\n    twitterAccount\n    fallbackSeo {\n      description\n      title\n      twitterCard\n      image {\n        id\n        title\n        width\n        responsiveImage {\n          alt\n          aspectRatio\n          base64\n          bgColor\n          height\n          sizes\n          src\n          srcSet\n          webpSrcSet\n          title\n          width\n        }\n      }\n    }\n  }\n}\n"],O||(O=q.slice(0)),q.raw=O,k=q)),C=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},D=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances;if(!t)return null;var i=r?f(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;return h(l,{remarkPlugins:[m,v],className:n,children:i,components:{a:function(e){return h(d,{scroll:!1,href:e.href,prefetch:!1},h("a",null,e.children[0]))}}})},M=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.pathname,i=e.title,a=e.subtitle,s=e.description,u=e.noindex,c=void 0!==u&&u,l=B({seo:void 0===t?{}:t,site:n,pathname:o}),m=n.globalSeo,d=n.favicon,f=d?d.map(function(e){return w({},e.attributes)}):[],v=U(l["og:image"],l["og:image:width"],l["og:image:height"]),g=""+process.env.NEXT_PUBLIC_SITE_URL+(o||"");return i=(i=i||(m?null==m?void 0:m.siteName:"Site title"))+" "+(null!=m&&m.titleSuffix?" "+(null==m?void 0:m.titleSuffix):"")+(a?" "+a:""),s=s||(l.description?l.description:m?null==m?void 0:m.fallbackSeo.description:"Site description"),h(p,{title:i,description:s,canonical:g,openGraph:{url:g,title:i,description:s,images:v,locale:l["og:locale"],type:l["og:type"],site_name:l["og:site_name"]},twitter:{title:i,image:l["og:image"],handle:null==m?void 0:m.twitterAccount,site:null==m?void 0:m.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:f,noindex:c,nofollow:c})},U=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},B=function(e){var t=e.seo,r=e.site,n=e.pathname;if(!t||!r)return[];var o=(r||{}).globalSeo,i=(o||{}).fallbackSeo,a=(Array.isArray(t)?t:t.tags)||[],s=a.filter(function(e){return"title"===e.tag})[0];s&&o&&("/"===n?s=w({},s,{content:o.siteName}):o&&s.content.startsWith(o.siteName)&&(s=w({},s,{content:o.siteName+" – "+s.content}))),a=a.map(function(e){return"title"!==e.tag?e:s});var u={};if(a.forEach(function(e){u[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!u["og:image"]&&null!=i&&i.image){var c=1-(i.image.width-1e3)/i.image.width;u["og:image"]=i.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(i.image.height*c)}return u};export{M as DatoSEO,D as Markdown,T as SEOQuery,I as apiQuery,N as usePreviousRoute,H as useScrollInfo,x as useTransitionFix,g as utils,j as withGlobalProps,C as withPreview,L as withRevalidate};
//# sourceMappingURL=dato-nextjs-utils.mjs.map
