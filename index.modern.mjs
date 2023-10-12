import{ApolloClient as e,InMemoryCache as n,gql as r}from"@apollo/client/core/core.cjs";import{BatchHttpLink as t}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import i,{useState as s,useEffect as a,useCallback as u,useRef as c}from"react";import{useRouter as l}from"next/router.js";import{DefaultSeo as f,NextSeo as v}from"next-seo";import d from"react-markdown";import h from"remark-gfm";import p from"next/link.js";import m from"markdown-truncate";import g from"remark-breaks";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},E.apply(this,arguments)}var w,P;function A(e,n,r){if(!e.s){if(r instanceof y){if(!r.s)return void(r.o=A.bind(null,e,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(A.bind(null,e,n),A.bind(null,e,2));e.s=n,e.v=r;var t=e.o;t&&t(e)}}var S="undefined"==typeof window,y=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,r){var t=new e,o=this.s;if(o){var i=1&o?n:r;if(i){try{A(t,1,i(this.v))}catch(e){A(t,2,e)}return t}return this}return this.o=function(e){try{var o=e.v;1&e.s?A(t,1,n?n(o):o):r?A(t,1,r(o)):A(t,2,o)}catch(e){A(t,2,e)}},t},e}();function T(e){return e instanceof y&&1&e.s}var _,b=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",I=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,C=null!=(w=null!=(P=process.env.DATOCMS_ENVIRONMENT)?P:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?w:"main",O=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,R={uri:b,fetch:"true"===process.env.LOG_GRAPHQL?function(e,n){try{var r=n?JSON.parse(n.body.toString()):void 0,t=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,n)).then(function(e){var n=(new Date).getTime();return E({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+t,"- "+((new Date).getTime()-n)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},N=function(e,n){void 0===e&&(e=!1);var r={Authorization:"Bearer "+n,"X-Exclude-Invalid":"true"};return(e||O)&&(r["X-Include-Drafts"]=!0),C&&(r["X-Environment"]=C),new t(E({},R,{headers:r}))},U=N(!1,I),k=N(!0,I),H=new e({link:U,cache:new n,ssrMode:S,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),L=function(e,n){try{var r=n||{},t=r.variables,o=r.preview,i=void 0!==o&&o,s=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!I&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(n,r){try{var o=function(){H.setLink(s?N(i,s):i?k:U);var n=(Array.isArray(e)?e:[e]).map(function(e,n){var r=Array.isArray(t)&&t.length>n-1?t[n]:t||{};return H.query({query:e,variables:r})});return Promise.resolve(Promise.all(n)).then(function(e){var n=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return n.push(e)})}),n.length)throw new Error(n.join(". "));var r={};return e.forEach(function(e){return r=E({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},M=function(e){var n=e.definitions.find(function(e){return"OperationDefinition"===e.kind});if(!n)throw new Error("Not a pagable query. Missing operation definition");var r=n.variableDefinitions;if(!n.selectionSet.selections.find(function(e){var n;return"pagination"===(null==(n=e.alias)?void 0:n.value)}))throw new Error("Not a pagable query. Missing pagination field");if(!r.find(function(e){return"first"===e.variable.name.value}))throw new Error("Not a pagable query. Missing $first variable");if(!r.find(function(e){return"skip"===e.variable.name.value}))throw new Error("Not a pagable query. Missing $skip variable");return!0},D=function(e,n,r){void 0===n&&(n={}),void 0===r&&(r={batchSize:50,delay:100});try{M(e);var t={},o=100;return Promise.resolve(L(e,{variables:E({},n.variables,{first:o,skip:0})})).then(function(i){var s;if(void 0===(null==(s=i.pagination)?void 0:s.count))throw new Error("Not a pagable query");var a=i.pagination.count,u=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++){var o=n[r],i=e[n[r]];t[o]=Array.isArray(i)&&t[o]?t[o].concat(i):i}},c=function(e){return"rejected"===e.status};u(i);var l=[],f=o,v=function(e,n,r){for(var t;;){var o=e();if(T(o)&&(o=o.v),!o)return i;if(o.then){t=0;break}var i=r();if(i&&i.then){if(!T(i)){t=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!T(s)){t=2;break}}}var a=new y,u=A.bind(null,a,2);return(0===t?o.then(l):1===t?i.then(c):s.then(f)).then(void 0,u),a;function c(t){i=t;do{if(n&&(s=n())&&s.then&&!T(s))return void s.then(f).then(void 0,u);if(!(o=e())||T(o)&&!o.v)return void A(a,1,i);if(o.then)return void o.then(l).then(void 0,u);T(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=r())&&i.then?i.then(c).then(void 0,u):c(i):A(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):A(a,1,i)}}(function(){return f<a},function(){return!!(f+=o)},function(){return function(){if(!(l.length<r.batchSize&&f+o<a))return l.push(L(e,{variables:E({},n.variables,{first:o,skip:f})})),Promise.resolve(Promise.allSettled(l)).then(function(e){var n,t=null==(n=e.find(c))?void 0:n.reason;if(t)throw new Error(t);for(var o=0;o<e.length;o++)u(e[o].value);return Promise.resolve(new Promise(function(e){return setTimeout(e,r.delay)})).then(function(){l=[]})});l.push(L(e,{variables:E({},n.variables,{first:o,skip:f})}))}()});return v&&v.then?v.then(function(e){return t}):t})}catch(e){return Promise.reject(e)}},j=function(e,n){return r("query GetSEO{\n    seo: "+e+" "+(n?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},B=function(e){return console.error(e),e.message||e};function x(e,n){var r=parseInt(process.env.REVALIDATE_TIME),t=[W];return e.query&&t.push(e.query),e.queries&&t.push.apply(t,e.queries),e.seo&&t.push(j(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(L(t,{preview:e.preview})).then(function(t){return n?Promise.resolve(n({context:e,props:E({},t),revalidate:r})):{props:E({},t),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}}var q,V,W=r(_||(q=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],V||(V=q.slice(0)),q.raw=V,_=q)),X=function(e,n){try{var r;if("GET"===e.method&&null!=(r=e.query)&&r.ping)return Promise.resolve(n.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(n.status(500).json({message:"Invalid slug"}));var t=e.query.slug,o=t?t.startsWith("/")?t:"/"+t:"/";try{n.setPreviewData({},{maxAge:3}),n.writeHead(307,{Location:o}),n.end()}catch(e){return console.error(e),Promise.resolve(n.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function z(e){return function(n,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===n.method)return Promise.resolve(r.status(200).send("ok"));if(!n.body)throw new Error("No body found in request");var t=[];return Promise.resolve(e(n.body)).then(function(e){var n,o=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(n=e)?void 0:n.startsWith("https://")){var i=new URL(e);o=i.origin,e=i.pathname}return e&&(t.push({label:"Live",url:""+o+e}),t.push({label:"Preview",url:o+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),r.status(200).json({previewLinks:t})})}catch(e){return Promise.reject(e)}}}var G=function(e,n,r){try{var t,o,i=E({},K,r),s=n.headers;return Promise.resolve(Q(e,null!=(t=i.origin)&&t)).then(function(r){var t=function(e,n){"Vary"===n?s.append(n,e):s.set(n,e)};if(!r)return n;r.forEach(t),i.credentials&&s.set("Access-Control-Allow-Credentials","true");var a=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return a&&s.set("Access-Control-Expose-Headers",a),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,s.set("Access-Control-Allow-Methods",o)),function(e,n){var r=new Headers;return n?Array.isArray(n)&&(n=n.join(",")):(n=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),n&&r.set("Access-Control-Allow-Headers",n),r}(e,i.allowedHeaders).forEach(t),"number"==typeof i.maxAge&&s.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?n:(s.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:s}))):n})}catch(e){return Promise.reject(e)}},Q=function(e,n){try{var r=function(e){if(e)return function(e,n){var r=new Headers;return"*"===n?r.set("Access-Control-Allow-Origin","*"):"string"==typeof n?(r.set("Access-Control-Allow-Origin",n),r.append("Vary","Origin")):(J(null!=e?e:"",n)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}(t,e)},t=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof n?Promise.resolve("function"==typeof n?n(t,e):n).then(r):r("function"==typeof n?n(t,e):n))}catch(e){return Promise.reject(e)}},K={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function J(e,n){return Array.isArray(n)?n.some(function(n){return J(e,n)}):"string"==typeof n?e===n:n instanceof RegExp?n.test(e):!!n}function Y(e){var n={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(r,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");return"OPTIONS"===r.method?Promise.resolve(G(r,new Response("ok",{status:200}),n)):Promise.resolve(r.json()).then(function(t){if(!t)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(t)).then(function(e){var t,i=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(t=e)?void 0:t.startsWith("https://")){var s=new URL(e);i=s.origin,e=s.pathname}return e&&(o.push({label:"Live",url:""+i+e}),o.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),G(r,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),n)})})}catch(e){return Promise.reject(e)}}}function F(e){return function(n,r){try{var t;if("GET"===n.method&&null!=(t=n.query)&&t.ping)return Promise.resolve(r.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var n=e.headers.authorization;if(!n)return!0;var r=n.split(" ")[1],t=Buffer.from(r,"base64").toString().split(":");return t[0]===process.env.BASIC_AUTH_USER&&t[1]===process.env.BASIC_AUTH_PASSWORD}(n))return Promise.resolve(r.status(401).send("Access denied"));var o=n.body;if(!o||!o.entity)throw"Payload is empty";return Promise.resolve(function(e){try{var n=e.entity,r=e.related_entities.find(function(e){var r,t,o;return e.id===(null==(r=n.relationships)||null==(t=r.item_type)||null==(o=t.data)?void 0:o.id)});if(!r)throw new Error("Model not found in payload");return Promise.resolve(E({},n.attributes,{model:r.attributes}))}catch(e){return Promise.reject(e)}}(o)).then(function(n){var t=null!=n&&n.updated_at?(new Date).getTime()-new Date(n.updated_at).getTime():null;e(n,function(e){try{return Promise.resolve(function(n,o){try{var i=function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidate"+(t?" ("+t+"ms)":""),e),r.json({revalidated:!0,paths:e})})}()}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(n){return console.log("Error revalidating",e),console.log(n),r.json({revalidated:!1,err:n})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}function Z(e,n){return function(r,t){try{if("OPTIONS"===r.method)return Promise.resolve(e(r,t));var o=r.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!o||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(t.status(401).send("Access denied"));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(r,t):t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function $(e,n){try{var r=e()}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}var ee=Z(function(e,n){try{if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(n.status(500).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(n.status(500).send("DATOCMS_API_TOKEN not set in .env"));var r=e.query.max?parseInt(e.query.max):1,t="auto-backup-",i=o({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var o,s,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,n){return e.id.replace(t,"")>n.id.replace(t,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(o=null==(s=a[0])?void 0:s.id)?o:"none"),console.log("Max backups: ",r),console.log("Creating backup...",u),$(function(){return Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!1,force:!0})).then(function(){function e(){return console.log("Backup done!"),n.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var t=0,o=function(e,n,r){for(var t;;){var o=e();if(te(o)&&(o=o.v),!o)return i;if(o.then){t=0;break}var i=r();if(i&&i.then){if(!te(i)){t=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!te(s)){t=2;break}}}var a=new re,u=ne.bind(null,a,2);return(0===t?o.then(l):1===t?i.then(c):s.then(f)).then(void 0,u),a;function c(t){i=t;do{if(n&&(s=n())&&s.then&&!te(s))return void s.then(f).then(void 0,u);if(!(o=e())||te(o)&&!o.v)return void ne(a,1,i);if(o.then)return void o.then(l).then(void 0,u);te(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=r())&&i.then?i.then(c).then(void 0,u):c(i):ne(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):ne(a,1,i)}}(function(){return t<a.reverse().slice(r-1).length},function(){return t++},function(){var e=$(function(){return console.log("Deleting old backup...",a[t].id),Promise.resolve(i.environments.destroy(a[t].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return o&&o.then?o.then(e):e()})},function(e){return console.error(e),n.status(500).send("Backup failed: "+e.message)})})}catch(e){return Promise.reject(e)}});function ne(e,n,r){if(!e.s){if(r instanceof re){if(!r.s)return void(r.o=ne.bind(null,e,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(ne.bind(null,e,n),ne.bind(null,e,2));e.s=n,e.v=r;const t=e.o;t&&t(e)}}var re=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,r){var t=new e,o=this.s;if(o){var i=1&o?n:r;if(i){try{ne(t,1,i(this.v))}catch(e){ne(t,2,e)}return t}return this}return this.o=function(e){try{var o=e.v;1&e.s?ne(t,1,n?n(o):o):r?ne(t,1,r(o)):ne(t,2,o)}catch(e){ne(t,2,e)}},t},e}();function te(e){return e instanceof re&&1&e.s}function oe(e,n){return function(r,t){try{if("OPTIONS"===r.method)return Promise.resolve(e(r,t));var o=r.headers.get("authorization");if(!o)return Promise.resolve(new Response("Access denied",{status:401}));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(r,t):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}}var ie=function(e,n){var r,t,o,i=void 0===n?{}:n,c=i.variables,l=i.initialData,f=i.pageSize,v=i.preview,d=void 0!==v&&v,h=s(l),p=h[0],m=h[1],g=s(l),w=g[0],P=g[1],A=s(f?{no:1,count:(null==(r=l.pagination)?void 0:r.count)||0,size:f,end:(null==(t=l.pagination)?void 0:t.count)>0&&(null==(o=l.pagination)?void 0:o.count)<=f}:void 0),S=A[0],y=A[1],T=s(),_=T[0],b=T[1],I=s(!1),C=I[0],O=I[1];a(function(){JSON.stringify(l)!==JSON.stringify(p)&&(P(l),m(l))},[l]);var R=u(function(n){return O(!0),L(e,{variables:E({},c,n),preview:d}).then(function(e){var n=U(e,w);return P(n),n}).finally(function(){return O(!1)})},[e,c,w]),N=u(function(){try{if(!S)return Promise.resolve(b(new Error("No page size set!")));var e=S.size,n=S.no*S.size;return Promise.resolve(n>S.count&&S.count>0?S:function(r,t){try{var o=Promise.resolve(R(E({},c.variables,{first:e,skip:n}))).then(function(e){var n,r=(null==(n=e[Object.keys(e).find(function(n){return!isNaN(e[n].count)})])?void 0:n.count)||0,t=S.no+1,o=E({},S,{no:t,count:r,end:t*f>=r});return y(o),o})}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){return b(e),S}))}catch(e){return Promise.reject(e)}},[S,c,f,y,b,R]),U=function(e,n){return n&&e?(Object.keys(e).forEach(function(r){n[r]&&Array.isArray(n[r])&&(e[r]=n[r].concat(e[r]))}),e):e};return a(function(){!l&&R()},[l,R]),{data:w,error:_,loading:C,loadMore:function(e){return R(e)},nextPage:N,page:S}},se=function(){var e=globalThis.localStorage,n=l(),r=s(void 0!==e?e.getItem("previousRoute"):null),t=r[0],o=r[1];return a(function(){var r=e.getItem("currentRoute")||null;r!==n.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",n.asPath),o(r))},[n.asPath,e]),a(function(){var n=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",n),function(){return window.removeEventListener("unload",n)}},[]),t};function ae(e){void 0===e&&(e=0);var n="undefined"==typeof window,r=s({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:n?0:window.pageYOffset,documentHeight:n?0:document.documentElement.offsetHeight,viewportHeight:n?0:window.innerHeight,timer:null}),t=r[0],o=r[1],i=c(t),l=u(function(){clearTimeout(i.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),t=n?0:window.innerHeight,s=n?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!n&&window.innerHeight+s>=r-e,u={isScrolling:!0,isPageTop:!!n||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:s<i.current.scrolledPosition,isScrolledDown:s>i.current.scrolledPosition,scrolledPosition:s,documentHeight:r,viewportHeight:t,timer:i.current.timer};o(u),i.current=E({},u,{timer:setTimeout(function(){return o(E({},u,{isScrolling:!1}))},100)})},[n,e]);return a(function(){return l(),window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}},[l]),t}var ue=function(){return a(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var n=e.target;"STYLE"===n.nodeName&&"x"===n.getAttribute("media")&&n.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},ce=function(e){var n,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var t=fe(e),o=e.siteTitle+(null!=(n=t.globalSeo)&&n.titleSuffix?" "+(null==(r=t.globalSeo)?void 0:r.titleSuffix):" —")+" %s";/*#__PURE__*/return i.createElement(f,E({},t,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:t.favicons}))},le=function(e){var n=fe(e);/*#__PURE__*/return i.createElement(v,n)},fe=function(e){var n=e.seo,r=e.site,t=void 0===r?{}:r,o=e.title,i=e.description,s=e.noindex,a=void 0!==s&&s,u=de({seo:void 0===n?{}:n,site:t}),c=t.globalSeo,l=t.favicon,f=l?l.map(function(e){return E({},e.attributes)}):[],v=ve(u["og:image"],u["og:image:width"],u["og:image:height"]);return i||(i=u.description?u.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:v,description:i,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:o,image:u["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:a,nofollow:a,meta:u,title:o,description:i,favicons:f,globalSeo:c,images:v}},ve=function(e,n,r){if(e)return e.split("?"),[{url:e,width:n,height:r}]},de=function(e){var n=e.seo,r=e.site;if(!n||!r)return[];var t=(r||{}).globalSeo,o=(t||{}).fallbackSeo,i=(Array.isArray(n)?n:n.tags)||[],s=i.filter(function(e){return"title"===e.tag})[0];s&&t&&t&&s.content.startsWith(t.siteName)&&(s=E({},s,{content:t.siteName+" – "+s.content})),i=i.map(function(e){return"title"!==e.tag?e:s});var a={};if(i.forEach(function(e){a[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!a["og:image"]&&null!=o&&o.image){var u=1-(o.image.width-1e3)/o.image.width;a["og:image"]=o.image.url+"?w=1000",a["og:image:width"]=1e3,a["og:image:height"]=Math.round(o.image.height*u)}return a},he=function(e){var n=e.children,r=e.truncate,t=e.className,o=e.components,s=e.sentances,a=e.allowedElements,u=e.scroll,c=void 0===u||u,l=e.disableBreaks,f=void 0!==l&&l;if(!n)return null;var v=r?m(n,{limit:r,ellipsis:!0}):s?function(e,n){if(!e)return e;var r=e.split(".");return r.length>=n?r.slice(0,n).join(" ")+"...":e}(n,s):n;/*#__PURE__*/return i.createElement(d,{remarkPlugins:f?[h]:[h,g],className:t,children:v,allowedElements:a,components:null!=o?o:{a:function(e){/*#__PURE__*/return i.createElement(p,{scroll:c,href:e.href},e.children[0])}}})};function pe(e,n,r){if(!e.s){if(r instanceof me){if(!r.s)return void(r.o=pe.bind(null,e,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(pe.bind(null,e,n),pe.bind(null,e,2));e.s=n,e.v=r;const t=e.o;t&&t(e)}}var me=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,r){var t=new e,o=this.s;if(o){var i=1&o?n:r;if(i){try{pe(t,1,i(this.v))}catch(e){pe(t,2,e)}return t}return this}return this.o=function(e){try{var o=e.v;1&e.s?pe(t,1,n?n(o):o):r?pe(t,1,r(o)):pe(t,2,o)}catch(e){pe(t,2,e)}},t},e}();function ge(e){return e instanceof me&&1&e.s}var Ee="undefined"==typeof window,we=function(e,n){for(var r=[],t=0;t<e.length;t+=n)r.push(e.slice(t,t+n));return r},Pe=function(e){var n=e.errors.map(function(e){var n=e.attributes,r=n.details;return{code:n.code,field:null==r?void 0:r.field,message:null==r?void 0:r.message,detailsCode:null==r?void 0:r.code,errors:Array.isArray(null==r?void 0:r.errors)?null==r?void 0:r.errors.join(". "):void 0}});return n.map(function(e){var n=e.field,r=e.errors;return e.code+" "+(n?"("+n+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(r?"("+r+")":"")}).join("\n")},Ae=function(e){return 0===Object.keys(e).filter(function(n){return void 0!==e[n]}).length},Se=function(e,n){return void 0===n&&(n=!1),(n?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},ye=function(e){return new Promise(function(n,r){return setTimeout(n,e)})},Te=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},_e=function(e,n,r,t){var o,i;if(void 0===n&&(n=1),void 0===r&&(r=!0),void 0===t&&(t=200),!e||e.length<t)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,n+1).join(".").lastIndexOf("."),a=null==(i=e.split("? "))?void 0:i.slice(0,n+1).join("? ").lastIndexOf("? "),u=-1!==a&&a<s||-1===s&&a>-1;return-1===s&&-1===a&&(s=t-1,r=!0),e.substring(0,u?a:s)+(r?"...":u?"?":".")},be=function(e,n){if(e.length<=n)return e;var r=e.substring(0,n),t=r.lastIndexOf(" ");return-1!==t&&(r=r.substr(0,t)),r+"..."},Ie=function(e,n){var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,t){var o=r.findIndex(function(r){var t;return r===(null==(t=n?e[n]:e)?void 0:t.charAt(0).toUpperCase())}),i=r.findIndex(function(e){var r;return e===(null==(r=n?t[n]:t)?void 0:r.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},Ce=function(e){try{var n,r=function(r){if(n)return r;throw new Error("Element "+e+" not found")},t=0,o=function(e,n,r){for(var t;;){var o=e();if(ge(o)&&(o=o.v),!o)return i;if(o.then){t=0;break}var i=r();if(i&&i.then){if(!ge(i)){t=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!ge(s)){t=2;break}}}var a=new me,u=pe.bind(null,a,2);return(0===t?o.then(l):1===t?i.then(c):s.then(f)).then(void 0,u),a;function c(t){i=t;do{if(n&&(s=n())&&s.then&&!ge(s))return void s.then(f).then(void 0,u);if(!(o=e())||ge(o)&&!o.v)return void pe(a,1,i);if(o.then)return void o.then(l).then(void 0,u);ge(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=r())&&i.then?i.then(c).then(void 0,u):c(i):pe(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):pe(a,1,i)}}(function(){return!n&&t<100},function(){return t++},function(){var r=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(n){e=e.replace(n,'[id="'+n.replace("#","")+'"]')}),e}(e));return r?(n=1,r):Promise.resolve(ye(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(r):r(o))}catch(e){return Promise.reject(e)}};export{he as DatoMarkdown,le as DatoSEO,ce as DefaultDatoSEO,j as SEOQuery,L as apiQuery,D as apiQueryAll,Ce as awaitElement,Se as capitalize,M as checkIsPaganationQuery,we as chunkArray,H as client,G as cors,B as datoError,Ae as isEmpty,Ee as isServer,Pe as parseDatoError,Te as rInt,ye as sleep,Ie as sortSwedish,_e as truncateParagraph,be as truncateWords,ie as useApiQuery,se as usePreviousRoute,ae as useScrollInfo,ue as useTransitionFix,ee as withBackup,Z as withBasicAuth,oe as withBasicAuthEdge,x as withGlobalProps,X as withPreview,F as withRevalidate,z as withWebPreviews,Y as withWebPreviewsEdge};
//# sourceMappingURL=index.modern.mjs.map
