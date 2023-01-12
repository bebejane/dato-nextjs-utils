var e=require("react"),t=require("@apollo/client/core/core.cjs"),r=require("@apollo/client/link/batch-http/batchHttpLink.js"),n=require("next/router.js");function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var i="undefined"==typeof window,u=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",c=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,a=process.env.GRAPHQL_ENVIRONMENT,s={uri:u,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return o({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},l=function(e,t){void 0===e&&(e=!1),void 0===t&&(t=c);var n={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return e&&(n["X-Include-Drafts"]=!0),a&&(n["X-Environment"]=a),new r.BatchHttpLink(o({},s,{headers:n}))},f=l(!1,c),d=l(!0,c),v=new t.ApolloClient({link:f,cache:new t.InMemoryCache,ssrMode:i,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});exports.useApiQuery=function(t,r){var n,i,u=void 0===r?{}:r,a=u.variables,s=u.initialData,m=u.pageSize,h=e.useState(s),p=h[0],g=h[1],w=e.useState(m?{no:1,count:0,size:m,end:(null==(n=s.pagination)?void 0:n.count)>0&&(null==(i=s.pagination)?void 0:i.count)<=m}:void 0),P=w[0],y=w[1],E=e.useState(),b=E[0],A=E[1],H=e.useState(!1),I=H[0],S=H[1],N=e.useCallback(function(e){return S(!0),console.log({variables:o({},e||a)}),function(e,t){try{var r=t||{},n=r.variables,i=r.preview,u=void 0!==i&&i,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!c&&!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var i=function(){v.setLink(a?l(u,a):u?d:f);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return v.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=o({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(t,{variables:o({},e||a)}).then(function(e){console.log(e);var t=O(e,p);return g(t),t}).catch(function(e){return A(e)}).finally(function(){return S(!1)})},[t,a,p]),O=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return e.useEffect(function(){!s&&N()},[s,N]),{data:p,error:b,loading:I,loadMore:function(e){return N(e)},nextPage:function(){try{if(!P)return Promise.resolve(A(new Error("No page size set!")));var e=P.size,t=P.no*P.size;return Promise.resolve(function(r,n){try{var i=Promise.resolve(N(o({},a,{first:e,skip:t}))).then(function(e){var t;console.log(e);var r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=P.no+1,i=o({},P,{no:n,count:r,end:n*m>=r});return y(i),i})}catch(e){return n(e)}return i&&i.then?i.then(void 0,n):i}(0,function(e){return A(e),P}))}catch(e){return Promise.reject(e)}},page:P}},exports.usePreviousRoute=function(){var t=globalThis.localStorage,r=n.useRouter(),o=e.useState(void 0!==t?t.getItem("previousRoute"):null),i=o[0],u=o[1];return e.useEffect(function(){var e=t.getItem("currentRoute")||null;e!==r.asPath&&(t.setItem("previousRoute",e),t.setItem("currentRoute",r.asPath),u(e))},[r.asPath,t]),e.useEffect(function(){var e=function(){t.removeItem("previousRoute"),t.removeItem("currentRoute")};return window.addEventListener("unload",e),function(){return window.removeEventListener("unload",e)}},[]),i},exports.useScrollInfo=function(t){void 0===t&&(t=0);var r="undefined"==typeof window,n=e.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:r?0:window.pageYOffset,documentHeight:r?0:document.documentElement.offsetHeight,viewportHeight:r?0:window.innerHeight,timer:null}),i=n[0],u=n[1],c=e.useRef(i),a=e.useCallback(function(){clearTimeout(c.current.timer);var e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=r?0:window.innerHeight,i=r?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!r&&window.innerHeight+i>=e-t,s={isScrolling:!0,isPageTop:!!r||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:i<c.current.scrolledPosition,isScrolledDown:i>c.current.scrolledPosition,scrolledPosition:i,documentHeight:e,viewportHeight:n,timer:c.current.timer};u(s),c.current=o({},s,{timer:setTimeout(function(){return u(o({},s,{isScrolling:!1}))},100)})},[r,t]);return e.useEffect(function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[a]),i},exports.useTransitionFix=function(){return e.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};
//# sourceMappingURL=index.cjs.map
