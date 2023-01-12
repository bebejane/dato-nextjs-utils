var r=require("@apollo/client/core/core.cjs"),e=require("@apollo/client/link/batch-http/batchHttpLink.js");function n(){return n=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},n.apply(this,arguments)}var t="undefined"==typeof window,o=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",i=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,a=process.env.GRAPHQL_ENVIRONMENT,c={uri:o,fetch:"true"===process.env.LOG_GRAPHQL?function(r,e){try{var t=e?JSON.parse(e.body.toString()):void 0,o=""+(t?Array.isArray(t)?t.map(function(r){return r.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(r,e)).then(function(r){var e=(new Date).getTime();return n({},r,{text:function(){try{return Promise.resolve(r.text()).then(function(r){return console.log("[33m%s[0m","gql  ","- "+o,"- "+((new Date).getTime()-e)+"ms"),r})}catch(r){return Promise.reject(r)}}})})}catch(r){return Promise.reject(r)}}:void 0,batchMax:10,batchInterval:50},s=function(r,t){void 0===r&&(r=!1),void 0===t&&(t=i);var o={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return r&&(o["X-Include-Drafts"]=!0),a&&(o["X-Environment"]=a),new e.BatchHttpLink(n({},c,{headers:o}))},u=s(!1,i),l=s(!0,i),v=new r.ApolloClient({link:u,cache:new r.InMemoryCache,ssrMode:t,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});exports.SEOQuery=function(e,n){return r.gql("query GetSEO{\n    seo: "+e+" "+(n?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},exports.apiQuery=function(r,e){try{var t=e||{},o=t.variables,i=t.preview,a=void 0!==i&&i,c=t.apiToken;if(null===r)throw new Error("Invalid query! Query is empty");if(!process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN&&!process.env.GRAPHQL_API_TOKEN&&!c)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(e,t){try{var i=function(){v.setLink(c?s(a,c):a?l:u);var e=(Array.isArray(r)?r:[r]).map(function(r,e){var n=Array.isArray(o)&&o.length>e-1?o[e]:o||{};return v.query({query:r,variables:n})});return Promise.resolve(Promise.all(e)).then(function(r){var e=[];if(r.filter(function(r){return r.errors}).forEach(function(r){r.errors.map(function(r){return r.message}).forEach(function(r){return e.push(r)})}),e.length)throw new Error(e.join(". "));var t={};return r.forEach(function(r){return t=n({},t,null==r?void 0:r.data)}),t})}()}catch(r){return t(r)}return i&&i.then?i.then(void 0,t):i}(0,function(r){throw r}))}catch(r){return Promise.reject(r)}},exports.client=v,exports.datoError=function(r){return console.error(r),r.message||r};
//# sourceMappingURL=index.cjs.map
