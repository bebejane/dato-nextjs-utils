import{ApolloClient as e,InMemoryCache as r,gql as t}from"@apollo/client/core/core.cjs";import{BatchHttpLink as n}from"@apollo/client/link/batch-http/batchHttpLink.js";import{loadEnvConfig as o}from"@next/env";import{buildClient as i}from"@datocms/cma-client";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}o(process.env.PWD);var a,c="undefined"==typeof window,u=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",l=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,v=process.env.GRAPHQL_ENVIRONMENT,f={uri:u,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var t=r?JSON.parse(r.body.toString()):void 0,n=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return s({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},d=function(e,r){void 0===e&&(e=!1),void 0===r&&(r=l);var t={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return e&&(t["X-Include-Drafts"]=!0),v&&(t["X-Environment"]=v),new n(s({},f,{headers:t}))},p=d(!1,l),h=d(!0,l),m=new e({link:p,cache:new r,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});function P(e,r){var n,o=parseInt(process.env.REVALIDATE_TIME),i=[A];return e.query&&i.push(e.query),e.queries&&i.push.apply(i,e.queries),e.seo&&i.push(t("query GetSEO{\n    seo: "+e.seo.model+" "+((n=e.seo.id)?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var t=r||{},n=t.variables,o=t.preview,i=void 0!==o&&o,a=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!l&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,t){try{var o=function(){m.setLink(a?d(i,a):i?h:p);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var t=Array.isArray(n)&&n.length>r-1?n[r]:n||{};return m.query({query:e,variables:t})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var t={};return e.forEach(function(e){return t=s({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(i,{preview:e.preview})).then(function(t){return r?Promise.resolve(r({context:e,props:s({},t),revalidate:o})):{props:s({},t),context:e,revalidate:o}})}catch(e){return Promise.reject(e)}}}var y,g,A=t(a||(y=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],g||(g=y.slice(0)),y.raw=g,a=y)),_=function(e,r){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var t=e.query.slug,n=t?t.startsWith("/")?t:"/"+t:"/";try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:n}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function w(e){return function(r,t){try{var n;if(!function(e){var r=e.headers.authorization;if(!r)return!0;var t=r.split(" ")[1],n=Buffer.from(t,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(t.status(401).send("Access denied"));var o=null==(n=r.body)?void 0:n.entity;if(!o)throw"Payload is empty";return Promise.resolve(function(e){try{var r,t,n,o=null==e||null==(r=e.relationships)||null==(t=r.item_type)||null==(n=t.data)?void 0:n.id;if(!o)throw"Model id not found in payload!";console.log("resolve modelId",o);var a=i({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(r){var t=r.find(function(e){return e.id===o});return Promise.resolve(a.items.list({filter:{type:t.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var r=e[0];if(!r)throw"No record found with modelId: "+o;return console.log("revalidate",t.api_key),s({},r,{model:t})})})}catch(e){return Promise.reject(e)}}(o)).then(function(r){e(r,function(e){try{return Promise.resolve(function(r,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return t.revalidate(e)}))).then(function(){return console.log("revalidating done!"),t.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),t.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}function E(e){return function(r,t){try{var n=r.headers.authorization;if(!n)return Promise.resolve(t.status(401).send("Access denied"));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(r,t):t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}export{E as withBasicAuth,P as withGlobalProps,_ as withPreview,w as withRevalidate};
//# sourceMappingURL=index.modern.mjs.map
