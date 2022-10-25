var r=require("@apollo/client/core"),e=require("@apollo/client/link/batch-http/batchHttpLink.js"),t=require("@apollo/client/core/core.cjs");function n(){return n=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},n.apply(this,arguments)}var o="undefined"==typeof window,i=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",a=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,c={uri:i,fetch:process.env.LOG_GRAPHQL?function(r,e){try{var t=e?JSON.parse(e.body.toString()):void 0,o=""+(t?Array.isArray(t)?t.map(function(r){return r.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(r,e)).then(function(r){var e=(new Date).getTime();return n({},r,{text:function(){try{return Promise.resolve(r.text()).then(function(r){return console.log("[33m%s[0m","gql  ","- "+o,"- "+((new Date).getTime()-e)+"ms"),r})}catch(r){return Promise.reject(r)}}})})}catch(r){return Promise.reject(r)}}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:"Bearer "+a}},s=new e.BatchHttpLink(c),u=new e.BatchHttpLink(n({},c,{headers:n({},c.headers,{"X-Include-Drafts":!0})})),l=new r.ApolloClient({link:s,cache:new r.InMemoryCache,ssrMode:o,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});exports.SEOQuery=function(r){return t.gql("query GetSEO {seo: "+r+" {id tags: _seoMetaTags {attributes content tag}}}")},exports.apiQuery=function(r,e){try{var t=e||{},o=t.variables,i=t.preview,c=void 0!==i&&i;if(null===r)throw new Error("Invalid query! Query is empty");if(!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(e,t){try{var i=function(){l.setLink(c?u:s);var e=(Array.isArray(r)?r:[r]).map(function(r,e){var t=Array.isArray(o)&&o.length>e-1?o[e]:o||{};return l.query({query:r,variables:t})});return Promise.resolve(Promise.all(e)).then(function(r){var e=[];if(r.filter(function(r){return r.errors}).forEach(function(r){r.errors.map(function(r){return r.message}).forEach(function(r){return e.push(r)})}),e.length)throw new Error(e.join(". "));var t={};return r.forEach(function(r){return t=n({},t,null==r?void 0:r.data)}),t})}()}catch(r){return t(r)}return i&&i.then?i.then(void 0,t):i}(0,function(r){throw r}))}catch(r){return Promise.reject(r)}};
//# sourceMappingURL=index.cjs.map
