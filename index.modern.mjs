import{ApolloClient as e,InMemoryCache as t,gql as r}from"@apollo/client/core/core.cjs";import{BatchHttpLink as n}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import i,{useState as a,useCallback as s,useEffect as c,useRef as u}from"react";import{useRouter as l}from"next/router.js";import{DefaultSeo as m,NextSeo as d}from"next-seo";import f from"react-markdown";import v from"remark-gfm";import h from"next/link.js";import p from"markdown-truncate";import g from"remark-breaks";function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}var P,y="undefined"==typeof window,E=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",b=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,_=process.env.GRAPHQL_ENVIRONMENT,A={uri:E,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return w({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},T=function(e,t){void 0===e&&(e=!1),void 0===t&&(t=b);var r={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return e&&(r["X-Include-Drafts"]=!0),_&&(r["X-Environment"]=_),new n(w({},A,{headers:r}))},S=T(!1,b),I=T(!0,b),N=new e({link:S,cache:new t,ssrMode:y,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),L=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!b&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){N.setLink(a?T(i,a):i?I:S);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return console.log(r),N.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=w({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},k=function(e,t){return r("query GetSEO{\n    seo: "+e+" "+(t?'( filter: { id: { eq: "'+t+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},H=function(e){return console.error(e),e.message||e};function j(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[x];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(k(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(L(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:w({},n),revalidate:r})):{props:w({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}}var R,O,x=r(P||(R=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],O||(O=R.slice(0)),R.raw=O,P=R)),q=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function U(e){return function(t,r){try{var n;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var i=null==(n=t.body)?void 0:n.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,n,i=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(n=r.data)?void 0:n.id;if(!i)throw"Model id not found in payload!";console.log("resolve modelId",i);var a=o({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(a.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i;return console.log("revalidate",r.api_key),w({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){e(t,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidating done!"),r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}var C=function(e,t){var r,n,o=void 0===t?{}:t,i=o.variables,u=o.initialData,l=o.pageSize;console.log("useApiQuery");var m=a(u),d=m[0],f=m[1],v=a(l?{no:1,count:0,size:l,end:(null==(r=u.pagination)?void 0:r.count)>0&&(null==(n=u.pagination)?void 0:n.count)<=l}:void 0),h=v[0],p=v[1],g=a(),P=g[0],y=g[1],E=a(!1),b=E[0],_=E[1],A=s(function(t){return _(!0),L(e,{variables:t||i}).then(function(e){var t,r,n=(t=e,(r=d)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return f(n),n}).catch(function(e){return y(e)}).finally(function(){return _(!1)})},[e,i,d]);return c(function(){!u&&A()},[u,A]),{data:d,error:P,loading:b,loadMore:function(e){return A(e)},nextPage:function(){try{return h?Promise.resolve(A(w({},i,{first:h.size,skip:h.no*h.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=h.no+1,o=w({},h,{no:n,count:r,end:n*l>=r});return p(o),o}):Promise.resolve(y(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:h}},M=function(){var e=globalThis.localStorage,t=l(),r=a(void 0!==e?e.getItem("previousRoute"):null),n=r[0],o=r[1];return c(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),o(r))},[t.asPath,e]),c(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),n};function D(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=a({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),n=r[0],o=r[1],i=u(n),l=s(function(){clearTimeout(i.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,a=t?0:Math.max(0,Math.ceil(window.pageYOffset)),s=!t&&window.innerHeight+a>=r-e,c={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:s,isScrolledUp:a<i.current.scrolledPosition,isScrolledDown:a>i.current.scrolledPosition,scrolledPosition:a,documentHeight:r,viewportHeight:n,timer:i.current.timer};o(c),i.current=w({},c,{timer:setTimeout(function(){return o(w({},c,{isScrolling:!1}))},100)})},[t,e]);return c(function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}},[l]),n}var B=function(){return c(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},G=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=X(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):"")+" %s";/*#__PURE__*/return i.createElement(m,w({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},Q=function(e){var t=X(e);/*#__PURE__*/return i.createElement(d,t)},X=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,a=e.noindex,s=void 0!==a&&a,c=K({seo:void 0===t?{}:t,site:n}),u=n.globalSeo,l=n.favicon,m=l?l.map(function(e){return w({},e.attributes)}):[],d=z(c["og:image"],c["og:image:width"],c["og:image:height"]);return i||(i=c.description?c.description:u?null==u?void 0:u.fallbackSeo.description:void 0),{openGraph:{title:o,images:d,description:i,locale:c["og:locale"],type:c["og:type"],site_name:c["og:site_name"]},twitter:{title:o,image:c["og:image"],handle:null==u?void 0:u.twitterAccount,site:null==u?void 0:u.twitterAccount,cardType:"summary_large_image"},noindex:s,nofollow:s,meta:c,title:o,description:i,favicons:m,globalSeo:u,images:d}},z=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},K=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],a=i.filter(function(e){return"title"===e.tag})[0];a&&n&&n&&a.content.startsWith(n.siteName)&&(a=w({},a,{content:n.siteName+" – "+a.content})),i=i.map(function(e){return"title"!==e.tag?e:a});var s={};if(i.forEach(function(e){s[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!s["og:image"]&&null!=o&&o.image){var c=1-(o.image.width-1e3)/o.image.width;s["og:image"]=o.image.url+"?w=1000",s["og:image:width"]=1e3,s["og:image:height"]=Math.round(o.image.height*c)}return s},V=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances,a=e.allowedElements;if(!t)return null;var s=r?p(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return i.createElement(f,{remarkPlugins:[v,g],className:n,children:s,allowedElements:a,components:{a:function(e){/*#__PURE__*/return i.createElement(h,{scroll:!1,href:e.href},/*#__PURE__*/i.createElement("a",null,e.children[0]))}}})};export{V as DatoMarkdown,Q as DatoSEO,G as DefaultDatoSEO,k as SEOQuery,L as apiQuery,N as client,H as datoError,C as useApiQuery,M as usePreviousRoute,D as useScrollInfo,B as useTransitionFix,j as withGlobalProps,q as withPreview,U as withRevalidate};
//# sourceMappingURL=index.modern.mjs.map
