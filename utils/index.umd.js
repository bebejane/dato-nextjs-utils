!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@datocms/cma-client")):"function"==typeof define&&define.amd?define(["exports","@datocms/cma-client"],t):t((e||self).utils={},e.cmaClient)}(this,function(e,t){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}var r=function(e,t){try{var n=function(e){if(e)return function(e,t){var n=new Headers;return"*"===t?n.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(n.set("Access-Control-Allow-Origin",t),n.append("Vary","Origin")):(i(null!=e?e:"",t)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(r,e):t).then(n):n("function"==typeof t?t(r,e):t))}catch(e){return Promise.reject(e)}},o={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function i(e,t){return Array.isArray(t)?t.some(function(t){return i(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function s(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var u=process.env.NEXT_PUBLIC_SITE_URL+"/api";function a(e,t,n){if(!e.s){if(n instanceof c){if(!n.s)return void(n.o=a.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(a.bind(null,e,t),a.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var c=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{a(r,1,i(this.v))}catch(e){a(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?a(r,1,t?t(o):o):n?a(r,1,n(o)):a(r,2,o)}catch(e){a(r,2,e)}},r},e}();function l(e){return e instanceof c&&1&e.s}var f="undefined"==typeof window,d=function(e){return new Promise(function(t,n){return setTimeout(t,e)})};e.awaitElement=function(e){try{var t,n=function(n){if(t)return n;throw new Error("Element "+e+" not found")},r=0,o=function(e,t,n){for(var r;;){var o=e();if(l(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!l(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!l(s)){r=2;break}}}var u=new c,f=a.bind(null,u,2);return(0===r?o.then(h):1===r?i.then(d):s.then(v)).then(void 0,f),u;function d(r){i=r;do{if(t&&(s=t())&&s.then&&!l(s))return void s.then(v).then(void 0,f);if(!(o=e())||l(o)&&!o.v)return void a(u,1,i);if(o.then)return void o.then(h).then(void 0,f);l(i=n())&&(i=i.v)}while(!i||!i.then);i.then(d).then(void 0,f)}function h(e){e?(i=n())&&i.then?i.then(d).then(void 0,f):d(i):a(u,1,i)}function v(){(o=e())?o.then?o.then(h).then(void 0,f):h(o):a(u,1,i)}}(function(){return!t&&r<100},function(){return r++},function(){var n=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e}(e));return n?(t=1,n):Promise.resolve(d(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(n):n(o))}catch(e){return Promise.reject(e)}},e.capitalize=function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},e.chunkArray=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},e.cors=function(e,t,i){try{var s,u,a=n({},o,i),c=t.headers;return Promise.resolve(r(e,null!=(s=a.origin)&&s)).then(function(n){var r=function(e,t){"Vary"===t?c.append(t,e):c.set(t,e)};if(!n)return t;n.forEach(r),a.credentials&&c.set("Access-Control-Allow-Credentials","true");var o=Array.isArray(a.exposedHeaders)?a.exposedHeaders.join(","):a.exposedHeaders;return o&&c.set("Access-Control-Expose-Headers",o),"OPTIONS"===e.method?(a.methods&&(u=Array.isArray(a.methods)?a.methods.join(","):a.methods,c.set("Access-Control-Allow-Methods",u)),function(e,t){var n=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),t&&n.set("Access-Control-Allow-Headers",t),n}(e,a.allowedHeaders).forEach(r),"number"==typeof a.maxAge&&c.set("Access-Control-Max-Age",String(a.maxAge)),a.preflightContinue?t:(c.set("Content-Length","0"),new Response(null,{status:a.optionsSuccessStatus,headers:c}))):t})}catch(e){return Promise.reject(e)}},e.isEmpty=function(e){return 0===Object.keys(e).filter(function(t){return void 0!==e[t]}).length},e.isServer=f,e.parseDatoCMSApiError=function(e){return e instanceof t.ApiError==0?"string"==typeof e?e:e.message||e.toString():new t.ApiError(e).errors.map(function(e){var t,n=""+e.attributes.code,r=[];return Array.isArray(null==(t=e.attributes.details)?void 0:t.errors)&&e.attributes.details.errors.forEach(function(e){r.push(Object.keys(e).map(function(t){return t+": "+e[t]}).join(", "))}),n+(r.length?": "+r.join(". "):"")}).join("\n")},e.parseDatoError=function(e){return e.errors.map(function(e){var t=e.attributes,n=t.details;return{code:t.code,field:null==n?void 0:n.field,message:null==n?void 0:n.message,detailsCode:null==n?void 0:n.code,errors:Array.isArray(null==n?void 0:n.errors)?null==n?void 0:n.errors.join(". "):void 0}}).map(function(e){var t=e.field,n=e.errors;return e.code+" "+(t?"("+t+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(n?"("+n+")":"")}).join("\n")},e.rInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},e.sleep=d,e.sortSwedish=function(e,t){var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,r){var o=n.findIndex(function(n){var r;return n===(null==(r=t?e[t]:e)?void 0:r.charAt(0).toUpperCase())}),i=n.findIndex(function(e){var n;return e===(null==(n=t?r[t]:r)?void 0:n.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},e.testApiEndpoints=function(){try{var e=t.buildClient({apiToken:process.env.DATOCMS_API_TOKEN});return Promise.resolve(e.site.find()).then(function(t){return console.log("Testing site: "+t.name),Promise.resolve(e.itemTypes.list()).then(function(t){var r=t.filter(function(e){return!e.modular_block});return Promise.resolve(Promise.all(r.map(function(t,o){try{var i=function(){var r=s(function(){return Promise.resolve(function(e,t){try{return Promise.resolve(t.items.list({filter:{type:e.api_key}})).then(function(t){var r=t[0];return Promise.resolve(fetch(u+"/revalidate",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({environment:"main",entity_type:"item",event_type:"update",entity:{id:r.id,type:"item",attributes:n({},r||{}),relationships:{item_type:{data:{id:e.id,type:"item_type"}}},meta:r.meta},related_entities:[{id:e.id,type:"item_type",attributes:e}]})})).then(function(e){if(200===e.status)return Promise.resolve(e.json());throw new Error("Error testing revalidate endpoint: "+e.status+" "+e.statusText)})})}catch(e){return Promise.reject(e)}}(t,e)).then(function(e){a.revalidate=e})},function(){});return r&&r.then?r.then(function(){return a}):a},a={model:t.api_key};console.log(o+1+"/"+r.length+": "+a.model);var c=s(function(){return Promise.resolve(function(e,t){try{return Promise.resolve(t.items.list({filter:{type:e.api_key}})).then(function(t){var n=t[0];return Promise.resolve(fetch(u+"/web-previews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({item:{attributes:n||{}},itemType:{attributes:e},environmentId:"main",locale:"en"})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.previewLinks})})})}catch(e){return Promise.reject(e)}}(t,e)).then(function(e){e.length>0&&(a.previews=e)})},function(){});return Promise.resolve(c&&c.then?c.then(i):i())}catch(e){return Promise.reject(e)}}))).then(function(e){return e.sort(function(e,t){return e.model>t.model?1:-1})})})})}catch(e){return Promise.reject(e)}},e.truncateParagraph=function(e,t,n,r){var o,i;if(void 0===t&&(t=1),void 0===n&&(n=!0),void 0===r&&(r=200),!e||e.length<r)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,t+1).join(".").lastIndexOf("."),u=null==(i=e.split("? "))?void 0:i.slice(0,t+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=r-1,n=!0),e.substring(0,a?u:s)+(n?"...":a?"?":".")},e.truncateWords=function(e,t){if(e.length<=t)return e;var n=e.substring(0,t),r=n.lastIndexOf(" ");return-1!==r&&(n=n.substr(0,r)),n+"..."}});
//# sourceMappingURL=index.umd.js.map
