!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client"],r):r((e||self).hoc={},e.core_cjs,e.batchHttpLink_js,e.cmaClient)}(this,function(e,r,t,n){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}var i,s,a,c="undefined"==typeof window,l=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",u=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,v=process.env.GRAPHQL_ENVIRONMENT,f={uri:l,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var t=r?JSON.parse(r.body.toString()):void 0,n=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return o({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},d=function(e,r){void 0===e&&(e=!1),void 0===r&&(r=u);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return e&&(n["X-Include-Drafts"]=!0),v&&(n["X-Environment"]=v),new t.BatchHttpLink(o({},f,{headers:n}))},p=d(!1,u),h=d(!0,u),m=new r.ApolloClient({link:p,cache:new r.InMemoryCache,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),P=r.gql(i||(s=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],a||(a=s.slice(0)),s.raw=a,i=s));e.withGlobalProps=function(e,t){var n,i=parseInt(process.env.REVALIDATE_TIME),s=[P];return e.query&&s.push(e.query),e.queries&&s.push.apply(s,e.queries),e.seo&&s.push(r.gql("query GetSEO{\n    seo: "+e.seo.model+" "+((n=e.seo.id)?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var t=r||{},n=t.variables,i=t.preview,s=void 0!==i&&i,a=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!u&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,t){try{var i=function(){m.setLink(a?d(s,a):s?h:p);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var t=Array.isArray(n)&&n.length>r-1?n[r]:n||{};return m.query({query:e,variables:t})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var t={};return e.forEach(function(e){return t=o({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return i&&i.then?i.then(void 0,t):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(s,{preview:e.preview})).then(function(r){return t?Promise.resolve(t({context:e,props:o({},r),revalidate:i})):{props:o({},r),context:e,revalidate:i}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,r){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var t=e.query.slug;try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:t||"/"}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(r,t){try{var i;if(!function(e){var r=e.headers.authorization;if(!r)return!0;var t=r.split(" ")[1],n=Buffer.from(t,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(t.status(401).send("Access denied"));var s=null==(i=r.body)?void 0:i.entity;if(!s)throw"Payload is empty";return Promise.resolve(function(e){try{var r,t,i,s=null==e||null==(r=e.relationships)||null==(t=r.item_type)||null==(i=t.data)?void 0:i.id;if(!s)throw"Model id not found in payload!";console.log("resolve modelId",s);var a=n.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(r){var t=r.find(function(e){return e.id===s});return Promise.resolve(a.items.list({filter:{type:t.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var r=e[0];if(!r)throw"No record found with modelId: "+s;return console.log("revalidate",t.api_key),o({},r,{model:t})})})}catch(e){return Promise.reject(e)}}(s)).then(function(r){e(r,function(e){try{return Promise.resolve(function(r,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return t.revalidate(e)}))).then(function(){return console.log("revalidating done!"),t.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),t.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
