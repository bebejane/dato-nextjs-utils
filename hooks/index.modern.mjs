import{useState as e,useEffect as r,useCallback as t,useRef as n}from"react";import{ApolloClient as o,InMemoryCache as i}from"@apollo/client/core/core.cjs";import{BatchHttpLink as u}from"@apollo/client/link/batch-http/batchHttpLink.js";import{useRouter as c}from"next/router.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}var s,l,f="undefined"==typeof window,v=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",d=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,m=null!=(s=null!=(l=process.env.DATOCMS_ENVIRONMENT)?l:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?s:"main",h=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,p={uri:v,fetch:"true"===process.env.LOG_GRAPHQL?function(e,r){try{var t=r?JSON.parse(r.body.toString()):void 0,n=""+(t?Array.isArray(t)?t.map(function(e){return e.operationName}):[t.operationName]:[]).join(", ");return Promise.resolve(fetch(e,r)).then(function(e){var r=(new Date).getTime();return a({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-r)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},g=function(e,r){void 0===e&&(e=!1);var t={Authorization:"Bearer "+r,"X-Exclude-Invalid":"true"};return(e||h)&&(t["X-Include-Drafts"]=!0),m&&(t["X-Environment"]=m),new u(a({},p,{headers:t}))},w=g(!1,d),P=g(!0,d),y=new o({link:w,cache:new i,ssrMode:f,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),E=function(n,o){var i,u,c,s=void 0===o?{}:o,l=s.variables,f=s.initialData,v=s.pageSize,m=s.preview,h=void 0!==m&&m,p=e(f),E=p[0],A=p[1],N=e(f),b=N[0],O=N[1],T=e(v?{no:1,count:(null==(i=f.pagination)?void 0:i.count)||0,size:v,end:(null==(u=f.pagination)?void 0:u.count)>0&&(null==(c=f.pagination)?void 0:c.count)<=v}:void 0),I=T[0],_=T[1],S=e(),H=S[0],L=S[1],D=e(!1),R=D[0],j=D[1];r(function(){JSON.stringify(f)!==JSON.stringify(E)&&(O(f),A(f))},[f]);var M=t(function(e){return j(!0),function(e,r){try{var t=r||{},n=t.variables,o=t.preview,i=void 0!==o&&o,u=t.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!d&&!u)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(r,t){try{var o=function(){y.setLink(u?g(i,u):i?P:w);var r=(Array.isArray(e)?e:[e]).map(function(e,r){var t=Array.isArray(n)&&n.length>r-1?n[r]:n||{};return y.query({query:e,variables:t})});return Promise.resolve(Promise.all(r)).then(function(e){var r=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return r.push(e)})}),r.length)throw new Error(r.join(". "));var t={};return e.forEach(function(e){return t=a({},t,null==e?void 0:e.data)}),t})}()}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(n,{variables:a({},l,e),preview:h}).then(function(e){var r=C(e,b);return O(r),r}).finally(function(){return j(!1)})},[n,l,b]),x=t(function(){try{if(!I)return Promise.resolve(L(new Error("No page size set!")));var e=I.size,r=I.no*I.size;return Promise.resolve(r>I.count&&I.count>0?I:function(t,n){try{var o=Promise.resolve(M(a({},l.variables,{first:e,skip:r}))).then(function(e){var r,t=(null==(r=e[Object.keys(e).find(function(r){return!isNaN(e[r].count)})])?void 0:r.count)||0,n=I.no+1,o=a({},I,{no:n,count:t,end:n*v>=t});return _(o),o})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){return L(e),I}))}catch(e){return Promise.reject(e)}},[I,l,v,_,L,M]),C=function(e,r){return r&&e?(Object.keys(e).forEach(function(t){r[t]&&Array.isArray(r[t])&&(e[t]=r[t].concat(e[t]))}),e):e};return r(function(){!f&&M()},[f,M]),{data:b,error:H,loading:R,loadMore:function(e){return M(e)},nextPage:x,page:I}},A=function(){var t=globalThis.localStorage,n=c(),o=e(void 0!==t?t.getItem("previousRoute"):null),i=o[0],u=o[1];return r(function(){var e=t.getItem("currentRoute")||null;e!==n.asPath&&(t.setItem("previousRoute",e),t.setItem("currentRoute",n.asPath),u(e))},[n.asPath,t]),r(function(){var e=function(){t.removeItem("previousRoute"),t.removeItem("currentRoute")};return window.addEventListener("unload",e),function(){return window.removeEventListener("unload",e)}},[]),i};function N(o){void 0===o&&(o=0);var i="undefined"==typeof window,u=e({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:i?0:window.pageYOffset,documentHeight:i?0:document.documentElement.offsetHeight,viewportHeight:i?0:window.innerHeight,timer:null}),c=u[0],s=u[1],l=n(c),f=t(function(){clearTimeout(l.current.timer);var e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),r=i?0:window.innerHeight,t=i?0:Math.max(0,Math.ceil(window.pageYOffset)),n=!i&&window.innerHeight+t>=e-o,u={isScrolling:!0,isPageTop:!!i||window.pageYOffset<=0,isPageBottom:n,isScrolledUp:t<l.current.scrolledPosition,isScrolledDown:t>l.current.scrolledPosition,scrolledPosition:t,documentHeight:e,viewportHeight:r,timer:l.current.timer};s(u),l.current=a({},u,{timer:setTimeout(function(){return s(a({},u,{isScrolling:!1}))},100)})},[i,o]);return r(function(){return f(),window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}},[f]),c}var b=function(){return r(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var r=e.target;"STYLE"===r.nodeName&&"x"===r.getAttribute("media")&&r.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};export{E as useApiQuery,A as usePreviousRoute,N as useScrollInfo,b as useTransitionFix};
//# sourceMappingURL=index.modern.mjs.map
