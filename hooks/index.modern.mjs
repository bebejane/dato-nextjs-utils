import{useState as e,useCallback as r,useEffect as t,useRef as n}from"react";import{ApolloClient as o,InMemoryCache as i}from"@apollo/client/core/core.cjs";import{BatchHttpLink as c}from"@apollo/client/link/batch-http/batchHttpLink.js";import{useRouter as u}from"next/router.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}var s="undefined"==typeof window,l=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",f=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,d=process.env.GRAPHQL_ENVIRONMENT,v={uri:l,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var t=r?JSON.parse(r.body.toString()):void 0,n=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return a({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},m=function(e,r){void 0===e&&(e=!1),void 0===r&&(r=f);var t={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return e&&(t["X-Include-Drafts"]=!0),d&&(t["X-Environment"]=d),new c(a({},v,{headers:t}))},h=m(!1,f),p=m(!0,f),g=new o({link:h,cache:new i,ssrMode:s,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),P=function(n,o){var i,c,u=void 0===o?{}:o,s=u.variables,l=u.initialData,f=u.pageSize,d=e(l),v=d[0],P=d[1],w=e(f?{no:1,count:0,size:f,end:(null==(i=l.pagination)?void 0:i.count)>0&&(null==(c=l.pagination)?void 0:c.count)<=f}:void 0),y=w[0],E=w[1],A=e(),b=A[0],H=A[1],I=e(!1),N=I[0],_=I[1],O=r(function(e){return _(!0),console.log(e,s),console.log({variables:a({},e||s)}),function(e,r){try{var t=r||{},n=t.variables,o=t.preview,i=void 0!==o&&o,c=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN&&!process.env.GRAPHQL_API_TOKEN&&!c)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,t){try{var o=function(){g.setLink(c?m(i,c):i?p:h);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var t=Array.isArray(n)&&n.length>r-1?n[r]:n||{};return g.query({query:e,variables:t})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var t={};return e.forEach(function(e){return t=a({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(n,{variables:a({},e||s)}).then(function(e){console.log(e);var r=L(e,v);return P(r),r}).finally(function(){return _(!1)})},[n,s,v]),L=function(e,r){return r&&e?(Object.keys(e).forEach(function(t){r[t]&&Array.isArray(r[t])&&(e[t]=r[t].concat(e[t]))}),e):e};return t(function(){!l&&O()},[l,O]),{data:v,error:b,loading:N,loadMore:function(e){return O(e)},nextPage:function(){try{if(!y)return Promise.resolve(H(new Error("No page size set!")));var e=y.size,r=y.no*y.size;return Promise.resolve(function(t,n){try{var o=Promise.resolve(O(a({},s.variables,{first:e,skip:r}))).then(function(e){var r;console.log(e);var t=(null==(r=e[Object.keys(e).find(function(r){return!isNaN(e[r].count)})])?void 0:r.count)||0,n=y.no+1,o=a({},y,{no:n,count:t,end:n*f>=t});return E(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return H(e),y}))}catch(e){return Promise.reject(e)}},page:y}},w=function(){var r=globalThis.localStorage,n=u(),o=e(void 0!==r?r.getItem("previousRoute"):null),i=o[0],c=o[1];return t(function(){var e=r.getItem("currentRoute")||null;e!==n.asPath&&(r.setItem("previousRoute",e),r.setItem("currentRoute",n.asPath),c(e))},[n.asPath,r]),t(function(){var e=function(){r.removeItem("previousRoute"),r.removeItem("currentRoute")};return window.addEventListener("unload",e),function(){return window.removeEventListener("unload",e)}},[]),i};function y(o){void 0===o&&(o=0);var i="undefined"==typeof window,c=e({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:i?0:window.pageYOffset,documentHeight:i?0:document.documentElement.offsetHeight,viewportHeight:i?0:window.innerHeight,timer:null}),u=c[0],s=c[1],l=n(u),f=r(function(){clearTimeout(l.current.timer);var e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),r=i?0:window.innerHeight,t=i?0:Math.max(0,Math.ceil(window.pageYOffset)),n=!i&&window.innerHeight+t>=e-o,c={isScrolling:!0,isPageTop:!!i||window.pageYOffset<=0,isPageBottom:n,isScrolledUp:t<l.current.scrolledPosition,isScrolledDown:t>l.current.scrolledPosition,scrolledPosition:t,documentHeight:e,viewportHeight:r,timer:l.current.timer};s(c),l.current=a({},c,{timer:setTimeout(function(){return s(a({},c,{isScrolling:!1}))},100)})},[i,o]);return t(function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}},[f]),u}var E=function(){return t(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var r=e.target;"STYLE"===r.nodeName&&"x"===r.getAttribute("media")&&r.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};export{P as useApiQuery,w as usePreviousRoute,y as useScrollInfo,E as useTransitionFix};
//# sourceMappingURL=index.modern.mjs.map
