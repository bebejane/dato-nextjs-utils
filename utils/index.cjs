var e=require("@datocms/cma-client");function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}var r=function(e,t){try{var r=function(e){if(e)return function(e,t){var r=new Headers;return"*"===t?r.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(r.set("Access-Control-Allow-Origin",t),r.append("Vary","Origin")):(o(null!=e?e:"",t)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}(n,e)},n=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(n,e):t).then(r):r("function"==typeof t?t(n,e):t))}catch(e){return Promise.reject(e)}},n={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function o(e,t){return Array.isArray(t)?t.some(function(t){return o(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function i(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}var s=process.env.NEXT_PUBLIC_SITE_URL+"/api";function u(e,t,r){if(!e.s){if(r instanceof a){if(!r.s)return void(r.o=u.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(u.bind(null,e,t),u.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e)}}var a=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{u(n,1,i(this.v))}catch(e){u(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?u(n,1,t?t(o):o):r?u(n,1,r(o)):u(n,2,o)}catch(e){u(n,2,e)}},n},e}();function c(e){return e instanceof a&&1&e.s}var l="undefined"==typeof window,f=function(e){return new Promise(function(t,r){return setTimeout(t,e)})};exports.awaitElement=function(e){try{var t,r=function(r){if(t)return r;throw new Error("Element "+e+" not found")},n=0,o=function(e,t,r){for(var n;;){var o=e();if(c(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!c(i)){n=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!c(s)){n=2;break}}}var l=new a,f=u.bind(null,l,2);return(0===n?o.then(h):1===n?i.then(d):s.then(v)).then(void 0,f),l;function d(n){i=n;do{if(t&&(s=t())&&s.then&&!c(s))return void s.then(v).then(void 0,f);if(!(o=e())||c(o)&&!o.v)return void u(l,1,i);if(o.then)return void o.then(h).then(void 0,f);c(i=r())&&(i=i.v)}while(!i||!i.then);i.then(d).then(void 0,f)}function h(e){e?(i=r())&&i.then?i.then(d).then(void 0,f):d(i):u(l,1,i)}function v(){(o=e())?o.then?o.then(h).then(void 0,f):h(o):u(l,1,i)}}(function(){return!t&&n<100},function(){return n++},function(){var r=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e}(e));return r?(t=1,r):Promise.resolve(f(30)).then(function(){})});return Promise.resolve(o&&o.then?o.then(r):r(o))}catch(e){return Promise.reject(e)}},exports.capitalize=function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},exports.chunkArray=function(e,t){for(var r=[],n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r},exports.cors=function(e,o,i){try{var s,u,a=t({},n,i),c=o.headers;return Promise.resolve(r(e,null!=(s=a.origin)&&s)).then(function(t){var r=function(e,t){"Vary"===t?c.append(t,e):c.set(t,e)};if(!t)return o;t.forEach(r),a.credentials&&c.set("Access-Control-Allow-Credentials","true");var n=Array.isArray(a.exposedHeaders)?a.exposedHeaders.join(","):a.exposedHeaders;return n&&c.set("Access-Control-Expose-Headers",n),"OPTIONS"===e.method?(a.methods&&(u=Array.isArray(a.methods)?a.methods.join(","):a.methods,c.set("Access-Control-Allow-Methods",u)),function(e,t){var r=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),t&&r.set("Access-Control-Allow-Headers",t),r}(e,a.allowedHeaders).forEach(r),"number"==typeof a.maxAge&&c.set("Access-Control-Max-Age",String(a.maxAge)),a.preflightContinue?o:(c.set("Content-Length","0"),new Response(null,{status:a.optionsSuccessStatus,headers:c}))):o})}catch(e){return Promise.reject(e)}},exports.isEmpty=function(e){return 0===Object.keys(e).filter(function(t){return void 0!==e[t]}).length},exports.isServer=l,exports.parseDatoCMSApiError=function(t){return t instanceof e.ApiError==0?"string"==typeof t?t:t.message||t.toString():new e.ApiError(t).errors.map(function(e){var t,r=""+e.attributes.code,n=[];return Array.isArray(null==(t=e.attributes.details)?void 0:t.errors)&&e.attributes.details.errors.forEach(function(e){n.push(Object.keys(e).map(function(t){return t+": "+e[t]}).join(", "))}),r+(n.length?": "+n.join(". "):"")}).join("\n")},exports.parseDatoError=function(e){return e.errors.map(function(e){var t=e.attributes,r=t.details;return{code:t.code,field:null==r?void 0:r.field,message:null==r?void 0:r.message,detailsCode:null==r?void 0:r.code,errors:Array.isArray(null==r?void 0:r.errors)?null==r?void 0:r.errors.join(". "):void 0}}).map(function(e){var t=e.field,r=e.errors;return e.code+" "+(t?"("+t+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(r?"("+r+")":"")}).join("\n")},exports.rInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},exports.sleep=f,exports.sortSwedish=function(e,t){var r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,n){var o=r.findIndex(function(r){var n;return r===(null==(n=t?e[t]:e)?void 0:n.charAt(0).toUpperCase())}),i=r.findIndex(function(e){var r;return e===(null==(r=t?n[t]:n)?void 0:r.charAt(0).toUpperCase())});return o?o>i?1:o===i?0:-1:-1})},exports.testApiEndpoints=function(){try{var r=e.buildClient({apiToken:process.env.DATOCMS_API_TOKEN});return Promise.resolve(r.site.find()).then(function(e){return console.log("Testing site: "+e.name),Promise.resolve(r.itemTypes.list()).then(function(e){var n=e.filter(function(e){return!e.modular_block});return Promise.resolve(Promise.all(n.map(function(e,o){try{var u=function(){var n=i(function(){return Promise.resolve(function(e,r){try{return Promise.resolve(r.items.list({filter:{type:e.api_key}})).then(function(r){var n=r[0];return Promise.resolve(fetch(s+"/revalidate",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({environment:"main",entity_type:"item",event_type:"update",entity:{id:n.id,type:"item",attributes:t({},n||{}),relationships:{item_type:{data:{id:e.id,type:"item_type"}}},meta:n.meta},related_entities:[{id:e.id,type:"item_type",attributes:e}]})})).then(function(e){if(200===e.status)return Promise.resolve(e.json());throw new Error("Error testing revalidate endpoint: "+e.status+" "+e.statusText)})})}catch(e){return Promise.reject(e)}}(e,r)).then(function(e){a.revalidate=e})},function(){});return n&&n.then?n.then(function(){return a}):a},a={model:e.api_key};console.log(o+1+"/"+n.length+": "+a.model);var c=i(function(){return Promise.resolve(function(e,t){try{return Promise.resolve(t.items.list({filter:{type:e.api_key}})).then(function(t){var r=t[0];return Promise.resolve(fetch(s+"/web-previews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({item:{attributes:r||{}},itemType:{attributes:e},environmentId:"main",locale:"en"})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.previewLinks})})})}catch(e){return Promise.reject(e)}}(e,r)).then(function(e){e.length>0&&(a.previews=e)})},function(){});return Promise.resolve(c&&c.then?c.then(u):u())}catch(e){return Promise.reject(e)}}))).then(function(e){return e.sort(function(e,t){return e.model>t.model?1:-1})})})})}catch(e){return Promise.reject(e)}},exports.truncateParagraph=function(e,t,r,n){var o,i;if(void 0===t&&(t=1),void 0===r&&(r=!0),void 0===n&&(n=200),!e||e.length<n)return e;var s=null==(o=e.split("."))?void 0:o.slice(0,t+1).join(".").lastIndexOf("."),u=null==(i=e.split("? "))?void 0:i.slice(0,t+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=n-1,r=!0),e.substring(0,a?u:s)+(r?"...":a?"?":".")},exports.truncateWords=function(e,t){if(e.length<=t)return e;var r=e.substring(0,t),n=r.lastIndexOf(" ");return-1!==n&&(r=r.substr(0,n)),r+"..."};
//# sourceMappingURL=index.cjs.map
