!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("@next/env")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","@next/env"],r):r((e||self).api={},e.core_cjs,e.batchHttpLink_js,e.env)}(this,function(e,r,n,t){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}t.loadEnvConfig(process.env.PWD);var i="undefined"==typeof window,a=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",c=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,s=process.env.GRAPHQL_ENVIRONMENT,u={uri:a,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var n=r?JSON.parse(r.body.toString()):void 0,t=""+(n?Array.isArray(n)?n.map(function(e){return e.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return o({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+t,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},l=function(e,r){void 0===e&&(e=!1),void 0===r&&(r=c);var t={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return e&&(t["X-Include-Drafts"]=!0),s&&(t["X-Environment"]=s),new n.BatchHttpLink(o({},u,{headers:t}))},f=l(!1,c),p=l(!0,c),h=new r.ApolloClient({link:f,cache:new r.InMemoryCache,ssrMode:i,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});e.SEOQuery=function(e,n){return r.gql("query GetSEO{\n    seo: "+e+" "+(n?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},e.apiQuery=function(e,r){try{var n=r||{},t=n.variables,i=n.preview,a=void 0!==i&&i,s=n.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!c&&!s)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,n){try{var i=function(){h.setLink(s?l(a,s):a?p:f);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var n=Array.isArray(t)&&t.length>r-1?t[r]:t||{};return h.query({query:e,variables:n})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var n={};return e.forEach(function(e){return n=o({},n,null==e?void 0:e.data)}),n})}()}catch(e){return n(e)}return i&&i.then?i.then(void 0,n):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},e.client=h,e.datoError=function(e){return console.error(e),e.message||e}});
//# sourceMappingURL=index.umd.js.map
