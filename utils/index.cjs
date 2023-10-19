var r=require("@datocms/cma-client");function e(){return e=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},e.apply(this,arguments)}var n=function(r,e){try{var n=function(r){if(r)return function(r,e){var n=new Headers;return"*"===e?n.set("Access-Control-Allow-Origin","*"):"string"==typeof e?(n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")):(o(null!=r?r:"",e)&&r&&n.set("Access-Control-Allow-Origin",r),n.append("Vary","Origin")),n}(t,r)},t=r.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof e?Promise.resolve("function"==typeof e?e(t,r):e).then(n):n("function"==typeof e?e(t,r):e))}catch(r){return Promise.reject(r)}},t={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function o(r,e){return Array.isArray(e)?e.some(function(e){return o(r,e)}):"string"==typeof e?r===e:e instanceof RegExp?e.test(r):!!e}function i(r,e,n){if(!r.s){if(n instanceof s){if(!n.s)return void(n.o=i.bind(null,r,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(i.bind(null,r,e),i.bind(null,r,2));r.s=e,r.v=n;const t=r.o;t&&t(r)}}var s=/*#__PURE__*/function(){function r(){}return r.prototype.then=function(e,n){var t=new r,o=this.s;if(o){var s=1&o?e:n;if(s){try{i(t,1,s(this.v))}catch(r){i(t,2,r)}return t}return this}return this.o=function(r){try{var o=r.v;1&r.s?i(t,1,e?e(o):o):n?i(t,1,n(o)):i(t,2,o)}catch(r){i(t,2,r)}},t},r}();function u(r){return r instanceof s&&1&r.s}var a="undefined"==typeof window,c=function(r){return new Promise(function(e,n){return setTimeout(e,r)})};exports.awaitElement=function(r){try{var e,n=function(n){if(e)return n;throw new Error("Element "+r+" not found")},t=0,o=function(r,e,n){for(var t;;){var o=r();if(u(o)&&(o=o.v),!o)return a;if(o.then){t=0;break}var a=n();if(a&&a.then){if(!u(a)){t=1;break}a=a.s}if(e){var c=e();if(c&&c.then&&!u(c)){t=2;break}}}var f=new s,l=i.bind(null,f,2);return(0===t?o.then(h):1===t?a.then(d):c.then(v)).then(void 0,l),f;function d(t){a=t;do{if(e&&(c=e())&&c.then&&!u(c))return void c.then(v).then(void 0,l);if(!(o=r())||u(o)&&!o.v)return void i(f,1,a);if(o.then)return void o.then(h).then(void 0,l);u(a=n())&&(a=a.v)}while(!a||!a.then);a.then(d).then(void 0,l)}function h(r){r?(a=n())&&a.then?a.then(d).then(void 0,l):d(a):i(f,1,a)}function v(){(o=r())?o.then?o.then(h).then(void 0,l):h(o):i(f,1,a)}}(function(){return!e&&t<100},function(){return t++},function(){var n=document.querySelector(function(r){return(r.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(e){r=r.replace(e,'[id="'+e.replace("#","")+'"]')}),r}(r));return n?(e=1,n):Promise.resolve(c(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(n):n(o))}catch(r){return Promise.reject(r)}},exports.capitalize=function(r,e){return void 0===e&&(e=!1),(e?r.toLowerCase():r).replace(/(?:^|\s|["'([{])+\S/g,function(r){return r.toUpperCase()})},exports.chunkArray=function(r,e){for(var n=[],t=0;t<r.length;t+=e)n.push(r.slice(t,t+e));return n},exports.cors=function(r,o,i){try{var s,u,a=e({},t,i),c=o.headers;return Promise.resolve(n(r,null!=(s=a.origin)&&s)).then(function(e){var n=function(r,e){"Vary"===e?c.append(e,r):c.set(e,r)};if(!e)return o;e.forEach(n),a.credentials&&c.set("Access-Control-Allow-Credentials","true");var t=Array.isArray(a.exposedHeaders)?a.exposedHeaders.join(","):a.exposedHeaders;return t&&c.set("Access-Control-Expose-Headers",t),"OPTIONS"===r.method?(a.methods&&(u=Array.isArray(a.methods)?a.methods.join(","):a.methods,c.set("Access-Control-Allow-Methods",u)),function(r,e){var n=new Headers;return e?Array.isArray(e)&&(e=e.join(",")):(e=r.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),e&&n.set("Access-Control-Allow-Headers",e),n}(r,a.allowedHeaders).forEach(n),"number"==typeof a.maxAge&&c.set("Access-Control-Max-Age",String(a.maxAge)),a.preflightContinue?o:(c.set("Content-Length","0"),new Response(null,{status:a.optionsSuccessStatus,headers:c}))):o})}catch(r){return Promise.reject(r)}},exports.isEmpty=function(r){return 0===Object.keys(r).filter(function(e){return void 0!==r[e]}).length},exports.isServer=a,exports.parseDatoCMSApiError=function(e){return e instanceof r.ApiError==0?"string"==typeof e?e:e.message||e.toString():new r.ApiError(e).errors.map(function(r){var e,n=""+r.attributes.code,t=[];return Array.isArray(null==(e=r.attributes.details)?void 0:e.errors)&&r.attributes.details.errors.forEach(function(r){t.push(Object.keys(r).map(function(e){return e+": "+r[e]}).join(", "))}),n+(t.length?": "+t.join(". "):"")}).join("\n")},exports.parseDatoError=function(r){return r.errors.map(function(r){var e=r.attributes,n=e.details;return{code:e.code,field:null==n?void 0:n.field,message:null==n?void 0:n.message,detailsCode:null==n?void 0:n.code,errors:Array.isArray(null==n?void 0:n.errors)?null==n?void 0:n.errors.join(". "):void 0}}).map(function(r){var e=r.field,n=r.errors;return r.code+" "+(e?"("+e+")":"")+" "+(r.message||"")+" "+(r.detailsCode||"")+" "+(n?"("+n+")":"")}).join("\n")},exports.rInt=function(r,e){return r=Math.ceil(r),e=Math.floor(e),Math.floor(Math.random()*(e-r+1))+r},exports.sleep=c,exports.sortSwedish=function(r,e){var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return r.sort(function(r,t){var o=n.findIndex(function(n){var t;return n===(null==(t=e?r[e]:r)?void 0:t.charAt(0).toUpperCase())}),i=n.findIndex(function(r){var n;return r===(null==(n=e?t[e]:t)?void 0:n.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},exports.truncateParagraph=function(r,e,n,t){var o,i;if(void 0===e&&(e=1),void 0===n&&(n=!0),void 0===t&&(t=200),!r||r.length<t)return r;var s=null==(o=r.split("."))?void 0:o.slice(0,e+1).join(".").lastIndexOf("."),u=null==(i=r.split("? "))?void 0:i.slice(0,e+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=t-1,n=!0),r.substring(0,a?u:s)+(n?"...":a?"?":".")},exports.truncateWords=function(r,e){if(r.length<=e)return r;var n=r.substring(0,e),t=n.lastIndexOf(" ");return-1!==t&&(n=n.substr(0,t)),n+"..."};
//# sourceMappingURL=index.cjs.map
