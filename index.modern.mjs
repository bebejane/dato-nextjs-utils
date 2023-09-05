import{ApolloClient as e,InMemoryCache as n,gql as t}from"@apollo/client/core/core.cjs";import{BatchHttpLink as r}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import i,{useState as s,useEffect as u,useCallback as a,useRef as c}from"react";import{useRouter as l}from"next/router.js";import{DefaultSeo as f,NextSeo as v}from"next-seo";import d from"react-markdown";import h from"remark-gfm";import p from"next/link.js";import m from"markdown-truncate";import g from"remark-breaks";function A(){return A=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},A.apply(this,arguments)}var E,P;function w(e,n,t){if(!e.s){if(t instanceof S){if(!t.s)return void(t.o=w.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(w.bind(null,e,n),w.bind(null,e,2));e.s=n,e.v=t;var r=e.o;r&&r(e)}}var y="undefined"==typeof window,S=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{w(r,1,i(this.v))}catch(e){w(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?w(r,1,n?n(o):o):t?w(r,1,t(o)):w(r,2,o)}catch(e){w(r,2,e)}},r},e}();function T(e){return e instanceof S&&1&e.s}var _,b=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",I=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,C=null!=(E=null!=(P=process.env.DATOCMS_ENVIRONMENT)?P:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?E:"main",O=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,R={uri:b,fetch:"true"===process.env.LOG_GRAPHQL?function(e,n){try{var t=n?JSON.parse(n.body.toString()):void 0,r=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,n)).then(function(e){var n=(new Date).getTime();return A({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+r,"- "+((new Date).getTime()-n)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},N=function(e,n){void 0===e&&(e=!1);var t={Authorization:"Bearer "+n,"X-Exclude-Invalid":"true"};return(e||O)&&(t["X-Include-Drafts"]=!0),C&&(t["X-Environment"]=C),new r(A({},R,{headers:t}))},U=N(!1,I),L=N(!0,I),k=new e({link:U,cache:new n,ssrMode:y,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),H=function(e,n){try{var t=n||{},r=t.variables,o=t.preview,i=void 0!==o&&o,s=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!I&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(n,t){try{var o=function(){k.setLink(s?N(i,s):i?L:U);var n=(Array.isArray(e)?e:[e]).map(function(e,n){var t=Array.isArray(r)&&r.length>n-1?r[n]:r||{};return k.query({query:e,variables:t})});return Promise.resolve(Promise.all(n)).then(function(e){var n=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return n.push(e)})}),n.length)throw new Error(n.join(". "));var t={};return e.forEach(function(e){return t=A({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},j=function(e,n,t){void 0===n&&(n={}),void 0===t&&(t={batchSize:50,delay:100});try{var r={},o=100;return Promise.resolve(H(e,{variables:A({},n.variables,{first:o,skip:0})})).then(function(i){var s;if(void 0===(null==(s=i.pagination)?void 0:s.count))throw new Error("Not a pagable query");var u=i.pagination.count,a=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++){var o=n[t],i=e[n[t]];r[o]=Array.isArray(i)&&r[o]?r[o].concat(i):i}},c=function(e){return"rejected"===e.status};a(i);var l=[],f=o,v=function(e,n,t){for(var r;;){var o=e();if(T(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!T(i)){r=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!T(s)){r=2;break}}}var u=new S,a=w.bind(null,u,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,a),u;function c(r){i=r;do{if(n&&(s=n())&&s.then&&!T(s))return void s.then(f).then(void 0,a);if(!(o=e())||T(o)&&!o.v)return void w(u,1,i);if(o.then)return void o.then(l).then(void 0,a);T(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,a)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,a):c(i):w(u,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,a):l(o):w(u,1,i)}}(function(){return f<u},function(){return!!(f+=o)},function(){return function(){if(!(l.length<t.batchSize&&f+o<u))return l.push(H(e,{variables:A({},n.variables,{first:o,skip:f})})),Promise.resolve(Promise.allSettled(l)).then(function(e){var n,r=null==(n=e.find(c))?void 0:n.reason;if(r)throw new Error(r);for(var o=0;o<e.length;o++)a(e[o].value);return Promise.resolve(new Promise(function(e){return setTimeout(e,t.delay)})).then(function(){l=[]})});l.push(H(e,{variables:A({},n.variables,{first:o,skip:f})}))}()});return v&&v.then?v.then(function(e){return r}):r})}catch(e){return Promise.reject(e)}},M=function(e,n){return t("query GetSEO{\n    seo: "+e+" "+(n?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},D=function(e){return console.error(e),e.message||e};function B(e,n){var t=parseInt(process.env.REVALIDATE_TIME),r=[V];return e.query&&r.push(e.query),e.queries&&r.push.apply(r,e.queries),e.seo&&r.push(M(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(H(r,{preview:e.preview})).then(function(r){return n?Promise.resolve(n({context:e,props:A({},r),revalidate:t})):{props:A({},r),context:e,revalidate:t}})}catch(e){return Promise.reject(e)}}}var x,q,V=t(_||(x=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],q||(q=x.slice(0)),x.raw=q,_=x)),W=function(e,n){try{var t;if("GET"===e.method&&null!=(t=e.query)&&t.ping)return Promise.resolve(n.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(n.status(500).json({message:"Invalid slug"}));var r=e.query.slug,o=r?r.startsWith("/")?r:"/"+r:"/";try{n.setPreviewData({},{maxAge:10}),n.writeHead(307,{Location:o}),n.end()}catch(e){return console.error(e),Promise.resolve(n.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}};function X(e){return function(n,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),t.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),t.setHeader("Content-Type","application/json"),"OPTIONS"===n.method)return Promise.resolve(t.status(200).send("ok"));if(!n.body)throw new Error("No body found in request");var r=n.body,o=[];return Promise.resolve(e(r)).then(function(e){var n,i,s,u=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(n=e)?void 0:n.startsWith("https://")){var a=new URL(e);u=a.origin,e=a.pathname}return e&&(o.push({label:"Live",url:""+u+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==r||null==(i=r.item)||null==(s=i.meta)?void 0:s.status)&&o.push({label:"Preview",url:u+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),t.status(200).json({previewLinks:o})})}catch(e){return Promise.reject(e)}}}var G=function(e,n,t){try{var r,o,i=A({},Q,t),s=n.headers;return Promise.resolve(z(e,null!=(r=i.origin)&&r)).then(function(t){var r=function(e,n){"Vary"===n?s.append(n,e):s.set(n,e)};if(!t)return n;t.forEach(r),i.credentials&&s.set("Access-Control-Allow-Credentials","true");var u=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return u&&s.set("Access-Control-Expose-Headers",u),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,s.set("Access-Control-Allow-Methods",o)),function(e,n){var t=new Headers;return n?Array.isArray(n)&&(n=n.join(",")):(n=e.headers.get("Access-Control-Request-Headers"),t.append("Vary","Access-Control-Request-Headers")),n&&t.set("Access-Control-Allow-Headers",n),t}(e,i.allowedHeaders).forEach(r),"number"==typeof i.maxAge&&s.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?n:(s.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:s}))):n})}catch(e){return Promise.reject(e)}},z=function(e,n){try{var t=function(e){if(e)return function(e,n){var t=new Headers;return"*"===n?t.set("Access-Control-Allow-Origin","*"):"string"==typeof n?(t.set("Access-Control-Allow-Origin",n),t.append("Vary","Origin")):(K(null!=e?e:"",n)&&e&&t.set("Access-Control-Allow-Origin",e),t.append("Vary","Origin")),t}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof n?Promise.resolve("function"==typeof n?n(r,e):n).then(t):t("function"==typeof n?n(r,e):n))}catch(e){return Promise.reject(e)}},Q={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function K(e,n){return Array.isArray(n)?n.some(function(n){return K(e,n)}):"string"==typeof n?e===n:n instanceof RegExp?n.test(e):!!n}function J(e){var n={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");return"OPTIONS"===t.method?Promise.resolve(G(t,new Response("ok",{status:200}),n)):Promise.resolve(t.json()).then(function(r){if(!r)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(r)).then(function(e){var i,s,u,a=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(i=e)?void 0:i.startsWith("https://")){var c=new URL(e);a=c.origin,e=c.pathname}return e&&(o.push({label:"Live",url:""+a+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==r||null==(s=r.item)||null==(u=s.meta)?void 0:u.status)&&o.push({label:"Preview",url:a+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),G(t,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),n)})})}catch(e){return Promise.reject(e)}}}function Y(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}function F(e){return function(n,t){try{var r;if("GET"===n.method&&null!=(r=n.query)&&r.ping)return Promise.resolve(t.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var n=e.headers.authorization;if(!n)return!0;var t=n.split(" ")[1],r=Buffer.from(t,"base64").toString().split(":");return r[0]===process.env.BASIC_AUTH_USER&&r[1]===process.env.BASIC_AUTH_PASSWORD}(n))return Promise.resolve(t.status(401).send("Access denied"));var i=n.body;if(!i||!i.entity)throw"Payload is empty";return Promise.resolve(function(e){try{var n,t,r,i,s=null==e||null==(n=e.entity)||null==(t=n.relationships)||null==(r=t.item_type)||null==(i=r.data)?void 0:i.id,u=null==e?void 0:e.event_type;if(!s)throw"Model id not found in payload!";var a=o({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.find(s)).then(function(n){return Y(function(){return Promise.resolve(a.items.find(e.entity.id,{version:"current"})).then(function(e){if(!e&&"delete"!==u)throw"No record found with modelId: "+s+" ("+n.api_key+")";return A({},e,{model:n})})},function(t){var r;if(404===(null==(r=t.response)?void 0:r.status)&&("delete"===u||"unpublish"===u))return A({id:e.entity.id},e.entity.attributes,{model:n});throw t})})}catch(e){return Promise.reject(e)}}(i)).then(function(n){n._payload=i.entity,e(n,function(e){try{return Promise.resolve(Y(function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return t.revalidate(e)}))).then(function(){return t.json({revalidated:!0,paths:e})})},function(e){return console.log("error when revalidating"),console.log(e),t.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}}function Z(e){return function(n,t){try{var r=n.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!r||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(t.status(401).send("Access denied"));var o=r.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(n,t):t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function $(e,n,t){if(!e.s){if(t instanceof ne){if(!t.s)return void(t.o=$.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then($.bind(null,e,n),$.bind(null,e,2));e.s=n,e.v=t;var r=e.o;r&&r(e)}}var ee=Z(function(e,n){try{if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(n.status(500).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(n.status(500).send("DATOCMS_API_TOKEN not set in .env"));var t=e.query.max?parseInt(e.query.max):1,r="auto-backup-",i=o({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var o,s,u=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,n){return e.id.replace(r,"")>n.id.replace(r,"")?-1:1}),a="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(o=null==(s=u[0])?void 0:s.id)?o:"none"),console.log("Max backups: ",t),console.log("Creating backup...",a),function(e,r){try{var o=Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:a},{immediate_return:!1,fast:!1,force:!0})).then(function(){function e(){return console.log("Backup done!"),n.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+a)}var r=0,o=function(e,n,t){for(var r;;){var o=e();if(te(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!te(i)){r=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!te(s)){r=2;break}}}var u=new ne,a=$.bind(null,u,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,a),u;function c(r){i=r;do{if(n&&(s=n())&&s.then&&!te(s))return void s.then(f).then(void 0,a);if(!(o=e())||te(o)&&!o.v)return void $(u,1,i);if(o.then)return void o.then(l).then(void 0,a);te(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,a)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,a):c(i):$(u,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,a):l(o):$(u,1,i)}}(function(){return r<u.reverse().slice(t-1).length},function(){return r++},function(){return console.log("Deleting old backup...",u[r].id),Promise.resolve(i.environments.destroy(u[r].id)).then(function(){})});return o&&o.then?o.then(e):e()})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.error(e),n.status(500).send("Backup failed: "+e.message)})})}catch(e){return Promise.reject(e)}});const ne=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){const r=new e,o=this.s;if(o){const e=1&o?n:t;if(e){try{$(r,1,e(this.v))}catch(e){$(r,2,e)}return r}return this}return this.o=function(e){try{const o=e.v;1&e.s?$(r,1,n?n(o):o):t?$(r,1,t(o)):$(r,2,o)}catch(e){$(r,2,e)}},r},e}();function te(e){return e instanceof ne&&1&e.s}function re(e){return function(n,t){try{var r=n.headers.get("authorization");if(!r)return Promise.resolve(new Response("Access denied",{status:401}));var o=r.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(n,t):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}}var oe=function(e,n){var t,r,o,i=void 0===n?{}:n,c=i.variables,l=i.initialData,f=i.pageSize,v=i.preview,d=void 0!==v&&v,h=s(l),p=h[0],m=h[1],g=s(l),E=g[0],P=g[1],w=s(f?{no:1,count:(null==(t=l.pagination)?void 0:t.count)||0,size:f,end:(null==(r=l.pagination)?void 0:r.count)>0&&(null==(o=l.pagination)?void 0:o.count)<=f}:void 0),y=w[0],S=w[1],T=s(),_=T[0],b=T[1],I=s(!1),C=I[0],O=I[1];u(function(){JSON.stringify(l)!==JSON.stringify(p)&&(P(l),m(l))},[l]);var R=a(function(n){return O(!0),H(e,{variables:A({},c,n),preview:d}).then(function(e){var n=U(e,E);return P(n),n}).finally(function(){return O(!1)})},[e,c,E]),N=a(function(){try{if(!y)return Promise.resolve(b(new Error("No page size set!")));var e=y.size,n=y.no*y.size;return Promise.resolve(n>y.count&&y.count>0?y:function(t,r){try{var o=Promise.resolve(R(A({},c.variables,{first:e,skip:n}))).then(function(e){var n,t=(null==(n=e[Object.keys(e).find(function(n){return!isNaN(e[n].count)})])?void 0:n.count)||0,r=y.no+1,o=A({},y,{no:r,count:t,end:r*f>=t});return S(o),o})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return b(e),y}))}catch(e){return Promise.reject(e)}},[y,c,f,S,b,R]),U=function(e,n){return n&&e?(Object.keys(e).forEach(function(t){n[t]&&Array.isArray(n[t])&&(e[t]=n[t].concat(e[t]))}),e):e};return u(function(){!l&&R()},[l,R]),{data:E,error:_,loading:C,loadMore:function(e){return R(e)},nextPage:N,page:y}},ie=function(){var e=globalThis.localStorage,n=l(),t=s(void 0!==e?e.getItem("previousRoute"):null),r=t[0],o=t[1];return u(function(){var t=e.getItem("currentRoute")||null;t!==n.asPath&&(e.setItem("previousRoute",t),e.setItem("currentRoute",n.asPath),o(t))},[n.asPath,e]),u(function(){var n=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",n),function(){return window.removeEventListener("unload",n)}},[]),r};function se(e){void 0===e&&(e=0);var n="undefined"==typeof window,t=s({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:n?0:window.pageYOffset,documentHeight:n?0:document.documentElement.offsetHeight,viewportHeight:n?0:window.innerHeight,timer:null}),r=t[0],o=t[1],i=c(r),l=a(function(){clearTimeout(i.current.timer);var t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),r=n?0:window.innerHeight,s=n?0:Math.max(0,Math.ceil(window.pageYOffset)),u=!n&&window.innerHeight+s>=t-e,a={isScrolling:!0,isPageTop:!!n||window.pageYOffset<=0,isPageBottom:u,isScrolledUp:s<i.current.scrolledPosition,isScrolledDown:s>i.current.scrolledPosition,scrolledPosition:s,documentHeight:t,viewportHeight:r,timer:i.current.timer};o(a),i.current=A({},a,{timer:setTimeout(function(){return o(A({},a,{isScrolling:!1}))},100)})},[n,e]);return u(function(){return l(),window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}},[l]),r}var ue=function(){return u(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var n=e.target;"STYLE"===n.nodeName&&"x"===n.getAttribute("media")&&n.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},ae=function(e){var n,t;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var r=le(e),o=e.siteTitle+(null!=(n=r.globalSeo)&&n.titleSuffix?" "+(null==(t=r.globalSeo)?void 0:t.titleSuffix):" —")+" %s";/*#__PURE__*/return i.createElement(f,A({},r,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:r.favicons}))},ce=function(e){var n=le(e);/*#__PURE__*/return i.createElement(v,n)},le=function(e){var n=e.seo,t=e.site,r=void 0===t?{}:t,o=e.title,i=e.description,s=e.noindex,u=void 0!==s&&s,a=ve({seo:void 0===n?{}:n,site:r}),c=r.globalSeo,l=r.favicon,f=l?l.map(function(e){return A({},e.attributes)}):[],v=fe(a["og:image"],a["og:image:width"],a["og:image:height"]);return i||(i=a.description?a.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:v,description:i,locale:a["og:locale"],type:a["og:type"],site_name:a["og:site_name"]},twitter:{title:o,image:a["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:u,nofollow:u,meta:a,title:o,description:i,favicons:f,globalSeo:c,images:v}},fe=function(e,n,t){if(e)return e.split("?"),[{url:e,width:n,height:t}]},ve=function(e){var n=e.seo,t=e.site;if(!n||!t)return[];var r=(t||{}).globalSeo,o=(r||{}).fallbackSeo,i=(Array.isArray(n)?n:n.tags)||[],s=i.filter(function(e){return"title"===e.tag})[0];s&&r&&r&&s.content.startsWith(r.siteName)&&(s=A({},s,{content:r.siteName+" – "+s.content})),i=i.map(function(e){return"title"!==e.tag?e:s});var u={};if(i.forEach(function(e){u[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!u["og:image"]&&null!=o&&o.image){var a=1-(o.image.width-1e3)/o.image.width;u["og:image"]=o.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(o.image.height*a)}return u},de=function(e){var n=e.children,t=e.truncate,r=e.className,o=e.sentances,s=e.allowedElements,u=e.scroll,a=void 0===u||u,c=e.disableBreaks,l=void 0!==c&&c;if(!n)return null;var f=t?m(n,{limit:t,ellipsis:!0}):o?function(e,n){if(!e)return e;var t=e.split(".");return t.length>=n?t.slice(0,n).join(" ")+"...":e}(n,o):n;/*#__PURE__*/return i.createElement(d,{remarkPlugins:l?[h]:[h,g],className:r,children:f,allowedElements:s,components:{a:function(e){/*#__PURE__*/return i.createElement(p,{scroll:a,href:e.href},e.children[0])}}})};function he(e,n,t){if(!e.s){if(t instanceof pe){if(!t.s)return void(t.o=he.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(he.bind(null,e,n),he.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var pe=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{he(r,1,i(this.v))}catch(e){he(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?he(r,1,n?n(o):o):t?he(r,1,t(o)):he(r,2,o)}catch(e){he(r,2,e)}},r},e}();function me(e){return e instanceof pe&&1&e.s}var ge="undefined"==typeof window,Ae=function(e,n){for(var t=[],r=0;r<e.length;r+=n)t.push(e.slice(r,r+n));return t},Ee=function(e){var n=e.errors.map(function(e){var n=e.attributes,t=n.details;return{code:n.code,field:null==t?void 0:t.field,message:null==t?void 0:t.message,detailsCode:null==t?void 0:t.code,errors:Array.isArray(null==t?void 0:t.errors)?null==t?void 0:t.errors.join(". "):void 0}});return n.map(function(e){var n=e.field,t=e.errors;return e.code+" "+(n?"("+n+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(t?"("+t+")":"")}).join("\n")},Pe=function(e){return 0===Object.keys(e).filter(function(n){return void 0!==e[n]}).length},we=function(e,n){return void 0===n&&(n=!1),(n?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},ye=function(e){return new Promise(function(n,t){return setTimeout(n,e)})},Se=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},Te=function(e,n,t,r){var o,i;if(void 0===n&&(n=1),void 0===t&&(t=!0),void 0===r&&(r=200),!e||e.length<r)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,n+1).join(".").lastIndexOf("."),u=null==(i=e.split("? "))?void 0:i.slice(0,n+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=r-1,t=!0),e.substring(0,a?u:s)+(t?"...":a?"?":".")},_e=function(e,n){if(e.length<=n)return e;var t=e.substring(0,n),r=t.lastIndexOf(" ");return-1!==r&&(t=t.substr(0,r)),t+"..."},be=function(e,n){var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,r){var o=t.findIndex(function(t){var r;return t===(null==(r=n?e[n]:e)?void 0:r.charAt(0).toUpperCase())}),i=t.findIndex(function(e){var t;return e===(null==(t=n?r[n]:r)?void 0:t.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},Ie=function(e){try{var n,t=function(t){if(n)return t;throw new Error("Element "+e+" not found")},r=0,o=function(e,n,t){for(var r;;){var o=e();if(me(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!me(i)){r=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!me(s)){r=2;break}}}var u=new pe,a=he.bind(null,u,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,a),u;function c(r){i=r;do{if(n&&(s=n())&&s.then&&!me(s))return void s.then(f).then(void 0,a);if(!(o=e())||me(o)&&!o.v)return void he(u,1,i);if(o.then)return void o.then(l).then(void 0,a);me(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,a)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,a):c(i):he(u,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,a):l(o):he(u,1,i)}}(function(){return!n&&r<100},function(){return r++},function(){var t=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(n){e=e.replace(n,'[id="'+n.replace("#","")+'"]')}),e}(e));return t?(n=1,t):Promise.resolve(ye(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(t):t(o))}catch(e){return Promise.reject(e)}};export{de as DatoMarkdown,ce as DatoSEO,ae as DefaultDatoSEO,M as SEOQuery,H as apiQuery,j as apiQueryAll,Ie as awaitElement,we as capitalize,Ae as chunkArray,k as client,D as datoError,Pe as isEmpty,ge as isServer,Ee as parseDatoError,Se as rInt,ye as sleep,be as sortSwedish,Te as truncateParagraph,_e as truncateWords,oe as useApiQuery,ie as usePreviousRoute,se as useScrollInfo,ue as useTransitionFix,ee as withBackup,Z as withBasicAuth,re as withBasicAuthEdge,B as withGlobalProps,W as withPreview,F as withRevalidate,X as withWebPreviews,J as withWebPreviewsEdge};
//# sourceMappingURL=index.modern.mjs.map
