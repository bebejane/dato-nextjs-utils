!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client"],n):n((e||self).hoc={},e.core_cjs,e.batchHttpLink_js,e.cmaClient)}(this,function(e,n,r,t){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}var s,i,a,u,c,l="undefined"==typeof window,v=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",h=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,f=null!=(s=null!=(i=process.env.DATOCMS_ENVIRONMENT)?i:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?s:"main",d=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,p={uri:v,fetch:"true"===process.env.LOG_GRAPHQL?function(e,n){try{var r=n?JSON.parse(n.body.toString()):void 0,t=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,n)).then(function(e){var n=(new Date).getTime();return o({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+t,"- "+((new Date).getTime()-n)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},m=function(e,n){void 0===e&&(e=!1);var t={Authorization:"Bearer "+n,"X-Exclude-Invalid":"true"};return(e||d)&&(t["X-Include-Drafts"]=!0),f&&(t["X-Environment"]=f),new r.BatchHttpLink(o({},p,{headers:t}))},A=m(!1,h),P=m(!0,h),E=new n.ApolloClient({link:A,cache:new n.InMemoryCache,ssrMode:l,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),_=n.gql(a||(u=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],c||(c=u.slice(0)),u.raw=c,a=u)),T=function(e,n,r){try{var t,s,i=o({},y,r),a=n.headers;return Promise.resolve(S(e,null!=(t=i.origin)&&t)).then(function(r){var t=function(e,n){"Vary"===n?a.append(n,e):a.set(n,e)};if(!r)return n;r.forEach(t),i.credentials&&a.set("Access-Control-Allow-Credentials","true");var o=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return o&&a.set("Access-Control-Expose-Headers",o),"OPTIONS"===e.method?(i.methods&&(s=Array.isArray(i.methods)?i.methods.join(","):i.methods,a.set("Access-Control-Allow-Methods",s)),function(e,n){var r=new Headers;return n?Array.isArray(n)&&(n=n.join(",")):(n=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),n&&r.set("Access-Control-Allow-Headers",n),r}(e,i.allowedHeaders).forEach(t),"number"==typeof i.maxAge&&a.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?n:(a.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:a}))):n})}catch(e){return Promise.reject(e)}},S=function(e,n){try{var r=function(e){if(e)return function(e,n){var r=new Headers;return"*"===n?r.set("Access-Control-Allow-Origin","*"):"string"==typeof n?(r.set("Access-Control-Allow-Origin",n),r.append("Vary","Origin")):(w(null!=e?e:"",n)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}(t,e)},t=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof n?Promise.resolve("function"==typeof n?n(t,e):n).then(r):r("function"==typeof n?n(t,e):n))}catch(e){return Promise.reject(e)}},y={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function w(e,n){return Array.isArray(n)?n.some(function(n){return w(e,n)}):"string"==typeof n?e===n:n instanceof RegExp?n.test(e):!!n}function g(e,n){return function(r,t){try{if("OPTIONS"===r.method)return Promise.resolve(e(r,t));var o=r.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!o||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(t.status(401).send("Access denied"));var s=o.split(" ")[1],i=Buffer.from(s,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i[0]===a&&i[1]===u?e(r,t):t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function C(e,n){try{var r=e()}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}var I=g(function(e,n){try{if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(n.status(500).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(n.status(500).send("DATOCMS_API_TOKEN not set in .env"));var r=e.query.max?parseInt(e.query.max):1,o="auto-backup-",s=t.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(s.environments.list()).then(function(e){var t,i,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,n){return e.id.replace(o,"")>n.id.replace(o,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(t=null==(i=a[0])?void 0:i.id)?t:"none"),console.log("Max backups: ",r),console.log("Creating backup...",u),C(function(){return Promise.resolve(s.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!1,force:!0})).then(function(){function e(){return console.log("Backup done!"),n.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var t=0,o=function(e,n,r){for(var t;;){var o=e();if(b(o)&&(o=o.v),!o)return s;if(o.then){t=0;break}var s=r();if(s&&s.then){if(!b(s)){t=1;break}s=s.s}if(n){var i=n();if(i&&i.then&&!b(i)){t=2;break}}}var a=new R,u=O.bind(null,a,2);return(0===t?o.then(l):1===t?s.then(c):i.then(v)).then(void 0,u),a;function c(t){s=t;do{if(n&&(i=n())&&i.then&&!b(i))return void i.then(v).then(void 0,u);if(!(o=e())||b(o)&&!o.v)return void O(a,1,s);if(o.then)return void o.then(l).then(void 0,u);b(s=r())&&(s=s.v)}while(!s||!s.then);s.then(c).then(void 0,u)}function l(e){e?(s=r())&&s.then?s.then(c).then(void 0,u):c(s):O(a,1,s)}function v(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):O(a,1,s)}}(function(){return t<a.reverse().slice(r-1).length},function(){return t++},function(){var e=C(function(){return console.log("Deleting old backup...",a[t].id),Promise.resolve(s.environments.destroy(a[t].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return o&&o.then?o.then(e):e()})},function(e){return console.error(e),n.status(500).send("Backup failed: "+e.message)})})}catch(e){return Promise.reject(e)}});function O(e,n,r){if(!e.s){if(r instanceof R){if(!r.s)return void(r.o=O.bind(null,e,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(O.bind(null,e,n),O.bind(null,e,2));e.s=n,e.v=r;const t=e.o;t&&t(e)}}var R=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,r){var t=new e,o=this.s;if(o){var s=1&o?n:r;if(s){try{O(t,1,s(this.v))}catch(e){O(t,2,e)}return t}return this}return this.o=function(e){try{var o=e.v;1&e.s?O(t,1,n?n(o):o):r?O(t,1,r(o)):O(t,2,o)}catch(e){O(t,2,e)}},t},e}();function b(e){return e instanceof R&&1&e.s}function N(e,n,r){if(!e.s){if(r instanceof D){if(!r.s)return void(r.o=N.bind(null,e,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(N.bind(null,e,n),N.bind(null,e,2));e.s=n,e.v=r;const t=e.o;t&&t(e)}}var D=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,r){var t=new e,o=this.s;if(o){var s=1&o?n:r;if(s){try{N(t,1,s(this.v))}catch(e){N(t,2,e)}return t}return this}return this.o=function(e){try{var o=e.v;1&e.s?N(t,1,n?n(o):o):r?N(t,1,r(o)):N(t,2,o)}catch(e){N(t,2,e)}},t},e}();function U(e){return e instanceof D&&1&e.s}e.withBackup=I,e.withBasicAuth=g,e.withBasicAuthEdge=function(e,n){return function(r,t){try{if("OPTIONS"===r.method)return Promise.resolve(e(r,t));var o=r.headers.get("authorization");if(!o)return Promise.resolve(new Response("Access denied",{status:401}));var s=o.split(" ")[1],i=Buffer.from(s,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(i[0]===a&&i[1]===u?e(r,t):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},e.withFavicon=function(e){var n=e.res;try{return process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN?Promise.resolve(fetch("https://graphql.datocms.com/",{method:"POST",body:JSON.stringify({query:"query Site {\n          site: _site {\n            favicon{\n              url\n              mimeType\n            }\n          }\n        }\n    "}),headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN}})).then(function(e){return Promise.resolve(e.json()).then(function(e){var r=e.data.site;return null!=r&&r.favicon.url?Promise.resolve(fetch(r.favicon.url)).then(function(e){var r;function t(){return n.end(),{props:{}}}var o=e.body.getReader(),s=function(e,n,r){for(var t;;){var o=e();if(U(o)&&(o=o.v),!o)return s;if(o.then){t=0;break}var s=r();if(s&&s.then){if(!U(s)){t=1;break}s=s.s}}var i=new D,a=N.bind(null,i,2);return(0===t?o.then(c):1===t?s.then(u):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,a):c(o):N(i,1,s)})).then(void 0,a),i;function u(n){s=n;do{if(!(o=e())||U(o)&&!o.v)return void N(i,1,s);if(o.then)return void o.then(c).then(void 0,a);U(s=r())&&(s=s.v)}while(!s||!s.then);s.then(u).then(void 0,a)}function c(e){e?(s=r())&&s.then?s.then(u).then(void 0,a):u(s):N(i,1,s)}}(function(){return!r},0,function(){return Promise.resolve(o.read()).then(function(e){e.done?r=1:n.write(e.value)})});return s&&s.then?s.then(t):t()}):{notFound:!0}})}):Promise.resolve({notFound:!0})}catch(e){return Promise.reject(e)}},e.withGlobalProps=function(e,r){var t,s=parseInt(process.env.REVALIDATE_TIME),i=[_];return e.query&&i.push(e.query),e.queries&&i.push.apply(i,e.queries),e.seo&&i.push(n.gql("query GetSEO{\n    seo: "+e.seo.model+" "+((t=e.seo.id)?'( filter: { id: { eq: "'+t+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,n){try{var r=n||{},t=r.variables,s=r.preview,i=void 0!==s&&s,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!h&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(n,r){try{var s=function(){E.setLink(a?m(i,a):i?P:A);var n=(Array.isArray(e)?e:[e]).map(function(e,n){var r=Array.isArray(t)&&t.length>n-1?t[n]:t||{};return E.query({query:e,variables:r})});return Promise.resolve(Promise.all(n)).then(function(e){var n=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return n.push(e)})}),n.length)throw new Error(n.join(". "));var r={};return e.forEach(function(e){return r=o({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return s&&s.then?s.then(void 0,r):s}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(i,{preview:e.preview})).then(function(n){return r?Promise.resolve(r({context:e,props:o({},n),revalidate:s})):{props:o({},n),context:e,revalidate:s}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,n){try{var r;if("GET"===e.method&&null!=(r=e.query)&&r.ping)return Promise.resolve(n.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(n.status(500).json({message:"Invalid slug"}));var t=e.query.slug,o=t?t.startsWith("/")?t:"/"+t:"/";try{n.setPreviewData({},{maxAge:3}),n.writeHead(307,{Location:o}),n.end()}catch(e){return console.error(e),Promise.resolve(n.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(n,r){try{var t;if("GET"===n.method&&null!=(t=n.query)&&t.ping)return console.log("ping"),Promise.resolve(r.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var n=e.headers.authorization;if(!n)return!0;var r=n.split(" ")[1],t=Buffer.from(r,"base64").toString().split(":");return t[0]===process.env.BASIC_AUTH_USER&&t[1]===process.env.BASIC_AUTH_PASSWORD}(n))return Promise.resolve(r.status(401).send("Access denied"));var s=n.body;if(!s||null==s||!s.entity)throw"Payload is empty";var i=s.entity,a=s.event_type,u=s.related_entities.find(function(e){var n,r,t;return e.id===(null==(n=i.relationships)||null==(r=n.item_type)||null==(t=r.data)?void 0:t.id)});if(!u)throw new Error("Model not found in payload");var c=o({},i.attributes,{model:u.attributes}),l=Date.now()-Math.max(new Date(i.meta.updated_at).getTime(),new Date(i.meta.published_at).getTime(),new Date(i.meta.created_at).getTime());return e(c,function(e){try{return Promise.resolve(function(n,t){try{var o=function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidate"+(l&&!["unpublish","delete"].includes(a)?" ("+l+"ms)":"")+" "+a,e),r.json({revalidated:!0,paths:e,delay:l,event_type:a})})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(n){return console.log("Error revalidating",e),console.error(n),r.json({revalidated:!1,err:n,delay:l,event_type:a})}))}catch(e){return Promise.reject(e)}}),Promise.resolve()}catch(e){return Promise.reject(e)}}},e.withWebPreviews=function(e){return function(n,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===n.method)return Promise.resolve(r.status(200).send("ok"));if(!n.body)throw new Error("No body found in request");var t=[];return Promise.resolve(e(n.body)).then(function(e){var n,o=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(n=e)?void 0:n.startsWith("https://")){var s=new URL(e);o=s.origin,e=s.pathname}return e&&(t.push({label:"Live",url:""+o+e}),t.push({label:"Preview",url:o+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),r.status(200).json({previewLinks:t})})}catch(e){return Promise.reject(e)}}},e.withWebPreviewsEdge=function(e){var n={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(r,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");return"OPTIONS"===r.method?Promise.resolve(T(r,new Response("ok",{status:200}),n)):Promise.resolve(r.json()).then(function(t){if(!t)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(t)).then(function(e){var t,s=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(t=e)?void 0:t.startsWith("https://")){var i=new URL(e);s=i.origin,e=i.pathname}return e&&(o.push({label:"Live",url:""+s+e}),o.push({label:"Preview",url:s+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),T(r,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),n)})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
