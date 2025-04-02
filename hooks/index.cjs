var e,t,r=require("react"),n=require("@apollo/client/core/core.cjs"),o=require("@apollo/client/link/batch-http/batchHttpLink.js"),i=require("next/router.js"),u=require("react-datocms");function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var c="undefined"==typeof window,s=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",l=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,v=null!=(e=null!=(t=process.env.DATOCMS_ENVIRONMENT)?t:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?e:"main",f=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,d={uri:s,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return a({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},m=function(e,t,r){void 0===e&&(e=!1),void 0===r&&(r=!0);var n={Authorization:"Bearer "+t,"X-Exclude-Invalid":r?"true":"false"};return(e||f)&&(n["X-Include-Drafts"]=!0),v&&(n["X-Environment"]=v),new o.BatchHttpLink(a({},d,{headers:n}))},p=m(!1,l),h=m(!0,l),g=new n.ApolloClient({link:p,cache:new n.InMemoryCache,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),w=process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN;exports.useApiQuery=function(e,t){var n,o,i,u=void 0===t?{}:t,c=u.variables,s=u.initialData,v=u.pageSize,f=u.preview,d=void 0!==f&&f,w=r.useState(s),P=w[0],E=w[1],y=r.useState(s),A=y[0],b=y[1],I=r.useState(v?{no:1,count:(null==(n=s.pagination)?void 0:n.count)||0,size:v,end:(null==(o=s.pagination)?void 0:o.count)>0&&(null==(i=s.pagination)?void 0:i.count)<=v}:void 0),N=I[0],S=I[1],T=r.useState(),_=T[0],O=T[1],H=r.useState(!1),L=H[0],R=H[1];r.useEffect(function(){JSON.stringify(s)!==JSON.stringify(P)&&(b(s),E(s))},[s]);var D=r.useCallback(function(t){return R(!0),function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,u=r.apiToken,c=r.excludeInvalid,s=void 0===c||c;if(null===e)throw new Error("Invalid query! Query is empty");if(!l&&!u)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){g.setLink(u?m(i,u,s):i?h:p);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return g.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=a({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(e,{variables:a({},c,t),preview:d}).then(function(e){var t=C(e,A);return b(t),t}).finally(function(){return R(!1)})},[e,c,A]),x=r.useCallback(function(){try{if(!N)return Promise.resolve(O(new Error("No page size set!")));var e=N.size,t=N.no*N.size;return Promise.resolve(t>N.count&&N.count>0?N:function(r,n){try{var o=Promise.resolve(D(a({},c.variables,{first:e,skip:t}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=N.no+1,o=a({},N,{no:n,count:r,end:n*v>=r});return S(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return O(e),N}))}catch(e){return Promise.reject(e)}},[N,c,v,S,O,D]),C=function(e,t){return t&&e?(Object.keys(e).forEach(function(r){t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e};return r.useEffect(function(){!s&&D()},[s,D]),{data:A,error:_,loading:L,loadMore:function(e){return D(e)},nextPage:x,page:N}},exports.useLivePreview=function(e,t,r){void 0===t&&(t={}),void 0===r&&(r={preview:!1,variables:{}});var n=u.useQuerySubscription({token:r.apiToken||w,query:e,initialData:t,variables:r.variables,enabled:r.preview,includeDrafts:r.preview,excludeInvalid:!0,reconnectionPeriod:5e3});return{data:n.data,error:n.error,status:n.status}},exports.usePreviousRoute=function(){var e=globalThis.localStorage,t=i.useRouter(),n=r.useState(void 0!==e?e.getItem("previousRoute"):null),o=n[0],u=n[1];return r.useEffect(function(){var r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),u(r))},[t.asPath,e]),r.useEffect(function(){var t=function(){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),function(){return window.removeEventListener("unload",t)}},[]),o},exports.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,n=r.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),o=n[0],i=n[1],u=r.useRef(o),c=r.useCallback(function(){clearTimeout(u.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),c=!t&&window.innerHeight+o>=r-e,s={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:c,isScrolledUp:o<u.current.scrolledPosition,isScrolledDown:o>u.current.scrolledPosition,scrolledPosition:o,documentHeight:r,viewportHeight:n,timer:u.current.timer};i(s),u.current=a({},s,{timer:setTimeout(function(){return i(a({},s,{isScrolling:!1}))},100)})},[t,e]);return r.useEffect(function(){return c(),window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}},[c]),o},exports.useTransitionFix=function(){return r.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};
//# sourceMappingURL=index.cjs.map
