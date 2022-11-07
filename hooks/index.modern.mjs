import{useState as e,useCallback as t,useEffect as r,useRef as n}from"react";import{ApolloClient as o,InMemoryCache as i}from"@apollo/client/core/core.cjs";import{BatchHttpLink as u}from"@apollo/client/link/batch-http/batchHttpLink.js";import{useRouter as c}from"next/router.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var s="undefined"==typeof window,l=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",f=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,d={uri:l,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return a({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},m=function(e,t){return void 0===e&&(e=!1),void 0===t&&(t=f),new u(a({},d,{headers:e?{Authorization:"Bearer "+t,"X-Include-Drafts":!0,"X-Exclude-Invalid":!0}:{Authorization:"Bearer "+t,"X-Exclude-Invalid":!0}}))},v=m(!1,f),h=m(!0,f),p=new o({link:v,cache:new i,ssrMode:s,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),g=function(n,o){var i,u,c=void 0===o?{}:o,s=c.variables,l=c.initialData,d=c.pageSize;console.log("useApiQuery");var g=e(l),w=g[0],P=g[1],y=e(d?{no:1,count:0,size:d,end:(null==(i=l.pagination)?void 0:i.count)>0&&(null==(u=l.pagination)?void 0:u.count)<=d}:void 0),E=y[0],b=y[1],A=e(),H=A[0],I=A[1],O=e(!1),N=O[0],j=O[1],L=t(function(e){return j(!0),function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,u=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!f)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){p.setLink(u?m(i,u):i?h:v);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return p.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=a({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(n,{variables:e||s}).then(function(e){var t,r,n=(t=e,(r=w)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return P(n),n}).catch(function(e){return I(e)}).finally(function(){return j(!1)})},[n,s,w]);return r(function(){!l&&L()},[l,L]),{data:w,error:H,loading:N,loadMore:function(e){return L(e)},nextPage:function(){try{return E?Promise.resolve(L(a({},s,{first:E.size,skip:E.no*E.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=E.no+1,o=a({},E,{no:n,count:r,end:n*d>=r});return b(o),o}):Promise.resolve(I(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:E}},w=function(){var t=globalThis.sessionStorage,n=c(),o=e(void 0!==t?t.getItem("previousRoute"):null),i=o[0],u=o[1];return r(function(){var e=t.getItem("currentRoute");e!==n.asPath&&(t.setItem("previousRoute",e),t.setItem("currentRoute",n.asPath),u(e))},[n.asPath,t]),r(function(){var e=function(e){t.removeItem("previousRoute"),t.removeItem("currentRoute")};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),i};function P(o){void 0===o&&(o=0);var i="undefined"==typeof window,u=e({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:i?0:window.pageYOffset,documentHeight:i?0:document.documentElement.offsetHeight,viewportHeight:i?0:window.innerHeight,timer:null}),c=u[0],s=u[1],l=n(c),f=t(function(){clearTimeout(l.current.timer);var e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),t=i?0:window.innerHeight,r=i?0:Math.max(0,Math.ceil(window.pageYOffset)),n=!i&&window.innerHeight+r>=e-o,u={isScrolling:!0,isPageTop:!!i||window.pageYOffset<=0,isPageBottom:n,isScrolledUp:r<l.current.scrolledPosition,isScrolledDown:r>l.current.scrolledPosition,scrolledPosition:r,documentHeight:e,viewportHeight:t,timer:l.current.timer};s(u),l.current=a({},u,{timer:setTimeout(function(){return s(a({},u,{isScrolling:!1}))},100)})},[i,o]);return r(function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}},[f]),c}var y=function(){return r(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};export{g as useApiQuery,w as usePreviousRoute,P as useScrollInfo,y as useTransitionFix};
//# sourceMappingURL=index.modern.mjs.map
