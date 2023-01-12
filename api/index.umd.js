!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js")):"function"==typeof define&&define.amd?define(["exports","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js"],r):r((e||self).api={},e.core_cjs,e.batchHttpLink_js)}(this,function(e,r,n){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(this,arguments)}var o="undefined"==typeof window,i=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",a=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,c=process.env.GRAPHQL_ENVIRONMENT,s={uri:i,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var n=r?JSON.parse(r.body.toString()):void 0,o=""+(n?Array.isArray(n)?n.map(function(e){return e.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return t({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+o,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},u=function(e,r){void 0===e&&(e=!1),void 0===r&&(r=a);var o={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return e&&(o["X-Include-Drafts"]=!0),c&&(o["X-Environment"]=c),new n.BatchHttpLink(t({},s,{headers:o}))},l=u(!1,a),f=u(!0,a),p=new r.ApolloClient({link:l,cache:new r.InMemoryCache,ssrMode:o,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});e.SEOQuery=function(e,n){return r.gql("query GetSEO{\n    seo: "+e+" "+(n?'( filter: { id: { eq: "'+n+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},e.apiQuery=function(e,r){try{var n=r||{},o=n.variables,i=n.preview,a=void 0!==i&&i,c=n.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");return Promise.resolve(function(r,n){try{var i=function(){p.setLink(c?u(a,c):a?f:l);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var n=Array.isArray(o)&&o.length>r-1?o[r]:o||{};return p.query({query:e,variables:n})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var n={};return e.forEach(function(e){return n=t({},n,null==e?void 0:e.data)}),n})}()}catch(e){return n(e)}return i&&i.then?i.then(void 0,n):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},e.client=p,e.datoError=function(e){return console.error(e),e.message||e}});
//# sourceMappingURL=index.umd.js.map
