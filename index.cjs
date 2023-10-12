var e=require("@apollo/client/core/core.cjs"),t=require("@apollo/client/link/batch-http/batchHttpLink.js"),r=require("@datocms/cma-client"),n=require("react"),o=require("next/router.js"),i=require("next-seo"),s=require("react-markdown"),a=require("remark-gfm"),u=require("next/link.js"),c=require("markdown-truncate"),l=require("remark-breaks");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var v,d,h=/*#__PURE__*/f(n),p=/*#__PURE__*/f(s),m=/*#__PURE__*/f(a),g=/*#__PURE__*/f(u),E=/*#__PURE__*/f(c),w=/*#__PURE__*/f(l);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function A(e,t,r){if(!e.s){if(r instanceof y){if(!r.s)return void(r.o=A.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(A.bind(null,e,t),A.bind(null,e,2));e.s=t,e.v=r;var n=e.o;n&&n(e)}}var P="undefined"==typeof window,y=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{A(n,1,i(this.v))}catch(e){A(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?A(n,1,t?t(o):o):r?A(n,1,r(o)):A(n,2,o)}catch(e){A(n,2,e)}},n},e}();function T(e){return e instanceof y&&1&e.s}var b,_,I,C=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",O=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,R=null!=(v=null!=(d=process.env.DATOCMS_ENVIRONMENT)?d:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?v:"main",N=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,x={uri:C,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return S({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},k=function(e,r){void 0===e&&(e=!1);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":"true"};return(e||N)&&(n["X-Include-Drafts"]=!0),R&&(n["X-Environment"]=R),new t.BatchHttpLink(S({},x,{headers:n}))},D=k(!1,O),U=k(!0,O),M=new e.ApolloClient({link:D,cache:new e.InMemoryCache,ssrMode:P,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),H=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,s=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!O&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){M.setLink(s?k(i,s):i?U:D);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return M.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=S({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},L=function(e){var t=e.definitions.find(function(e){return"OperationDefinition"===e.kind});if(!t)throw new Error("Not a pagable query. Missing operation definition");var r=t.variableDefinitions;if(!t.selectionSet.selections.find(function(e){var t;return"pagination"===(null==(t=e.alias)?void 0:t.value)}))throw new Error("Not a pagable query. Missing pagination field");if(!r.find(function(e){return"first"===e.variable.name.value}))throw new Error("Not a pagable query. Missing $first variable");if(!r.find(function(e){return"skip"===e.variable.name.value}))throw new Error("Not a pagable query. Missing $skip variable");return!0},j=function(t,r){return e.gql("query GetSEO{\n    seo: "+t+" "+(r?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},q=e.gql(b||(_=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],I||(I=_.slice(0)),_.raw=I,b=_)),B=function(e,t,r){try{var n,o,i=S({},V,r),s=t.headers;return Promise.resolve(W(e,null!=(n=i.origin)&&n)).then(function(r){var n=function(e,t){"Vary"===t?s.append(t,e):s.set(t,e)};if(!r)return t;r.forEach(n),i.credentials&&s.set("Access-Control-Allow-Credentials","true");var a=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return a&&s.set("Access-Control-Expose-Headers",a),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,s.set("Access-Control-Allow-Methods",o)),function(e,t){var r=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),t&&r.set("Access-Control-Allow-Headers",t),r}(e,i.allowedHeaders).forEach(n),"number"==typeof i.maxAge&&s.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?t:(s.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:s}))):t})}catch(e){return Promise.reject(e)}},W=function(e,t){try{var r=function(e){if(e)return function(e,t){var r=new Headers;return"*"===t?r.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(r.set("Access-Control-Allow-Origin",t),r.append("Vary","Origin")):(X(null!=e?e:"",t)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}(n,e)},n=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(n,e):t).then(r):r("function"==typeof t?t(n,e):t))}catch(e){return Promise.reject(e)}},V={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function X(e,t){return Array.isArray(t)?t.some(function(t){return X(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function z(e,t){return function(r,n){try{if("OPTIONS"===r.method)return Promise.resolve(e(r,n));var o=r.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!o||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(n.status(401).send("Access denied"));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==t?void 0:t.username)||process.env.BASIC_AUTH_USER,u=(null==t?void 0:t.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(r,n):n.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function G(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}var Q=z(function(e,t){try{if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(t.status(500).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(t.status(500).send("DATOCMS_API_TOKEN not set in .env"));var n=e.query.max?parseInt(e.query.max):1,o="auto-backup-",i=r.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var r,s,a=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,t){return e.id.replace(o,"")>t.id.replace(o,"")?-1:1}),u="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(r=null==(s=a[0])?void 0:s.id)?r:"none"),console.log("Max backups: ",n),console.log("Creating backup...",u),G(function(){return Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:u},{immediate_return:!1,fast:!1,force:!0})).then(function(){function e(){return console.log("Backup done!"),t.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+u)}var r=0,o=function(e,t,r){for(var n;;){var o=e();if(J(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!J(i)){n=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!J(s)){n=2;break}}}var a=new F,u=K.bind(null,a,2);return(0===n?o.then(l):1===n?i.then(c):s.then(f)).then(void 0,u),a;function c(n){i=n;do{if(t&&(s=t())&&s.then&&!J(s))return void s.then(f).then(void 0,u);if(!(o=e())||J(o)&&!o.v)return void K(a,1,i);if(o.then)return void o.then(l).then(void 0,u);J(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=r())&&i.then?i.then(c).then(void 0,u):c(i):K(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):K(a,1,i)}}(function(){return r<a.reverse().slice(n-1).length},function(){return r++},function(){var e=G(function(){return console.log("Deleting old backup...",a[r].id),Promise.resolve(i.environments.destroy(a[r].id)).then(function(){})},function(e){console.error(e)});if(e&&e.then)return e.then(function(){})});return o&&o.then?o.then(e):e()})},function(e){return console.error(e),t.status(500).send("Backup failed: "+e.message)})})}catch(e){return Promise.reject(e)}});function K(e,t,r){if(!e.s){if(r instanceof F){if(!r.s)return void(r.o=K.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(K.bind(null,e,t),K.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e)}}var F=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{K(n,1,i(this.v))}catch(e){K(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?K(n,1,t?t(o):o):r?K(n,1,r(o)):K(n,2,o)}catch(e){K(n,2,e)}},n},e}();function J(e){return e instanceof F&&1&e.s}var Y=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,s=e.noindex,a=void 0!==s&&s,u=$({seo:void 0===t?{}:t,site:n}),c=n.globalSeo,l=n.favicon,f=l?l.map(function(e){return S({},e.attributes)}):[],v=Z(u["og:image"],u["og:image:width"],u["og:image:height"]);return i||(i=u.description?u.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:v,description:i,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:o,image:u["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:a,nofollow:a,meta:u,title:o,description:i,favicons:f,globalSeo:c,images:v}},Z=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},$=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],s=i.filter(function(e){return"title"===e.tag})[0];s&&n&&n&&s.content.startsWith(n.siteName)&&(s=S({},s,{content:n.siteName+" – "+s.content})),i=i.map(function(e){return"title"!==e.tag?e:s});var a={};if(i.forEach(function(e){a[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!a["og:image"]&&null!=o&&o.image){var u=1-(o.image.width-1e3)/o.image.width;a["og:image"]=o.image.url+"?w=1000",a["og:image:width"]=1e3,a["og:image:height"]=Math.round(o.image.height*u)}return a};function ee(e,t,r){if(!e.s){if(r instanceof te){if(!r.s)return void(r.o=ee.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(ee.bind(null,e,t),ee.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e)}}var te=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{ee(n,1,i(this.v))}catch(e){ee(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?ee(n,1,t?t(o):o):r?ee(n,1,r(o)):ee(n,2,o)}catch(e){ee(n,2,e)}},n},e}();function re(e){return e instanceof te&&1&e.s}var ne="undefined"==typeof window,oe=function(e){return new Promise(function(t,r){return setTimeout(t,e)})};exports.DatoMarkdown=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.components,i=e.sentances,s=e.allowedElements,a=e.scroll,u=void 0===a||a,c=e.disableBreaks,l=void 0!==c&&c;if(!t)return null;var f=r?E.default(t,{limit:r,ellipsis:!0}):i?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,i):t;/*#__PURE__*/return h.default.createElement(p.default,{remarkPlugins:l?[m.default]:[m.default,w.default],className:n,children:f,allowedElements:s,components:null!=o?o:{a:function(e){/*#__PURE__*/return h.default.createElement(g.default,{scroll:u,href:e.href},e.children[0])}}})},exports.DatoSEO=function(e){var t=Y(e);/*#__PURE__*/return h.default.createElement(i.NextSeo,t)},exports.DefaultDatoSEO=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=Y(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):" —")+" %s";/*#__PURE__*/return h.default.createElement(i.DefaultSeo,S({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},exports.SEOQuery=j,exports.apiQuery=H,exports.apiQueryAll=function(e,t,r){void 0===t&&(t={}),void 0===r&&(r={batchSize:50,delay:100});try{L(e);var n={},o=100;return Promise.resolve(H(e,{variables:S({},t.variables,{first:o,skip:0})})).then(function(i){var s;if(void 0===(null==(s=i.pagination)?void 0:s.count))throw new Error("Not a pagable query");var a=i.pagination.count,u=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var o=t[r],i=e[t[r]];n[o]=Array.isArray(i)&&n[o]?n[o].concat(i):i}},c=function(e){return"rejected"===e.status};u(i);var l=[],f=o,v=function(e,t,r){for(var n;;){var o=e();if(T(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!T(i)){n=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!T(s)){n=2;break}}}var a=new y,u=A.bind(null,a,2);return(0===n?o.then(l):1===n?i.then(c):s.then(f)).then(void 0,u),a;function c(n){i=n;do{if(t&&(s=t())&&s.then&&!T(s))return void s.then(f).then(void 0,u);if(!(o=e())||T(o)&&!o.v)return void A(a,1,i);if(o.then)return void o.then(l).then(void 0,u);T(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=r())&&i.then?i.then(c).then(void 0,u):c(i):A(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):A(a,1,i)}}(function(){return f<a},function(){return!!(f+=o)},function(){return function(){if(!(l.length<r.batchSize&&f+o<a))return l.push(H(e,{variables:S({},t.variables,{first:o,skip:f})})),Promise.resolve(Promise.allSettled(l)).then(function(e){var t,n=null==(t=e.find(c))?void 0:t.reason;if(n)throw new Error(n);for(var o=0;o<e.length;o++)u(e[o].value);return Promise.resolve(new Promise(function(e){return setTimeout(e,r.delay)})).then(function(){l=[]})});l.push(H(e,{variables:S({},t.variables,{first:o,skip:f})}))}()});return v&&v.then?v.then(function(e){return n}):n})}catch(e){return Promise.reject(e)}},exports.awaitElement=function(e){try{var t,r=function(r){if(t)return r;throw new Error("Element "+e+" not found")},n=0,o=function(e,t,r){for(var n;;){var o=e();if(re(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!re(i)){n=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!re(s)){n=2;break}}}var a=new te,u=ee.bind(null,a,2);return(0===n?o.then(l):1===n?i.then(c):s.then(f)).then(void 0,u),a;function c(n){i=n;do{if(t&&(s=t())&&s.then&&!re(s))return void s.then(f).then(void 0,u);if(!(o=e())||re(o)&&!o.v)return void ee(a,1,i);if(o.then)return void o.then(l).then(void 0,u);re(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=r())&&i.then?i.then(c).then(void 0,u):c(i):ee(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):ee(a,1,i)}}(function(){return!t&&n<100},function(){return n++},function(){var r=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e}(e));return r?(t=1,r):Promise.resolve(oe(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(r):r(o))}catch(e){return Promise.reject(e)}},exports.capitalize=function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},exports.checkIsPaganationQuery=L,exports.chunkArray=function(e,t){for(var r=[],n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r},exports.client=M,exports.cors=B,exports.datoError=function(e){return console.error(e),e.message||e},exports.isEmpty=function(e){return 0===Object.keys(e).filter(function(t){return void 0!==e[t]}).length},exports.isServer=ne,exports.parseDatoError=function(e){var t=e.errors.map(function(e){var t=e.attributes,r=t.details;return{code:t.code,field:null==r?void 0:r.field,message:null==r?void 0:r.message,detailsCode:null==r?void 0:r.code,errors:Array.isArray(null==r?void 0:r.errors)?null==r?void 0:r.errors.join(". "):void 0}});return t.map(function(e){var t=e.field,r=e.errors;return e.code+" "+(t?"("+t+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(r?"("+r+")":"")}).join("\n")},exports.rInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},exports.sleep=oe,exports.sortSwedish=function(e,t){var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,n){var o=r.findIndex(function(r){var n;return r===(null==(n=t?e[t]:e)?void 0:n.charAt(0).toUpperCase())}),i=r.findIndex(function(e){var r;return e===(null==(r=t?n[t]:n)?void 0:r.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},exports.truncateParagraph=function(e,t,r,n){var o,i;if(void 0===t&&(t=1),void 0===r&&(r=!0),void 0===n&&(n=200),!e||e.length<n)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,t+1).join(".").lastIndexOf("."),a=null==(i=e.split("? "))?void 0:i.slice(0,t+1).join("? ").lastIndexOf("? "),u=-1!==a&&a<s||-1===s&&a>-1;return-1===s&&-1===a&&(s=n-1,r=!0),e.substring(0,u?a:s)+(r?"...":u?"?":".")},exports.truncateWords=function(e,t){if(e.length<=t)return e;var r=e.substring(0,t),n=r.lastIndexOf(" ");return-1!==n&&(r=r.substr(0,n)),r+"..."},exports.useApiQuery=function(e,t){var r,o,i,s=void 0===t?{}:t,a=s.variables,u=s.initialData,c=s.pageSize,l=s.preview,f=void 0!==l&&l,v=n.useState(u),d=v[0],h=v[1],p=n.useState(u),m=p[0],g=p[1],E=n.useState(c?{no:1,count:(null==(r=u.pagination)?void 0:r.count)||0,size:c,end:(null==(o=u.pagination)?void 0:o.count)>0&&(null==(i=u.pagination)?void 0:i.count)<=c}:void 0),w=E[0],A=E[1],P=n.useState(),y=P[0],T=P[1],b=n.useState(!1),_=b[0],I=b[1];n.useEffect(function(){JSON.stringify(u)!==JSON.stringify(d)&&(g(u),h(u))},[u]);var C=n.useCallback(function(t){return I(!0),H(e,{variables:S({},a,t),preview:f}).then(function(e){var t=R(e,m);return g(t),t}).finally(function(){return I(!1)})},[e,a,m]),O=n.useCallback(function(){try{if(!w)return Promise.resolve(T(new Error("No page size set!")));var e=w.size,t=w.no*w.size;return Promise.resolve(t>w.count&&w.count>0?w:function(r,n){try{var o=Promise.resolve(C(S({},a.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=w.no+1,o=S({},w,{no:n,count:r,end:n*c>=r});return A(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return T(e),w}))}catch(e){return Promise.reject(e)}},[w,a,c,A,T,C]),R=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return n.useEffect(function(){!u&&C()},[u,C]),{data:m,error:y,loading:_,loadMore:function(e){return C(e)},nextPage:O,page:w}},exports.usePreviousRoute=function(){var e=globalThis.localStorage,t=o.useRouter(),r=n.useState(void 0!==e?e.getItem("previousRoute"):null),i=r[0],s=r[1];return n.useEffect(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),s(r))},[t.asPath,e]),n.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),i},exports.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=n.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),o=r[0],i=r[1],s=n.useRef(o),a=n.useCallback(function(){clearTimeout(s.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!t&&window.innerHeight+o>=r-e,u={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:o<s.current.scrolledPosition,isScrolledDown:o>s.current.scrolledPosition,scrolledPosition:o,documentHeight:r,viewportHeight:n,timer:s.current.timer};i(u),s.current=S({},u,{timer:setTimeout(function(){return i(S({},u,{isScrolling:!1}))},100)})},[t,e]);return n.useEffect(function(){return a(),window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[a]),o},exports.useTransitionFix=function(){return n.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},exports.withBackup=Q,exports.withBasicAuth=z,exports.withBasicAuthEdge=function(e,t){return function(r,n){try{if("OPTIONS"===r.method)return Promise.resolve(e(r,n));var o=r.headers.get("authorization");if(!o)return Promise.resolve(new Response("Access denied",{status:401}));var i=o.split(" ")[1],s=Buffer.from(i,"base64").toString().split(":"),a=(null==t?void 0:t.username)||process.env.BASIC_AUTH_USER,u=(null==t?void 0:t.password)||process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s[0]===a&&s[1]===u?e(r,n):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},exports.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[q];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(j(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(H(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:S({},n),revalidate:r})):{props:S({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,t){try{var r;if("GET"===e.method&&null!=(r=e.query)&&r.ping)return Promise.resolve(t.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(t.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(t.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(t.status(500).json({message:"Invalid slug"}));var n=e.query.slug,o=n?n.startsWith("/")?n:"/"+n:"/";try{t.setPreviewData({},{maxAge:3}),t.writeHead(307,{Location:o}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(t,r){try{var n;if("GET"===t.method&&null!=(n=t.query)&&n.ping)return Promise.resolve(r.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var o=t.body;if(!o||!o.entity)throw"Payload is empty";var i=o.entity,s=o.event_type,a=o.related_entities.find(function(e){var t,r,n;return e.id===(null==(t=i.relationships)||null==(r=t.item_type)||null==(n=r.data)?void 0:n.id)});if(!a)throw new Error("Model not found in payload");var u=S({},i.attributes,{model:a.attributes}),c=Date.now()-Math.max(new Date(i.meta.updated_at).getTime(),new Date(i.meta.published_at).getTime(),new Date(i.meta.created_at).getTime());return e(u,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidate"+(c&&!["unpublish","delete"].includes(s)?" ("+c+"ms)":"")+" "+s,e),r.json({revalidated:!0,paths:e,delay:c,event_type:s})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(t){return console.log("Error revalidating",e),console.error(t),r.json({revalidated:!1,err:t,delay:c,event_type:s})}))}catch(e){return Promise.reject(e)}}),Promise.resolve()}catch(e){return Promise.reject(e)}}},exports.withWebPreviews=function(e){return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return Promise.resolve(r.status(200).send("ok"));if(!t.body)throw new Error("No body found in request");var n=[];return Promise.resolve(e(t.body)).then(function(e){var t,o=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(t=e)?void 0:t.startsWith("https://")){var i=new URL(e);o=i.origin,e=i.pathname}return e&&(n.push({label:"Live",url:""+o+e}),n.push({label:"Preview",url:o+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),r.status(200).json({previewLinks:n})})}catch(e){return Promise.reject(e)}}},exports.withWebPreviewsEdge=function(e){var t={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(r,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(!process.env.DATOCMS_PREVIEW_SECRET)throw new Error("DATOCMS_PREVIEW_SECRET is not set in .env");return"OPTIONS"===r.method?Promise.resolve(B(r,new Response("ok",{status:200}),t)):Promise.resolve(r.json()).then(function(n){if(!n)throw new Error("No form data in request body");var o=[];return Promise.resolve(e(n)).then(function(e){var n,i=process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;if(null==(n=e)?void 0:n.startsWith("https://")){var s=new URL(e);i=s.origin,e=s.pathname}return e&&(o.push({label:"Live",url:""+i+e}),o.push({label:"Preview",url:i+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),B(r,new Response(JSON.stringify({previewLinks:o}),{status:200,headers:{"Content-Type":"application/json"}}),t)})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
