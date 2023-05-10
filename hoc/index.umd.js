!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client"],r):r((e||self).hoc={},e.core_cjs,e.batchHttpLink_js,e.cmaClient)}(this,function(e,r,t,n){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}var i,s,a,c,l,u="undefined"==typeof window,v=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",p=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,d=null!=(i=null!=(s=process.env.DATOCMS_ENVIRONMENT)?s:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?i:"main",f=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,h={uri:v,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var t=r?JSON.parse(r.body.toString()):void 0,n=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return o({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},m=function(e,r){void 0===e&&(e=!1);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return(e||f)&&(n["X-Include-Drafts"]=!0),d&&(n["X-Environment"]=d),new t.BatchHttpLink(o({},h,{headers:n}))},P=m(!1,p),_=m(!0,p),y=new r.ApolloClient({link:P,cache:new r.InMemoryCache,ssrMode:u,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),A=r.gql(a||(c=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],l||(l=c.slice(0)),c.raw=l,a=c));e.withBasicAuth=function(e){return function(r,t){try{var n=r.headers.authorization;if(!n)return Promise.resolve(t.status(401).send("Access denied"));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(r,t):t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}},e.withGlobalProps=function(e,t){var n,i=parseInt(process.env.REVALIDATE_TIME),s=[A];return e.query&&s.push(e.query),e.queries&&s.push.apply(s,e.queries),e.seo&&s.push(r.gql("query GetSEO{\n    seo: "+e.seo.model+" "+((n=e.seo.id)?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var t=r||{},n=t.variables,i=t.preview,s=void 0!==i&&i,a=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!p&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,t){try{var i=function(){y.setLink(a?m(s,a):s?_:P);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var t=Array.isArray(n)&&n.length>r-1?n[r]:n||{};return y.query({query:e,variables:t})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var t={};return e.forEach(function(e){return t=o({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return i&&i.then?i.then(void 0,t):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(s,{preview:e.preview})).then(function(r){return t?Promise.resolve(t({context:e,props:o({},r),revalidate:i})):{props:o({},r),context:e,revalidate:i}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,r){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var t=e.query.slug,n=t?t.startsWith("/")?t:"/"+t:"/";try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:n}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(r,t){try{var i;if(!function(e){var r=e.headers.authorization;if(!r)return!0;var t=r.split(" ")[1],n=Buffer.from(t,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(t.status(401).send("Access denied"));var s=null==(i=r.body)?void 0:i.entity;if(!s)throw"Payload is empty";return Promise.resolve(function(e){try{var r,t,i,s=null==e||null==(r=e.relationships)||null==(t=r.item_type)||null==(i=t.data)?void 0:i.id;if(!s)throw"Model id not found in payload!";var a=n.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(r){var t=r.find(function(e){return e.id===s});return Promise.resolve(a.items.list({filter:{type:t.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var r=e[0];if(!r)throw"No record found with modelId: "+s+" ("+t.api_key+")";return console.log("revalidate",t.api_key),o({},r,{model:t})})})}catch(e){return Promise.reject(e)}}(s)).then(function(r){r._payload=s,e(r,function(e){try{return Promise.resolve(function(r,n){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return t.revalidate(e)}))).then(function(){return console.log("revalidating done!"),t.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.error(e),t.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},e.withWebPreviews=function(e){return function(r,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),t.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),t.setHeader("Content-Type","application/json"),"OPTIONS"===r.method)return Promise.resolve(t.status(200).send("ok"));if(!r.body)throw new Error("No body found in request");var n=r.body;return Promise.resolve(e(n)).then(function(e){var r,o,i,s,a=[],c=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(a.push({label:"Live",url:""+c+e}),console.log(n.item),console.log(null==n||null==(r=n.item)||null==(o=r.attributes)?void 0:o.status),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(i=n.item)||null==(s=i.attributes)?void 0:s.status)&&a.push({label:"Preview",url:c+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),t.status(200).json({previewLinks:a})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
