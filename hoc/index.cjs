var e,n,t=require("@apollo/client/core/core.cjs"),r=require("@apollo/client/link/batch-http/batchHttpLink.js"),o=require("@datocms/cma-client"),i=require("@datocms/cma-client-browser");function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var a,u,c,l="undefined"==typeof window,v=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",d=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,h=null!=(e=null!=(n=process.env.DATOCMS_ENVIRONMENT)?n:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?e:"main",f=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,p={uri:v,fetch:"true"===process.env.LOG_GRAPHQL?function(e,n){try{var t=n?JSON.parse(n.body.toString()):void 0,r=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,n)).then(function(e){var n=(new Date).getTime();return s({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+r,"- "+((new Date).getTime()-n)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},m=function(e,n){void 0===e&&(e=!1);var t={Authorization:"Bearer "+n,"X-Exclude-Invalid":"true"};return(e||f)&&(t["X-Include-Drafts"]=!0),h&&(t["X-Environment"]=h),new r.BatchHttpLink(s({},p,{headers:t}))},P=m(!1,d),A=m(!0,d),E=new t.ApolloClient({link:P,cache:new t.InMemoryCache,ssrMode:l,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),_=t.gql(a||(u=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],c||(c=u.slice(0)),u.raw=c,a=u)),T=function(e,n,t){try{var r,o,i=s({},S,t),a=n.headers;return Promise.resolve(y(e,null!=(r=i.origin)&&r)).then(function(t){var r=function(e,n){"Vary"===n?a.append(n,e):a.set(n,e)};if(!t)return n;t.forEach(r),i.credentials&&a.set("Access-Control-Allow-Credentials","true");var s=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return s&&a.set("Access-Control-Expose-Headers",s),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,a.set("Access-Control-Allow-Methods",o)),function(e,n){var t=new Headers;return n?Array.isArray(n)&&(n=n.join(",")):(n=e.headers.get("Access-Control-Request-Headers"),t.append("Vary","Access-Control-Request-Headers")),n&&t.set("Access-Control-Allow-Headers",n),t}(e,i.allowedHeaders).forEach(r),"number"==typeof i.maxAge&&a.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?n:(a.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:a}))):n})}catch(e){return Promise.reject(e)}},y=function(e,n){try{var t=function(e){if(e)return function(e,n){var t=new Headers;return"*"===n?t.set("Access-Control-Allow-Origin","*"):"string"==typeof n?(t.set("Access-Control-Allow-Origin",n),t.append("Vary","Origin")):(g(null!=e?e:"",n)&&e&&t.set("Access-Control-Allow-Origin",e),t.append("Vary","Origin")),t}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof n?Promise.resolve("function"==typeof n?n(r,e):n).then(t):t("function"==typeof n?n(r,e):n))}catch(e){return Promise.reject(e)}},S={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function g(e,n){return Array.isArray(n)?n.some(function(n){return g(e,n)}):"string"==typeof n?e===n:n instanceof RegExp?n.test(e):!!n}function w(e,n){return function(t,r){try{if("OPTIONS"===t.method)return Promise.resolve(e(t,r));if("development"===process.env.NODE_ENV)return Promise.resolve(e(t,r));var o=t.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!o||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return r.setHeader("WWW-Authenticate",'Basic realm="NodeJs", charset="UTF-8"'),Promise.resolve(r.status(401).send("Access denied"));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(t,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function O(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var C=w(function(e,n){try{return process.env.DATOCMS_ENVIRONMENT?process.env.DATOCMS_API_TOKEN?Promise.resolve(O(function(){var t=e.query.max?parseInt(e.query.max):1,r="auto-backup-",i=o.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var o,s,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,n){return e.id.replace(r,"")>n.id.replace(r,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(o=null==(s=a[0])?void 0:s.id)?o:"none"),console.log("Max backups: ",t),console.log("Creating backup...",u),Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!0,force:!0})).then(function(){function e(){return console.log("Backup done!"),n.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var r=0,o=function(e,n,t){for(var r;;){var o=e();if(N(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!N(i)){r=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!N(s)){r=2;break}}}var a=new b,u=I.bind(null,a,2);return(0===r?o.then(l):1===r?i.then(c):s.then(v)).then(void 0,u),a;function c(r){i=r;do{if(n&&(s=n())&&s.then&&!N(s))return void s.then(v).then(void 0,u);if(!(o=e())||N(o)&&!o.v)return void I(a,1,i);if(o.then)return void o.then(l).then(void 0,u);N(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,u):c(i):I(a,1,i)}function v(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):I(a,1,i)}}(function(){return r<a.reverse().slice(t-1).length},function(){return r++},function(){var e=O(function(){return console.log("Deleting old backup...",a[r].id),Promise.resolve(i.environments.destroy(a[r].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return o&&o.then?o.then(e):e()})})},function(e){return console.log(e),n.status(500).send("Backup failed: "+e.message)})):Promise.resolve(n.status(500).send("DATOCMS_API_TOKEN not set in .env")):Promise.resolve(n.status(500).send("DATOCMS_ENVIRONMENT not set in .env"))}catch(e){return Promise.reject(e)}});function I(e,n,t){if(!e.s){if(t instanceof b){if(!t.s)return void(t.o=I.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(I.bind(null,e,n),I.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var b=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{I(r,1,i(this.v))}catch(e){I(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?I(r,1,n?n(o):o):t?I(r,1,t(o)):I(r,2,o)}catch(e){I(r,2,e)}},r},e}();function N(e){return e instanceof b&&1&e.s}function R(e,n,t){if(!e.s){if(t instanceof D){if(!t.s)return void(t.o=R.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(R.bind(null,e,n),R.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var D=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{R(r,1,i(this.v))}catch(e){R(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?R(r,1,n?n(o):o):t?R(r,1,t(o)):R(r,2,o)}catch(e){R(r,2,e)}},r},e}();function j(e){return e instanceof D&&1&e.s}function U(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var M=w(function(e,n){return Promise.resolve(function(){try{var e=o.buildClient({apiToken:process.env.DATOCMS_API_TOKEN});return Promise.resolve(e.site.find()).then(function(n){return console.log("Testing site: "+n.name),Promise.resolve(e.itemTypes.list()).then(function(n){var t=n.filter(function(e){return!e.modular_block});return Promise.resolve(Promise.all(t.map(function(n,r){try{var o=function(){var t=U(function(){return Promise.resolve(x(n,e)).then(function(e){i.revalidate=e})},function(){});return t&&t.then?t.then(function(){return i}):i},i={model:n.api_key};console.log(r+1+"/"+t.length+": "+i.model);var s=U(function(){return Promise.resolve(H(n,e)).then(function(e){e.length>0&&(i.previews=e)})},function(){});return Promise.resolve(s&&s.then?s.then(o):o())}catch(e){return Promise.reject(e)}}))).then(function(e){return e.sort(function(e,n){return e.model>n.model?1:-1})})})})}catch(e){return Promise.reject(e)}}()).then(function(t){var r;null!=(r=e.query)&&r.json?n.status(200).json(t):e.query.text?n.status(200).send(B(t)):n.status(200).send(L(t))})}),k=process.env.NEXT_PUBLIC_SITE_URL+"/api",B=function(e){e.map(function(e){return e.model+" - Previews: "+(e.previews?"YES":"NO")+" / Revalidate: "+(e.revalidate?"YES":"NO")}).join("\n");var n=e.filter(function(e){return e.previews}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n"),t=e.filter(function(e){var n;return null==(n=e.revalidate)?void 0:n.paths.length}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n");return"WEB PREVIEWS\n"+n+"\n\nNO WEB PREVIEWS:\n"+e.filter(function(e){return!e.previews}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n")+"\n\nREVALIDATE\n"+t+"\n\nNO REVALIDATE\n"+e.filter(function(e){var n;return!e.revalidate||!(null!=(n=e.revalidate)&&n.paths.length)}).map(function(e){return e.model}).sort(function(e,n){return e>n?1:-1}).join("\n")},L=function(e){return"\n    <html>\n      <head>\n        <style>\n          table {\n            border-collapse: collapse;\n            width: 400px;\n          }\n          th, td {\n            padding: 5px;\n            text-align:left;\n          }\n          .center{\n            text-align:center;\n          }\n          .error{\n            color:red;\n          }\n        </style>\n      </head>\n      <body>\n        <pre>\n        <table>\n          <thead>\n            <tr>\n              <th>Model</th>\n              <th>Web Previews</th>\n              <th>Revalidate</th>\n            </tr>\n          </thead>\n          <tbody>\n            "+e.map(function(e){var n,t,r,o,i;return'\n              <tr \n                title="Web Previews\n-----------\n'+(e.previews?null==(n=e.previews)?void 0:n.map(function(e){return e.label+": "+e.url}).join("\n"):"")+"\n\nRevalidate\n-----------\n"+(e.revalidate?null==(t=e.revalidate)||null==(r=t.paths)?void 0:r.join("\n"):"")+'"\n                class="'+(e.previews&&null!=(o=e.revalidate)&&o.revalidated?"":"error")+'"\n              >\n                <td>'+e.model+'</td>\n                <td class="center">'+(e.previews?"x":"-")+'</td>\n                <td class="center">'+(null!=(i=e.revalidate)&&i.revalidated?"x":"-")+"</td>\n              </tr>\n            "}).join("")+"\n          </tbody>\n        </pre>\n      </body>\n    </html>\n  "},H=function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var t=n[0];return Promise.resolve(fetch(k+"/web-previews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({item:{attributes:t||{}},itemType:{attributes:e},environmentId:"main",locale:"en"})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.previewLinks})})})}catch(e){return Promise.reject(e)}},x=function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var t=n[0];return Promise.resolve(fetch(k+"/revalidate",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({environment:"main",entity_type:"item",event_type:"update",entity:{id:t.id,type:"item",attributes:s({},t||{}),relationships:{item_type:{data:{id:e.id,type:"item_type"}}},meta:s({},t.meta,{updated_at:(new Date).toISOString(),published_at:(new Date).toISOString(),created_at:(new Date).toISOString()})},related_entities:[{id:e.id,type:"item_type",attributes:e}]})})).then(function(e){if(200===e.status)return Promise.resolve(e.json());throw new Error("Error testing revalidate endpoint: "+e.status+" "+e.statusText)})})}catch(e){return Promise.reject(e)}};function q(e){return function(n,t){try{var r;return(null==(r=n.headers)?void 0:r.authorization)==="Basic "+process.env.CRON_SECRET?Promise.resolve(e(n,t)):Promise.resolve(t.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function W(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}var V=q(function(e,n){try{return process.env.DATOCMS_ENVIRONMENT?process.env.DATOCMS_API_TOKEN?Promise.resolve(W(function(){var t=e.query.max?parseInt(e.query.max):1,r="auto-backup-",o=i.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(o.environments.list()).then(function(e){var i,s,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,n){return e.id.replace(r,"")>n.id.replace(r,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(i=null==(s=a[0])?void 0:s.id)?i:"none"),console.log("Max backups: ",t),console.log("Creating backup...",u),Promise.resolve(o.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!0,force:!0})).then(function(){function e(){return console.log("Backup done!"),n.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var r=0,i=function(e,n,t){for(var r;;){var o=e();if(z(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!z(i)){r=1;break}i=i.s}if(n){var s=n();if(s&&s.then&&!z(s)){r=2;break}}}var a=new G,u=X.bind(null,a,2);return(0===r?o.then(l):1===r?i.then(c):s.then(v)).then(void 0,u),a;function c(r){i=r;do{if(n&&(s=n())&&s.then&&!z(s))return void s.then(v).then(void 0,u);if(!(o=e())||z(o)&&!o.v)return void X(a,1,i);if(o.then)return void o.then(l).then(void 0,u);z(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,u):c(i):X(a,1,i)}function v(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):X(a,1,i)}}(function(){return r<a.reverse().slice(t-1).length},function(){return r++},function(){var e=W(function(){return console.log("Deleting old backup...",a[r].id),Promise.resolve(o.environments.destroy(a[r].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return i&&i.then?i.then(e):e()})})},function(e){return console.log(e),n.status(500).send("Backup failed: "+e.message)})):Promise.resolve(n.status(500).send("DATOCMS_API_TOKEN not set in .env")):Promise.resolve(n.status(500).send("DATOCMS_ENVIRONMENT not set in .env"))}catch(e){return Promise.reject(e)}});function X(e,n,t){if(!e.s){if(t instanceof G){if(!t.s)return void(t.o=X.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(X.bind(null,e,n),X.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var G=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,o=this.s;if(o){var i=1&o?n:t;if(i){try{X(r,1,i(this.v))}catch(e){X(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?X(r,1,n?n(o):o):t?X(r,1,t(o)):X(r,2,o)}catch(e){X(r,2,e)}},r},e}();function z(e){return e instanceof G&&1&e.s}exports.withBackup=C,exports.withBackupEdge=V,exports.withBasicAuth=w,exports.withBasicAuthEdge=function(e,n){return function(t,r){try{if("OPTIONS"===t.method)return Promise.resolve(e(t,r));var o=t.headers.get("authorization");if(!o)return Promise.resolve(new Response("Access denied",{status:401}));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==n?void 0:n.username)||process.env.BASIC_AUTH_USER,u=(null==n?void 0:n.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(t,r):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},exports.withFavicon=function(e){var n=e.res;try{return process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN?Promise.resolve(fetch("https://graphql.datocms.com/",{method:"POST",body:JSON.stringify({query:"query Site {\n          site: _site {\n            favicon{\n              url\n              mimeType\n            }\n          }\n        }\n    "}),headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN}})).then(function(e){return Promise.resolve(e.json()).then(function(e){var t=e.data.site;return null!=t&&t.favicon.url?Promise.resolve(fetch(t.favicon.url)).then(function(e){var t;function r(){return n.end(),{props:{}}}var o=e.body.getReader(),i=function(e,n,t){for(var r;;){var o=e();if(j(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=t();if(i&&i.then){if(!j(i)){r=1;break}i=i.s}}var s=new D,a=R.bind(null,s,2);return(0===r?o.then(c):1===r?i.then(u):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,a):c(o):R(s,1,i)})).then(void 0,a),s;function u(n){i=n;do{if(!(o=e())||j(o)&&!o.v)return void R(s,1,i);if(o.then)return void o.then(c).then(void 0,a);j(i=t())&&(i=i.v)}while(!i||!i.then);i.then(u).then(void 0,a)}function c(e){e?(i=t())&&i.then?i.then(u).then(void 0,a):u(i):R(s,1,i)}}(function(){return!t},0,function(){return Promise.resolve(o.read()).then(function(e){e.done?t=1:n.write(e.value)})});return i&&i.then?i.then(r):r()}):{notFound:!0}})}):Promise.resolve({notFound:!0})}catch(e){return Promise.reject(e)}},exports.withGlobalProps=function(e,n){var r,o=parseInt(process.env.REVALIDATE_TIME),i=[_];return e.query&&i.push(e.query),e.queries&&i.push.apply(i,e.queries),e.seo&&i.push(t.gql("query GetSEO{\n    seo: "+e.seo.model+" "+((r=e.seo.id)?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")),function(e){try{return Promise.resolve(function(e,n){try{var t=n||{},r=t.variables,o=t.preview,i=void 0!==o&&o,a=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!d&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(n,t){try{var o=function(){E.setLink(a?m(i,a):i?A:P);var n=(Array.isArray(e)?e:[e]).map(function(e,n){var t=Array.isArray(r)&&r.length>n-1?r[n]:r||{};return E.query({query:e,variables:t})});return Promise.resolve(Promise.all(n)).then(function(e){var n=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return n.push(e)})}),n.length)throw new Error(n.join(". "));var t={};return e.forEach(function(e){return t=s({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(i,{preview:e.preview})).then(function(t){return n?Promise.resolve(n({context:e,props:s({},t),revalidate:o})):{props:s({},t),context:e,revalidate:o}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,n){try{var t;if("GET"===e.method&&null!=(t=e.query)&&t.ping)return Promise.resolve(n.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(n.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(n.status(500).json({message:"Invalid slug"}));var r=e.query.slug,o=r?r.startsWith("/")?r:"/"+r:"/";try{n.setPreviewData({},{maxAge:3}),n.writeHead(307,{Location:o}),n.end()}catch(e){return console.error(e),Promise.resolve(n.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(n,t){try{var r;if("GET"===n.method&&null!=(r=n.query)&&r.ping)return console.log("ping"),Promise.resolve(t.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var n=e.headers.authorization;if(!n)return!0;var t=n.split(" ")[1],r=Buffer.from(t,"base64").toString().split(":");return r[0]===process.env.BASIC_AUTH_USER&&r[1]===process.env.BASIC_AUTH_PASSWORD}(n))return Promise.resolve(t.status(401).send("Access denied"));var o=n.body;if(!o||null==o||!o.entity)return Promise.resolve(t.status(400).send("Payload empty or missing entity"));var i=o.entity,a=o.event_type,u=o.related_entities.find(function(e){var n,t,r;return e.id===(null==(n=i.relationships)||null==(t=n.item_type)||null==(r=t.data)?void 0:r.id)});if(!u)return Promise.resolve(t.status(400).send("Model not found in payload"));var c=s({},i.attributes,{model:u.attributes}),l=Date.now()-Math.max(new Date(i.meta.updated_at).getTime(),new Date(i.meta.published_at).getTime(),new Date(i.meta.created_at).getTime());return e(c,function(e){try{return Promise.resolve(function(n,r){try{var o=e?0===e.length?t.status(200).json({revalidated:!1,paths:e,delay:l,event_type:a}):Promise.resolve(Promise.all(e.map(function(e){return t.revalidate(e)}))).then(function(){return console.log("revalidate"+(l&&!["unpublish","delete"].includes(a)?" ("+l+"ms)":"")+" "+a,e),t.status(200).json({revalidated:!0,paths:e,delay:l,event_type:a})}):t.status(400).send("Nothing to revalidate. Paths empty")}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(n){return console.log("Error revalidating",e),console.error(n),t.status(200).json({revalidated:!1,paths:e,err:n,delay:l,event_type:a})}))}catch(e){return Promise.reject(e)}}),Promise.resolve()}catch(e){return Promise.reject(e)}}},exports.withTests=M,exports.withVercelCronAuth=q,exports.withWebPreviews=function(e){return function(n,t){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");if(t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),t.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),t.setHeader("Content-Type","application/json"),"OPTIONS"===n.method)return Promise.resolve(t.status(200).send("ok"));if(!n.body)throw new Error("No body found in request");var r=[];return Promise.resolve(e(n.body)).then(function(e){var n,o=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(n=e)?void 0:n.startsWith("https://")){var i=new URL(e);o=i.origin,e=i.pathname}return e&&(r.push({label:"Live",url:""+o+e}),r.push({label:"Preview",url:o+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),t.status(200).json({previewLinks:r})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviewsEdge=function(e){var n={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");return"OPTIONS"===t.method?Promise.resolve(T(t,new Response("ok",{status:200}),n)):Promise.resolve(t.json()).then(function(r){if(!r)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(r)).then(function(e){var r,i=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(r=e)?void 0:r.startsWith("https://")){var s=new URL(e);i=s.origin,e=s.pathname}return e&&(o.push({label:"Live",url:""+i+e}),o.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),T(t,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),n)})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
