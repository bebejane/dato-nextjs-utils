var e,t=require("react"),r=require("@apollo/client/core/core.cjs"),n=require("@apollo/client/link/batch-http/batchHttpLink.js"),o=require("next/router.js");function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u="undefined"==typeof window,a=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",c=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,s=null!=(e=process.env.DATOCMS_ENVIRONMENT)?e:"main",l={uri:a,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return i({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},f=function(e,t){void 0===e&&(e=!1);var r={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return e&&(r["X-Include-Drafts"]=!0),s&&(r["X-Environment"]=s),new n.BatchHttpLink(i({},l,{headers:r}))},d=f(!1,c),v=f(!0,c),m=new r.ApolloClient({link:d,cache:new r.InMemoryCache,ssrMode:u,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});exports.useApiQuery=function(e,r){var n,o,u,a=void 0===r?{}:r,s=a.variables,l=a.initialData,h=a.pageSize,p=t.useState(l),g=p[0],w=p[1],P=t.useState(l),y=P[0],E=P[1],b=t.useState(h?{no:1,count:(null==(n=l.pagination)?void 0:n.count)||0,size:h,end:(null==(o=l.pagination)?void 0:o.count)>0&&(null==(u=l.pagination)?void 0:u.count)<=h}:void 0),A=b[0],S=b[1],H=t.useState(),I=H[0],N=H[1],O=t.useState(!1),T=O[0],L=O[1];t.useEffect(function(){JSON.stringify(l)!==JSON.stringify(g)&&(E(l),w(l))},[l]);var x=t.useCallback(function(t){return L(!0),function(e,t){try{var r=t||{},n=r.variables,o=r.preview,u=void 0!==o&&o,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!c&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){m.setLink(a?f(u,a):u?v:d);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return m.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=i({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(e,{variables:i({},s,t)}).then(function(e){var t=_(e,y);return E(t),t}).finally(function(){return L(!1)})},[e,s,y]),R=t.useCallback(function(){try{if(!A)return Promise.resolve(N(new Error("No page size set!")));var e=A.size,t=A.no*A.size;return Promise.resolve(t>A.count&&A.count>0?A:function(r,n){try{var o=Promise.resolve(x(i({},s.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=A.no+1,o=i({},A,{no:n,count:r,end:n*h>=r});return S(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return N(e),A}))}catch(e){return Promise.reject(e)}},[A,s,h,S,N,x]),_=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return t.useEffect(function(){!l&&x()},[l,x]),{data:y,error:I,loading:T,loadMore:function(e){return x(e)},nextPage:R,page:A}},exports.usePreviousRoute=function(){var e=globalThis.localStorage,r=o.useRouter(),n=t.useState(void 0!==e?e.getItem("previousRoute"):null),i=n[0],u=n[1];return t.useEffect(function(){var t=e.getItem("currentRoute")||null;t!==r.asPath&&(e.setItem("previousRoute",t),e.setItem("currentRoute",r.asPath),u(t))},[r.asPath,e]),t.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),i},exports.useScrollInfo=function(e){void 0===e&&(e=0);var r="undefined"==typeof window,n=t.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:r?0:window.pageYOffset,documentHeight:r?0:document.documentElement.offsetHeight,viewportHeight:r?0:window.innerHeight,timer:null}),o=n[0],u=n[1],a=t.useRef(o),c=t.useCallback(function(){clearTimeout(a.current.timer);var t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=r?0:window.innerHeight,o=r?0:Math.max(0,Math.ceil(window.pageYOffset)),c=!r&&window.innerHeight+o>=t-e,s={isScrolling:!0,isPageTop:!!r||window.pageYOffset<=0,isPageBottom:c,isScrolledUp:o<a.current.scrolledPosition,isScrolledDown:o>a.current.scrolledPosition,scrolledPosition:o,documentHeight:t,viewportHeight:n,timer:a.current.timer};u(s),a.current=i({},s,{timer:setTimeout(function(){return u(i({},s,{isScrolling:!1}))},100)})},[r,e]);return t.useEffect(function(){return c(),window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}},[c]),o},exports.useTransitionFix=function(){return t.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};
//# sourceMappingURL=index.cjs.map
