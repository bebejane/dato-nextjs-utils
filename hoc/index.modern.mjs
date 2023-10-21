import{ApolloClient as e,InMemoryCache as n,gql as t}from"@apollo/client/core/core.cjs";import{BatchHttpLink as r}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}var s,a,u,c="undefined"==typeof window,l=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",v=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,f=null!=(s=null!=(a=process.env.DATOCMS_ENVIRONMENT)?a:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?s:"main",h=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,p={uri:l,fetch:"true"===process.env.LOG_GRAPHQL?function(e,n){try{var t=n?JSON.parse(n.body.toString()):void 0,r=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,n)).then(function(e){var n=(new Date).getTime();return i({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+r,"- "+((new Date).getTime()-n)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},d=function(e,n){void 0===e&&(e=!1);var t={Authorization:"Bearer "+n,"X-Exclude-Invalid":"true"};return(e||h)&&(t["X-Include-Drafts"]=!0),f&&(t["X-Environment"]=f),new r(i({},p,{headers:t}))},m=d(!1,v),A=d(!0,v),P=new e({link:m,cache:new n,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});function _(e,n){var r,o=parseInt(process.env.REVALIDATE_TIME),s=[T];return e.query&&s.push(e.query),e.queries&&s.push.apply(s,e.queries),e.seo&&s.push(t("query GetSEO{\n    seo: "+e.seo.model+" "+((r=e.seo.id)?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,n){try{var t=n||{},r=t.variables,o=t.preview,s=void 0!==o&&o,a=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!v&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(n,t){try{var o=function(){P.setLink(a?d(s,a):s?A:m);var n=(Array.isArray(e)?e:[e]).map(function(e,n){var t=Array.isArray(r)&&r.length>n-1?r[n]:r||{};return P.query({query:e,variables:t})});return Promise.resolve(Promise.all(n)).then(function(e){var n=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return n.push(e)})}),n.length)throw new Error(n.join(". "));var t={};return e.forEach(function(e){return t=i({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(s,{preview:e.preview})).then(function(t){return n?Promise.resolve(n({context:e,props:i({},t),revalidate:o})):{props:i({},t),context:e,revalidate:o}})}catch(e){return Promise.reject(e)}}}var E,y,T=t(u||(E=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],y||(y=E.slice(0)),E.raw=y,u=E)),S=function(e,n){try{var t;if("GET"===e.method&&null!=(t=e.query)&&t.ping)return Promise.resolve(n.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(n.status(500).json({message:"Invalid slug"}));var r=e.query.slug,o=r?r.startsWith("/")?r:"/"+r:"/";try{n.setPreviewData({},{maxAge:3}),n.writeHead(307,{Location:o}),n.end()}catch(e){return console.error(e),Promise.resolve(n.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function g(e){return function(n,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");if(t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),t.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),t.setHeader("Content-Type","application/json"),"OPTIONS"===n.method)return Promise.resolve(t.status(200).send("ok"));if(!n.body)throw new Error("No body found in request");var r=[];return Promise.resolve(e(n.body)).then(function(e){var n,o=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(n=e)?void 0:n.startsWith("https://")){var i=new URL(e);o=i.origin,e=i.pathname}return e&&(r.push({label:"Live",url:""+o+e}),r.push({label:"Preview",url:o+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),t.status(200).json({previewLinks:r})})}catch(e){return Promise.reject(e)}}}var w=function(e,n,t){try{var r,o,s=i({},C,t),a=n.headers;return Promise.resolve(I(e,null!=(r=s.origin)&&r)).then(function(t){var r=function(e,n){"Vary"===n?a.append(n,e):a.set(n,e)};if(!t)return n;t.forEach(r),s.credentials&&a.set("Access-Control-Allow-Credentials","true");var i=Array.isArray(s.exposedHeaders)?s.exposedHeaders.join(","):s.exposedHeaders;return i&&a.set("Access-Control-Expose-Headers",i),"OPTIONS"===e.method?(s.methods&&(o=Array.isArray(s.methods)?s.methods.join(","):s.methods,a.set("Access-Control-Allow-Methods",o)),function(e,n){var t=new Headers;return n?Array.isArray(n)&&(n=n.join(",")):(n=e.headers.get("Access-Control-Request-Headers"),t.append("Vary","Access-Control-Request-Headers")),n&&t.set("Access-Control-Allow-Headers",n),t}(e,s.allowedHeaders).forEach(r),"number"==typeof s.maxAge&&a.set("Access-Control-Max-Age",String(s.maxAge)),s.preflightContinue?n:(a.set("Content-Length","0"),new Response(null,{status:s.optionsSuccessStatus,headers:a}))):n})}catch(e){return Promise.reject(e)}},I=function(e,n){try{var t=function(e){if(e)return function(e,n){var t=new Headers;return"*"===n?t.set("Access-Control-Allow-Origin","*"):"string"==typeof n?(t.set("Access-Control-Allow-Origin",n),t.append("Vary","Origin")):(O(null!=e?e:"",n)&&e&&t.set("Access-Control-Allow-Origin",e),t.append("Vary","Origin")),t}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof n?Promise.resolve("function"==typeof n?n(r,e):n).then(t):t("function"==typeof n?n(r,e):n))}catch(e){return Promise.reject(e)}},C={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function O(e,n){return Array.isArray(n)?n.some(function(n){return O(e,n)}):"string"==typeof n?e===n:n instanceof RegExp?n.test(e):!!n}function R(e){var n={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");return"OPTIONS"===t.method?Promise.resolve(w(t,new Response("ok",{status:200}),n)):Promise.resolve(t.json()).then(function(r){if(!r)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(r)).then(function(e){var r,i=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(r=e)?void 0:r.startsWith("https://")){var s=new URL(e);i=s.origin,e=s.pathname}return e&&(o.push({label:"Live",url:""+i+e}),o.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),w(t,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),n)})})}catch(e){return Promise.reject(e)}}}function b(e){return function(n,t){try{var r;if("GET"===n.method&&null!=(r=n.query)&&r.ping)return console.log("ping"),Promise.resolve(t.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var n=e.headers.authorization;if(!n)return!0;var t=n.split(" ")[1],r=Buffer.from(t,"base64").toString().split(":");return r[0]===process.env.BASIC_AUTH_USER&&r[1]===process.env.BASIC_AUTH_PASSWORD}(n))return Promise.resolve(t.status(401).send("Access denied"));var o=n.body;if(!o||null==o||!o.entity)throw"Payload is empty";var s=o.entity,a=o.event_type,u=o.related_entities.find(function(e){var n,t,r;return e.id===(null==(n=s.relationships)||null==(t=n.item_type)||null==(r=t.data)?void 0:r.id)});if(!u)throw new Error("Model not found in payload");var c=i({},s.attributes,{model:u.attributes}),l=Date.now()-Math.max(new Date(s.meta.updated_at).getTime(),new Date(s.meta.published_at).getTime(),new Date(s.meta.created_at).getTime());return e(c,function(e){try{return Promise.resolve(function(n,r){try{var o=function(){if(!e)throw"Nothing to revalidate. Paths empty";return 0===e.length?t.json({revalidated:!1,paths:e,delay:l,event_type:a}):Promise.resolve(Promise.all(e.map(function(e){return t.revalidate(e)}))).then(function(){return console.log("revalidate"+(l&&!["unpublish","delete"].includes(a)?" ("+l+"ms)":"")+" "+a,e),t.json({revalidated:!0,paths:e,delay:l,event_type:a})})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(n){return console.log("Error revalidating",e),console.error(n),t.json({revalidated:!1,err:n,delay:l,event_type:a})}))}catch(e){return Promise.reject(e)}}),Promise.resolve()}catch(e){return Promise.reject(e)}}}function N(e,n){return function(t,r){try{if("OPTIONS"===t.method)return Promise.resolve(e(t,r));var o=t.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!o||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(r.status(401).send("Access denied"));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(t,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function U(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var j=N(function(e,n){try{if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(n.status(500).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(n.status(500).send("DATOCMS_API_TOKEN not set in .env"));var t=e.query.max?parseInt(e.query.max):1,r="auto-backup-",i=o({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var o,s,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,n){return e.id.replace(r,"")>n.id.replace(r,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(o=null==(s=a[0])?void 0:s.id)?o:"none"),console.log("Max backups: ",t),console.log("Creating backup...",u),U(function(){return Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!0,force:!0})).then(function(){function e(){return console.log("Backup done!"),n.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var r=0,o=function(e,n,t){for(var r;;){var o=e();if(H(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!H(i)){r=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!H(s)){r=2;break}}}var a=new L,u=D.bind(null,a,2);return(0===r?o.then(l):1===r?i.then(c):s.then(v)).then(void 0,u),a;function c(r){i=r;do{if(n&&(s=n())&&s.then&&!H(s))return void s.then(v).then(void 0,u);if(!(o=e())||H(o)&&!o.v)return void D(a,1,i);if(o.then)return void o.then(l).then(void 0,u);H(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,u):c(i):D(a,1,i)}function v(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):D(a,1,i)}}(function(){return r<a.reverse().slice(t-1).length},function(){return r++},function(){var e=U(function(){return console.log("Deleting old backup...",a[r].id),Promise.resolve(i.environments.destroy(a[r].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return o&&o.then?o.then(e):e()})},function(e){return console.error(e),n.status(500).send("Backup failed: "+e.message)})})}catch(e){return Promise.reject(e)}});function D(e,n,t){if(!e.s){if(t instanceof L){if(!t.s)return void(t.o=D.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(D.bind(null,e,n),D.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var L=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{D(r,1,i(this.v))}catch(e){D(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?D(r,1,n?n(o):o):t?D(r,1,t(o)):D(r,2,o)}catch(e){D(r,2,e)}},r},e}();function H(e){return e instanceof L&&1&e.s}function B(e,n){return function(t,r){try{if("OPTIONS"===t.method)return Promise.resolve(e(t,r));var o=t.headers.get("authorization");if(!o)return Promise.resolve(new Response("Access denied",{status:401}));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(t,r):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}}function M(e,n,t){if(!e.s){if(t instanceof k){if(!t.s)return void(t.o=M.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(M.bind(null,e,n),M.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var k=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{M(r,1,i(this.v))}catch(e){M(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?M(r,1,n?n(o):o):t?M(r,1,t(o)):M(r,2,o)}catch(e){M(r,2,e)}},r},e}();function q(e){return e instanceof k&&1&e.s}var W=function(e){var n=e.res;try{return process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN?Promise.resolve(fetch("https://graphql.datocms.com/",{method:"POST",body:JSON.stringify({query:"query Site {\n          site: _site {\n            favicon{\n              url\n              mimeType\n            }\n          }\n        }\n    "}),headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN}})).then(function(e){return Promise.resolve(e.json()).then(function(e){var t=e.data.site;return null!=t&&t.favicon.url?Promise.resolve(fetch(t.favicon.url)).then(function(e){var t;function r(){return n.end(),{props:{}}}var o=e.body.getReader(),i=function(e,n,t){for(var r;;){var o=e();if(q(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!q(i)){r=1;break}i=i.s}}var s=new k,a=M.bind(null,s,2);return(0===r?o.then(c):1===r?i.then(u):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,a):c(o):M(s,1,i)})).then(void 0,a),s;function u(n){i=n;do{if(!(o=e())||q(o)&&!o.v)return void M(s,1,i);if(o.then)return void o.then(c).then(void 0,a);q(i=t())&&(i=i.v)}while(!i||!i.then);i.then(u).then(void 0,a)}function c(e){e?(i=t())&&i.then?i.then(u).then(void 0,a):u(i):M(s,1,i)}}(function(){return!t},0,function(){return Promise.resolve(o.read()).then(function(e){e.done?t=1:n.write(e.value)})});return i&&i.then?i.then(r):r()}):{notFound:!0}})}):Promise.resolve({notFound:!0})}catch(e){return Promise.reject(e)}};function V(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}function x(e,n,t){if(!e.s){if(t instanceof X){if(!t.s)return void(t.o=x.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(x.bind(null,e,n),x.bind(null,e,2));e.s=n,e.v=t;var r=e.o;r&&r(e)}}var X=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{x(r,1,i(this.v))}catch(e){x(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?x(r,1,n?n(o):o):t?x(r,1,t(o)):x(r,2,o)}catch(e){x(r,2,e)}},r},e}(),G=process.env.NEXT_PUBLIC_SITE_URL+"/api",z=function(e,n){try{var t;return Promise.resolve(function(){try{var e=o({apiToken:process.env.DATOCMS_API_TOKEN});return Promise.resolve(e.site.find()).then(function(n){return console.log("Testing site: "+n.name),Promise.resolve(e.itemTypes.list()).then(function(n){var t,r,o,s,a,u=n.filter(function(e){return!e.modular_block}),c=[],l=(t=u,r=function(n){function t(){function t(){c.push(r)}var o=V(function(){return Promise.resolve(function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var t=n[0];return Promise.resolve(fetch(G+"/api/revalidate",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({environment:"main",entity_type:"item",event_type:"update",entity:{id:t.id,type:"item",attributes:i({},t||{}),relationships:{item_type:{data:{id:e.id,type:"item_type"}}},meta:t.meta},related_entities:[{id:e.id,type:"item_type",attributes:e}]})})).then(function(e){if(200===e.status)return Promise.resolve(e.json());throw console.log(e.status,e.statusText),new Error("Error testing revalidate endpoint: "+e.status+" "+e.statusText)})})}catch(e){return Promise.reject(e)}}(u[n],e)).then(function(e){r.revalidate=e})},function(e){console.log(e)});return o&&o.then?o.then(t):t()}var r={model:u[n].api_key},o=V(function(){return Promise.resolve(function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var t=n[0];return Promise.resolve(fetch(G+"/web-previews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({item:{attributes:t||{}},itemType:{attributes:e},environmentId:"main",locale:"en"})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.previewLinks})})})}catch(e){return Promise.reject(e)}}(u[n],e)).then(function(e){e.length>0&&(r.previews=e)})},function(){});return o&&o.then?o.then(t):t()},a=-1,function e(n){try{for(;++a<t.length;)if((n=r(a))&&n.then){if(!((i=n)instanceof X&&1&i.s))return void n.then(e,s||(s=x.bind(null,o=new X,2)));n=n.v}o?x(o,1,n):o=n}catch(e){x(o||(o=new X),2,e)}var i}(),o);return l&&l.then?l.then(function(){return c}):c})})}catch(e){return Promise.reject(e)}}()).then(function(r){null!=(t=e.query)&&t.json?n.status(200).json(r):n.status(200).send(function(e){e.map(function(e){return e.model+" - Previews: "+(e.previews?"YES":"NO")+" / Revalidate: "+(e.revalidate?"YES":"NO")}).join("\n");var n=e.filter(function(e){return e.previews}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n"),t=e.filter(function(e){return e.revalidate}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n");return"WEB PREVIEWS\n"+n+"\n\nNO WEB PREVIEWS:\n"+e.filter(function(e){return!e.previews}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n")+"\n\nREVALIDATE\n"+t+"\n\nNO REVALIDATE\n"+e.filter(function(e){return!e.revalidate}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n")}(r))})}catch(e){return Promise.reject(e)}};export{j as withBackup,N as withBasicAuth,B as withBasicAuthEdge,W as withFavicon,_ as withGlobalProps,S as withPreview,b as withRevalidate,z as withTests,g as withWebPreviews,R as withWebPreviewsEdge};
//# sourceMappingURL=index.modern.mjs.map
