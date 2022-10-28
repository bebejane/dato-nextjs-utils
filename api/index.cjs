var r=require("@apollo/client/core/core.cjs"),e=require("@apollo/client/link/batch-http/batchHttpLink.js");function t(){return t=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},t.apply(this,arguments)}var n="undefined"==typeof window,o=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",i=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,a={uri:o,fetch:process.env.LOG_GRAPHQL?function(r,e){try{var n=e?JSON.parse(e.body.toString()):void 0,o=""+(n?Array.isArray(n)?n.map(function(r){return r.operationName}):[n.operationName]:[]).join(", ");return Promise.resolve(fetch(r,e)).then(function(r){var e=(new Date).getTime();return t({},r,{text:function(){try{return Promise.resolve(r.text()).then(function(r){return console.log("[33m%s[0m","gql  ","- "+o,"- "+((new Date).getTime()-e)+"ms"),r})}catch(r){return Promise.reject(r)}}})})}catch(r){return Promise.reject(r)}}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:"Bearer "+i,"X-Exclude-Invalid":!0}},c=new e.BatchHttpLink(a),s=new e.BatchHttpLink(t({},a,{headers:t({},a.headers,{"X-Include-Drafts":!0})})),u=new r.ApolloClient({link:c,cache:new r.InMemoryCache,ssrMode:n,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});exports.SEOQuery=function(e){return r.gql("query GetSEO {seo: "+e+" {id tags: _seoMetaTags {attributes content tag}}}")},exports.apiQuery=function(r,e){try{var n=e||{},o=n.variables,a=n.preview,l=void 0!==a&&a;if(null===r)throw new Error("Invalid query! Query is empty");if(!i)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(e,n){try{var i=function(){u.setLink(l?s:c);var e=(Array.isArray(r)?r:[r]).map(function(r,e){var t=Array.isArray(o)&&o.length>e-1?o[e]:o||{};return u.query({query:r,variables:t})});return Promise.resolve(Promise.all(e)).then(function(r){var e=[];if(r.filter(function(r){return r.errors}).forEach(function(r){r.errors.map(function(r){return r.message}).forEach(function(r){return e.push(r)})}),e.length)throw new Error(e.join(". "));var n={};return r.forEach(function(r){return n=t({},n,null==r?void 0:r.data)}),n})}()}catch(r){return n(r)}return i&&i.then?i.then(void 0,n):i}(0,function(r){throw r}))}catch(r){return Promise.reject(r)}},exports.client=u;
//# sourceMappingURL=index.cjs.map
