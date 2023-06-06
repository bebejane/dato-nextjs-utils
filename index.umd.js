!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@datocms/cma-client"),require("react"),require("next/router.js"),require("next-seo"),require("react-markdown"),require("remark-gfm"),require("next/link.js"),require("markdown-truncate"),require("remark-breaks")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@datocms/cma-client","react","next/router.js","next-seo","react-markdown","remark-gfm","next/link.js","markdown-truncate","remark-breaks"],t):t((e||self).index={},e.core_cjs,e.batchHttpLink_js,e.cmaClient,e.react,e.router_js,e.nextSeo,e.reactMarkdown,e.remarkGfm,e.Link,e.markdownTruncate,e.remarkBreaks)}(this,function(e,t,r,n,o,i,s,a,u,c,l,f){function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var v,h,p=/*#__PURE__*/d(o),m=/*#__PURE__*/d(a),g=/*#__PURE__*/d(u),w=/*#__PURE__*/d(c),y=/*#__PURE__*/d(l),E=/*#__PURE__*/d(f);function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}function A(e,t,r){if(!e.s){if(r instanceof b){if(!r.s)return void(r.o=A.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(A.bind(null,e,t),A.bind(null,e,2));e.s=t,e.v=r;var n=e.o;n&&n(e)}}var S="undefined"==typeof window,b=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{A(n,1,i(this.v))}catch(e){A(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?A(n,1,t?t(o):o):r?A(n,1,r(o)):A(n,2,o)}catch(e){A(n,2,e)}},n},e}();function T(e){return e instanceof b&&1&e.s}var _,I,C,O=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",R=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,k=null!=(v=null!=(h=process.env.DATOCMS_ENVIRONMENT)?h:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?v:"main",L=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,N={uri:O,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return P({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},j=function(e,t){void 0===e&&(e=!1);var n={Authorization:"Bearer "+t,"X-Exclude-Invalid":"true"};return(e||L)&&(n["X-Include-Drafts"]=!0),k&&(n["X-Environment"]=k),new r.BatchHttpLink(P({},N,{headers:n}))},H=j(!1,R),U=j(!0,R),x=new t.ApolloClient({link:H,cache:new t.InMemoryCache,ssrMode:S,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),q=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,s=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!R&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){x.setLink(s?j(i,s):i?U:H);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return x.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=P({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},D=function(e,r){return t.gql("query GetSEO{\n    seo: "+e+" "+(r?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},B=t.gql(_||(I=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],C||(C=I.slice(0)),I.raw=C,_=I)),M=function(e,t,r){try{var n,o,i=P({},G,r),s=t.headers;return Promise.resolve(W(e,null!=(n=i.origin)&&n)).then(function(r){var n=function(e,t){"Vary"===t?s.append(t,e):s.set(t,e)};if(!r)return t;r.forEach(n),i.credentials&&s.set("Access-Control-Allow-Credentials","true");var a=Array.isArray(i.exposedHeaders)?i.exposedHeaders.join(","):i.exposedHeaders;return a&&s.set("Access-Control-Expose-Headers",a),"OPTIONS"===e.method?(i.methods&&(o=Array.isArray(i.methods)?i.methods.join(","):i.methods,s.set("Access-Control-Allow-Methods",o)),function(e,t){var r=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),t&&r.set("Access-Control-Allow-Headers",t),r}(e,i.allowedHeaders).forEach(n),"number"==typeof i.maxAge&&s.set("Access-Control-Max-Age",String(i.maxAge)),i.preflightContinue?t:(s.set("Content-Length","0"),new Response(null,{status:i.optionsSuccessStatus,headers:s}))):t})}catch(e){return Promise.reject(e)}},W=function(e,t){try{var r=function(e){if(e)return function(e,t){var r=new Headers;return"*"===t?r.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(r.set("Access-Control-Allow-Origin",t),r.append("Vary","Origin")):(X(null!=e?e:"",t)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}(n,e)},n=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(n,e):t).then(r):r("function"==typeof t?t(n,e):t))}catch(e){return Promise.reject(e)}},G={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function X(e,t){return Array.isArray(t)?t.some(function(t){return X(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}var z=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,s=e.noindex,a=void 0!==s&&s,u=Q({seo:void 0===t?{}:t,site:n}),c=n.globalSeo,l=n.favicon,f=l?l.map(function(e){return P({},e.attributes)}):[],d=V(u["og:image"],u["og:image:width"],u["og:image:height"]);return i||(i=u.description?u.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:d,description:i,locale:u["og:locale"],type:u["og:type"],site_name:u["og:site_name"]},twitter:{title:o,image:u["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:a,nofollow:a,meta:u,title:o,description:i,favicons:f,globalSeo:c,images:d}},V=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},Q=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],s=i.filter(function(e){return"title"===e.tag})[0];s&&n&&n&&s.content.startsWith(n.siteName)&&(s=P({},s,{content:n.siteName+" – "+s.content})),i=i.map(function(e){return"title"!==e.tag?e:s});var a={};if(i.forEach(function(e){a[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!a["og:image"]&&null!=o&&o.image){var u=1-(o.image.width-1e3)/o.image.width;a["og:image"]=o.image.url+"?w=1000",a["og:image:width"]=1e3,a["og:image:height"]=Math.round(o.image.height*u)}return a};function F(e,t,r){if(!e.s){if(r instanceof J){if(!r.s)return void(r.o=F.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(F.bind(null,e,t),F.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e)}}var J=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{F(n,1,i(this.v))}catch(e){F(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?F(n,1,t?t(o):o):r?F(n,1,r(o)):F(n,2,o)}catch(e){F(n,2,e)}},n},e}();function K(e){return e instanceof J&&1&e.s}var Y="undefined"==typeof window,Z=function(e){return new Promise(function(t,r){return setTimeout(t,e)})};e.DatoMarkdown=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances,i=e.allowedElements,s=e.scroll,a=void 0===s||s,u=e.disableBreaks,c=void 0!==u&&u;if(!t)return null;var l=r?y.default(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return p.default.createElement(m.default,{remarkPlugins:c?[g.default]:[g.default,E.default],className:n,children:l,allowedElements:i,components:{a:function(e){/*#__PURE__*/return p.default.createElement(w.default,{scroll:a,href:e.href},e.children[0])}}})},e.DatoSEO=function(e){var t=z(e);/*#__PURE__*/return p.default.createElement(s.NextSeo,t)},e.DefaultDatoSEO=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=z(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):" —")+" %s";/*#__PURE__*/return p.default.createElement(s.DefaultSeo,P({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},e.SEOQuery=D,e.apiQuery=q,e.apiQueryAll=function(e,t,r){void 0===t&&(t={}),void 0===r&&(r={batchSize:50,delay:100});try{var n={},o=100;return Promise.resolve(q(e,{variables:P({},t.variables,{first:o,skip:0})})).then(function(i){var s;if(void 0===(null==(s=i.pagination)?void 0:s.count))throw new Error("Not a pagable query");var a=i.pagination.count,u=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var o=t[r],i=e[t[r]];n[o]=Array.isArray(i)&&n[o]?n[o].concat(i):i}},c=function(e){return"rejected"===e.status};u(i);var l=[],f=o,d=function(e,t,r){for(var n;;){var o=e();if(T(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!T(i)){n=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!T(s)){n=2;break}}}var a=new b,u=A.bind(null,a,2);return(0===n?o.then(l):1===n?i.then(c):s.then(f)).then(void 0,u),a;function c(n){i=n;do{if(t&&(s=t())&&s.then&&!T(s))return void s.then(f).then(void 0,u);if(!(o=e())||T(o)&&!o.v)return void A(a,1,i);if(o.then)return void o.then(l).then(void 0,u);T(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=r())&&i.then?i.then(c).then(void 0,u):c(i):A(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):A(a,1,i)}}(function(){return f<a},function(){return!!(f+=o)},function(){return function(){if(!(l.length<r.batchSize&&f+o<a))return l.push(q(e,{variables:P({},t.variables,{first:o,skip:f})})),Promise.resolve(Promise.allSettled(l)).then(function(e){var t,n=null==(t=e.find(c))?void 0:t.reason;if(n)throw new Error(n);for(var o=0;o<e.length;o++)u(e[o].value);return Promise.resolve(new Promise(function(e){return setTimeout(e,r.delay)})).then(function(){l=[]})});l.push(q(e,{variables:P({},t.variables,{first:o,skip:f})}))}()});return d&&d.then?d.then(function(e){return n}):n})}catch(e){return Promise.reject(e)}},e.awaitElement=function(e){try{var t,r=function(r){if(t)return r;throw new Error("Element "+e+" not found")},n=0,o=function(e,t,r){for(var n;;){var o=e();if(K(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!K(i)){n=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!K(s)){n=2;break}}}var a=new J,u=F.bind(null,a,2);return(0===n?o.then(l):1===n?i.then(c):s.then(f)).then(void 0,u),a;function c(n){i=n;do{if(t&&(s=t())&&s.then&&!K(s))return void s.then(f).then(void 0,u);if(!(o=e())||K(o)&&!o.v)return void F(a,1,i);if(o.then)return void o.then(l).then(void 0,u);K(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=r())&&i.then?i.then(c).then(void 0,u):c(i):F(a,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):F(a,1,i)}}(function(){return!t&&n<100},function(){return n++},function(){var r=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e}(e));return r?(t=1,r):Promise.resolve(Z(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(r):r(o))}catch(e){return Promise.reject(e)}},e.capitalize=function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},e.chunkArray=function(e,t){for(var r=[],n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r},e.client=x,e.datoError=function(e){return console.error(e),e.message||e},e.isEmpty=function(e){return 0===Object.keys(e).filter(function(t){return void 0!==e[t]}).length},e.isServer=Y,e.parseDatoError=function(e){var t=e.errors.map(function(e){var t=e.attributes,r=t.details;return{code:t.code,field:null==r?void 0:r.field,message:null==r?void 0:r.message,detailsCode:null==r?void 0:r.code,errors:Array.isArray(null==r?void 0:r.errors)?null==r?void 0:r.errors.join(". "):void 0}});return t.map(function(e){var t=e.field,r=e.errors;return e.code+" "+(t?"("+t+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(r?"("+r+")":"")}).join("\n")},e.rInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},e.sleep=Z,e.sortSwedish=function(e,t){var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,n){var o=r.findIndex(function(r){return r===(t?e[t]:e).charAt(0).toUpperCase()}),i=r.findIndex(function(e){return e===(t?n[t]:n).charAt(0).toUpperCase()});return o>i?1:o===i?0:-1})},e.truncateParagraph=function(e,t,r,n){var o,i;if(void 0===t&&(t=1),void 0===r&&(r=!0),void 0===n&&(n=200),!e||e.length<n)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,t+1).join(".").lastIndexOf("."),a=null==(i=e.split("? "))?void 0:i.slice(0,t+1).join("? ").lastIndexOf("? "),u=-1!==a&&a<s||-1===s&&a>-1;return-1===s&&-1===a&&(s=n-1,r=!0),e.substring(0,u?a:s)+(r?"...":u?"?":".")},e.truncateWords=function(e,t){if(e.length<=t)return e;var r=e.substring(0,t),n=r.lastIndexOf(" ");return-1!==n&&(r=r.substr(0,n)),r+"..."},e.useApiQuery=function(e,t){var r,n,i,s=void 0===t?{}:t,a=s.variables,u=s.initialData,c=s.pageSize,l=s.preview,f=void 0!==l&&l,d=o.useState(u),v=d[0],h=d[1],p=o.useState(u),m=p[0],g=p[1],w=o.useState(c?{no:1,count:(null==(r=u.pagination)?void 0:r.count)||0,size:c,end:(null==(n=u.pagination)?void 0:n.count)>0&&(null==(i=u.pagination)?void 0:i.count)<=c}:void 0),y=w[0],E=w[1],A=o.useState(),S=A[0],b=A[1],T=o.useState(!1),_=T[0],I=T[1];o.useEffect(function(){JSON.stringify(u)!==JSON.stringify(v)&&(g(u),h(u))},[u]);var C=o.useCallback(function(t){return I(!0),q(e,{variables:P({},a,t),preview:f}).then(function(e){var t=R(e,m);return g(t),t}).finally(function(){return I(!1)})},[e,a,m]),O=o.useCallback(function(){try{if(!y)return Promise.resolve(b(new Error("No page size set!")));var e=y.size,t=y.no*y.size;return Promise.resolve(t>y.count&&y.count>0?y:function(r,n){try{var o=Promise.resolve(C(P({},a.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=y.no+1,o=P({},y,{no:n,count:r,end:n*c>=r});return E(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return b(e),y}))}catch(e){return Promise.reject(e)}},[y,a,c,E,b,C]),R=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return o.useEffect(function(){!u&&C()},[u,C]),{data:m,error:S,loading:_,loadMore:function(e){return C(e)},nextPage:O,page:y}},e.usePreviousRoute=function(){var e=globalThis.localStorage,t=i.useRouter(),r=o.useState(void 0!==e?e.getItem("previousRoute"):null),n=r[0],s=r[1];return o.useEffect(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),s(r))},[t.asPath,e]),o.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),n},e.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=o.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),n=r[0],i=r[1],s=o.useRef(n),a=o.useCallback(function(){clearTimeout(s.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!t&&window.innerHeight+o>=r-e,u={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:o<s.current.scrolledPosition,isScrolledDown:o>s.current.scrolledPosition,scrolledPosition:o,documentHeight:r,viewportHeight:n,timer:s.current.timer};i(u),s.current=P({},u,{timer:setTimeout(function(){return i(P({},u,{isScrolling:!1}))},100)})},[t,e]);return o.useEffect(function(){return a(),window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[a]),n},e.useTransitionFix=function(){return o.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},e.withBasicAuth=function(e){return function(t,r){try{var n=t.headers.authorization;if(!n)return Promise.resolve(r.status(401).send("Access denied"));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(t,r):r.status(401).send("Access denied"))}catch(e){return Promise.reject(e)}}},e.withBasicAuthEdge=function(e){return function(t,r){try{var n=t.headers.get("authorization");if(!n)return Promise.resolve(new Response("Access denied",{status:401}));var o=n.split(" ")[1],i=Buffer.from(o,"base64").toString().split(":"),s=i[0]===process.env.BASIC_AUTH_USER&&i[1]===process.env.BASIC_AUTH_PASSWORD;return Promise.resolve(s?e(t,r):new Response("Access denied. Wrong password or username.",{status:401}))}catch(e){return Promise.reject(e)}}},e.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[B];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(D(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(q(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:P({},n),revalidate:r})):{props:P({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},e.withPreview=function(e,t){try{var r;if("GET"===e.method&&null!=(r=e.query)&&r.ping)return Promise.resolve(t.status(200).send("pong"));if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var n=e.query.slug,o=n?n.startsWith("/")?n:"/"+n:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:o}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},e.withRevalidate=function(e){return function(t,r){try{var o,i;if("GET"===t.method&&null!=(o=t.query)&&o.ping)return Promise.resolve(r.status(200).send("pong"));if(!function(e){if(!process.env.BASIC_AUTH_USER||!process.env.BASIC_AUTH_PASSWORD)throw new Error("BASIC_AUTH_USER or BASIC_AUTH_PASSWORD not set in .env");var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var s=null==(i=t.body)?void 0:i.entity;if(!s)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,o,i=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(o=r.data)?void 0:o.id,s=null==e?void 0:e.event_type;if(!i)throw"Model id not found in payload!";var a=n.buildClient({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.find(i)).then(function(t){return"delete"===s?P({},e.entity.attributes,{model:t}):Promise.resolve(a.items.find(e.id,{version:"current"})).then(function(e){if(!e&&"delete"!==s)throw"No record found with modelId: "+i+" ("+t.api_key+")";return P({},e,{model:t})})})}catch(e){return Promise.reject(e)}}(s)).then(function(t){t._payload=s,e(t,function(e){try{return Promise.resolve(function(t,n){try{var o=function(){if(!e||!e.length)throw"Nothing to revalidate";return Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return console.log("error when revalidating"),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}},e.withWebPreviews=function(e){return function(t,r){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return Promise.resolve(r.status(200).send("ok"));if(!t.body)throw new Error("No body found in request");var n=t.body;return Promise.resolve(e(n)).then(function(e){var t,o,i=[],s=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(i.push({label:"Live",url:""+s+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(t=n.item)||null==(o=t.meta)?void 0:o.status)&&i.push({label:"Preview",url:s+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),r.status(200).json({previewLinks:i})})}catch(e){return Promise.reject(e)}}},e.withWebPreviewsEdge=function(e){var t={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return function(r,n){try{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");return"OPTIONS"===r.method?Promise.resolve(M(r,new Response("ok",{status:200}),t)):Promise.resolve(r.json()).then(function(n){if(!n)throw new Error("No form data in request body");return Promise.resolve(e(n)).then(function(e){var o,i,s=[],a=null!=e&&e.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;return e&&(s.push({label:"Live",url:""+a+e}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(o=n.item)||null==(i=o.meta)?void 0:i.status)&&s.push({label:"Preview",url:a+"/api/preview?slug="+e+"&secret="+process.env.DATOCMS_PREVIEW_SECRET})),M(r,new Response(JSON.stringify({previewLinks:s}),{status:200,headers:{"Content-Type":"application/json"}}),t)})})}catch(e){return Promise.reject(e)}}}});
//# sourceMappingURL=index.umd.js.map
