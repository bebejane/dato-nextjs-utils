var e,r,n=require("@apollo/client/core/core.cjs"),t=require("@apollo/client/link/batch-http/batchHttpLink.js"),o=require("@datocms/cma-client");function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}var i,a,u,c="undefined"==typeof window,l=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",v=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,p=null!=(e=null!=(r=process.env.DATOCMS_ENVIRONMENT)?r:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?e:"main",h=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,f={uri:l,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var n=r?JSON.parse(r.body.toString()):void 0,t=""+(n?Array.isArray(n)?n.map(function(e){return e.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return s({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+t,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},d=function(e,r){void 0===e&&(e=!1);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":"true"};return(e||h)&&(n["X-Include-Drafts"]=!0),p&&(n["X-Environment"]=p),new t.BatchHttpLink(s({},f,{headers:n}))},A=d(!1,v),m=d(!0,v),_=new n.ApolloClient({link:A,cache:new n.InMemoryCache,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),P=n.gql(i||(a=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],u||(u=a.slice(0)),a.raw=u,i=a)),S=function(e,r,n){try{var t,o,i=s({},E,n),a=r.headers;return Promise.resolve(T(e,null!=(t=i.origin)&&t)).then(function(n){var t=function(e,r){"Vary"===r?a.append(r,e):a.set(r,e)};if(!n)return r;n.forEach(t),i.credentials&&a.set("Access-Control-Allow-Credentials","true");var s=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return s&&a.set("Access-Control-Expose-Headers",s),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,a.set("Access-Control-Allow-Methods",o)),function(e,r){var n=new Headers;return r?Array.isArray(r)&&(r=r.join(",")):(r=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),r&&n.set("Access-Control-Allow-Headers",r),n}(e,i.allowedHeaders).forEach(t),"number"==typeof i.maxAge&&a.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?r:(a.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:a}))):r})}catch(e){return Promise.reject(e)}},T=function(e,r){try{var n=function(e){if(e)return function(e,r){var n=new Headers;return"*"===r?n.set("Access-Control-Allow-Origin","*"):"string"==typeof r?(n.set("Access-Control-Allow-Origin",r),n.append("Vary","Origin")):(y(null!=e?e:"",r)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(t,e)},t=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof r?Promise.resolve("function"==typeof r?r(t,e):r).then(n):n("function"==typeof r?r(t,e):r))}catch(e){return Promise.reject(e)}},E={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function y(e,r){return Array.isArray(r)?r.some(function(r){return y(e,r)}):"string"==typeof r?e===r:r instanceof RegExp?r.test(e):!!r}function w(e,r){try{var n=e()}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}function C(e,r,n){if(!e.s){if(n instanceof g){if(!n.s)return void(n.o=C.bind(null,e,r));1&r&&(r=n.s),n=n.v}if(n&&n.then)return void n.then(C.bind(null,e,r),C.bind(null,e,2));e.s=r,e.v=n;var t=e.o;t&&t(e)}}const g=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,n){const t=new e,o=this.s;if(o){const e=1&o?r:n;if(e){try{C(t,1,e(this.v))}catch(e){C(t,2,e)}return t}return this}return this.o=function(e){try{const o=e.v;1&e.s?C(t,1,r?r(o):o):n?C(t,1,n(o)):C(t,2,o)}catch(e){C(t,2,e)}},t},e}();function I(e){return e instanceof g&&1&e.s}exports.withBackup=function(e,r){try{var n,t,s,i,a=function(a){if(n)return a;if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var r=e.headers.authorization;if(!r)return!0;var n=r.split(" ")[1],t=Buffer.from(n,"base64").toString().split(":");return t[0]===process.env.BASIC_AUTH_USER&&t[1]===process.env.BASIC_AUTH_PASSWORD}(e))return r.status(401).send("Access denied");var u=e.query.max?parseInt(e.query.max):1,c="auto-backup-",l=o.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(l.environments.list()).then(function(e){var n;function o(e){return n?e:r.status(200).send("OK")}var a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,r){return e.id.replace(c,"")>r.id.replace(c,"")?-1:1}),v="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];console.log("Last backup was: ",null!=(t=null==(s=a[0])?void 0:s.id)?t:"none"),console.log("Max backups: ",u),console.log("Creating backup...",v);var p=function(e,r){try{var n=Promise.resolve(l.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:v},{immediate_return:!1,fast:!1,force:!0})).then(function(){function e(){console.log("Backup done!")}i=0;var r=function(e,r,n){for(var t;;){var o=e();if(I(o)&&(o=o.v),!o)return s;if(o.then){t=0;break}var s=n();if(s&&s.then){if(!I(s)){t=1;break}s=s.s}if(r){var i=r();if(i&&i.then&&!I(i)){t=2;break}}}var a=new g,u=C.bind(null,a,2);return(0===t?o.then(l):1===t?s.then(c):i.then(v)).then(void 0,u),a;function c(t){s=t;do{if(r&&(i=r())&&i.then&&!I(i))return void i.then(v).then(void 0,u);if(!(o=e())||I(o)&&!o.v)return void C(a,1,s);if(o.then)return void o.then(l).then(void 0,u);I(s=n())&&(s=s.v)}while(!s||!s.then);s.then(c).then(void 0,u)}function l(e){e?(s=n())&&s.then?s.then(c).then(void 0,u):c(s):C(a,1,s)}function v(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):C(a,1,s)}}(function(){return i<a.reverse().slice(u-1).length},function(){return i++},function(){return console.log("Deleting old backup...",a[i].id),Promise.resolve(l.environments.destroy(a[i].id)).then(function(){})});return r&&r.then?r.then(e):e()})}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}(0,function(e){console.error(e);var t=r.status(401).send("Backup failed: "+e.message);return n=1,t});return p&&p.then?p.then(o):o(p)})};if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(r.status(401).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(r.status(401).send("DATOCMS_API_TOKEN not set in .env"));var u=function(){if(!e.headers.authorization)return console.log(e.url),Promise.resolve(fetch(""+process.env.NEXT_PUBLIC_SITE_URL+e.url,{headers:{authorization:"Basic "+Buffer.from(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD).toString("base64")}})).then(function(e){return n=1,e})}();return Promise.resolve(u&&u.then?u.then(a):a(u))}catch(e){return Promise.reject(e)}},exports.withBasicAuth=function(e){return function(r,n){try{var t=r.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!t||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(n.status(401).send("Access denied"));var o=t.split(" ")[1],s=Buffer.from(o,"base64").toString().split(":"),i=s[0]===process.env.BASIC_AUTH_USER&&s[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i?e(r,n):n.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}},exports.withBasicAuthEdge=function(e){return function(r,n){try{var t=r.headers.get("authorization");if(!t)return Promise.resolve(new Response("Access denied",{status:401}));var o=t.split(" ")[1],s=Buffer.from(o,"base64").toString().split(":"),i=s[0]===process.env.BASIC_AUTH_USER&&s[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i?e(r,n):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},exports.withGlobalProps=function(e,r){var t,o=parseInt(process.env.REVALIDATE_TIME),i=[P];return e.query&&i.push(e.query),e.queries&&i.push.apply(i,e.queries),e.seo&&i.push(n.gql("query GetSEO{\n    seo: "+e.seo.model+" "+((t=e.seo.id)?'( filter: { id: { eq: "'+t+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,r){try{var n=r||{},t=n.variables,o=n.preview,i=void 0!==o&&o,a=n.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!v&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,n){try{var o=function(){_.setLink(a?d(i,a):i?m:A);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var n=Array.isArray(t)&&t.length>r-1?t[r]:t||{};return _.query({query:e,variables:n})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var n={};return e.forEach(function(e){return n=s({},n,null==e?void 0:e.data)}),n})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(i,{preview:e.preview})).then(function(n){return r?Promise.resolve(r({context:e,props:s({},n),revalidate:o})):{props:s({},n),context:e,revalidate:o}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,r){try{var n;if("GET"===e.method&&null!=(n=e.query)&&n.ping)return Promise.resolve(r.status(200).send("pong"));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(r.status(401).json({message:"Invalid token"}));var t=e.query.slug,o=t?t.startsWith("/")?t:"/"+t:"/";try{r.setPreviewData({},{maxAge:10}),r.writeHead(307,{Location:o}),r.end()}catch(e){return console.error(e),Promise.resolve(r.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(r,n){try{var t;if("GET"===r.method&&null!=(t=r.query)&&t.ping)return Promise.resolve(n.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var r=e.headers.authorization;if(!r)return!0;var n=r.split(" ")[1],t=Buffer.from(n,"base64").toString().split(":");return t[0]===process.env.BASIC_AUTH_USER&&t[1]===process.env.BASIC_AUTH_PASSWORD}(r))return Promise.resolve(n.status(401).send("Access denied"));var i=r.body;if(!i||!i.entity)throw"Payload is empty";return Promise.resolve(function(e){try{var r,n,t,i,a=null==e||null==(r=e.entity)||null==(n=r.relationships)||null==(t=n.item_type)||null==(i=t.data)?void 0:i.id,u=null==e?void 0:e.event_type;if(!a)throw"Model id not found in payload!";var c=o.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(c.itemTypes.find(a)).then(function(r){return w(function(){return Promise.resolve(c.items.find(e.entity.id,{version:"current"})).then(function(e){if(!e&&"delete"!==u)throw"No record found with modelId: "+a+" ("+r.api_key+")";return s({},e,{model:r})})},function(n){var t;if(404===(null==(t=n.response)?void 0:t.status)&&("delete"===u||"unpublish"===u))return s({id:e.entity.id},e.entity.attributes,{model:r});throw n})})}catch(e){return Promise.reject(e)}}(i)).then(function(r){r._payload=i.entity,e(r,function(e){try{return Promise.resolve(w(function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return n.json({revalidated:!0,paths:e})})},function(e){return console.log("error when revalidating"),n.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviews=function(e){return function(r,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(n.setHeader("Access-Control-Allow-Origin","*"),n.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),n.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),n.setHeader("Content-Type","application/json"),"OPTIONS"===r.method)return Promise.resolve(n.status(200).send("ok"));if(!r.body)throw new Error("No body found in request");var t=r.body;return Promise.resolve(e(t)).then(function(e){var r,o,s=[],i=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(s.push({label:"Live",url:""+i+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==t||null==(r=t.item)||null==(o=r.meta)?void 0:o.status)&&s.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),n.status(200).json({previewLinks:s})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviewsEdge=function(e){var r={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(n,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");return"OPTIONS"===n.method?Promise.resolve(S(n,new Response("ok",{status:200}),r)):Promise.resolve(n.json()).then(function(t){if(!t)throw new Error("No form data in request body");return Promise.resolve(e(t)).then(function(e){var o,s,i=[],a=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(i.push({label:"Live",url:""+a+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==t||null==(o=t.item)||null==(s=o.meta)?void 0:s.status)&&i.push({label:"Preview",url:a+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),S(n,new Response(JSON.stringify({previewLinks:i}),{status:200,headers:{"Content-Type":"application/json"}}),r)})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
