var e,r,n=require("@apollo/client/core/core.cjs"),t=require("@apollo/client/link/batch-http/batchHttpLink.js"),o=require("@datocms/cma-client");function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}var i,a,u,c="undefined"==typeof window,l=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",v=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,p=null!=(e=null!=(r=process.env.DATOCMS_ENVIRONMENT)?r:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?e:"main",f=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,h={uri:l,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var n=r?JSON.parse(r.body.toString()):void 0,t=""+(n?Array.isArray(n)?n.map(function(e){return e.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return s({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+t,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},d=function(e,r){void 0===e&&(e=!1);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":"true"};return(e||f)&&(n["X-Include-Drafts"]=!0),p&&(n["X-Environment"]=p),new t.BatchHttpLink(s({},h,{headers:n}))},A=d(!1,v),m=d(!0,v),E=new n.ApolloClient({link:A,cache:new n.InMemoryCache,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),P=n.gql(i||(a=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],u||(u=a.slice(0)),a.raw=u,i=a)),T=function(e,r,n){try{var t,o,i=s({},S,n),a=r.headers;return Promise.resolve(_(e,null!=(t=i.origin)&&t)).then(function(n){var t=function(e,r){"Vary"===r?a.append(r,e):a.set(r,e)};if(!n)return r;n.forEach(t),i.credentials&&a.set("Access-Control-Allow-Credentials","true");var s=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return s&&a.set("Access-Control-Expose-Headers",s),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,a.set("Access-Control-Allow-Methods",o)),function(e,r){var n=new Headers;return r?Array.isArray(r)&&(r=r.join(",")):(r=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),r&&n.set("Access-Control-Allow-Headers",r),n}(e,i.allowedHeaders).forEach(t),"number"==typeof i.maxAge&&a.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?r:(a.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:a}))):r})}catch(e){return Promise.reject(e)}},_=function(e,r){try{var n=function(e){if(e)return function(e,r){var n=new Headers;return"*"===r?n.set("Access-Control-Allow-Origin","*"):"string"==typeof r?(n.set("Access-Control-Allow-Origin",r),n.append("Vary","Origin")):(w(null!=e?e:"",r)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(t,e)},t=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof r?Promise.resolve("function"==typeof r?r(t,e):r).then(n):n("function"==typeof r?r(t,e):r))}catch(e){return Promise.reject(e)}},S={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function w(e,r){return Array.isArray(r)?r.some(function(r){return w(e,r)}):"string"==typeof r?e===r:r instanceof RegExp?r.test(e):!!r}function g(e,r){return function(n,t){try{if("OPTIONS"===n.method)return Promise.resolve(e(n,t));var o=n.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!o||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(t.status(401).send("Access denied"));var s=o.split(" ")[1],i=Buffer.from(s,"base64").toString().split(":"),a=(null==r?void 0:r.username)||process.env.BASIC_AUTH_USER,u=(null==r?void 0:r.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i[0]===a&&i[1]===u?e(n,t):t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function y(e,r){try{var n=e()}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}var C=g(function(e,r){try{if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(r.status(500).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(r.status(500).send("DATOCMS_API_TOKEN not set in .env"));var n=e.query.max?parseInt(e.query.max):1,t="auto-backup-",s=o.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(s.environments.list()).then(function(e){var o,i,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,r){return e.id.replace(t,"")>r.id.replace(t,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(o=null==(i=a[0])?void 0:i.id)?o:"none"),console.log("Max backups: ",n),console.log("Creating backup...",u),y(function(){return Promise.resolve(s.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!1,force:!0})).then(function(){function e(){return console.log("Backup done!"),r.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var t=0,o=function(e,r,n){for(var t;;){var o=e();if(R(o)&&(o=o.v),!o)return s;if(o.then){t=0;break}var s=n();if(s&&s.then){if(!R(s)){t=1;break}s=s.s}if(r){var i=r();if(i&&i.then&&!R(i)){t=2;break}}}var a=new O,u=I.bind(null,a,2);return(0===t?o.then(l):1===t?s.then(c):i.then(v)).then(void 0,u),a;function c(t){s=t;do{if(r&&(i=r())&&i.then&&!R(i))return void i.then(v).then(void 0,u);if(!(o=e())||R(o)&&!o.v)return void I(a,1,s);if(o.then)return void o.then(l).then(void 0,u);R(s=n())&&(s=s.v)}while(!s||!s.then);s.then(c).then(void 0,u)}function l(e){e?(s=n())&&s.then?s.then(c).then(void 0,u):c(s):I(a,1,s)}function v(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):I(a,1,s)}}(function(){return t<a.reverse().slice(n-1).length},function(){return t++},function(){var e=y(function(){return console.log("Deleting old backup...",a[t].id),Promise.resolve(s.environments.destroy(a[t].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return o&&o.then?o.then(e):e()})},function(e){return console.error(e),r.status(500).send("Backup failed: "+e.message)})})}catch(e){return Promise.reject(e)}});function I(e,r,n){if(!e.s){if(n instanceof O){if(!n.s)return void(n.o=I.bind(null,e,r));1&r&&(r=n.s),n=n.v}if(n&&n.then)return void n.then(I.bind(null,e,r),I.bind(null,e,2));e.s=r,e.v=n;const t=e.o;t&&t(e)}}var O=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,n){var t=new e,o=this.s;if(o){var s=1&o?r:n;if(s){try{I(t,1,s(this.v))}catch(e){I(t,2,e)}return t}return this}return this.o=function(e){try{var o=e.v;1&e.s?I(t,1,r?r(o):o):n?I(t,1,n(o)):I(t,2,o)}catch(e){I(t,2,e)}},t},e}();function R(e){return e instanceof O&&1&e.s}exports.withBackup=C,exports.withBasicAuth=g,exports.withBasicAuthEdge=function(e,r){return function(n,t){try{if("OPTIONS"===n.method)return Promise.resolve(e(n,t));var o=n.headers.get("authorization");if(!o)return Promise.resolve(new Response("Access denied",{status:401}));var s=o.split(" ")[1],i=Buffer.from(s,"base64").toString().split(":"),a=(null==r?void 0:r.username)||process.env.BASIC_AUTH_USER,u=(null==r?void 0:r.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i[0]===a&&i[1]===u?e(n,t):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},exports.withGlobalProps=function(e,r){var t,o=parseInt(process.env.REVALIDATE_TIME),i=[P];return e.query&&i.push(e.query),e.queries&&i.push.apply(i,e.queries),e.seo&&i.push(n.gql("query GetSEO{\n    seo: "+e.seo.model+" "+((t=e.seo.id)?'( filter: { id: { eq: "'+t+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var n=r||{},t=n.variables,o=n.preview,i=void 0!==o&&o,a=n.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!v&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,n){try{var o=function(){E.setLink(a?d(i,a):i?m:A);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var n=Array.isArray(t)&&t.length>r-1?t[r]:t||{};return E.query({query:e,variables:n})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var n={};return e.forEach(function(e){return n=s({},n,null==e?void 0:e.data)}),n})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(i,{preview:e.preview})).then(function(n){return r?Promise.resolve(r({context:e,props:s({},n),revalidate:o})):{props:s({},n),context:e,revalidate:o}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,r){try{var n;if("GET"===e.method&&null!=(n=e.query)&&n.ping)return Promise.resolve(r.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(r.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(r.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(r.status(500).json({message:"Invalid slug"}));var t=e.query.slug,o=t?t.startsWith("/")?t:"/"+t:"/";try{r.setPreviewData({},{maxAge:3}),r.writeHead(307,{Location:o}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(r,n){try{var t;if("GET"===r.method&&null!=(t=r.query)&&t.ping)return Promise.resolve(n.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var r=e.headers.authorization;if(!r)return!0;var n=r.split(" ")[1],t=Buffer.from(n,"base64").toString().split(":");return t[0]===process.env.BASIC_AUTH_USER&&t[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(n.status(401).send("Access denied"));var o=r.body;if(!o||!o.entity)throw"Payload is empty";return Promise.resolve(function(e){try{var r=e.entity,n=e.related_entities.find(function(e){var n,t,o;return e.id===(null==(n=r.relationships)||null==(t=n.item_type)||null==(o=t.data)?void 0:o.id)});if(!n)throw new Error("Model not found in payload");return Promise.resolve(s({},r.attributes,{model:n.attributes}))}catch(e){return Promise.reject(e)}}(o)).then(function(r){e(r,function(e){try{return Promise.resolve(function(t,o){try{var s=function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){var t=null!=r&&r.updated_at?(new Date).getTime()-new Date(r.updated_at).getTime():null;return console.log("revalidate"+(t?" ("+t+"ms)":""),e),n.json({revalidated:!0,paths:e})})}()}catch(e){return o(e)}return s&&s.then?s.then(void 0,o):s}(0,function(r){return console.log("Error revalidating",e),console.log(r),n.json({revalidated:!1,err:r})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviews=function(e){return function(r,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");if(n.setHeader("Access-Control-Allow-Origin","*"),n.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),n.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),n.setHeader("Content-Type","application/json"),"OPTIONS"===r.method)return Promise.resolve(n.status(200).send("ok"));if(!r.body)throw new Error("No body found in request");var t=[];return Promise.resolve(e(r.body)).then(function(e){var r,o=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(r=e)?void 0:r.startsWith("https://")){var s=new URL(e);o=s.origin,e=s.pathname}return e&&(t.push({label:"Live",url:""+o+e}),t.push({label:"Preview",url:o+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),n.status(200).json({previewLinks:t})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviewsEdge=function(e){var r={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(n,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");return"OPTIONS"===n.method?Promise.resolve(T(n,new Response("ok",{status:200}),r)):Promise.resolve(n.json()).then(function(t){if(!t)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(t)).then(function(e){var t,s=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(t=e)?void 0:t.startsWith("https://")){var i=new URL(e);s=i.origin,e=i.pathname}return e&&(o.push({label:"Live",url:""+s+e}),o.push({label:"Preview",url:s+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),T(n,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),r)})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
