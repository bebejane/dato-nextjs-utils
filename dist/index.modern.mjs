import{ApolloClient as e,InMemoryCache as r,gql as t}from"@apollo/client/core/core.cjs";import{BatchHttpLink as n}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import{useState as i,useRef as s,useCallback as a,useEffect as c}from"react";function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}var l,d="undefined"==typeof window,f=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",m=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,h={uri:f,fetch:process.env.LOG_GRAPHQL?function(e,r){try{var t=r?JSON.parse(r.body.toString()):void 0,n=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return u({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:"Bearer "+m}},v=new n(h),p=new n(u({},h,{headers:u({},h.headers,{"X-Include-Drafts":!0})})),g=new e({link:v,cache:new r,ssrMode:d,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),w=function(e){return t("query GetSEO {seo: "+e+" {id tags: _seoMetaTags {attributes content tag}}}")},P=function(e,r){try{var t=r||{},n=t.variables,o=t.preview,i=void 0!==o&&o;if(null===e)throw new Error("Invalid query! Query is empty");if(!m)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,t){try{var o=function(){g.setLink(i?p:v);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var t=Array.isArray(n)&&n.length>r-1?n[r]:n||{};return g.query({query:e,variables:t})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var t={};return e.forEach(function(e){return t=u({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}};function y(e,r){var t=parseInt(process.env.REVALIDATE_TIME),n=[_];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(w(e.seo)),function(e){try{return Promise.resolve(P(n,{preview:e.preview})).then(function(n){return r?Promise.resolve(r({context:e,props:u({},n),revalidate:t})):{props:u({},n),context:e,revalidate:t}})}catch(e){return Promise.reject(e)}}}var E,A,_=t(l||(E=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],A||(A=E.slice(0)),E.raw=A,l=E)),b=function(e,r){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var t=e.query.slug;try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:t||"/"}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function S(e){return function(r,t){try{var n;if(!function(e){var r=e.headers.authorization;if(!r)return!0;var t=r.split(" ")[1],n=Buffer.from(t,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(t.status(401).send("Access denied"));var i=null==(n=r.body)?void 0:n.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var r,t,n,i=null==e||null==(r=e.relationships)||null==(t=r.item_type)||null==(n=t.data)?void 0:n.id;if(!i)throw"Model id not found in payload!";console.log("resolve modelId",i);var s=o({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(s.itemTypes.list()).then(function(r){var t=r.find(function(e){return e.id===i});return Promise.resolve(s.items.list({filter:{type:t.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var r=e[0];if(!r)throw"No record found with modelId: "+i;return console.log("revalidate",t.api_key),u({},r,{model:t})})})}catch(e){return Promise.reject(e)}}(i)).then(function(r){e(r,function(e){try{return Promise.resolve(function(r,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return t.revalidate(e)}))).then(function(){return console.log("revalidating done!"),t.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),t.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}function T(e){void 0===e&&(e=0);var r="undefined"==typeof window,t=i({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:r?0:window.pageYOffset,documentHeight:r?0:document.documentElement.offsetHeight,viewportHeight:r?0:window.innerHeight,timer:null}),n=t[0],o=t[1],l=s(n),d=a(function(){clearTimeout(l.current.timer);var t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=r?0:window.innerHeight,i=r?0:Math.max(0,Math.ceil(window.pageYOffset)),s=!r&&window.innerHeight+i>=t-e,a={isScrolling:!0,isPageTop:!!r||window.pageYOffset<=0,isPageBottom:s,isScrolledUp:i<l.current.scrolledPosition,isScrolledDown:i>l.current.scrolledPosition,scrolledPosition:i,documentHeight:t,viewportHeight:n,timer:l.current.timer};o(a),l.current=u({},a,{timer:setTimeout(function(){return o(u({},a,{isScrolling:!1}))},100)})},[r,e]);return c(function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}},[d]),n}export{w as SEOQuery,P as apiQuery,T as useScrollInfo,y as withGlobalProps,b as withPreview,S as withRevalidate};
//# sourceMappingURL=index.modern.mjs.map
