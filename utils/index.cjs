function e(){return e=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},e.apply(this,arguments)}var r=function(e,r){try{var n=function(e){if(e)return function(e,r){var n=new Headers;return"*"===r?n.set("Access-Control-Allow-Origin","*"):"string"==typeof r?(n.set("Access-Control-Allow-Origin",r),n.append("Vary","Origin")):(t(null!=e?e:"",r)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(o,e)},o=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof r?Promise.resolve("function"==typeof r?r(o,e):r).then(n):n("function"==typeof r?r(o,e):r))}catch(e){return Promise.reject(e)}},n={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function t(e,r){return Array.isArray(r)?r.some(function(r){return t(e,r)}):"string"==typeof r?e===r:r instanceof RegExp?r.test(e):!!r}function o(e,r,n){if(!e.s){if(n instanceof i){if(!n.s)return void(n.o=o.bind(null,e,r));1&r&&(r=n.s),n=n.v}if(n&&n.then)return void n.then(o.bind(null,e,r),o.bind(null,e,2));e.s=r,e.v=n;const t=e.o;t&&t(e)}}var i=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,n){var t=new e,i=this.s;if(i){var s=1&i?r:n;if(s){try{o(t,1,s(this.v))}catch(e){o(t,2,e)}return t}return this}return this.o=function(e){try{var i=e.v;1&e.s?o(t,1,r?r(i):i):n?o(t,1,n(i)):o(t,2,i)}catch(e){o(t,2,e)}},t},e}();function s(e){return e instanceof i&&1&e.s}var u="undefined"==typeof window,a=function(e){return new Promise(function(r,n){return setTimeout(r,e)})};exports.awaitElement=function(e){try{var r,n=function(n){if(r)return n;throw new Error("Element "+e+" not found")},t=0,u=function(e,r,n){for(var t;;){var u=e();if(s(u)&&(u=u.v),!u)return a;if(u.then){t=0;break}var a=n();if(a&&a.then){if(!s(a)){t=1;break}a=a.s}if(r){var c=r();if(c&&c.then&&!s(c)){t=2;break}}}var f=new i,l=o.bind(null,f,2);return(0===t?u.then(h):1===t?a.then(d):c.then(v)).then(void 0,l),f;function d(t){a=t;do{if(r&&(c=r())&&c.then&&!s(c))return void c.then(v).then(void 0,l);if(!(u=e())||s(u)&&!u.v)return void o(f,1,a);if(u.then)return void u.then(h).then(void 0,l);s(a=n())&&(a=a.v)}while(!a||!a.then);a.then(d).then(void 0,l)}function h(e){e?(a=n())&&a.then?a.then(d).then(void 0,l):d(a):o(f,1,a)}function v(){(u=e())?u.then?u.then(h).then(void 0,l):h(u):o(f,1,a)}}(function(){return!r&&t<100},function(){return t++},function(){var n=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(r){e=e.replace(r,'[id="'+r.replace("#","")+'"]')}),e}(e));return n?(r=1,n):Promise.resolve(a(30)).then(function(){})});return Promise.resolve(u&&u.then?u.then(n):n(u))}catch(e){return Promise.reject(e)}},exports.capitalize=function(e,r){return void 0===r&&(r=!1),(r?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},exports.chunkArray=function(e,r){for(var n=[],t=0;t<e.length;t+=r)n.push(e.slice(t,t+r));return n},exports.cors=function(t,o,i){try{var s,u,a=e({},n,i),c=o.headers;return Promise.resolve(r(t,null!=(s=a.origin)&&s)).then(function(e){var r=function(e,r){"Vary"===r?c.append(r,e):c.set(r,e)};if(!e)return o;e.forEach(r),a.credentials&&c.set("Access-Control-Allow-Credentials","true");var n=Array.isArray(a.exposedHeaders)?a.exposedHeaders.join(","):a.exposedHeaders;return n&&c.set("Access-Control-Expose-Headers",n),"OPTIONS"===t.method?(a.methods&&(u=Array.isArray(a.methods)?a.methods.join(","):a.methods,c.set("Access-Control-Allow-Methods",u)),function(e,r){var n=new Headers;return r?Array.isArray(r)&&(r=r.join(",")):(r=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),r&&n.set("Access-Control-Allow-Headers",r),n}(t,a.allowedHeaders).forEach(r),"number"==typeof a.maxAge&&c.set("Access-Control-Max-Age",String(a.maxAge)),a.preflightContinue?o:(c.set("Content-Length","0"),new Response(null,{status:a.optionsSuccessStatus,headers:c}))):o})}catch(e){return Promise.reject(e)}},exports.isEmpty=function(e){return 0===Object.keys(e).filter(function(r){return void 0!==e[r]}).length},exports.isServer=u,exports.parseDatoError=function(e){return e.errors.map(function(e){var r=e.attributes,n=r.details;return{code:r.code,field:null==n?void 0:n.field,message:null==n?void 0:n.message,detailsCode:null==n?void 0:n.code,errors:Array.isArray(null==n?void 0:n.errors)?null==n?void 0:n.errors.join(". "):void 0}}).map(function(e){var r=e.field,n=e.errors;return e.code+" "+(r?"("+r+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(n?"("+n+")":"")}).join("\n")},exports.rInt=function(e,r){return e=Math.ceil(e),r=Math.floor(r),Math.floor(Math.random()*(r-e+1))+e},exports.sleep=a,exports.sortSwedish=function(e,r){var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,t){var o=n.findIndex(function(n){var t;return n===(null==(t=r?e[r]:e)?void 0:t.charAt(0).toUpperCase())}),i=n.findIndex(function(e){var n;return e===(null==(n=r?t[r]:t)?void 0:n.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},exports.truncateParagraph=function(e,r,n,t){var o,i;if(void 0===r&&(r=1),void 0===n&&(n=!0),void 0===t&&(t=200),!e||e.length<t)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,r+1).join(".").lastIndexOf("."),u=null==(i=e.split("? "))?void 0:i.slice(0,r+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=t-1,n=!0),e.substring(0,a?u:s)+(n?"...":a?"?":".")},exports.truncateWords=function(e,r){if(e.length<=r)return e;var n=e.substring(0,r),t=n.lastIndexOf(" ");return-1!==t&&(n=n.substr(0,t)),n+"..."};
//# sourceMappingURL=index.cjs.map
