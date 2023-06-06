var e,r,t=require("@apollo/client/core/core.cjs"),n=require("@apollo/client/link/batch-http/batchHttpLink.js"),o=require("@datocms/cma-client");function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}var i,a,u,c="undefined"==typeof window,l=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",p=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,v=null!=(e=null!=(r=process.env.DATOCMS_ENVIRONMENT)?r:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?e:"main",d=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,h={uri:l,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var t=r?JSON.parse(r.body.toString()):void 0,n=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return s({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},f=function(e,r){void 0===e&&(e=!1);var t={Authorization:"Bearer "+r,"X-Exclude-Invalid":"true"};return(e||d)&&(t["X-Include-Drafts"]=!0),v&&(t["X-Environment"]=v),new n.BatchHttpLink(s({},h,{headers:t}))},A=f(!1,p),m=f(!0,p),P=new t.ApolloClient({link:A,cache:new t.InMemoryCache,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),E=t.gql(i||(a=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],u||(u=a.slice(0)),a.raw=u,i=a)),y=function(e,r,t){try{var n,o,i=s({},T,t),a=r.headers;return Promise.resolve(_(e,null!=(n=i.origin)&&n)).then(function(t){var n=function(e,r){"Vary"===r?a.append(r,e):a.set(r,e)};if(!t)return r;t.forEach(n),i.credentials&&a.set("Access-Control-Allow-Credentials","true");var s=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return s&&a.set("Access-Control-Expose-Headers",s),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,a.set("Access-Control-Allow-Methods",o)),function(e,r){var t=new Headers;return r?Array.isArray(r)&&(r=r.join(",")):(r=e.headers.get("Access-Control-Request-Headers"),t.append("Vary","Access-Control-Request-Headers")),r&&t.set("Access-Control-Allow-Headers",r),t}(e,i.allowedHeaders).forEach(n),"number"==typeof i.maxAge&&a.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?r:(a.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:a}))):r})}catch(e){return Promise.reject(e)}},_=function(e,r){try{var t=function(e){if(e)return function(e,r){var t=new Headers;return"*"===r?t.set("Access-Control-Allow-Origin","*"):"string"==typeof r?(t.set("Access-Control-Allow-Origin",r),t.append("Vary","Origin")):(w(null!=e?e:"",r)&&e&&t.set("Access-Control-Allow-Origin",e),t.append("Vary","Origin")),t}(n,e)},n=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof r?Promise.resolve("function"==typeof r?r(n,e):r).then(t):t("function"==typeof r?r(n,e):r))}catch(e){return Promise.reject(e)}},T={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function w(e,r){return Array.isArray(r)?r.some(function(r){return w(e,r)}):"string"==typeof r?e===r:r instanceof RegExp?r.test(e):!!r}exports.withBasicAuth=function(e){return function(r,t){try{var n=r.headers.authorization;if(!n)return Promise.resolve(t.status(401).send("Access denied"));var o=n.split(" ")[1],s=Buffer.from(o,"base64").toString().split(":"),i=s[0]===process.env.BASIC_AUTH_USER&&s[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i?e(r,t):t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}},exports.withBasicAuthEdge=function(e){return function(r,t){try{var n=r.headers.get("authorization");if(!n)return Promise.resolve(new Response("Access denied",{status:401}));var o=n.split(" ")[1],s=Buffer.from(o,"base64").toString().split(":"),i=s[0]===process.env.BASIC_AUTH_USER&&s[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i?e(r,t):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},exports.withGlobalProps=function(e,r){var n,o=parseInt(process.env.REVALIDATE_TIME),i=[E];return e.query&&i.push(e.query),e.queries&&i.push.apply(i,e.queries),e.seo&&i.push(t.gql("query GetSEO{\n    seo: "+e.seo.model+" "+((n=e.seo.id)?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var t=r||{},n=t.variables,o=t.preview,i=void 0!==o&&o,a=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!p&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,t){try{var o=function(){P.setLink(a?f(i,a):i?m:A);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var t=Array.isArray(n)&&n.length>r-1?n[r]:n||{};return P.query({query:e,variables:t})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var t={};return e.forEach(function(e){return t=s({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(i,{preview:e.preview})).then(function(t){return r?Promise.resolve(r({context:e,props:s({},t),revalidate:o})):{props:s({},t),context:e,revalidate:o}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,r){try{var t;if("GET"===e.method&&null!=(t=e.query)&&t.ping)return Promise.resolve(r.status(200).send("pong"));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var n=e.query.slug,o=n?n.startsWith("/")?n:"/"+n:"/";try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:o}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(r,t){try{var n;if("GET"===r.method&&null!=(n=r.query)&&n.ping)return Promise.resolve(t.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var r=e.headers.authorization;if(!r)return!0;var t=r.split(" ")[1],n=Buffer.from(t,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(t.status(401).send("Access denied"));var i=r.body;if(!i||!i.entity)throw"Payload is empty";return Promise.resolve(function(e){try{var r,t,n,i,a=null==e||null==(r=e.entity)||null==(t=r.relationships)||null==(n=t.item_type)||null==(i=n.data)?void 0:i.id,u=null==e?void 0:e.event_type;if(!a)throw"Model id not found in payload!";var c=o.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(c.itemTypes.find(a)).then(function(r){return"delete"===u?s({id:e.entity.id},e.entity.attributes,{model:r}):Promise.resolve(c.items.find(e.entity.id,{version:"current"})).then(function(e){if(!e&&"delete"!==u)throw"No record found with modelId: "+a+" ("+r.api_key+")";return s({},e,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(r){r._payload=i.entity,e(r,function(e){try{return Promise.resolve(function(r,n){try{var o=function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return t.revalidate(e)}))).then(function(){return t.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.log("error when revalidating"),t.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviews=function(e){return function(r,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),t.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),t.setHeader("Content-Type","application/json"),"OPTIONS"===r.method)return Promise.resolve(t.status(200).send("ok"));if(!r.body)throw new Error("No body found in request");var n=r.body;return Promise.resolve(e(n)).then(function(e){var r,o,s=[],i=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(s.push({label:"Live",url:""+i+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(r=n.item)||null==(o=r.meta)?void 0:o.status)&&s.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),t.status(200).json({previewLinks:s})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviewsEdge=function(e){var r={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(t,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");return"OPTIONS"===t.method?Promise.resolve(y(t,new Response("ok",{status:200}),r)):Promise.resolve(t.json()).then(function(n){if(!n)throw new Error("No form data in request body");return Promise.resolve(e(n)).then(function(e){var o,s,i=[],a=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(i.push({label:"Live",url:""+a+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(o=n.item)||null==(s=o.meta)?void 0:s.status)&&i.push({label:"Preview",url:a+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),y(t,new Response(JSON.stringify({previewLinks:i}),{status:200,headers:{"Content-Type":"application/json"}}),r)})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
