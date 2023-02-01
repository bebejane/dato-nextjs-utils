import{useState as e,useEffect as t,useCallback as r,useRef as n}from"react";import{ApolloClient as o,InMemoryCache as i}from"@apollo/client/core/core.cjs";import{BatchHttpLink as u}from"@apollo/client/link/batch-http/batchHttpLink.js";import{useRouter as c}from"next/router.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var s,l="undefined"==typeof window,f=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",d=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,v=null!=(s=process.env.DATOCMS_ENVIRONMENT)?s:"main",m={uri:f,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return a({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},h=function(e,t){void 0===e&&(e=!1);var r={Authorization:"Bearer "+t,"X-Exclude-Invalid":!0};return e&&(r["X-Include-Drafts"]=!0),v&&(r["X-Environment"]=v),new u(a({},m,{headers:r}))},p=h(!1,d),g=h(!0,d),w=new o({link:p,cache:new i,ssrMode:l,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),P=function(n,o){var i,u,c=void 0===o?{}:o,s=c.variables,l=c.initialData,f=c.pageSize,v=e(l),m=v[0],P=v[1],y=e(l),E=y[0],b=y[1],A=e(f?{no:1,count:0,size:f,end:(null==(i=l.pagination)?void 0:i.count)>0&&(null==(u=l.pagination)?void 0:u.count)<=f}:void 0),N=A[0],O=A[1],H=e(),I=H[0],T=H[1],S=e(!1),L=S[0],_=S[1];t(function(){JSON.stringify(l)!==JSON.stringify(m)&&(b(l),P(l))},[l]);var j=r(function(e){return _(!0),function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,u=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!d&&!u)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){w.setLink(u?h(i,u):i?g:p);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return w.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=a({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(n,{variables:a({},e||s)}).then(function(e){var t=x(e,E);return b(t),t}).finally(function(){return _(!1)})},[n,s,E]),R=r(function(){try{if(!N)return Promise.resolve(T(new Error("No page size set!")));var e=N.size,t=N.no*N.size;return Promise.resolve(t>N.count&&N.count>0?N:function(r,n){try{var o=Promise.resolve(j(a({},s.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=N.no+1,o=a({},N,{no:n,count:r,end:n*f>=r});return O(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return T(e),N}))}catch(e){return Promise.reject(e)}},[N,s,f,O,T]),x=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return t(function(){!l&&j()},[l,j]),{data:E,error:I,loading:L,loadMore:function(e){return j(e)},nextPage:R,page:N}},y=function(){var r=globalThis.localStorage,n=c(),o=e(void 0!==r?r.getItem("previousRoute"):null),i=o[0],u=o[1];return t(function(){var e=r.getItem("currentRoute")||null;e!==n.asPath&&(r.setItem("previousRoute",e),r.setItem("currentRoute",n.asPath),u(e))},[n.asPath,r]),t(function(){var e=function(){r.removeItem("previousRoute"),r.removeItem("currentRoute")};return window.addEventListener("unload",e),function(){return window.removeEventListener("unload",e)}},[]),i};function E(o){void 0===o&&(o=0);var i="undefined"==typeof window,u=e({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:i?0:window.pageYOffset,documentHeight:i?0:document.documentElement.offsetHeight,viewportHeight:i?0:window.innerHeight,timer:null}),c=u[0],s=u[1],l=n(c),f=r(function(){clearTimeout(l.current.timer);var e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),t=i?0:window.innerHeight,r=i?0:Math.max(0,Math.ceil(window.pageYOffset)),n=!i&&window.innerHeight+r>=e-o,u={isScrolling:!0,isPageTop:!!i||window.pageYOffset<=0,isPageBottom:n,isScrolledUp:r<l.current.scrolledPosition,isScrolledDown:r>l.current.scrolledPosition,scrolledPosition:r,documentHeight:e,viewportHeight:t,timer:l.current.timer};s(u),l.current=a({},u,{timer:setTimeout(function(){return s(a({},u,{isScrolling:!1}))},100)})},[i,o]);return t(function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}},[f]),c}var b=function(){return t(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};export{P as useApiQuery,y as usePreviousRoute,E as useScrollInfo,b as useTransitionFix};
//# sourceMappingURL=index.modern.mjs.map
