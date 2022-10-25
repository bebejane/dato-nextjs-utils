import{ApolloClient as e,InMemoryCache as t,gql as r}from"@apollo/client/core/core.cjs";import{BatchHttpLink as n}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import{useState as i,useCallback as a,useEffect as s,useRef as u}from"react";import{useRouter as c}from"next/router.js";import l from"react-markdown";import d from"markdown-truncate";import{NextSeo as f}from"next-seo";function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}var v,p="undefined"==typeof window,g=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",w=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,y={uri:g,fetch:process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return m({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:"Bearer "+w}},P=new n(y),b=new n(m({},y,{headers:m({},y.headers,{"X-Include-Drafts":!0})})),E=new e({link:P,cache:new t,ssrMode:p,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),A=function(e){return r("query GetSEO {seo: "+e+" {id tags: _seoMetaTags {attributes content tag}}}")},S=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o;if(null===e)throw new Error("Invalid query! Query is empty");if(!w)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){E.setLink(i?b:P);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return E.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=m({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}};function _(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[N];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(A(e.seo)),function(e){try{return Promise.resolve(S(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:m({},n),revalidate:r})):{props:m({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}}var I,T,N=r(v||(I=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],T||(T=I.slice(0)),I.raw=T,v=I)),j=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function H(e){return function(t,r){try{var n;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var i=null==(n=t.body)?void 0:n.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,n,i=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(n=r.data)?void 0:n.id;if(!i)throw"Model id not found in payload!";console.log("resolve modelId",i);var a=o({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(a.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i;return console.log("revalidate",r.api_key),m({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){e(t,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidating done!"),r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}var L=function(e,t){var r=void 0===t?{}:t,n=r.variables,o=r.initialData,u=r.pageSize,c=i(o),l=c[0],d=c[1],f=i(u?{no:1,count:0,size:u,end:!1}:void 0),v=f[0],h=f[1],p=i(),g=p[0],w=p[1],y=i(!1),P=y[0],b=y[1],E=a(function(t){return b(!0),S(e,{variables:t||n}).then(function(e){var t,r,n=(t=e,(r=l)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return d(n),n}).catch(function(e){return w(e)}).finally(function(){return b(!1)})},[e,n,l]);return s(function(){var e;o?(null==(e=o.pagination)?void 0:e.count)<=u&&h(function(e){return m({},e,{end:!0})}):E()},[o,E,h,u]),{data:l,error:g,loading:P,loadMore:function(e){return E(e)},nextPage:function(){try{return v?Promise.resolve(E(m({},n,{first:v.size,skip:v.no*v.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=v.no+1,o=m({},v,{no:n,count:r,end:n*u>=r});return h(o),o}):Promise.resolve(w(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:v}},k=function(){var e=globalThis.sessionStorage,t=c(),r=i(void 0!==e?e.getItem("previousRoute"):null),n=r[0],o=r[1];return s(function(){var r=e.getItem("currentRoute");r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),o(r))},[t.asPath,e]),s(function(){var t=function(t){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)}}),n};function O(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=i({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),n=r[0],o=r[1],c=u(n),l=a(function(){clearTimeout(c.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,i=t?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!t&&window.innerHeight+i>=r-e,s={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:i<c.current.scrolledPosition,isScrolledDown:i>c.current.scrolledPosition,scrolledPosition:i,documentHeight:r,viewportHeight:n,timer:c.current.timer};o(s),c.current=m({},s,{timer:setTimeout(function(){return o(m({},s,{isScrolling:!1}))},100)})},[t,e]);return s(function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}},[l]),n}var q=function(){return s(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},x=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances;if(!t)return null;var i=r?d(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;return h(l,{className:n,children:i})},R=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.pathname,i=e.title,a=e.subtitle,s=e.description,u=e.noindex,c=void 0!==u&&u,l=M({seo:void 0===t?{}:t,site:n,pathname:o}),d=n.globalSeo,v=n.favicon,p=v?v.map(function(e){return m({},e.attributes)}):[],g=D(l["og:image"],l["og:image:width"],l["og:image:height"]),w=""+process.env.NEXT_PUBLIC_SITE_URL+(o||"");return i=(i=i||(d?null==d?void 0:d.siteName:"Site title"))+" "+(null!=d&&d.titleSuffix?" "+(null==d?void 0:d.titleSuffix):"")+(a?" "+a:""),s=s||(l.description?l.description:d?null==d?void 0:d.fallbackSeo.description:"Site description"),h(f,{title:i,description:s,canonical:w,openGraph:{url:w,title:i,description:s,images:g,locale:l["og:locale"],type:l["og:type"],site_name:l["og:site_name"]},twitter:{title:i,image:l["og:image"],handle:null==d?void 0:d.twitterAccount,site:null==d?void 0:d.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:p,noindex:c,nofollow:c})},D=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},M=function(e){var t=e.seo,r=e.site,n=e.pathname;if(!t||!r)return[];var o=(r||{}).globalSeo,i=(o||{}).fallbackSeo,a=(Array.isArray(t)?t:t.tags)||[],s=a.filter(function(e){return"title"===e.tag})[0];s&&o&&("/"===n?s=m({},s,{content:o.siteName}):o&&s.content.startsWith(o.siteName)&&(s=m({},s,{content:o.siteName+" – "+s.content}))),a=a.map(function(e){return"title"!==e.tag?e:s});var u={};if(a.forEach(function(e){u[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!u["og:image"]&&null!=i&&i.image){var c=1-(i.image.width-1e3)/i.image.width;u["og:image"]=i.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(i.image.height*c)}return u};export{x as DatoMarkdown,R as DatoSEO,A as SEOQuery,S as apiQuery,L as useApiQuery,k as usePreviousRoute,O as useScrollInfo,q as useTransitionFix,_ as withGlobalProps,j as withPreview,H as withRevalidate};
//# sourceMappingURL=index.modern.mjs.map
