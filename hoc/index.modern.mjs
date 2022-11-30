import{ApolloClient as e,InMemoryCache as r,gql as n}from"@apollo/client/core/core.cjs";import{BatchHttpLink as t}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}var s,a="undefined"==typeof window,c=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",u=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,l=process.env.GRAPHQL_ENVIRONMENT,v={uri:c,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var n=r?JSON.parse(r.body.toString()):void 0,t=""+(n?Array.isArray(n)?n.map(function(e){return e.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return i({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+t,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},f=function(e,r){void 0===e&&(e=!1),void 0===r&&(r=u);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return e&&(n["X-Include-Drafts"]=!0),l&&(n["X-Environment"]=l),new t(i({},v,{headers:n}))},p=f(!1,u),d=f(!0,u),h=new e({link:p,cache:new r,ssrMode:a,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});function m(e,r){var t,o=parseInt(process.env.REVALIDATE_TIME),s=[g];return e.query&&s.push(e.query),e.queries&&s.push.apply(s,e.queries),e.seo&&s.push(n("query GetSEO{\n    seo: "+e.seo.model+" "+((t=e.seo.id)?'( filter: { id: { eq: "'+t+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var n=r||{},t=n.variables,o=n.preview,s=void 0!==o&&o,a=n.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!u&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,n){try{var o=function(){h.setLink(a?f(s,a):s?d:p);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var n=Array.isArray(t)&&t.length>r-1?t[r]:t||{};return console.log(n),h.query({query:e,variables:n})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var n={};return e.forEach(function(e){return n=i({},n,null==e?void 0:e.data)}),n})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(s,{preview:e.preview})).then(function(n){return r?Promise.resolve(r({context:e,props:i({},n),revalidate:o})):{props:i({},n),context:e,revalidate:o}})}catch(e){return Promise.reject(e)}}}var P,y,g=n(s||(P=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],y||(y=P.slice(0)),P.raw=y,s=P)),A=function(e,r){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var n=e.query.slug;try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:n||"/"}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function _(e){return function(r,n){try{var t;if(!function(e){var r=e.headers.authorization;if(!r)return!0;var n=r.split(" ")[1],t=Buffer.from(n,"base64").toString().split(":");return t[0]===process.env.BASIC_AUTH_USER&&t[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(n.status(401).send("Access denied"));var s=null==(t=r.body)?void 0:t.entity;if(!s)throw"Payload is empty";return Promise.resolve(function(e){try{var r,n,t,s=null==e||null==(r=e.relationships)||null==(n=r.item_type)||null==(t=n.data)?void 0:t.id;if(!s)throw"Model id not found in payload!";console.log("resolve modelId",s);var a=o({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(r){var n=r.find(function(e){return e.id===s});return Promise.resolve(a.items.list({filter:{type:n.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var r=e[0];if(!r)throw"No record found with modelId: "+s;return console.log("revalidate",n.api_key),i({},r,{model:n})})})}catch(e){return Promise.reject(e)}}(s)).then(function(r){e(r,function(e){try{return Promise.resolve(function(r,t){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return console.log("revalidating done!"),n.json({revalidated:!0,paths:e})})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){return console.error(e),n.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}export{m as withGlobalProps,A as withPreview,_ as withRevalidate};
//# sourceMappingURL=index.modern.mjs.map
