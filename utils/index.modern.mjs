import{buildClient as e,ApiError as n}from"@datocms/cma-client";function t(){return t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}var r=function(e,n,r){try{var s,u,a=t({},o,r),c=n.headers;return Promise.resolve(i(e,null!=(s=a.origin)&&s)).then(function(t){var r=function(e,n){"Vary"===n?c.append(n,e):c.set(n,e)};if(!t)return n;t.forEach(r),a.credentials&&c.set("Access-Control-Allow-Credentials","true");var i=Array.isArray(a.exposedHeaders)?a.exposedHeaders.join(","):a.exposedHeaders;return i&&c.set("Access-Control-Expose-Headers",i),"OPTIONS"===e.method?(a.methods&&(u=Array.isArray(a.methods)?a.methods.join(","):a.methods,c.set("Access-Control-Allow-Methods",u)),function(e,n){var t=new Headers;return n?Array.isArray(n)&&(n=n.join(",")):(n=e.headers.get("Access-Control-Request-Headers"),t.append("Vary","Access-Control-Request-Headers")),n&&t.set("Access-Control-Allow-Headers",n),t}(e,a.allowedHeaders).forEach(r),"number"==typeof a.maxAge&&c.set("Access-Control-Max-Age",String(a.maxAge)),a.preflightContinue?n:(c.set("Content-Length","0"),new Response(null,{status:a.optionsSuccessStatus,headers:c}))):n})}catch(e){return Promise.reject(e)}},i=function(e,n){try{var t=function(e){if(e)return function(e,n){var t=new Headers;return"*"===n?t.set("Access-Control-Allow-Origin","*"):"string"==typeof n?(t.set("Access-Control-Allow-Origin",n),t.append("Vary","Origin")):(s(null!=e?e:"",n)&&e&&t.set("Access-Control-Allow-Origin",e),t.append("Vary","Origin")),t}(r,e)},r=e.headers.get("Origin")||void 0;return Promise.resolve("function"==typeof n?Promise.resolve("function"==typeof n?n(r,e):n).then(t):t("function"==typeof n?n(r,e):n))}catch(e){return Promise.reject(e)}},o={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function s(e,n){return Array.isArray(n)?n.some(function(n){return s(e,n)}):"string"==typeof n?e===n:n instanceof RegExp?n.test(e):!!n}function u(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}function a(e,n,t){if(!e.s){if(t instanceof c){if(!t.s)return void(t.o=a.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(a.bind(null,e,n),a.bind(null,e,2));e.s=n,e.v=t;var r=e.o;r&&r(e)}}var c=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,i=this.s;if(i){var o=1&i?n:t;if(o){try{a(r,1,o(this.v))}catch(e){a(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?a(r,1,n?n(i):i):t?a(r,1,t(i)):a(r,2,i)}catch(e){a(r,2,e)}},r},e}(),f=function(){try{var n=e({apiToken:process.env.DATOCMS_API_TOKEN});return Promise.resolve(n.site.find()).then(function(e){return console.log("Testing site: "+e.name),Promise.resolve(n.itemTypes.list()).then(function(e){var t,r,i,o,s,f=e.filter(function(e){return!e.modular_block}),l=[],v=(t=f,r=function(e){function t(){function t(){l.push(r)}var i=u(function(){return Promise.resolve(h(f[e],n)).then(function(e){r.revalidate=e})},function(){});return i&&i.then?i.then(t):t()}var r={model:f[e].api_key},i=u(function(){return Promise.resolve(d(f[e],n)).then(function(e){e.length>0&&(r.previews=e)})},function(){});return i&&i.then?i.then(t):t()},s=-1,function e(n){try{for(;++s<t.length;)if((n=r(s))&&n.then){if(!((u=n)instanceof c&&1&u.s))return void n.then(e,o||(o=a.bind(null,i=new c,2)));n=n.v}i?a(i,1,n):i=n}catch(e){a(i||(i=new c),2,e)}var u}(),i);return v&&v.then?v.then(function(){return l}):l})})}catch(e){return Promise.reject(e)}},l=process.env.NEXT_PUBLIC_SITE_URL+"/api",d=function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var t=n[0];return Promise.resolve(fetch(l+"/web-previews",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({item:{attributes:t||{}},itemType:{attributes:e},environmentId:"main",locale:"en"})})).then(function(e){return Promise.resolve(e.json()).then(function(e){return e.previewLinks})})})}catch(e){return Promise.reject(e)}},h=function(e,n){try{return Promise.resolve(n.items.list({filter:{type:e.api_key}})).then(function(n){var r=n[0];return Promise.resolve(fetch(l+"/api/revalidate",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(process.env.BASIC_AUTH_USER+":"+process.env.BASIC_AUTH_PASSWORD)},body:JSON.stringify({environment:"main",entity_type:"item",event_type:"update",entity:{id:r.id,type:"item",attributes:t({},r||{}),relationships:{item_type:{data:{id:e.id,type:"item_type"}}},meta:r.meta},related_entities:[{id:e.id,type:"item_type",attributes:e}]})})).then(function(e){return Promise.resolve(e.json())})})}catch(e){return Promise.reject(e)}};function v(e,n,t){if(!e.s){if(t instanceof p){if(!t.s)return void(t.o=v.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(v.bind(null,e,n),v.bind(null,e,2));e.s=n,e.v=t;const r=e.o;r&&r(e)}}var p=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){var r=new e,i=this.s;if(i){var o=1&i?n:t;if(o){try{v(r,1,o(this.v))}catch(e){v(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?v(r,1,n?n(i):i):t?v(r,1,t(i)):v(r,2,i)}catch(e){v(r,2,e)}},r},e}();function m(e){return e instanceof p&&1&e.s}var y="undefined"==typeof window,A=function(e,n){for(var t=[],r=0;r<e.length;r+=n)t.push(e.slice(r,r+n));return t},g=function(e){return e.errors.map(function(e){var n=e.attributes,t=n.details;return{code:n.code,field:null==t?void 0:t.field,message:null==t?void 0:t.message,detailsCode:null==t?void 0:t.code,errors:Array.isArray(null==t?void 0:t.errors)?null==t?void 0:t.errors.join(". "):void 0}}).map(function(e){var n=e.field,t=e.errors;return e.code+" "+(n?"("+n+")":"")+" "+(e.message||"")+" "+(e.detailsCode||"")+" "+(t?"("+t+")":"")}).join("\n")},b=function(e){return e instanceof n==0?"string"==typeof e?e:e.message||e.toString():new n(e).errors.map(function(e){var n,t=""+e.attributes.code,r=[];return Array.isArray(null==(n=e.attributes.details)?void 0:n.errors)&&e.attributes.details.errors.forEach(function(e){r.push(Object.keys(e).map(function(n){return n+": "+e[n]}).join(", "))}),t+(r.length?": "+r.join(". "):"")}).join("\n")},P=function(e){return 0===Object.keys(e).filter(function(n){return void 0!==e[n]}).length},C=function(e,n){return void 0===n&&(n=!1),(n?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,function(e){return e.toUpperCase()})},w=function(e){return new Promise(function(n,t){return setTimeout(n,e)})},O=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},S=function(e,n,t,r){var i,o;if(void 0===n&&(n=1),void 0===t&&(t=!0),void 0===r&&(r=200),!e||e.length<r)return e;var s=null==(i=e.split("."))?void 0:i.slice(0,n+1).join(".").lastIndexOf("."),u=null==(o=e.split("? "))?void 0:o.slice(0,n+1).join("? ").lastIndexOf("? "),a=-1!==u&&u<s||-1===s&&u>-1;return-1===s&&-1===u&&(s=r-1,t=!0),e.substring(0,a?u:s)+(t?"...":a?"?":".")},j=function(e,n){if(e.length<=n)return e;var t=e.substring(0,n),r=t.lastIndexOf(" ");return-1!==r&&(t=t.substr(0,r)),t+"..."},T=function(e,n){var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort(function(e,r){var i=t.findIndex(function(t){var r;return t===(null==(r=n?e[n]:e)?void 0:r.charAt(0).toUpperCase())}),o=t.findIndex(function(e){var t;return e===(null==(t=n?r[n]:r)?void 0:t.charAt(0).toUpperCase())});return i?i>o?1:i===o?0:-1:-1})},_=function(e){try{var n,t=function(t){if(n)return t;throw new Error("Element "+e+" not found")},r=0,i=function(e,n,t){for(var r;;){var i=e();if(m(i)&&(i=i.v),!i)return o;if(i.then){r=0;break}var o=t();if(o&&o.then){if(!m(o)){r=1;break}o=o.s}if(n){var s=n();if(s&&s.then&&!m(s)){r=2;break}}}var u=new p,a=v.bind(null,u,2);return(0===r?i.then(f):1===r?o.then(c):s.then(l)).then(void 0,a),u;function c(r){o=r;do{if(n&&(s=n())&&s.then&&!m(s))return void s.then(l).then(void 0,a);if(!(i=e())||m(i)&&!i.v)return void v(u,1,o);if(i.then)return void i.then(f).then(void 0,a);m(o=t())&&(o=o.v)}while(!o||!o.then);o.then(c).then(void 0,a)}function f(e){e?(o=t())&&o.then?o.then(c).then(void 0,a):c(o):v(u,1,o)}function l(){(i=e())?i.then?i.then(f).then(void 0,a):f(i):v(u,1,o)}}(function(){return!n&&r<100},function(){return r++},function(){var t=document.querySelector(function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(n){e=e.replace(n,'[id="'+n.replace("#","")+'"]')}),e}(e));return t?(n=1,t):Promise.resolve(w(30)).then(function(){})});return Promise.resolve(i&&i.then?i.then(t):t(i))}catch(e){return Promise.reject(e)}};export{_ as awaitElement,C as capitalize,A as chunkArray,r as cors,P as isEmpty,y as isServer,b as parseDatoCMSApiError,g as parseDatoError,O as rInt,w as sleep,T as sortSwedish,f as testApiEndpoints,S as truncateParagraph,j as truncateWords};
//# sourceMappingURL=index.modern.mjs.map
