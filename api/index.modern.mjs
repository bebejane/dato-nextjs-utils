import{ApolloClient as r,InMemoryCache as e,gql as n}from"@apollo/client/core/core.cjs";import{BatchHttpLink as t}from"@apollo/client/link/batch-http/batchHttpLink.js";function o(){return o=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},o.apply(this,arguments)}var i="undefined"==typeof window,a=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",c=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,s={uri:a,fetch:"true"===process.env.LOG_GRAPHQL?function(r,e){try{var n=e?JSON.parse(e.body.toString()):void 0,t=""+(n?Array.isArray(n)?n.map(function(r){return r.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(r,e)).then(function(r){var e=(new Date).getTime();return o({},r,{text:function(){try{return Promise.resolve(r.text()).then(function(r){return console.log("[33m%s[0m","gql  ","- "+t,"- "+((new Date).getTime()-e)+"ms"),r})}catch(r){return Promise.reject(r)}}})})}catch(r){return Promise.reject(r)}}:void 0,batchMax:10,batchInterval:50},u=function(r,e){void 0===r&&(r=!1),void 0===e&&(e=c);var n={Authorization:"Bearer "+e,"X-Exclude-Invalid":!0};return r&&(n["X-Include-Drafts"]=!0),new t(o({},s,{headers:n}))},l=u(!1,c),f=u(!0,c),h=new r({link:l,cache:new e,ssrMode:i,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),v=function(r,e){try{var n=e||{},t=n.variables,i=n.preview,a=void 0!==i&&i,s=n.apiToken;if(null===r)throw new Error("Invalid query! Query is empty");if(!c)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(e,n){try{var i=function(){h.setLink(s?u(a,s):a?f:l);var e=(Array.isArray(r)?r:[r]).map(function(r,e){var n=Array.isArray(t)&&t.length>e-1?t[e]:t||{};return h.query({query:r,variables:n})});return Promise.resolve(Promise.all(e)).then(function(r){var e=[];if(r.filter(function(r){return r.errors}).forEach(function(r){r.errors.map(function(r){return r.message}).forEach(function(r){return e.push(r)})}),e.length)throw new Error(e.join(". "));var n={};return r.forEach(function(r){return n=o({},n,null==r?void 0:r.data)}),n})}()}catch(r){return n(r)}return i&&i.then?i.then(void 0,n):i}(0,function(r){throw r}))}catch(r){return Promise.reject(r)}},p=function(r,e){return n("query GetSEO{\n    seo: "+r+" "+(e?'( filter: { id: { eq: "'+e+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},m=function(r){return console.error(r),r.message||r};export{p as SEOQuery,v as apiQuery,h as client,m as datoError};
//# sourceMappingURL=index.modern.mjs.map
