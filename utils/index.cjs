var e=require("@datocms/cma-client");function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}var n=function(e,t){try{var n=function(e){if(e)return function(e,t){var n=new Headers;return"*"===t?n.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(n.set("Access-Control-Allow-Origin",t),n.append("Vary","Origin")):(o(null!=e?e:"",t)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(r,e):t).then(n):n("function"==typeof t?t(r,e):t))}catch(e){return Promise.reject(e)}},r={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function o(e,t){return Array.isArray(t)?t.some(function(t){return o(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function i(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}function s(e,t,n){if(!e.s){if(n instanceof u){if(!n.s)return void(n.o=s.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(s.bind(null,e,t),s.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var u=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{s(r,1,i(this.v))}catch(e){s(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?s(r,1,t?t(o):o):n?s(r,1,n(o)):s(r,2,o)}catch(e){s(r,2,e)}},r},e}(),a=process.env.NEXT_PUBLIC_SITE_URL+"/api";function c(e,t,n){if(!e.s){if(n instanceof f){if(!n.s)return void(n.o=c.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(c.bind(null,e,t),c.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var f=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{c(r,1,i(this.v))}catch(e){c(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?c(r,1,t?t(o):o):n?c(r,1,n(o)):c(r,2,o)}catch(e){c(r,2,e)}},r},e}();function l(e){return e instanceof f&&1&e.s}var d="undefined"==typeof window,h=function(e){return new Promise(function(t,n){return setTimeout(t,e)})};exports.awaitElement=function(e){try{var t,n=function(n){if(t)return n;throw new Error("Element "+e+" not found")},r=0,o=function(e,t,n){for(var r;;){var o=e();if(l(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!l(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!l(s)){r=2;break}}}var u=new f,a=c.bind(null,u,2);return(0===r?o.then(h):1===r?i.then(d):s.then(v)).then(void 0,a),u;function d(r){i=r;do{if(t&&(s=t())&&s.then&&!l(s))return void s.then(v).then(void 0,a);if(!(o=e())||l(o)&&!o.v)return void c(u,1,i);if(o.then)return void o.then(h).then(void 0,a);l(i=n())&&(i=i.v)}while(!i||!i.then);i.then(d).then(void 0,a)}function h(e){e?(i=n())&&i.then?i.then(d).then(void 0,a):d(i):c(u,1,i)}function v(){(o=e())?o.then?o.then(h).then(void 0,a):h(o):c(u,1,i)}}(function(){return!t&&r<100},function(){return r++},function(){var n=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e}(e));return n?(t=1,n):Promise.resolve(h(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(n):n(o))}catch(e){return Promise.reject(e)}},exports.capitalize=function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},exports.chunkArray=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},exports.cors=function(e,o,i){try{var s,u,a=t({},r,i),c=o.headers;return Promise.resolve(n(e,null!=(s=a.origin)&&s)).then(function(t){var n=function(e,t){"Vary"===t?c.append(t,e):c.set(t,e)};if(!t)return o;t.forEach(n),a.credentials&&c.set("Access-Control-Allow-Credentials","true");var r=Array.isArray(a.exposedHeaders)?a.exposedHeaders.join(","):a.exposedHeaders;return r&&c.set("Access-Control-Expose-Headers",r),"OPTIONS"===e.method?(a.methods&&(u=Array.isArray(a.methods)?a.methods.join(","):a.methods,c.set("Access-Control-Allow-Methods",u)),function(e,t){var n=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),t&&n.set("Access-Control-Allow-Headers",t),n}(e,a.allowedHeaders).forEach(n),"number"==typeof a.maxAge&&c.set("Access-Control-Max-Age",String(a.maxAge)),a.preflightContinue?o:(c.set("Content-Length","0"),new Response(null,{status:a.optionsSuccessStatus,headers:c}))):o})}catch(e){return Promise.reject(e)}},exports.isEmpty=function(e){return 0===Object.keys(e).filter(function(t){return void 0!==e[t]}).length},exports.isServer=d,exports.parseDatoCMSApiError=function(t){return t instanceof e.ApiError==0?"string"==typeof t?t:t.message||t.toString():new e.ApiError(t).errors.map(function(e){var t,n=""+e.attributes.code,r=[];return Array.isArray(null==(t=e.attributes.details)?void 0:t.errors)&&e.attributes.details.errors.forEach(function(e){r.push(Object.keys(e).map(function(t){return t+": "+e[t]}).join(", "))}),n+(r.length?": "+r.join(". "):"")}).join("\n")},exports.parseDatoError=function(e){return e.errors.map(function(e){var t=e.attributes,n=t.details;return{code:t.code,field:null==n?void 0:n.field,message:null==n?void 0:n.message,detailsCode:null==n?void 0:n.code,errors:Array.isArray(null==n?void 0:n.errors)?null==n?void 0:n.errors.join(". "):void 0}}).map(function(e){var t=e.field,n=e.errors;return e.code+" "+(t?"("+t+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(n?"("+n+")":"")}).join("\n")},exports.rInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},exports.sleep=h,exports.sortSwedish=function(e,t){var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,r){var o=n.findIndex(function(n){var r;return n===(null==(r=t?e[t]:e)?void 0:r.charAt(0).toUpperCase())}),i=n.findIndex(function(e){var n;return e===(null==(n=t?r[t]:r)?void 0:n.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},exports.testApiEndpoints=function(){try{var n=e.buildClient({apiToken:process.env.DATOCMS_API_TOKEN});return Promise.resolve(n.site.find()).then(function(e){return console.log("Testing site: "+e.name),Promise.resolve(n.itemTypes.list()).then(function(e){var r,o,c,f,l,d=e.filter(function(e){return!e.modular_block}),h=[],v=(r=d,o=function(e){function r(){function r(){h.push(o)}var s=i(function(){return Promise.resolve(function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var r=n[0];return Promise.resolve(fetch(a+"/revalidate",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({environment:"main",entity_type:"item",event_type:"update",entity:{id:r.id,type:"item",attributes:t({},r||{}),relationships:{item_type:{data:{id:e.id,type:"item_type"}}},meta:r.meta},related_entities:[{id:e.id,type:"item_type",attributes:e}]})})).then(function(e){if(200===e.status)return Promise.resolve(e.json());throw new Error("Error testing revalidate endpoint: "+e.status+" "+e.statusText)})})}catch(e){return Promise.reject(e)}}(d[e],n)).then(function(e){o.revalidate=e})},function(e){console.log(e)});return s&&s.then?s.then(r):r()}var o={model:d[e].api_key},s=i(function(){return Promise.resolve(function(e,t){try{return Promise.resolve(t.items.list({filter:{type:e.api_key}})).then(function(t){var n=t[0];return Promise.resolve(fetch(a+"/web-previews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({item:{attributes:n||{}},itemType:{attributes:e},environmentId:"main",locale:"en"})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.previewLinks})})})}catch(e){return Promise.reject(e)}}(d[e],n)).then(function(e){e.length>0&&(o.previews=e)})},function(e){console.log(e)});return s&&s.then?s.then(r):r()},l=-1,function e(t){try{for(;++l<r.length;)if((t=o(l))&&t.then){if(!((n=t)instanceof u&&1&n.s))return void t.then(e,f||(f=s.bind(null,c=new u,2)));t=t.v}c?s(c,1,t):c=t}catch(e){s(c||(c=new u),2,e)}var n}(),c);return v&&v.then?v.then(function(){return h}):h})})}catch(e){return Promise.reject(e)}},exports.truncateParagraph=function(e,t,n,r){var o,i;if(void 0===t&&(t=1),void 0===n&&(n=!0),void 0===r&&(r=200),!e||e.length<r)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,t+1).join(".").lastIndexOf("."),u=null==(i=e.split("? "))?void 0:i.slice(0,t+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=r-1,n=!0),e.substring(0,a?u:s)+(n?"...":a?"?":".")},exports.truncateWords=function(e,t){if(e.length<=t)return e;var n=e.substring(0,t),r=n.lastIndexOf(" ");return-1!==r&&(n=n.substr(0,r)),n+"..."};
//# sourceMappingURL=index.cjs.map
