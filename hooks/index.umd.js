!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@apollo/client/core/core.cjs"),require("@apollo/client/link/batch-http/batchHttpLink.js"),require("next/router.js")):"function"==typeof define&&define.amd?define(["exports","react","@apollo/client/core/core.cjs","@apollo/client/link/batch-http/batchHttpLink.js","next/router.js"],t):t((e||self).hooks={},e.react,e.core_cjs,e.batchHttpLink_js,e.router_js)}(this,function(e,t,r,n,o){function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u="undefined"==typeof window,c=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",a=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,s={uri:c,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return i({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},l=function(e,t){return void 0===e&&(e=!1),void 0===t&&(t=a),new n.BatchHttpLink(i({},s,{headers:e?{Authorization:"Bearer "+t,"X-Include-Drafts":!0,"X-Exclude-Invalid":!0}:{Authorization:"Bearer "+t,"X-Exclude-Invalid":!0}}))},f=l(!1,a),d=l(!0,a),h=new r.ApolloClient({link:f,cache:new r.InMemoryCache,ssrMode:u,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});e.useApiQuery=function(e,r){var n,o,u=void 0===r?{}:r,c=u.variables,s=u.initialData,v=u.pageSize;console.log("useApiQuery");var m=t.useState(s),p=m[0],g=m[1],w=t.useState(v?{no:1,count:0,size:v,end:(null==(n=s.pagination)?void 0:n.count)>0&&(null==(o=s.pagination)?void 0:o.count)<=v}:void 0),y=w[0],P=w[1],b=t.useState(),E=b[0],A=b[1],H=t.useState(!1),j=H[0],I=H[1],S=t.useCallback(function(t){return I(!0),function(e,t){try{var r=t||{},n=r.variables,o=r.preview,u=void 0!==o&&o,c=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){h.setLink(c?l(u,c):u?d:f);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return h.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=i({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(e,{variables:t||c}).then(function(e){var t,r,n=(t=e,(r=p)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return g(n),n}).catch(function(e){return A(e)}).finally(function(){return I(!1)})},[e,c,p]);return t.useEffect(function(){!s&&S()},[s,S]),{data:p,error:E,loading:j,loadMore:function(e){return S(e)},nextPage:function(){try{return y?Promise.resolve(S(i({},c,{first:y.size,skip:y.no*y.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=y.no+1,o=i({},y,{no:n,count:r,end:n*v>=r});return P(o),o}):Promise.resolve(A(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:y}},e.usePreviousRoute=function(){var e=globalThis.sessionStorage,r=o.useRouter(),n=t.useState(void 0!==e?e.getItem("previousRoute"):null),i=n[0],u=n[1];return t.useEffect(function(){var t=e.getItem("currentRoute");t!==r.asPath&&(e.setItem("previousRoute",t),e.setItem("currentRoute",r.asPath),u(t))},[r.asPath,e]),t.useEffect(function(){var t=function(t){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)}}),i},e.useScrollInfo=function(e){void 0===e&&(e=0);var r="undefined"==typeof window,n=t.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:r?0:window.pageYOffset,documentHeight:r?0:document.documentElement.offsetHeight,viewportHeight:r?0:window.innerHeight,timer:null}),o=n[0],u=n[1],c=t.useRef(o),a=t.useCallback(function(){clearTimeout(c.current.timer);var t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=r?0:window.innerHeight,o=r?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!r&&window.innerHeight+o>=t-e,s={isScrolling:!0,isPageTop:!!r||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:o<c.current.scrolledPosition,isScrolledDown:o>c.current.scrolledPosition,scrolledPosition:o,documentHeight:t,viewportHeight:n,timer:c.current.timer};u(s),c.current=i({},s,{timer:setTimeout(function(){return u(i({},s,{isScrolling:!1}))},100)})},[r,e]);return t.useEffect(function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[a]),o},e.useTransitionFix=function(){return t.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])}});
//# sourceMappingURL=index.umd.js.map
