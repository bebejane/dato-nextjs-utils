!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).utils={})}(this,function(e){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},n.apply(this,arguments)}var r=function(e,n){try{var r=function(e){if(e)return function(e,n){var r=new Headers;return"*"===n?r.set("Access-Control-Allow-Origin","*"):"string"==typeof n?(r.set("Access-Control-Allow-Origin",n),r.append("Vary","Origin")):(o(null!=e?e:"",n)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}(t,e)},t=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof n?Promise.resolve("function"==typeof n?n(t,e):n).then(r):r("function"==typeof n?n(t,e):n))}catch(e){return Promise.reject(e)}},t={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function o(e,n){return Array.isArray(n)?n.some(function(n){return o(e,n)}):"string"==typeof n?e===n:n instanceof RegExp?n.test(e):!!n}function i(e,n,r){if(!e.s){if(r instanceof s){if(!r.s)return void(r.o=i.bind(null,e,n));1&n&&(n=r.s),r=r.v}if(r&&r.then)return void r.then(i.bind(null,e,n),i.bind(null,e,2));e.s=n,e.v=r;const t=e.o;t&&t(e)}}var s=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,r){var t=new e,o=this.s;if(o){var s=1&o?n:r;if(s){try{i(t,1,s(this.v))}catch(e){i(t,2,e)}return t}return this}return this.o=function(e){try{var o=e.v;1&e.s?i(t,1,n?n(o):o):r?i(t,1,r(o)):i(t,2,o)}catch(e){i(t,2,e)}},t},e}();function u(e){return e instanceof s&&1&e.s}var a="undefined"==typeof window,c=function(e){return new Promise(function(n,r){return setTimeout(n,e)})};e.awaitElement=function(e){try{var n,r=function(r){if(n)return r;throw new Error("Element "+e+" not found")},t=0,o=function(e,n,r){for(var t;;){var o=e();if(u(o)&&(o=o.v),!o)return a;if(o.then){t=0;break}var a=r();if(a&&a.then){if(!u(a)){t=1;break}a=a.s}if(n){var c=n();if(c&&c.then&&!u(c)){t=2;break}}}var f=new s,l=i.bind(null,f,2);return(0===t?o.then(h):1===t?a.then(d):c.then(v)).then(void 0,l),f;function d(t){a=t;do{if(n&&(c=n())&&c.then&&!u(c))return void c.then(v).then(void 0,l);if(!(o=e())||u(o)&&!o.v)return void i(f,1,a);if(o.then)return void o.then(h).then(void 0,l);u(a=r())&&(a=a.v)}while(!a||!a.then);a.then(d).then(void 0,l)}function h(e){e?(a=r())&&a.then?a.then(d).then(void 0,l):d(a):i(f,1,a)}function v(){(o=e())?o.then?o.then(h).then(void 0,l):h(o):i(f,1,a)}}(function(){return!n&&t<100},function(){return t++},function(){var r=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(n){e=e.replace(n,'[id="'+n.replace("#","")+'"]')}),e}(e));return r?(n=1,r):Promise.resolve(c(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(r):r(o))}catch(e){return Promise.reject(e)}},e.capitalize=function(e,n){return void 0===n&&(n=!1),(n?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},e.chunkArray=function(e,n){for(var r=[],t=0;t<e.length;t+=n)r.push(e.slice(t,t+n));return r},e.cors=function(e,o,i){try{var s,u,a=n({},t,i),c=o.headers;return Promise.resolve(r(e,null!=(s=a.origin)&&s)).then(function(n){var r=function(e,n){"Vary"===n?c.append(n,e):c.set(n,e)};if(!n)return o;n.forEach(r),a.credentials&&c.set("Access-Control-Allow-Credentials","true");var t=Array.isArray(a.exposedHeaders)?a.exposedHeaders.join(","):a.exposedHeaders;return t&&c.set("Access-Control-Expose-Headers",t),"OPTIONS"===e.method?(a.methods&&(u=Array.isArray(a.methods)?a.methods.join(","):a.methods,c.set("Access-Control-Allow-Methods",u)),function(e,n){var r=new Headers;return n?Array.isArray(n)&&(n=n.join(",")):(n=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),n&&r.set("Access-Control-Allow-Headers",n),r}(e,a.allowedHeaders).forEach(r),"number"==typeof a.maxAge&&c.set("Access-Control-Max-Age",String(a.maxAge)),a.preflightContinue?o:(c.set("Content-Length","0"),new Response(null,{status:a.optionsSuccessStatus,headers:c}))):o})}catch(e){return Promise.reject(e)}},e.isEmpty=function(e){return 0===Object.keys(e).filter(function(n){return void 0!==e[n]}).length},e.isServer=a,e.parseDatoError=function(e){return e.errors.map(function(e){var n=e.attributes,r=n.details;return{code:n.code,field:null==r?void 0:r.field,message:null==r?void 0:r.message,detailsCode:null==r?void 0:r.code,errors:Array.isArray(null==r?void 0:r.errors)?null==r?void 0:r.errors.join(". "):void 0}}).map(function(e){var n=e.field,r=e.errors;return e.code+" "+(n?"("+n+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(r?"("+r+")":"")}).join("\n")},e.rInt=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},e.sleep=c,e.sortSwedish=function(e,n){var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,t){var o=r.findIndex(function(r){var t;return r===(null==(t=n?e[n]:e)?void 0:t.charAt(0).toUpperCase())}),i=r.findIndex(function(e){var r;return e===(null==(r=n?t[n]:t)?void 0:r.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},e.truncateParagraph=function(e,n,r,t){var o,i;if(void 0===n&&(n=1),void 0===r&&(r=!0),void 0===t&&(t=200),!e||e.length<t)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,n+1).join(".").lastIndexOf("."),u=null==(i=e.split("? "))?void 0:i.slice(0,n+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=t-1,r=!0),e.substring(0,a?u:s)+(r?"...":a?"?":".")},e.truncateWords=function(e,n){if(e.length<=n)return e;var r=e.substring(0,n),t=r.lastIndexOf(" ");return-1!==t&&(r=r.substr(0,t)),r+"..."}});
//# sourceMappingURL=index.umd.js.map
