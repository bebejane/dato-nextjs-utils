var e=require("@apollo/client/core/core.cjs"),r=require("@apollo/client/link/batch-http/batchHttpLink.js"),t=require("@datocms/cma-client");function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}var o,i,s,a="undefined"==typeof window,c=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",u=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,l=process.env.GRAPHQL_ENVIRONMENT,v={uri:c,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var t=r?JSON.parse(r.body.toString()):void 0,o=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return n({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+o,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},h=function(e,t){void 0===e&&(e=!1),void 0===t&&(t=u);var o={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return e&&(o["X-Include-Drafts"]=!0),l&&(o["X-Environment"]=l),new r.BatchHttpLink(n({},v,{headers:o}))},f=h(!1,u),p=h(!0,u),d=new e.ApolloClient({link:f,cache:new e.InMemoryCache,ssrMode:a,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),m=e.gql(o||(i=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],s||(s=i.slice(0)),i.raw=s,o=i));exports.withBasicAuth=function(e){return function(r,t){try{var n=r.headers.authorization.split(" ")[1],o=Buffer.from(n,"base64").toString().split(":"),i=o[0]===process.env.BASIC_AUTH_USER&&o[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i?e(r,t):t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}},exports.withGlobalProps=function(r,t){var o,i=parseInt(process.env.REVALIDATE_TIME),s=[m];return r.query&&s.push(r.query),r.queries&&s.push.apply(s,r.queries),r.seo&&s.push(e.gql("query GetSEO{\n    seo: "+r.seo.model+" "+((o=r.seo.id)?'( filter: { id: { eq: "'+o+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var t=r||{},o=t.variables,i=t.preview,s=void 0!==i&&i,a=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!u&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,t){try{var i=function(){d.setLink(a?h(s,a):s?p:f);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var t=Array.isArray(o)&&o.length>r-1?o[r]:o||{};return d.query({query:e,variables:t})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var t={};return e.forEach(function(e){return t=n({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return i&&i.then?i.then(void 0,t):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(s,{preview:e.preview})).then(function(r){return t?Promise.resolve(t({context:e,props:n({},r),revalidate:i})):{props:n({},r),context:e,revalidate:i}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,r){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var t=e.query.slug,n=t?t.startsWith("/")?t:"/"+t:"/";try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:n}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(r,o){try{var i;if(!function(e){var r=e.headers.authorization;if(!r)return!0;var t=r.split(" ")[1],n=Buffer.from(t,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(o.status(401).send("Access denied"));var s=null==(i=r.body)?void 0:i.entity;if(!s)throw"Payload is empty";return Promise.resolve(function(e){try{var r,o,i,s=null==e||null==(r=e.relationships)||null==(o=r.item_type)||null==(i=o.data)?void 0:i.id;if(!s)throw"Model id not found in payload!";console.log("resolve modelId",s);var a=t.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(r){var t=r.find(function(e){return e.id===s});return Promise.resolve(a.items.list({filter:{type:t.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var r=e[0];if(!r)throw"No record found with modelId: "+s;return console.log("revalidate",t.api_key),n({},r,{model:t})})})}catch(e){return Promise.reject(e)}}(s)).then(function(r){e(r,function(e){try{return Promise.resolve(function(r,t){try{var n=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return o.revalidate(e)}))).then(function(){return console.log("revalidating done!"),o.json({revalidated:!0,paths:e})})}()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}(0,function(e){return console.error(e),o.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
