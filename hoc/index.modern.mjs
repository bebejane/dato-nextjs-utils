import{ApolloClient as e,InMemoryCache as n,gql as t}from"@apollo/client/core/core.cjs";import{BatchHttpLink as r}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import{buildClient as i}from"@datocms/cma-client-browser";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var a,u,c,l="undefined"==typeof window,v=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",f=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,d=null!=(a=null!=(u=process.env.DATOCMS_ENVIRONMENT)?u:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?a:"main",h=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,p={uri:v,fetch:"true"===process.env.LOG_GRAPHQL?function(e,n){try{var t=n?JSON.parse(n.body.toString()):void 0,r=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,n)).then(function(e){var n=(new Date).getTime();return s({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+r,"- "+((new Date).getTime()-n)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},m=function(e,n){void 0===e&&(e=!1);var t={Authorization:"Bearer "+n,"X-Exclude-Invalid":"true"};return(e||h)&&(t["X-Include-Drafts"]=!0),d&&(t["X-Environment"]=d),new r(s({},p,{headers:t}))},P=m(!1,f),E=m(!0,f),T=new e({link:P,cache:new n,ssrMode:l,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});function y(e,n){var r,o=parseInt(process.env.REVALIDATE_TIME),i=[S];return e.query&&i.push(e.query),e.queries&&i.push.apply(i,e.queries),e.seo&&i.push(t("query GetSEO{\n    seo: "+e.seo.model+" "+((r=e.seo.id)?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,n){try{var t=n||{},r=t.variables,o=t.preview,i=void 0!==o&&o,a=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!f&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(n,t){try{var o=function(){T.setLink(a?m(i,a):i?E:P);var n=(Array.isArray(e)?e:[e]).map(function(e,n){var t=Array.isArray(r)&&r.length>n-1?r[n]:r||{};return T.query({query:e,variables:t})});return Promise.resolve(Promise.all(n)).then(function(e){var n=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return n.push(e)})}),n.length)throw new Error(n.join(". "));var t={};return e.forEach(function(e){return t=s({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(i,{preview:e.preview})).then(function(t){return n?Promise.resolve(n({context:e,props:s({},t),revalidate:o})):{props:s({},t),context:e,revalidate:o}})}catch(e){return Promise.reject(e)}}}var A,_,S=t(c||(A=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],_||(_=A.slice(0)),A.raw=_,c=A)),w=function(e,n){try{var t;if("GET"===e.method&&null!=(t=e.query)&&t.ping)return Promise.resolve(n.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(n.status(500).json({message:"Invalid slug"}));var r=e.query.slug,o=r?r.startsWith("/")?r:"/"+r:"/";try{n.setPreviewData({},{maxAge:3}),n.writeHead(307,{Location:o}),n.end()}catch(e){return console.error(e),Promise.resolve(n.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function g(e){return function(n,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");if(t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),t.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),t.setHeader("Content-Type","application/json"),"OPTIONS"===n.method)return Promise.resolve(t.status(200).send("ok"));if(!n.body)throw new Error("No body found in request");var r=[];return Promise.resolve(e(n.body)).then(function(e){var n,o=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(n=e)?void 0:n.startsWith("https://")){var i=new URL(e);o=i.origin,e=i.pathname}return e&&(r.push({label:"Live",url:""+o+e}),r.push({label:"Preview",url:o+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),t.status(200).json({previewLinks:r})})}catch(e){return Promise.reject(e)}}}var O=function(e,n,t){try{var r,o,i=s({},I,t),a=n.headers;return Promise.resolve(C(e,null!=(r=i.origin)&&r)).then(function(t){var r=function(e,n){"Vary"===n?a.append(n,e):a.set(n,e)};if(!t)return n;t.forEach(r),i.credentials&&a.set("Access-Control-Allow-Credentials","true");var s=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return s&&a.set("Access-Control-Expose-Headers",s),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,a.set("Access-Control-Allow-Methods",o)),function(e,n){var t=new Headers;return n?Array.isArray(n)&&(n=n.join(",")):(n=e.headers.get("Access-Control-Request-Headers"),t.append("Vary","Access-Control-Request-Headers")),n&&t.set("Access-Control-Allow-Headers",n),t}(e,i.allowedHeaders).forEach(r),"number"==typeof i.maxAge&&a.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?n:(a.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:a}))):n})}catch(e){return Promise.reject(e)}},C=function(e,n){try{var t=function(e){if(e)return function(e,n){var t=new Headers;return"*"===n?t.set("Access-Control-Allow-Origin","*"):"string"==typeof n?(t.set("Access-Control-Allow-Origin",n),t.append("Vary","Origin")):(b(null!=e?e:"",n)&&e&&t.set("Access-Control-Allow-Origin",e),t.append("Vary","Origin")),t}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof n?Promise.resolve("function"==typeof n?n(r,e):n).then(t):t("function"==typeof n?n(r,e):n))}catch(e){return Promise.reject(e)}},I={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function b(e,n){return Array.isArray(n)?n.some(function(n){return b(e,n)}):"string"==typeof n?e===n:n instanceof RegExp?n.test(e):!!n}function R(e){var n={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");return"OPTIONS"===t.method?Promise.resolve(O(t,new Response("ok",{status:200}),n)):Promise.resolve(t.json()).then(function(r){if(!r)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(r)).then(function(e){var r,i=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(r=e)?void 0:r.startsWith("https://")){var s=new URL(e);i=s.origin,e=s.pathname}return e&&(o.push({label:"Live",url:""+i+e}),o.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),O(t,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),n)})})}catch(e){return Promise.reject(e)}}}function N(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var D="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function j(e,n,t){if(!e.s){if(t instanceof U){if(!t.s)return void(t.o=j.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(j.bind(null,e,n),j.bind(null,e,2));e.s=n,e.v=t;var r=e.o;r&&r(e)}}var U=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{j(r,1,i(this.v))}catch(e){j(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?j(r,1,n?n(o):o):t?j(r,1,t(o)):j(r,2,o)}catch(e){j(r,2,e)}},r},e}();function M(e){return e instanceof U&&1&e.s}function H(e){return function(n,t){try{var r;if("GET"===n.method&&null!=(r=n.query)&&r.ping)return Promise.resolve(t.status(200).send("pong"));if(!k(n))return Promise.resolve(t.status(401).send("Access denied"));var o=n.body;if(!o||null==o||!o.entity)return Promise.resolve(t.status(400).send("Payload empty or missing entity"));var i=o.entity,a=o.event_type,u=o.related_entities.find(function(e){var n,t,r;return e.id===(null==(n=i.relationships)||null==(t=n.item_type)||null==(r=t.data)?void 0:r.id)});if(!u)return Promise.resolve(t.status(400).send("Model not found in payload"));var c=s({id:i.id},i.attributes,{model:u.attributes}),l=Date.now()-Math.max(new Date(i.meta.updated_at).getTime(),new Date(i.meta.published_at).getTime(),new Date(i.meta.created_at).getTime());return e(c,function(e){try{return Promise.resolve(N(function(){function n(n){return console.log("revalidate"+(l&&!["unpublish","delete"].includes(a)?" ("+l+"ms)":"")+" "+a,e),t.status(200).json({revalidated:!0,paths:e,delay:l,event_type:a})}if(!e)return t.status(400).send("Nothing to revalidate. Paths empty");if(0===e.length)return t.status(200).json({revalidated:!1,paths:e,delay:l,event_type:a});var r=function(e,n,t){if("function"==typeof e[D]){var r,o,i,s=e[D]();if(function e(t){try{for(;!(r=s.next()).done;)if((t=n(r.value))&&t.then){if(!M(t))return void t.then(e,i||(i=j.bind(null,o=new U,2)));t=t.v}o?j(o,1,t):o=t}catch(e){j(o||(o=new U),2,e)}}(),s.return){var a=function(e){try{r.done||s.return()}catch(e){}return e};if(o&&o.then)return o.then(a,function(e){throw a(e)});a()}return o}if(!("length"in e))throw new TypeError("Object is not iterable");for(var u=[],c=0;c<e.length;c++)u.push(e[c]);return function(e,n,t){var r,o,i=-1;return function t(s){try{for(;++i<e.length;)if((s=n(i))&&s.then){if(!M(s))return void s.then(t,o||(o=j.bind(null,r=new U,2)));s=s.v}r?j(r,1,s):r=s}catch(e){j(r||(r=new U),2,e)}}(),r}(u,function(e){return n(u[e])})}(e,function(e){return console.log("revalidate",e),N(function(){return Promise.resolve(t.revalidate(e)).then(function(){})},function(n){throw console.log("Error revalidating",e),n})});return r&&r.then?r.then(n):n()},function(n){return console.log("Error revalidating",e),t.status(200).json({revalidated:!1,paths:e,err:n.message,delay:l,event_type:a})}))}catch(e){return Promise.reject(e)}}),Promise.resolve()}catch(e){return Promise.reject(e)}}}var k=function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var n=e.headers.authorization;if(!n)return!0;var t=n.split(" ")[1],r=Buffer.from(t,"base64").toString().split(":");return r[0]===process.env.BASIC_AUTH_USER&&r[1]===process.env.BASIC_AUTH_PASSWORD};function L(e,n){return function(t,r){try{if("OPTIONS"===t.method)return Promise.resolve(e(t,r));if("development"===process.env.NODE_ENV)return Promise.resolve(e(t,r));var o=t.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!o||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return r.setHeader("WWW-Authenticate",'Basic realm="NodeJs", charset="UTF-8"'),Promise.resolve(r.status(401).send("Access denied"));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(t,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function B(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var x=L(function(e,n){try{return process.env.DATOCMS_ENVIRONMENT?process.env.DATOCMS_API_TOKEN?Promise.resolve(B(function(){var t=e.query.max?parseInt(e.query.max):1,r="auto-backup-",i=o({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var o,s,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,n){return e.id.replace(r,"")>n.id.replace(r,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(o=null==(s=a[0])?void 0:s.id)?o:"none"),console.log("Max backups: ",t),console.log("Creating backup...",u),Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!0,force:!0})).then(function(){function e(){return console.log("Backup done!"),n.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var r=0,o=function(e,n,t){for(var r;;){var o=e();if(V(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!V(i)){r=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!V(s)){r=2;break}}}var a=new q,u=W.bind(null,a,2);return(0===r?o.then(l):1===r?i.then(c):s.then(v)).then(void 0,u),a;function c(r){i=r;do{if(n&&(s=n())&&s.then&&!V(s))return void s.then(v).then(void 0,u);if(!(o=e())||V(o)&&!o.v)return void W(a,1,i);if(o.then)return void o.then(l).then(void 0,u);V(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,u):c(i):W(a,1,i)}function v(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):W(a,1,i)}}(function(){return r<a.reverse().slice(t-1).length},function(){return r++},function(){var e=B(function(){return console.log("Deleting old backup...",a[r].id),Promise.resolve(i.environments.destroy(a[r].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return o&&o.then?o.then(e):e()})})},function(e){return console.log(e),n.status(500).send("Backup failed: "+e.message)})):Promise.resolve(n.status(500).send("DATOCMS_API_TOKEN not set in .env")):Promise.resolve(n.status(500).send("DATOCMS_ENVIRONMENT not set in .env"))}catch(e){return Promise.reject(e)}});function W(e,n,t){if(!e.s){if(t instanceof q){if(!t.s)return void(t.o=W.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(W.bind(null,e,n),W.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var q=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{W(r,1,i(this.v))}catch(e){W(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?W(r,1,n?n(o):o):t?W(r,1,t(o)):W(r,2,o)}catch(e){W(r,2,e)}},r},e}();function V(e){return e instanceof q&&1&e.s}function X(e,n){return function(t,r){try{if("OPTIONS"===t.method)return Promise.resolve(e(t,r));var o=t.headers.get("authorization");if(!o)return Promise.resolve(new Response("Access denied",{status:401}));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(t,r):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}}function G(e,n,t){if(!e.s){if(t instanceof z){if(!t.s)return void(t.o=G.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(G.bind(null,e,n),G.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var z=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{G(r,1,i(this.v))}catch(e){G(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?G(r,1,n?n(o):o):t?G(r,1,t(o)):G(r,2,o)}catch(e){G(r,2,e)}},r},e}();function K(e){return e instanceof z&&1&e.s}var Q=function(e){var n=e.res;try{return process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN?Promise.resolve(fetch("https://graphql.datocms.com/",{method:"POST",body:JSON.stringify({query:"query Site {\n          site: _site {\n            favicon{\n              url\n              mimeType\n            }\n          }\n        }\n    "}),headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN}})).then(function(e){return Promise.resolve(e.json()).then(function(e){var t=e.data.site;return null!=t&&t.favicon.url?Promise.resolve(fetch(t.favicon.url)).then(function(e){var t;function r(){return n.end(),{props:{}}}var o=e.body.getReader(),i=function(e,n,t){for(var r;;){var o=e();if(K(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!K(i)){r=1;break}i=i.s}}var s=new z,a=G.bind(null,s,2);return(0===r?o.then(c):1===r?i.then(u):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,a):c(o):G(s,1,i)})).then(void 0,a),s;function u(n){i=n;do{if(!(o=e())||K(o)&&!o.v)return void G(s,1,i);if(o.then)return void o.then(c).then(void 0,a);K(i=t())&&(i=i.v)}while(!i||!i.then);i.then(u).then(void 0,a)}function c(e){e?(i=t())&&i.then?i.then(u).then(void 0,a):u(i):G(s,1,i)}}(function(){return!t},0,function(){return Promise.resolve(o.read()).then(function(e){e.done?t=1:n.write(e.value)})});return i&&i.then?i.then(r):r()}):{notFound:!0}})}):Promise.resolve({notFound:!0})}catch(e){return Promise.reject(e)}};function J(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var F,Y=(F=L(function(e,n){return Promise.resolve(function(){try{var e=o({apiToken:process.env.DATOCMS_API_TOKEN});return Promise.resolve(e.site.find()).then(function(n){return console.log("Testing site: "+n.name),Promise.resolve(e.itemTypes.list()).then(function(n){var t=n.filter(function(e){return!e.modular_block});return Promise.resolve(Promise.all(t.map(function(n,r){try{var o=function(){var t=J(function(){return Promise.resolve(te(n,e)).then(function(e){i.revalidate=e})},function(){});return t&&t.then?t.then(function(){return i}):i},i={model:n.api_key};console.log(r+1+"/"+t.length+": "+i.model);var s=J(function(){return Promise.resolve(ne(n,e)).then(function(e){e.length>0&&(i.previews=e)})},function(){});return Promise.resolve(s&&s.then?s.then(o):o())}catch(e){return Promise.reject(e)}}))).then(function(e){return e.sort(function(e,n){return e.model>n.model?1:-1})})})})}catch(e){return Promise.reject(e)}}()).then(function(t){var r;null!=(r=e.query)&&r.json?(n.setHeader("Content-Type","application/json"),n.status(200).json(t)):e.query.text?(n.setHeader("Content-Type","text/plain"),n.status(200).send($(t))):(n.setHeader("Content-Type","text/html"),n.status(200).send(ee(t)))})}),function(e,n){try{return n.setHeader("Access-Control-Allow-Origin","*"),n.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS"),n.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),Promise.resolve("OPTIONS"===e.method?n.status(200).send("ok"):F(e,n))}catch(e){return Promise.reject(e)}}),Z=process.env.NEXT_PUBLIC_SITE_URL+"/api",$=function(e){e.map(function(e){return e.model+" - Previews: "+(e.previews?"YES":"NO")+" / Revalidate: "+(e.revalidate?"YES":"NO")}).join("\n");var n=e.filter(function(e){return e.previews}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n"),t=e.filter(function(e){var n;return null==(n=e.revalidate)?void 0:n.paths.length}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n");return"WEB PREVIEWS\n"+n+"\n\nNO WEB PREVIEWS:\n"+e.filter(function(e){return!e.previews}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n")+"\n\nREVALIDATE\n"+t+"\n\nNO REVALIDATE\n"+e.filter(function(e){var n;return!e.revalidate||!(null!=(n=e.revalidate)&&n.paths.length)}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n")},ee=function(e){return"\n    <html>\n      <head>\n        <style>\n          table {\n            border-collapse: collapse;\n            width: 400px;\n          }\n          th, td {\n            padding: 5px;\n            text-align:left;\n          }\n          .center{\n            text-align:center;\n          }\n          .error{\n            color:red;\n          }\n        </style>\n      </head>\n      <body>\n        <pre>\n        <table>\n          <thead>\n            <tr>\n              <th>Model</th>\n              <th>Web Previews</th>\n              <th>Revalidate</th>\n            </tr>\n          </thead>\n          <tbody>\n            "+e.map(function(e){var n,t,r,o,i;return'\n              <tr \n                title="Web Previews\n-----------\n'+(e.previews?null==(n=e.previews)?void 0:n.map(function(e){return e.label+": "+e.url}).join("\n"):"")+"\n\nRevalidate\n-----------\n"+(e.revalidate?null==(t=e.revalidate)||null==(r=t.paths)?void 0:r.join("\n"):"")+'"\n                class="'+(e.previews&&null!=(o=e.revalidate)&&o.revalidated?"":"error")+'"\n              >\n                <td>'+e.model+'</td>\n                <td class="center">'+(e.previews?"x":"-")+'</td>\n                <td class="center">'+(null!=(i=e.revalidate)&&i.revalidated?"x":"-")+"</td>\n              </tr>\n            "}).join("")+"\n          </tbody>\n        </pre>\n      </body>\n    </html>\n  "},ne=function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var t=n[0];return Promise.resolve(fetch(Z+"/web-previews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({item:{attributes:t||{}},itemType:{attributes:e},environmentId:"main",locale:"en"})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.previewLinks})})})}catch(e){return Promise.reject(e)}},te=function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var t=n[0];return Promise.resolve(fetch(Z+"/revalidate",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({environment:"main",entity_type:"item",event_type:"update",entity:{id:t.id,type:"item",attributes:s({},t||{}),relationships:{item_type:{data:{id:e.id,type:"item_type"}}},meta:s({},t.meta,{updated_at:(new Date).toISOString(),published_at:(new Date).toISOString(),created_at:(new Date).toISOString()})},related_entities:[{id:e.id,type:"item_type",attributes:e}]})})).then(function(e){if(200===e.status)return Promise.resolve(e.json());throw new Error("Error testing revalidate endpoint: "+e.status+" "+e.statusText)})})}catch(e){return Promise.reject(e)}};function re(e){return function(n,t){try{var r;if(!process.env.CRON_SECRET)throw new Error("CRON_SECRET not set in .env");return(null==(r=n.headers)?void 0:r.authorization)==="Basic "+process.env.CRON_SECRET?Promise.resolve(e(n,t)):Promise.resolve(t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function oe(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var ie=function(e,n){try{if(!process.env.CRON_SECRET)throw new Error("CRON_SECRET not set in .env");return e.headers.get("authorization")==="Bearer "+process.env.CRON_SECRET?Promise.resolve(function(e,n){try{if(!process.env.DATOCMS_ENVIRONMENT)throw new Error("DATOCMS_ENVIRONMENT not set in .env");if(!process.env.DATOCMS_API_TOKEN)throw new Error("DATOCMS_API_TOKEN not set in .env");return Promise.resolve(oe(function(){var n=new URLSearchParams(e.nextUrl.searchParams),t=n.get("max")?parseInt(n.get("max")):1,r="auto-backup-",o=i({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(o.environments.list()).then(function(e){var n,i,s=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,n){return e.id.replace(r,"")>n.id.replace(r,"")?-1:1}),a="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(n=null==(i=s[0])?void 0:i.id)?n:"none"),console.log("Max backups: ",t),console.log("Creating backup...",a),Promise.resolve(o.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:a},{immediate_return:!1,fast:!0,force:!0})).then(function(){function e(){return console.log("Backup done!"),new Response("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+a,{status:200})}var n=0,r=function(e,n,t){for(var r;;){var o=e();if(ue(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!ue(i)){r=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!ue(s)){r=2;break}}}var a=new ae,u=se.bind(null,a,2);return(0===r?o.then(l):1===r?i.then(c):s.then(v)).then(void 0,u),a;function c(r){i=r;do{if(n&&(s=n())&&s.then&&!ue(s))return void s.then(v).then(void 0,u);if(!(o=e())||ue(o)&&!o.v)return void se(a,1,i);if(o.then)return void o.then(l).then(void 0,u);ue(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,u):c(i):se(a,1,i)}function v(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):se(a,1,i)}}(function(){return n<s.reverse().slice(t-1).length},function(){return n++},function(){var e=oe(function(){return console.log("Deleting old backup...",s[n].id),Promise.resolve(o.environments.destroy(s[n].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return r&&r.then?r.then(e):e()})})},function(e){return console.log(e),new Response("Backup failed: "+e.message,{status:500})}))}catch(e){return Promise.reject(e)}}(e)):Promise.resolve(new Response("Access denied",{status:401}))}catch(e){return Promise.reject(e)}};function se(e,n,t){if(!e.s){if(t instanceof ae){if(!t.s)return void(t.o=se.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(se.bind(null,e,n),se.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var ae=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{se(r,1,i(this.v))}catch(e){se(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?se(r,1,n?n(o):o):t?se(r,1,t(o)):se(r,2,o)}catch(e){se(r,2,e)}},r},e}();function ue(e){return e instanceof ae&&1&e.s}export{x as withBackup,ie as withBackupEdge,L as withBasicAuth,X as withBasicAuthEdge,Q as withFavicon,y as withGlobalProps,w as withPreview,H as withRevalidate,Y as withTests,re as withVercelCronAuth,g as withWebPreviews,R as withWebPreviewsEdge};
//# sourceMappingURL=index.modern.mjs.map
