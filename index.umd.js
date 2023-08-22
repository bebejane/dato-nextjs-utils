!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client"),require("react"),require("next/router.js"),require("next-seo"),require("react-markdown"),require("remark-gfm"),require("next/link.js"),require("markdown-truncate"),require("remark-breaks")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client","react","next/router.js","next-seo","react-markdown","remark-gfm","next/link.js","markdown-truncate","remark-breaks"],t):t((e||self).index={},e.core_cjs,e.batchHttpLink_js,e.cmaClient,e.react,e.router_js,e.nextSeo,e.reactMarkdown,e.remarkGfm,e.Link,e.markdownTruncate,e.remarkBreaks)}(this,function(e,t,n,r,o,i,s,u,a,c,l,f){function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var v,h,p=/*#__PURE__*/d(o),m=/*#__PURE__*/d(u),g=/*#__PURE__*/d(a),E=/*#__PURE__*/d(c),w=/*#__PURE__*/d(l),A=/*#__PURE__*/d(f);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function P(e,t,n){if(!e.s){if(n instanceof T){if(!n.s)return void(n.o=P.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(P.bind(null,e,t),P.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var S="undefined"==typeof window,T=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{P(r,1,i(this.v))}catch(e){P(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?P(r,1,t?t(o):o):n?P(r,1,n(o)):P(r,2,o)}catch(e){P(r,2,e)}},r},e}();function b(e){return e instanceof T&&1&e.s}var _,I,C,O=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",k=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,R=null!=(v=null!=(h=process.env.DATOCMS_ENVIRONMENT)?h:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?v:"main",N=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,j={uri:O,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var n=t?JSON.parse(t.body.toString()):void 0,r=""+(n?Array.isArray(n)?n.map(function(e){return e.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return y({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+r,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},H=function(e,t){void 0===e&&(e=!1);var r={Authorization:"Bearer "+t,"X-Exclude-Invalid":"true"};return(e||N)&&(r["X-Include-Drafts"]=!0),R&&(r["X-Environment"]=R),new n.BatchHttpLink(y({},j,{headers:r}))},L=H(!1,k),U=H(!0,k),D=new t.ApolloClient({link:L,cache:new t.InMemoryCache,ssrMode:S,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),M=function(e,t){try{var n=t||{},r=n.variables,o=n.preview,i=void 0!==o&&o,s=n.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!k&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,n){try{var o=function(){D.setLink(s?H(i,s):i?U:L);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var n=Array.isArray(r)&&r.length>t-1?r[t]:r||{};return D.query({query:e,variables:n})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var n={};return e.forEach(function(e){return n=y({},n,null==e?void 0:e.data)}),n})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},x=function(e,n){return t.gql("query GetSEO{\n    seo: "+e+" "+(n?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},B=t.gql(_||(I=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],C||(C=I.slice(0)),I.raw=C,_=I)),q=function(e,t,n){try{var r,o,i=y({},V,n),s=t.headers;return Promise.resolve(W(e,null!=(r=i.origin)&&r)).then(function(n){var r=function(e,t){"Vary"===t?s.append(t,e):s.set(t,e)};if(!n)return t;n.forEach(r),i.credentials&&s.set("Access-Control-Allow-Credentials","true");var u=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return u&&s.set("Access-Control-Expose-Headers",u),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,s.set("Access-Control-Allow-Methods",o)),function(e,t){var n=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),t&&n.set("Access-Control-Allow-Headers",t),n}(e,i.allowedHeaders).forEach(r),"number"==typeof i.maxAge&&s.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?t:(s.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:s}))):t})}catch(e){return Promise.reject(e)}},W=function(e,t){try{var n=function(e){if(e)return function(e,t){var n=new Headers;return"*"===t?n.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(n.set("Access-Control-Allow-Origin",t),n.append("Vary","Origin")):(G(null!=e?e:"",t)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(r,e):t).then(n):n("function"==typeof t?t(r,e):t))}catch(e){return Promise.reject(e)}},V={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function G(e,t){return Array.isArray(t)?t.some(function(t){return G(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function X(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}function z(e){return function(t,n){try{var r=t.headers.authorization;if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("Basic auth not set up in .env");if(!r||!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)return Promise.resolve(n.status(401).send("Access denied"));var o=r.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(t,n):n.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}}function Q(e,t,n){if(!e.s){if(n instanceof F){if(!n.s)return void(n.o=Q.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Q.bind(null,e,t),Q.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var K=z(function(e,t){try{if(!process.env.DATOCMS_ENVIRONMENT)return Promise.resolve(t.status(401).send("DATOCMS_ENVIRONMENT not set in .env"));if(!process.env.DATOCMS_API_TOKEN)return Promise.resolve(t.status(401).send("DATOCMS_API_TOKEN not set in .env"));var n=e.query.max?parseInt(e.query.max):1,o="auto-backup-",i=r.buildClient({environment:process.env.DATOCMS_ENVIRONMENT,apiToken:process.env.DATOCMS_API_TOKEN,requestTimeout:3e3});return Promise.resolve(i.environments.list()).then(function(e){var r,s,u=e.filter(function(e){return e.id.startsWith("auto-backup")&&!1===e.meta.primary}).sort(function(e,t){return e.id.replace(o,"")>t.id.replace(o,"")?-1:1}),a="auto-backup-"+(new Date).toISOString().replace("T","-").replaceAll(":","-").replace("Z","").split(".")[0];return console.log("Last backup was: ",null!=(r=null==(s=u[0])?void 0:s.id)?r:"none"),console.log("Max backups: ",n),console.log("Creating backup...",a),function(e,r){try{var o=Promise.resolve(i.environments.fork(process.env.DATOCMS_ENVIRONMENT,{id:a},{immediate_return:!1,fast:!1,force:!0})).then(function(){function e(){return console.log("Backup done!"),t.status(200).send("Backup done "+process.env.DATOCMS_ENVIRONMENT+" > "+a)}var r=0,o=function(e,t,n){for(var r;;){var o=e();if(J(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!J(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!J(s)){r=2;break}}}var u=new F,a=Q.bind(null,u,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,a),u;function c(r){i=r;do{if(t&&(s=t())&&s.then&&!J(s))return void s.then(f).then(void 0,a);if(!(o=e())||J(o)&&!o.v)return void Q(u,1,i);if(o.then)return void o.then(l).then(void 0,a);J(i=n())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,a)}function l(e){e?(i=n())&&i.then?i.then(c).then(void 0,a):c(i):Q(u,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,a):l(o):Q(u,1,i)}}(function(){return r<u.reverse().slice(n-1).length},function(){return r++},function(){return console.log("Deleting old backup...",u[r].id),Promise.resolve(i.environments.destroy(u[r].id)).then(function(){})});return o&&o.then?o.then(e):e()})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.error(e),t.status(401).send("Backup failed: "+e.message)})})}catch(e){return Promise.reject(e)}});const F=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){const r=new e,o=this.s;if(o){const e=1&o?t:n;if(e){try{Q(r,1,e(this.v))}catch(e){Q(r,2,e)}return r}return this}return this.o=function(e){try{const o=e.v;1&e.s?Q(r,1,t?t(o):o):n?Q(r,1,n(o)):Q(r,2,o)}catch(e){Q(r,2,e)}},r},e}();function J(e){return e instanceof F&&1&e.s}var Y=function(e){var t=e.seo,n=e.site,r=void 0===n?{}:n,o=e.title,i=e.description,s=e.noindex,u=void 0!==s&&s,a=$({seo:void 0===t?{}:t,site:r}),c=r.globalSeo,l=r.favicon,f=l?l.map(function(e){return y({},e.attributes)}):[],d=Z(a["og:image"],a["og:image:width"],a["og:image:height"]);return i||(i=a.description?a.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:d,description:i,locale:a["og:locale"],type:a["og:type"],site_name:a["og:site_name"]},twitter:{title:o,image:a["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:u,nofollow:u,meta:a,title:o,description:i,favicons:f,globalSeo:c,images:d}},Z=function(e,t,n){if(e)return e.split("?"),[{url:e,width:t,height:n}]},$=function(e){var t=e.seo,n=e.site;if(!t||!n)return[];var r=(n||{}).globalSeo,o=(r||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],s=i.filter(function(e){return"title"===e.tag})[0];s&&r&&r&&s.content.startsWith(r.siteName)&&(s=y({},s,{content:r.siteName+" – "+s.content})),i=i.map(function(e){return"title"!==e.tag?e:s});var u={};if(i.forEach(function(e){u[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!u["og:image"]&&null!=o&&o.image){var a=1-(o.image.width-1e3)/o.image.width;u["og:image"]=o.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(o.image.height*a)}return u};function ee(e,t,n){if(!e.s){if(n instanceof te){if(!n.s)return void(n.o=ee.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(ee.bind(null,e,t),ee.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var te=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{ee(r,1,i(this.v))}catch(e){ee(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?ee(r,1,t?t(o):o):n?ee(r,1,n(o)):ee(r,2,o)}catch(e){ee(r,2,e)}},r},e}();function ne(e){return e instanceof te&&1&e.s}var re="undefined"==typeof window,oe=function(e){return new Promise(function(t,n){return setTimeout(t,e)})};e.DatoMarkdown=function(e){var t=e.children,n=e.truncate,r=e.className,o=e.sentances,i=e.allowedElements,s=e.scroll,u=void 0===s||s,a=e.disableBreaks,c=void 0!==a&&a;if(!t)return null;var l=n?w.default(t,{limit:n,ellipsis:!0}):o?function(e,t){if(!e)return e;var n=e.split(".");return n.length>=t?n.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return p.default.createElement(m.default,{remarkPlugins:c?[g.default]:[g.default,A.default],className:r,children:l,allowedElements:i,components:{a:function(e){/*#__PURE__*/return p.default.createElement(E.default,{scroll:u,href:e.href},e.children[0])}}})},e.DatoSEO=function(e){var t=Y(e);/*#__PURE__*/return p.default.createElement(s.NextSeo,t)},e.DefaultDatoSEO=function(e){var t,n;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var r=Y(e),o=e.siteTitle+(null!=(t=r.globalSeo)&&t.titleSuffix?" "+(null==(n=r.globalSeo)?void 0:n.titleSuffix):" —")+" %s";/*#__PURE__*/return p.default.createElement(s.DefaultSeo,y({},r,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:r.favicons}))},e.SEOQuery=x,e.apiQuery=M,e.apiQueryAll=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={batchSize:50,delay:100});try{var r={},o=100;return Promise.resolve(M(e,{variables:y({},t.variables,{first:o,skip:0})})).then(function(i){var s;if(void 0===(null==(s=i.pagination)?void 0:s.count))throw new Error("Not a pagable query");var u=i.pagination.count,a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var o=t[n],i=e[t[n]];r[o]=Array.isArray(i)&&r[o]?r[o].concat(i):i}},c=function(e){return"rejected"===e.status};a(i);var l=[],f=o,d=function(e,t,n){for(var r;;){var o=e();if(b(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!b(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!b(s)){r=2;break}}}var u=new T,a=P.bind(null,u,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,a),u;function c(r){i=r;do{if(t&&(s=t())&&s.then&&!b(s))return void s.then(f).then(void 0,a);if(!(o=e())||b(o)&&!o.v)return void P(u,1,i);if(o.then)return void o.then(l).then(void 0,a);b(i=n())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,a)}function l(e){e?(i=n())&&i.then?i.then(c).then(void 0,a):c(i):P(u,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,a):l(o):P(u,1,i)}}(function(){return f<u},function(){return!!(f+=o)},function(){return function(){if(!(l.length<n.batchSize&&f+o<u))return l.push(M(e,{variables:y({},t.variables,{first:o,skip:f})})),Promise.resolve(Promise.allSettled(l)).then(function(e){var t,r=null==(t=e.find(c))?void 0:t.reason;if(r)throw new Error(r);for(var o=0;o<e.length;o++)a(e[o].value);return Promise.resolve(new Promise(function(e){return setTimeout(e,n.delay)})).then(function(){l=[]})});l.push(M(e,{variables:y({},t.variables,{first:o,skip:f})}))}()});return d&&d.then?d.then(function(e){return r}):r})}catch(e){return Promise.reject(e)}},e.awaitElement=function(e){try{var t,n=function(n){if(t)return n;throw new Error("Element "+e+" not found")},r=0,o=function(e,t,n){for(var r;;){var o=e();if(ne(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!ne(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!ne(s)){r=2;break}}}var u=new te,a=ee.bind(null,u,2);return(0===r?o.then(l):1===r?i.then(c):s.then(f)).then(void 0,a),u;function c(r){i=r;do{if(t&&(s=t())&&s.then&&!ne(s))return void s.then(f).then(void 0,a);if(!(o=e())||ne(o)&&!o.v)return void ee(u,1,i);if(o.then)return void o.then(l).then(void 0,a);ne(i=n())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,a)}function l(e){e?(i=n())&&i.then?i.then(c).then(void 0,a):c(i):ee(u,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,a):l(o):ee(u,1,i)}}(function(){return!t&&r<100},function(){return r++},function(){var n=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e}(e));return n?(t=1,n):Promise.resolve(oe(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(n):n(o))}catch(e){return Promise.reject(e)}},e.capitalize=function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},e.chunkArray=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},e.client=D,e.datoError=function(e){return console.error(e),e.message||e},e.isEmpty=function(e){return 0===Object.keys(e).filter(function(t){return void 0!==e[t]}).length},e.isServer=re,e.parseDatoError=function(e){var t=e.errors.map(function(e){var t=e.attributes,n=t.details;return{code:t.code,field:null==n?void 0:n.field,message:null==n?void 0:n.message,detailsCode:null==n?void 0:n.code,errors:Array.isArray(null==n?void 0:n.errors)?null==n?void 0:n.errors.join(". "):void 0}});return t.map(function(e){var t=e.field,n=e.errors;return e.code+" "+(t?"("+t+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(n?"("+n+")":"")}).join("\n")},e.rInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},e.sleep=oe,e.sortSwedish=function(e,t){var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,r){var o=n.findIndex(function(n){var r;return n===(null==(r=t?e[t]:e)?void 0:r.charAt(0).toUpperCase())}),i=n.findIndex(function(e){var n;return e===(null==(n=t?r[t]:r)?void 0:n.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},e.truncateParagraph=function(e,t,n,r){var o,i;if(void 0===t&&(t=1),void 0===n&&(n=!0),void 0===r&&(r=200),!e||e.length<r)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,t+1).join(".").lastIndexOf("."),u=null==(i=e.split("? "))?void 0:i.slice(0,t+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=r-1,n=!0),e.substring(0,a?u:s)+(n?"...":a?"?":".")},e.truncateWords=function(e,t){if(e.length<=t)return e;var n=e.substring(0,t),r=n.lastIndexOf(" ");return-1!==r&&(n=n.substr(0,r)),n+"..."},e.useApiQuery=function(e,t){var n,r,i,s=void 0===t?{}:t,u=s.variables,a=s.initialData,c=s.pageSize,l=s.preview,f=void 0!==l&&l,d=o.useState(a),v=d[0],h=d[1],p=o.useState(a),m=p[0],g=p[1],E=o.useState(c?{no:1,count:(null==(n=a.pagination)?void 0:n.count)||0,size:c,end:(null==(r=a.pagination)?void 0:r.count)>0&&(null==(i=a.pagination)?void 0:i.count)<=c}:void 0),w=E[0],A=E[1],P=o.useState(),S=P[0],T=P[1],b=o.useState(!1),_=b[0],I=b[1];o.useEffect(function(){JSON.stringify(a)!==JSON.stringify(v)&&(g(a),h(a))},[a]);var C=o.useCallback(function(t){return I(!0),M(e,{variables:y({},u,t),preview:f}).then(function(e){var t=k(e,m);return g(t),t}).finally(function(){return I(!1)})},[e,u,m]),O=o.useCallback(function(){try{if(!w)return Promise.resolve(T(new Error("No page size set!")));var e=w.size,t=w.no*w.size;return Promise.resolve(t>w.count&&w.count>0?w:function(n,r){try{var o=Promise.resolve(C(y({},u.variables,{first:e,skip:t}))).then(function(e){var t,n=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,r=w.no+1,o=y({},w,{no:r,count:n,end:r*c>=n});return A(o),o})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return T(e),w}))}catch(e){return Promise.reject(e)}},[w,u,c,A,T,C]),k=function(e,t){return t&&e?(Object.keys(e).forEach(function(n){t[n]&&Array.isArray(t[n])&&(e[n]=t[n].concat(e[n]))}),e):e};return o.useEffect(function(){!a&&C()},[a,C]),{data:m,error:S,loading:_,loadMore:function(e){return C(e)},nextPage:O,page:w}},e.usePreviousRoute=function(){var e=globalThis.localStorage,t=i.useRouter(),n=o.useState(void 0!==e?e.getItem("previousRoute"):null),r=n[0],s=n[1];return o.useEffect(function(){var n=e.getItem("currentRoute")||null;n!==t.asPath&&(e.setItem("previousRoute",n),e.setItem("currentRoute",t.asPath),s(n))},[t.asPath,e]),o.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),r},e.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,n=o.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),r=n[0],i=n[1],s=o.useRef(r),u=o.useCallback(function(){clearTimeout(s.current.timer);var n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),r=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),u=!t&&window.innerHeight+o>=n-e,a={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:u,isScrolledUp:o<s.current.scrolledPosition,isScrolledDown:o>s.current.scrolledPosition,scrolledPosition:o,documentHeight:n,viewportHeight:r,timer:s.current.timer};i(a),s.current=y({},a,{timer:setTimeout(function(){return i(y({},a,{isScrolling:!1}))},100)})},[t,e]);return o.useEffect(function(){return u(),window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}},[u]),r},e.useTransitionFix=function(){return o.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},e.withBackup=K,e.withBasicAuth=z,e.withBasicAuthEdge=function(e){return function(t,n){try{var r=t.headers.get("authorization");if(!r)return Promise.resolve(new Response("Access denied",{status:401}));var o=r.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(t,n):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},e.withGlobalProps=function(e,t){var n=parseInt(process.env.REVALIDATE_TIME),r=[B];return e.query&&r.push(e.query),e.queries&&r.push.apply(r,e.queries),e.seo&&r.push(x(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(M(r,{preview:e.preview})).then(function(r){return t?Promise.resolve(t({context:e,props:y({},r),revalidate:n})):{props:y({},r),context:e,revalidate:n}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,t){try{var n;if("GET"===e.method&&null!=(n=e.query)&&n.ping)return Promise.resolve(t.status(200).send("pong"));if(!process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(t.status(500).json({message:"DATOCMS_PREVIEW_SECRET env not set"}));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET)return Promise.resolve(t.status(500).json({message:"Invalid token"}));if(!e.query.slug)return Promise.resolve(t.status(500).json({message:"Invalid slug"}));var r=e.query.slug,o=r?r.startsWith("/")?r:"/"+r:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:o}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(t,n){try{var o;if("GET"===t.method&&null!=(o=t.query)&&o.ping)return Promise.resolve(n.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var t=e.headers.authorization;if(!t)return!0;var n=t.split(" ")[1],r=Buffer.from(n,"base64").toString().split(":");return r[0]===process.env.BASIC_AUTH_USER&&r[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(n.status(401).send("Access denied"));var i=t.body;if(!i||!i.entity)throw"Payload is empty";return Promise.resolve(function(e){try{var t,n,o,i,s=null==e||null==(t=e.entity)||null==(n=t.relationships)||null==(o=n.item_type)||null==(i=o.data)?void 0:i.id,u=null==e?void 0:e.event_type;if(!s)throw"Model id not found in payload!";var a=r.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.find(s)).then(function(t){return X(function(){return Promise.resolve(a.items.find(e.entity.id,{version:"current"})).then(function(e){if(!e&&"delete"!==u)throw"No record found with modelId: "+s+" ("+t.api_key+")";return y({},e,{model:t})})},function(n){var r;if(404===(null==(r=n.response)?void 0:r.status)&&("delete"===u||"unpublish"===u))return y({id:e.entity.id},e.entity.attributes,{model:t});throw n})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){t._payload=i.entity,e(t,function(e){try{return Promise.resolve(X(function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return n.json({revalidated:!0,paths:e})})},function(e){return console.log("error when revalidating"),n.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},e.withWebPreviews=function(e){return function(t,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(n.setHeader("Access-Control-Allow-Origin","*"),n.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),n.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),n.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return Promise.resolve(n.status(200).send("ok"));if(!t.body)throw new Error("No body found in request");var r=t.body;return Promise.resolve(e(r)).then(function(e){var t,o,i=[],s=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(i.push({label:"Live",url:""+s+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==r||null==(t=r.item)||null==(o=t.meta)?void 0:o.status)&&i.push({label:"Preview",url:s+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),n.status(200).json({previewLinks:i})})}catch(e){return Promise.reject(e)}}},e.withWebPreviewsEdge=function(e){var t={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(n,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");return"OPTIONS"===n.method?Promise.resolve(q(n,new Response("ok",{status:200}),t)):Promise.resolve(n.json()).then(function(r){if(!r)throw new Error("No form data in request body");return Promise.resolve(e(r)).then(function(e){var o,i,s=[],u=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(s.push({label:"Live",url:""+u+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==r||null==(o=r.item)||null==(i=o.meta)?void 0:i.status)&&s.push({label:"Preview",url:u+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),q(n,new Response(JSON.stringify({previewLinks:s}),{status:200,headers:{"Content-Type":"application/json"}}),t)})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
