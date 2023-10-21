import{buildClient as e,ApiError as t}from"@datocms/cma-client";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}var r=function(e,t,r){try{var s,u,a=n({},o,r),c=t.headers;return Promise.resolve(i(e,null!=(s=a.origin)&&s)).then(function(n){var r=function(e,t){"Vary"===t?c.append(t,e):c.set(t,e)};if(!n)return t;n.forEach(r),a.credentials&&c.set("Access-Control-Allow-Credentials","true");var i=Array.isArray(a.exposedHeaders)?a.exposedHeaders.join(","):a.exposedHeaders;return i&&c.set("Access-Control-Expose-Headers",i),"OPTIONS"===e.method?(a.methods&&(u=Array.isArray(a.methods)?a.methods.join(","):a.methods,c.set("Access-Control-Allow-Methods",u)),function(e,t){var n=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),n.append("Vary","Access-Control-Request-Headers")),t&&n.set("Access-Control-Allow-Headers",t),n}(e,a.allowedHeaders).forEach(r),"number"==typeof a.maxAge&&c.set("Access-Control-Max-Age",String(a.maxAge)),a.preflightContinue?t:(c.set("Content-Length","0"),new Response(null,{status:a.optionsSuccessStatus,headers:c}))):t})}catch(e){return Promise.reject(e)}},i=function(e,t){try{var n=function(e){if(e)return function(e,t){var n=new Headers;return"*"===t?n.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(n.set("Access-Control-Allow-Origin",t),n.append("Vary","Origin")):(s(null!=e?e:"",t)&&e&&n.set("Access-Control-Allow-Origin",e),n.append("Vary","Origin")),n}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof t?Promise.resolve("function"==typeof t?t(r,e):t).then(n):n("function"==typeof t?t(r,e):t))}catch(e){return Promise.reject(e)}},o={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function s(e,t){return Array.isArray(t)?t.some(function(t){return s(e,t)}):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function u(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}function a(e,t,n){if(!e.s){if(n instanceof c){if(!n.s)return void(n.o=a.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(a.bind(null,e,t),a.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var c=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,i=this.s;if(i){var o=1&i?t:n;if(o){try{a(r,1,o(this.v))}catch(e){a(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?a(r,1,t?t(i):i):n?a(r,1,n(i)):a(r,2,i)}catch(e){a(r,2,e)}},r},e}(),f=function(){try{var t=e({apiToken:process.env.DATOCMS_API_TOKEN});return Promise.resolve(t.site.find()).then(function(e){return console.log("Testing site: "+e.name),Promise.resolve(t.itemTypes.list()).then(function(e){var n,r,i,o,s,f=e.filter(function(e){return!e.modular_block}),l=[],v=(n=f,r=function(e){function n(){function n(){l.push(r)}var i=u(function(){return Promise.resolve(h(f[e],t)).then(function(e){r.revalidate=e})},function(){});return i&&i.then?i.then(n):n()}var r={model:f[e].api_key};console.log(e+1+"/"+f.length+": "+r.model);var i=u(function(){return Promise.resolve(d(f[e],t)).then(function(e){e.length>0&&(r.previews=e)})},function(){});return i&&i.then?i.then(n):n()},s=-1,function e(t){try{for(;++s<n.length;)if((t=r(s))&&t.then){if(!((u=t)instanceof c&&1&u.s))return void t.then(e,o||(o=a.bind(null,i=new c,2)));t=t.v}i?a(i,1,t):i=t}catch(e){a(i||(i=new c),2,e)}var u}(),i);return v&&v.then?v.then(function(){return l}):l})})}catch(e){return Promise.reject(e)}},l=process.env.NEXT_PUBLIC_SITE_URL+"/api",d=function(e,t){try{return Promise.resolve(t.items.list({filter:{type:e.api_key}})).then(function(t){var n=t[0];return Promise.resolve(fetch(l+"/web-previews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({item:{attributes:n||{}},itemType:{attributes:e},environmentId:"main",locale:"en"})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.previewLinks})})})}catch(e){return Promise.reject(e)}},h=function(e,t){try{return Promise.resolve(t.items.list({filter:{type:e.api_key}})).then(function(t){var r=t[0];return Promise.resolve(fetch(l+"/revalidate",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({environment:"main",entity_type:"item",event_type:"update",entity:{id:r.id,type:"item",attributes:n({},r||{}),relationships:{item_type:{data:{id:e.id,type:"item_type"}}},meta:r.meta},related_entities:[{id:e.id,type:"item_type",attributes:e}]})})).then(function(e){if(200===e.status)return Promise.resolve(e.json());throw new Error("Error testing revalidate endpoint: "+e.status+" "+e.statusText)})})}catch(e){return Promise.reject(e)}};function v(e,t,n){if(!e.s){if(n instanceof p){if(!n.s)return void(n.o=v.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(v.bind(null,e,t),v.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var p=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,i=this.s;if(i){var o=1&i?t:n;if(o){try{v(r,1,o(this.v))}catch(e){v(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?v(r,1,t?t(i):i):n?v(r,1,n(i)):v(r,2,i)}catch(e){v(r,2,e)}},r},e}();function m(e){return e instanceof p&&1&e.s}var y="undefined"==typeof window,A=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},g=function(e){return e.errors.map(function(e){var t=e.attributes,n=t.details;return{code:t.code,field:null==n?void 0:n.field,message:null==n?void 0:n.message,detailsCode:null==n?void 0:n.code,errors:Array.isArray(null==n?void 0:n.errors)?null==n?void 0:n.errors.join(". "):void 0}}).map(function(e){var t=e.field,n=e.errors;return e.code+" "+(t?"("+t+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(n?"("+n+")":"")}).join("\n")},b=function(e){return e instanceof t==0?"string"==typeof e?e:e.message||e.toString():new t(e).errors.map(function(e){var t,n=""+e.attributes.code,r=[];return Array.isArray(null==(t=e.attributes.details)?void 0:t.errors)&&e.attributes.details.errors.forEach(function(e){r.push(Object.keys(e).map(function(t){return t+": "+e[t]}).join(", "))}),n+(r.length?": "+r.join(". "):"")}).join("\n")},P=function(e){return 0===Object.keys(e).filter(function(t){return void 0!==e[t]}).length},w=function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},C=function(e){return new Promise(function(t,n){return setTimeout(t,e)})},O=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},S=function(e,t,n,r){var i,o;if(void 0===t&&(t=1),void 0===n&&(n=!0),void 0===r&&(r=200),!e||e.length<r)return e;var s=null==(i=e.split("."))?void 0:i.slice(0,t+1).join(".").lastIndexOf("."),u=null==(o=e.split("? "))?void 0:o.slice(0,t+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=r-1,n=!0),e.substring(0,a?u:s)+(n?"...":a?"?":".")},j=function(e,t){if(e.length<=t)return e;var n=e.substring(0,t),r=n.lastIndexOf(" ");return-1!==r&&(n=n.substr(0,r)),n+"..."},T=function(e,t){var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,r){var i=n.findIndex(function(n){var r;return n===(null==(r=t?e[t]:e)?void 0:r.charAt(0).toUpperCase())}),o=n.findIndex(function(e){var n;return e===(null==(n=t?r[t]:r)?void 0:n.charAt(0).toUpperCase())});return i?i>o?1:i===o?0:-1:-1})},_=function(e){try{var t,n=function(n){if(t)return n;throw new Error("Element "+e+" not found")},r=0,i=function(e,t,n){for(var r;;){var i=e();if(m(i)&&(i=i.v),!i)return o;if(i.then){r=0;break}var o=n();if(o&&o.then){if(!m(o)){r=1;break}o=o.s}if(t){var s=t();if(s&&s.then&&!m(s)){r=2;break}}}var u=new p,a=v.bind(null,u,2);return(0===r?i.then(f):1===r?o.then(c):s.then(l)).then(void 0,a),u;function c(r){o=r;do{if(t&&(s=t())&&s.then&&!m(s))return void s.then(l).then(void 0,a);if(!(i=e())||m(i)&&!i.v)return void v(u,1,o);if(i.then)return void i.then(f).then(void 0,a);m(o=n())&&(o=o.v)}while(!o||!o.then);o.then(c).then(void 0,a)}function f(e){e?(o=n())&&o.then?o.then(c).then(void 0,a):c(o):v(u,1,o)}function l(){(i=e())?i.then?i.then(f).then(void 0,a):f(i):v(u,1,o)}}(function(){return!t&&r<100},function(){return r++},function(){var n=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e}(e));return n?(t=1,n):Promise.resolve(C(30)).then(function(){})});return Promise.resolve(i&&i.then?i.then(n):n(i))}catch(e){return Promise.reject(e)}};export{_ as awaitElement,w as capitalize,A as chunkArray,r as cors,P as isEmpty,y as isServer,b as parseDatoCMSApiError,g as parseDatoError,O as rInt,C as sleep,T as sortSwedish,f as testApiEndpoints,S as truncateParagraph,j as truncateWords};
//# sourceMappingURL=index.modern.mjs.map
