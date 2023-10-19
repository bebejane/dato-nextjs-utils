!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client"),require("react"),require("next/router.js"),require("react-datocms"),require("next-seo"),require("react-markdown"),require("remark-gfm"),require("next/link.js"),require("markdown-truncate"),require("remark-breaks")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client","react","next/router.js","react-datocms","next-seo","react-markdown","remark-gfm","next/link.js","markdown-truncate","remark-breaks"],t):t((e||self).index={},e.core_cjs,e.batchHttpLink_js,e.cmaClient,e.react,e.router_js,e.reactDatocms,e.nextSeo,e.reactMarkdown,e.remarkGfm,e.Link,e.markdownTruncate,e.remarkBreaks)}(this,function(e,t,n,r,o,i,s,a,u,c,l,f,v){function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var h,p,m=/*#__PURE__*/d(o),g=/*#__PURE__*/d(u),w=/*#__PURE__*/d(c),E=/*#__PURE__*/d(l),P=/*#__PURE__*/d(f),y=/*#__PURE__*/d(v);function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function S(e,t,n){if(!e.s){if(n instanceof T){if(!n.s)return void(n.o=S.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(S.bind(null,e,t),S.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var b="undefined"==typeof window,T=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{S(r,1,i(this.v))}catch(e){S(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?S(r,1,t?t(o):o):n?S(r,1,n(o)):S(r,2,o)}catch(e){S(r,2,e)}},r},e}();function _(e){return e instanceof T&&1&e.s}var I,C,O,R=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",k=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,N=null!=(h=null!=(p=process.env.DATOCMS_ENVIRONMENT)?p:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?h:"main",j=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,L={uri:R,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var n=t?JSON.parse(t.body.toString()):void 0,r=""+(n?Array.isArray(n)?n.map(function(e){return e.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return A({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+r,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},D=function(e,t){void 0===e&&(e=!1);var r={Authorization:"Bearer "+t,"X-Exclude-Invalid":"true"};return(e||j)&&(r["X-Include-Drafts"]=!0),N&&(r["X-Environment"]=N),new n.BatchHttpLink(A({},L,{headers:r}))},H=D(!1,k),U=D(!0,k),M=new t.ApolloClient({link:H,cache:new t.InMemoryCache,ssrMode:b,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),q=function(e,t){try{var n=t||{},r=n.variables,o=n.preview,i=void 0!==o&&o,s=n.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!k&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,n){try{var o=function(){M.setLink(s?D(i,s):i?U:H);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var n=Array.isArray(r)&&r.length>t-1?r[t]:r||{};return M.query({query:e,variables:n})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var n={};return e.forEach(function(e){return n=A({},n,null==e?void 0:e.data)}),n})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},x=function(e){var t=e.definitions.find(function(e){return"OperationDefinition"===e.kind});if(!t)throw new Error("Not a pagable query. Missing operation definition");var n=t.variableDefinitions;if(!t.selectionSet.selections.find(function(e){var t;return"pagination"===(null==(t=e.alias)?void 0:t.value)}))throw new Error("Not a pagable query. Missing pagination field");if(!n.find(function(e){return"first"===e.variable.name.value}))throw new Error("Not a pagable query. Missing $first variable");if(!n.find(function(e){return"skip"===e.variable.name.value}))throw new Error("Not a pagable query. Missing $skip variable");return!0},B=function(e,n){return t.gql("query GetSEO{\n    seo: "+e+" "+(n?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},W=t.gql(I||(C=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],O||(O=C.slice(0)),C.raw=O,I=C)),V=function(e,t,n){try{var r,o,i=A({},X,n),s=t.headers;return Promise.resolve(G(e,null!=(r=i.origin)&&r)).then(function(n){var r=function(e,t){"Vary"===t?s.append(t,e):s.set(t,e)};if(!n)return t;n.forEach(r),i.credentials&&s.set("Access-Control-Allow-Credentials","true");var a=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return a&&s.set("Access-Control-Expose-Headers",a),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,s.set("Access-Control-Allow-Methods",o)),function(e,t){var n=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),t&&n.set("Access-Control-Allow-Headers",t),n}(e,i.allowedHeaders).forEach(r),"number"==typeof i.maxAge&&s.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?t:(s.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:s}))):t})}catch(e){return Promise.reject(e)}},G=function(e,t){try{var n=function(e){if(e)return function(e,t){var n=new Headers;return"*"===t?n.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(n.set("Access-Control-Allow-Origin",t),n.append("Vary","Origin")):(Q(null!=e?e:"",t)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(r,e):t).then(n):n("function"==typeof t?t(r,e):t))}catch(e){return Promise.reject(e)}},X={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function Q(e,t){return Array.isArray(t)?t.some(function(t){return Q(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function z(e,t){return function(n,r){try{if("OPTIONS"===n.method)return Promise.resolve(e(n,r));var o=n.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!o||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(r.status(401).send("Access denied"));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==t?void 0:t.username)||process.env.BASIC_AUTH_USER,u=(null==t?void 0:t.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(n,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function K(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var F=z(function(e,t){try{if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(t.status(500).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(t.status(500).send("DATOCMS_API_TOKEN not set in .env"));var n=e.query.max?parseInt(e.query.max):1,o="auto-backup-",i=r.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var r,s,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,t){return e.id.replace(o,"")>t.id.replace(o,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(r=null==(s=a[0])?void 0:s.id)?r:"none"),console.log("Max backups: ",n),console.log("Creating backup...",u),K(function(){return Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!0,force:!0})).then(function(){function e(){return console.log("Backup done!"),t.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var r=0,o=function(e,t,n){for(var r;;){var o=e();if(Z(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!Z(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!Z(s)){r=2;break}}}var a=new Y,u=J.bind(null,a,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,u),a;function c(r){i=r;do{if(t&&(s=t())&&s.then&&!Z(s))return void s.then(f).then(void 0,u);if(!(o=e())||Z(o)&&!o.v)return void J(a,1,i);if(o.then)return void o.then(l).then(void 0,u);Z(i=n())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=n())&&i.then?i.then(c).then(void 0,u):c(i):J(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):J(a,1,i)}}(function(){return r<a.reverse().slice(n-1).length},function(){return r++},function(){var e=K(function(){return console.log("Deleting old backup...",a[r].id),Promise.resolve(i.environments.destroy(a[r].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return o&&o.then?o.then(e):e()})},function(e){return console.error(e),t.status(500).send("Backup failed: "+e.message)})})}catch(e){return Promise.reject(e)}});function J(e,t,n){if(!e.s){if(n instanceof Y){if(!n.s)return void(n.o=J.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(J.bind(null,e,t),J.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var Y=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{J(r,1,i(this.v))}catch(e){J(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?J(r,1,t?t(o):o):n?J(r,1,n(o)):J(r,2,o)}catch(e){J(r,2,e)}},r},e}();function Z(e){return e instanceof Y&&1&e.s}function $(e,t,n){if(!e.s){if(n instanceof ee){if(!n.s)return void(n.o=$.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then($.bind(null,e,t),$.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var ee=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{$(r,1,i(this.v))}catch(e){$(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?$(r,1,t?t(o):o):n?$(r,1,n(o)):$(r,2,o)}catch(e){$(r,2,e)}},r},e}();function te(e){return e instanceof ee&&1&e.s}var ne=process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,re=function(e){var t=e.seo,n=e.site,r=void 0===n?{}:n,o=e.title,i=e.description,s=e.noindex,a=void 0!==s&&s,u=ie({seo:void 0===t?{}:t,site:r}),c=r.globalSeo,l=r.favicon,f=l?l.map(function(e){return A({},e.attributes)}):[],v=oe(u["og:image"],u["og:image:width"],u["og:image:height"]);return i||(i=u.description?u.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:v,description:i,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:o,image:u["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:a,nofollow:a,meta:u,title:o,description:i,favicons:f,globalSeo:c,images:v}},oe=function(e,t,n){if(e)return e.split("?"),[{url:e,width:t,height:n}]},ie=function(e){var t=e.seo,n=e.site;if(!t||!n)return[];var r=(n||{}).globalSeo,o=(r||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],s=i.filter(function(e){return"title"===e.tag})[0];s&&r&&r&&s.content.startsWith(r.siteName)&&(s=A({},s,{content:r.siteName+" – "+s.content})),i=i.map(function(e){return"title"!==e.tag?e:s});var a={};if(i.forEach(function(e){a[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!a["og:image"]&&null!=o&&o.image){var u=1-(o.image.width-1e3)/o.image.width;a["og:image"]=o.image.url+"?w=1000",a["og:image:width"]=1e3,a["og:image:height"]=Math.round(o.image.height*u)}return a};function se(e,t,n){if(!e.s){if(n instanceof ae){if(!n.s)return void(n.o=se.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(se.bind(null,e,t),se.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var ae=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{se(r,1,i(this.v))}catch(e){se(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?se(r,1,t?t(o):o):n?se(r,1,n(o)):se(r,2,o)}catch(e){se(r,2,e)}},r},e}();function ue(e){return e instanceof ae&&1&e.s}var ce="undefined"==typeof window,le=function(e){return new Promise(function(t,n){return setTimeout(t,e)})};e.DatoMarkdown=function(e){var t=e.children,n=e.truncate,r=e.className,o=e.components,i=e.sentances,s=e.allowedElements,a=e.scroll,u=void 0===a||a,c=e.disableBreaks,l=void 0!==c&&c;if(!t)return null;var f=n?P.default(t,{limit:n,ellipsis:!0}):i?function(e,t){if(!e)return e;var n=e.split(".");return n.length>=t?n.slice(0,t).join(" ")+"...":e}(t,i):t;/*#__PURE__*/return m.default.createElement(g.default,{remarkPlugins:l?[w.default]:[w.default,y.default],className:r,children:f,allowedElements:s,components:null!=o?o:{a:function(e){/*#__PURE__*/return m.default.createElement(E.default,{scroll:u,href:e.href},e.children[0])}}})},e.DatoSEO=function(e){var t=re(e);/*#__PURE__*/return m.default.createElement(a.NextSeo,t)},e.DefaultDatoSEO=function(e){var t,n;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var r=re(e),o=e.siteTitle+(null!=(t=r.globalSeo)&&t.titleSuffix?" "+(null==(n=r.globalSeo)?void 0:n.titleSuffix):" —")+" %s";/*#__PURE__*/return m.default.createElement(a.DefaultSeo,A({},r,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:r.favicons}))},e.SEOQuery=B,e.apiQuery=q,e.apiQueryAll=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={batchSize:50,delay:100});try{x(e);var r={},o=100;return Promise.resolve(q(e,{variables:A({},t.variables,{first:o,skip:0})})).then(function(i){var s;if(void 0===(null==(s=i.pagination)?void 0:s.count))throw new Error("Not a pagable query");var a=i.pagination.count,u=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var o=t[n],i=e[t[n]];r[o]=Array.isArray(i)&&r[o]?r[o].concat(i):i}},c=function(e){return"rejected"===e.status};u(i);var l=[],f=o,v=function(e,t,n){for(var r;;){var o=e();if(_(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!_(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!_(s)){r=2;break}}}var a=new T,u=S.bind(null,a,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,u),a;function c(r){i=r;do{if(t&&(s=t())&&s.then&&!_(s))return void s.then(f).then(void 0,u);if(!(o=e())||_(o)&&!o.v)return void S(a,1,i);if(o.then)return void o.then(l).then(void 0,u);_(i=n())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=n())&&i.then?i.then(c).then(void 0,u):c(i):S(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):S(a,1,i)}}(function(){return f<a},function(){return!!(f+=o)},function(){return function(){if(!(l.length<n.batchSize&&f+o<a))return l.push(q(e,{variables:A({},t.variables,{first:o,skip:f})})),Promise.resolve(Promise.allSettled(l)).then(function(e){var t,r=null==(t=e.find(c))?void 0:t.reason;if(r)throw new Error(r);for(var o=0;o<e.length;o++)u(e[o].value);return Promise.resolve(new Promise(function(e){return setTimeout(e,n.delay)})).then(function(){l=[]})});l.push(q(e,{variables:A({},t.variables,{first:o,skip:f})}))}()});return v&&v.then?v.then(function(e){return r}):r})}catch(e){return Promise.reject(e)}},e.awaitElement=function(e){try{var t,n=function(n){if(t)return n;throw new Error("Element "+e+" not found")},r=0,o=function(e,t,n){for(var r;;){var o=e();if(ue(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!ue(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!ue(s)){r=2;break}}}var a=new ae,u=se.bind(null,a,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,u),a;function c(r){i=r;do{if(t&&(s=t())&&s.then&&!ue(s))return void s.then(f).then(void 0,u);if(!(o=e())||ue(o)&&!o.v)return void se(a,1,i);if(o.then)return void o.then(l).then(void 0,u);ue(i=n())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=n())&&i.then?i.then(c).then(void 0,u):c(i):se(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):se(a,1,i)}}(function(){return!t&&r<100},function(){return r++},function(){var n=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e}(e));return n?(t=1,n):Promise.resolve(le(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(n):n(o))}catch(e){return Promise.reject(e)}},e.capitalize=function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},e.checkIsPaganationQuery=x,e.chunkArray=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},e.client=M,e.cors=V,e.datoError=function(e){return console.error(e),e.message||e},e.isEmpty=function(e){return 0===Object.keys(e).filter(function(t){return void 0!==e[t]}).length},e.isServer=ce,e.parseDatoCMSApiError=function(e){return e instanceof r.ApiError==0?"string"==typeof e?e:e.message||e.toString():new r.ApiError(e).errors.map(function(e){var t,n=""+e.attributes.code,r=[];return Array.isArray(null==(t=e.attributes.details)?void 0:t.errors)&&e.attributes.details.errors.forEach(function(e){r.push(Object.keys(e).map(function(t){return t+": "+e[t]}).join(", "))}),n+(r.length?": "+r.join(". "):"")}).join("\n")},e.parseDatoError=function(e){var t=e.errors.map(function(e){var t=e.attributes,n=t.details;return{code:t.code,field:null==n?void 0:n.field,message:null==n?void 0:n.message,detailsCode:null==n?void 0:n.code,errors:Array.isArray(null==n?void 0:n.errors)?null==n?void 0:n.errors.join(". "):void 0}});return t.map(function(e){var t=e.field,n=e.errors;return e.code+" "+(t?"("+t+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(n?"("+n+")":"")}).join("\n")},e.rInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},e.sleep=le,e.sortSwedish=function(e,t){var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,r){var o=n.findIndex(function(n){var r;return n===(null==(r=t?e[t]:e)?void 0:r.charAt(0).toUpperCase())}),i=n.findIndex(function(e){var n;return e===(null==(n=t?r[t]:r)?void 0:n.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},e.truncateParagraph=function(e,t,n,r){var o,i;if(void 0===t&&(t=1),void 0===n&&(n=!0),void 0===r&&(r=200),!e||e.length<r)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,t+1).join(".").lastIndexOf("."),a=null==(i=e.split("? "))?void 0:i.slice(0,t+1).join("? ").lastIndexOf("? "),u=-1!==a&&a<s||-1===s&&a>-1;return-1===s&&-1===a&&(s=r-1,n=!0),e.substring(0,u?a:s)+(n?"...":u?"?":".")},e.truncateWords=function(e,t){if(e.length<=t)return e;var n=e.substring(0,t),r=n.lastIndexOf(" ");return-1!==r&&(n=n.substr(0,r)),n+"..."},e.useApiQuery=function(e,t){var n,r,i,s=void 0===t?{}:t,a=s.variables,u=s.initialData,c=s.pageSize,l=s.preview,f=void 0!==l&&l,v=o.useState(u),d=v[0],h=v[1],p=o.useState(u),m=p[0],g=p[1],w=o.useState(c?{no:1,count:(null==(n=u.pagination)?void 0:n.count)||0,size:c,end:(null==(r=u.pagination)?void 0:r.count)>0&&(null==(i=u.pagination)?void 0:i.count)<=c}:void 0),E=w[0],P=w[1],y=o.useState(),S=y[0],b=y[1],T=o.useState(!1),_=T[0],I=T[1];o.useEffect(function(){JSON.stringify(u)!==JSON.stringify(d)&&(g(u),h(u))},[u]);var C=o.useCallback(function(t){return I(!0),q(e,{variables:A({},a,t),preview:f}).then(function(e){var t=R(e,m);return g(t),t}).finally(function(){return I(!1)})},[e,a,m]),O=o.useCallback(function(){try{if(!E)return Promise.resolve(b(new Error("No page size set!")));var e=E.size,t=E.no*E.size;return Promise.resolve(t>E.count&&E.count>0?E:function(n,r){try{var o=Promise.resolve(C(A({},a.variables,{first:e,skip:t}))).then(function(e){var t,n=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,r=E.no+1,o=A({},E,{no:r,count:n,end:r*c>=n});return P(o),o})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return b(e),E}))}catch(e){return Promise.reject(e)}},[E,a,c,P,b,C]),R=function(e,t){return t&&e?(Object.keys(e).forEach(function(n){t[n]&&Array.isArray(t[n])&&(e[n]=t[n].concat(e[n]))}),e):e};return o.useEffect(function(){!u&&C()},[u,C]),{data:m,error:S,loading:_,loadMore:function(e){return C(e)},nextPage:O,page:E}},e.useLivePreview=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={preview:!1,variables:{}});var r=s.useQuerySubscription({token:n.apiToken||ne,query:e,initialData:t,variables:n.variables,enabled:n.preview,includeDrafts:n.preview,excludeInvalid:!0,reconnectionPeriod:5e3});return{data:r.data,error:r.error,status:r.status}},e.usePreviousRoute=function(){var e=globalThis.localStorage,t=i.useRouter(),n=o.useState(void 0!==e?e.getItem("previousRoute"):null),r=n[0],s=n[1];return o.useEffect(function(){var n=e.getItem("currentRoute")||null;n!==t.asPath&&(e.setItem("previousRoute",n),e.setItem("currentRoute",t.asPath),s(n))},[t.asPath,e]),o.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),r},e.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,n=o.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),r=n[0],i=n[1],s=o.useRef(r),a=o.useCallback(function(){clearTimeout(s.current.timer);var n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),r=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!t&&window.innerHeight+o>=n-e,u={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:o<s.current.scrolledPosition,isScrolledDown:o>s.current.scrolledPosition,scrolledPosition:o,documentHeight:n,viewportHeight:r,timer:s.current.timer};i(u),s.current=A({},u,{timer:setTimeout(function(){return i(A({},u,{isScrolling:!1}))},100)})},[t,e]);return o.useEffect(function(){return a(),window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[a]),r},e.useTransitionFix=function(){return o.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},e.withBackup=F,e.withBasicAuth=z,e.withBasicAuthEdge=function(e,t){return function(n,r){try{if("OPTIONS"===n.method)return Promise.resolve(e(n,r));var o=n.headers.get("authorization");if(!o)return Promise.resolve(new Response("Access denied",{status:401}));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==t?void 0:t.username)||process.env.BASIC_AUTH_USER,u=(null==t?void 0:t.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(n,r):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},e.withFavicon=function(e){var t=e.res;try{return process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN?Promise.resolve(fetch("https://graphql.datocms.com/",{method:"POST",body:JSON.stringify({query:"query Site {\n          site: _site {\n            favicon{\n              url\n              mimeType\n            }\n          }\n        }\n    "}),headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN}})).then(function(e){return Promise.resolve(e.json()).then(function(e){var n=e.data.site;return null!=n&&n.favicon.url?Promise.resolve(fetch(n.favicon.url)).then(function(e){var n;function r(){return t.end(),{props:{}}}var o=e.body.getReader(),i=function(e,t,n){for(var r;;){var o=e();if(te(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!te(i)){r=1;break}i=i.s}}var s=new ee,a=$.bind(null,s,2);return(0===r?o.then(c):1===r?i.then(u):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,a):c(o):$(s,1,i)})).then(void 0,a),s;function u(t){i=t;do{if(!(o=e())||te(o)&&!o.v)return void $(s,1,i);if(o.then)return void o.then(c).then(void 0,a);te(i=n())&&(i=i.v)}while(!i||!i.then);i.then(u).then(void 0,a)}function c(e){e?(i=n())&&i.then?i.then(u).then(void 0,a):u(i):$(s,1,i)}}(function(){return!n},0,function(){return Promise.resolve(o.read()).then(function(e){e.done?n=1:t.write(e.value)})});return i&&i.then?i.then(r):r()}):{notFound:!0}})}):Promise.resolve({notFound:!0})}catch(e){return Promise.reject(e)}},e.withGlobalProps=function(e,t){var n=parseInt(process.env.REVALIDATE_TIME),r=[W];return e.query&&r.push(e.query),e.queries&&r.push.apply(r,e.queries),e.seo&&r.push(B(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(q(r,{preview:e.preview})).then(function(r){return t?Promise.resolve(t({context:e,props:A({},r),revalidate:n})):{props:A({},r),context:e,revalidate:n}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,t){try{var n;if("GET"===e.method&&null!=(n=e.query)&&n.ping)return Promise.resolve(t.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(t.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(t.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(t.status(500).json({message:"Invalid slug"}));var r=e.query.slug,o=r?r.startsWith("/")?r:"/"+r:"/";try{t.setPreviewData({},{maxAge:3}),t.writeHead(307,{Location:o}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(t,n){try{var r;if("GET"===t.method&&null!=(r=t.query)&&r.ping)return console.log("ping"),Promise.resolve(n.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var t=e.headers.authorization;if(!t)return!0;var n=t.split(" ")[1],r=Buffer.from(n,"base64").toString().split(":");return r[0]===process.env.BASIC_AUTH_USER&&r[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(n.status(401).send("Access denied"));var o=t.body;if(!o||null==o||!o.entity)throw"Payload is empty";var i=o.entity,s=o.event_type,a=o.related_entities.find(function(e){var t,n,r;return e.id===(null==(t=i.relationships)||null==(n=t.item_type)||null==(r=n.data)?void 0:r.id)});if(!a)throw new Error("Model not found in payload");var u=A({},i.attributes,{model:a.attributes}),c=Date.now()-Math.max(new Date(i.meta.updated_at).getTime(),new Date(i.meta.published_at).getTime(),new Date(i.meta.created_at).getTime());return e(u,function(e){try{return Promise.resolve(function(t,r){try{var o=function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return console.log("revalidate"+(c&&!["unpublish","delete"].includes(s)?" ("+c+"ms)":"")+" "+s,e),n.json({revalidated:!0,paths:e,delay:c,event_type:s})})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(t){return console.log("Error revalidating",e),console.error(t),n.json({revalidated:!1,err:t,delay:c,event_type:s})}))}catch(e){return Promise.reject(e)}}),Promise.resolve()}catch(e){return Promise.reject(e)}}},e.withWebPreviews=function(e){return function(t,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");if(n.setHeader("Access-Control-Allow-Origin","*"),n.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),n.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),n.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return Promise.resolve(n.status(200).send("ok"));if(!t.body)throw new Error("No body found in request");var r=[];return Promise.resolve(e(t.body)).then(function(e){var t,o=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(t=e)?void 0:t.startsWith("https://")){var i=new URL(e);o=i.origin,e=i.pathname}return e&&(r.push({label:"Live",url:""+o+e}),r.push({label:"Preview",url:o+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),n.status(200).json({previewLinks:r})})}catch(e){return Promise.reject(e)}}},e.withWebPreviewsEdge=function(e){var t={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(n,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");return"OPTIONS"===n.method?Promise.resolve(V(n,new Response("ok",{status:200}),t)):Promise.resolve(n.json()).then(function(r){if(!r)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(r)).then(function(e){var r,i=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(r=e)?void 0:r.startsWith("https://")){var s=new URL(e);i=s.origin,e=s.pathname}return e&&(o.push({label:"Live",url:""+i+e}),o.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),V(n,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),t)})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
