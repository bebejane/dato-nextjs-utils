!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("next/router.js")):"function"==typeof define&&define.amd?define(["exports","react","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","next/router.js"],t):t((e||self).hooks={},e.react,e.core_cjs,e.batchHttpLink_js,e.router_js)}(this,function(e,t,r,n,o){function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u,c="undefined"==typeof window,a=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",s=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,l=null!=(u=process.env.DATOCMS_ENVIRONMENT)?u:"main",f={uri:a,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return i({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},d=function(e,t){void 0===e&&(e=!1);var r={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return e&&(r["X-Include-Drafts"]=!0),l&&(r["X-Environment"]=l),new n.BatchHttpLink(i({},f,{headers:r}))},v=d(!1,s),h=d(!0,s),m=new r.ApolloClient({link:v,cache:new r.InMemoryCache,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});e.useApiQuery=function(e,r){var n,o,u=void 0===r?{}:r,c=u.variables,a=u.initialData,l=u.pageSize,f=t.useState(a),p=f[0],g=f[1],w=t.useState(l?{no:1,count:0,size:l,end:(null==(n=a.pagination)?void 0:n.count)>0&&(null==(o=a.pagination)?void 0:o.count)<=l}:void 0),y=w[0],P=w[1],E=t.useState(),b=E[0],A=E[1],H=t.useState(!1),j=H[0],I=H[1];t.useEffect(function(){return a&&g(a)},[a]);var S=t.useCallback(function(t){return I(!0),function(e,t){try{var r=t||{},n=r.variables,o=r.preview,u=void 0!==o&&o,c=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!s&&!c)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){m.setLink(c?d(u,c):u?h:v);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return m.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=i({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(e,{variables:i({},t||c)}).then(function(e){var t=T(e,p);return g(t),t}).finally(function(){return I(!1)})},[e,c,p]),T=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return t.useEffect(function(){!a&&S()},[a,S]),{data:p,error:b,loading:j,loadMore:function(e){return S(e)},nextPage:function(){try{if(!y)return Promise.resolve(A(new Error("No page size set!")));var e=y.size,t=y.no*y.size;return Promise.resolve(t>y.count&&y.count>0?y:function(r,n){try{var o=Promise.resolve(S(i({},c.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=y.no+1,o=i({},y,{no:n,count:r,end:n*l>=r});return P(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return A(e),y}))}catch(e){return Promise.reject(e)}},page:y}},e.usePreviousRoute=function(){var e=globalThis.localStorage,r=o.useRouter(),n=t.useState(void 0!==e?e.getItem("previousRoute"):null),i=n[0],u=n[1];return t.useEffect(function(){var t=e.getItem("currentRoute")||null;t!==r.asPath&&(e.setItem("previousRoute",t),e.setItem("currentRoute",r.asPath),u(t))},[r.asPath,e]),t.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),i},e.useScrollInfo=function(e){void 0===e&&(e=0);var r="undefined"==typeof window,n=t.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:r?0:window.pageYOffset,documentHeight:r?0:document.documentElement.offsetHeight,viewportHeight:r?0:window.innerHeight,timer:null}),o=n[0],u=n[1],c=t.useRef(o),a=t.useCallback(function(){clearTimeout(c.current.timer);var t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=r?0:window.innerHeight,o=r?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!r&&window.innerHeight+o>=t-e,s={isScrolling:!0,isPageTop:!!r||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:o<c.current.scrolledPosition,isScrolledDown:o>c.current.scrolledPosition,scrolledPosition:o,documentHeight:t,viewportHeight:n,timer:c.current.timer};u(s),c.current=i({},s,{timer:setTimeout(function(){return u(i({},s,{isScrolling:!1}))},100)})},[r,e]);return t.useEffect(function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[a]),o},e.useTransitionFix=function(){return t.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])}});
//# sourceMappingURL=index.umd.js.map
