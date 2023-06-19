!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client"],r):r((e||self).hoc={},e.core_cjs,e.batchHttpLink_js,e.cmaClient)}(this,function(e,r,n,t){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}var s,i,u,a,c,l="undefined"==typeof window,v=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",f=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,d=null!=(s=null!=(i=process.env.DATOCMS_ENVIRONMENT)?i:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?s:"main",p=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,h={uri:v,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var n=r?JSON.parse(r.body.toString()):void 0,t=""+(n?Array.isArray(n)?n.map(function(e){return e.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return o({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+t,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},A=function(e,r){void 0===e&&(e=!1);var t={Authorization:"Bearer "+r,"X-Exclude-Invalid":"true"};return(e||p)&&(t["X-Include-Drafts"]=!0),d&&(t["X-Environment"]=d),new n.BatchHttpLink(o({},h,{headers:t}))},m=A(!1,f),P=A(!0,f),_=new r.ApolloClient({link:m,cache:new r.InMemoryCache,ssrMode:l,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),T=r.gql(u||(a=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],c||(c=a.slice(0)),a.raw=c,u=a)),E=function(e,r,n){try{var t,s,i=o({},y,n),u=r.headers;return Promise.resolve(S(e,null!=(t=i.origin)&&t)).then(function(n){var t=function(e,r){"Vary"===r?u.append(r,e):u.set(r,e)};if(!n)return r;n.forEach(t),i.credentials&&u.set("Access-Control-Allow-Credentials","true");var o=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return o&&u.set("Access-Control-Expose-Headers",o),"OPTIONS"===e.method?(i.methods&&(s=Array.isArray(i.methods)?i.methods.join(","):i.methods,u.set("Access-Control-Allow-Methods",s)),function(e,r){var n=new Headers;return r?Array.isArray(r)&&(r=r.join(",")):(r=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),r&&n.set("Access-Control-Allow-Headers",r),n}(e,i.allowedHeaders).forEach(t),"number"==typeof i.maxAge&&u.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?r:(u.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:u}))):r})}catch(e){return Promise.reject(e)}},S=function(e,r){try{var n=function(e){if(e)return function(e,r){var n=new Headers;return"*"===r?n.set("Access-Control-Allow-Origin","*"):"string"==typeof r?(n.set("Access-Control-Allow-Origin",r),n.append("Vary","Origin")):(g(null!=e?e:"",r)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(t,e)},t=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof r?Promise.resolve("function"==typeof r?r(t,e):r).then(n):n("function"==typeof r?r(t,e):r))}catch(e){return Promise.reject(e)}},y={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function g(e,r){return Array.isArray(r)?r.some(function(r){return g(e,r)}):"string"==typeof r?e===r:r instanceof RegExp?r.test(e):!!r}function w(e,r){try{var n=e()}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}function C(e,r,n){if(!e.s){if(n instanceof I){if(!n.s)return void(n.o=C.bind(null,e,r));1&r&&(r=n.s),n=n.v}if(n&&n.then)return void n.then(C.bind(null,e,r),C.bind(null,e,2));e.s=r,e.v=n;var t=e.o;t&&t(e)}}const I=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,n){const t=new e,o=this.s;if(o){const e=1&o?r:n;if(e){try{C(t,1,e(this.v))}catch(e){C(t,2,e)}return t}return this}return this.o=function(e){try{const o=e.v;1&e.s?C(t,1,r?r(o):o):n?C(t,1,n(o)):C(t,2,o)}catch(e){C(t,2,e)}},t},e}();function O(e){return e instanceof I&&1&e.s}e.withBackup=function(e,r){try{var n,o,s;if("GET"===e.method&&null!=(n=e.query)&&n.ping)return Promise.resolve(r.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var r=e.headers.authorization;if(!r)return!0;var n=r.split(" ")[1],t=Buffer.from(n,"base64").toString().split(":");return t[0]===process.env.BASIC_AUTH_USER&&t[1]===process.env.BASIC_AUTH_PASSWORD}(e))return Promise.resolve(r.status(401).send("Access denied"));if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(r.status(401).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(r.status(401).send("DATOCMS_API_TOKEN not set in .env"));var i=t.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var n=e.filter(function(e){return e.id.startsWith("auto-backup")}),t="auto-backup "+(new Date).toISOString().split("T")[0];return console.log("Last backup was: ",null==(o=n.sort(function(e,r){return e.id.replace("auto-backup ","")>r.id.replace("auto-backup ","")?-1:1})[0])?void 0:o.id),console.log("Creating backup...",t),Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{name:t})).then(function(e){function t(){return console.log("Backup done!",e.id),r.status(200).send("OK")}s=0;var o=function(e,r,n){for(var t;;){var o=e();if(O(o)&&(o=o.v),!o)return s;if(o.then){t=0;break}var s=n();if(s&&s.then){if(!O(s)){t=1;break}s=s.s}if(r){var i=r();if(i&&i.then&&!O(i)){t=2;break}}}var u=new I,a=C.bind(null,u,2);return(0===t?o.then(l):1===t?s.then(c):i.then(v)).then(void 0,a),u;function c(t){s=t;do{if(r&&(i=r())&&i.then&&!O(i))return void i.then(v).then(void 0,a);if(!(o=e())||O(o)&&!o.v)return void C(u,1,s);if(o.then)return void o.then(l).then(void 0,a);O(s=n())&&(s=s.v)}while(!s||!s.then);s.then(c).then(void 0,a)}function l(e){e?(s=n())&&s.then?s.then(c).then(void 0,a):c(s):C(u,1,s)}function v(){(o=e())?o.then?o.then(l).then(void 0,a):l(o):C(u,1,s)}}(function(){return s<n.length},function(){return s++},function(){return console.log("Deleting old backup...",n[s].id),Promise.resolve(i.environments.destroy(n[s].id)).then(function(){})});return o&&o.then?o.then(t):t()})})}catch(e){return Promise.reject(e)}},e.withBasicAuth=function(e){return function(r,n){try{var t=r.headers.authorization;if(!t)return Promise.resolve(n.status(401).send("Access denied"));var o=t.split(" ")[1],s=Buffer.from(o,"base64").toString().split(":"),i=s[0]===process.env.BASIC_AUTH_USER&&s[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i?e(r,n):n.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}},e.withBasicAuthEdge=function(e){return function(r,n){try{var t=r.headers.get("authorization");if(!t)return Promise.resolve(new Response("Access denied",{status:401}));var o=t.split(" ")[1],s=Buffer.from(o,"base64").toString().split(":"),i=s[0]===process.env.BASIC_AUTH_USER&&s[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i?e(r,n):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},e.withGlobalProps=function(e,n){var t,s=parseInt(process.env.REVALIDATE_TIME),i=[T];return e.query&&i.push(e.query),e.queries&&i.push.apply(i,e.queries),e.seo&&i.push(r.gql("query GetSEO{\n    seo: "+e.seo.model+" "+((t=e.seo.id)?'( filter: { id: { eq: "'+t+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var n=r||{},t=n.variables,s=n.preview,i=void 0!==s&&s,u=n.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!f&&!u)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,n){try{var s=function(){_.setLink(u?A(i,u):i?P:m);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var n=Array.isArray(t)&&t.length>r-1?t[r]:t||{};return _.query({query:e,variables:n})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var n={};return e.forEach(function(e){return n=o({},n,null==e?void 0:e.data)}),n})}()}catch(e){return n(e)}return s&&s.then?s.then(void 0,n):s}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(i,{preview:e.preview})).then(function(r){return n?Promise.resolve(n({context:e,props:o({},r),revalidate:s})):{props:o({},r),context:e,revalidate:s}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,r){try{var n;if("GET"===e.method&&null!=(n=e.query)&&n.ping)return Promise.resolve(r.status(200).send("pong"));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var t=e.query.slug,o=t?t.startsWith("/")?t:"/"+t:"/";try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:o}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(r,n){try{var s;if("GET"===r.method&&null!=(s=r.query)&&s.ping)return Promise.resolve(n.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var r=e.headers.authorization;if(!r)return!0;var n=r.split(" ")[1],t=Buffer.from(n,"base64").toString().split(":");return t[0]===process.env.BASIC_AUTH_USER&&t[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(n.status(401).send("Access denied"));var i=r.body;if(!i||!i.entity)throw"Payload is empty";return Promise.resolve(function(e){try{var r,n,s,i,u=null==e||null==(r=e.entity)||null==(n=r.relationships)||null==(s=n.item_type)||null==(i=s.data)?void 0:i.id,a=null==e?void 0:e.event_type;if(!u)throw"Model id not found in payload!";var c=t.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(c.itemTypes.find(u)).then(function(r){return w(function(){return Promise.resolve(c.items.find(e.entity.id,{version:"current"})).then(function(e){if(!e&&"delete"!==a)throw"No record found with modelId: "+u+" ("+r.api_key+")";return o({},e,{model:r})})},function(n){var t;if(404===(null==(t=n.response)?void 0:t.status)&&("delete"===a||"unpublish"===a))return o({id:e.entity.id},e.entity.attributes,{model:r});throw n})})}catch(e){return Promise.reject(e)}}(i)).then(function(r){r._payload=i.entity,e(r,function(e){try{return Promise.resolve(w(function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return n.json({revalidated:!0,paths:e})})},function(e){return console.log("error when revalidating"),n.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},e.withWebPreviews=function(e){return function(r,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(n.setHeader("Access-Control-Allow-Origin","*"),n.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),n.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),n.setHeader("Content-Type","application/json"),"OPTIONS"===r.method)return Promise.resolve(n.status(200).send("ok"));if(!r.body)throw new Error("No body found in request");var t=r.body;return Promise.resolve(e(t)).then(function(e){var r,o,s=[],i=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(s.push({label:"Live",url:""+i+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==t||null==(r=t.item)||null==(o=r.meta)?void 0:o.status)&&s.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),n.status(200).json({previewLinks:s})})}catch(e){return Promise.reject(e)}}},e.withWebPreviewsEdge=function(e){var r={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(n,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");return"OPTIONS"===n.method?Promise.resolve(E(n,new Response("ok",{status:200}),r)):Promise.resolve(n.json()).then(function(t){if(!t)throw new Error("No form data in request body");return Promise.resolve(e(t)).then(function(e){var o,s,i=[],u=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(i.push({label:"Live",url:""+u+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==t||null==(o=t.item)||null==(s=o.meta)?void 0:s.status)&&i.push({label:"Preview",url:u+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),E(n,new Response(JSON.stringify({previewLinks:i}),{status:200,headers:{"Content-Type":"application/json"}}),r)})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
