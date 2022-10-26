var e=require("react"),t=require("@apollo/client/core/core.cjs"),r=require("@apollo/client/link/batch-http/batchHttpLink.js"),n=require("next/router.js");function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var i="undefined"==typeof window,u=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",a=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,c={uri:u,fetch:process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return o({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:"Bearer "+a}},s=new r.BatchHttpLink(c),l=new r.BatchHttpLink(o({},c,{headers:o({},c.headers,{"X-Include-Drafts":!0})})),f=new t.ApolloClient({link:s,cache:new t.InMemoryCache,ssrMode:i,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});exports.useApiQuery=function(t,r){var n=void 0===r?{}:r,i=n.variables,u=n.initialData,c=n.pageSize,d=e.useState(u),h=d[0],m=d[1],v=e.useState(c?{no:1,count:0,size:c,end:!1}:void 0),p=v[0],g=v[1],w=e.useState(),P=w[0],y=w[1],E=e.useState(!1),b=E[0],A=E[1],H=e.useCallback(function(e){return A(!0),function(e,t){try{var r=t||{},n=r.variables,i=r.preview,u=void 0!==i&&i;if(null===e)throw new Error("Invalid query! Query is empty");if(!a)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var i=function(){f.setLink(u?l:s);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return f.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=o({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}(t,{variables:e||i}).then(function(e){var t,r,n=(t=e,(r=h)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return m(n),n}).catch(function(e){return y(e)}).finally(function(){return A(!1)})},[t,i,h]);return e.useEffect(function(){var e;u?(null==(e=u.pagination)?void 0:e.count)<=c&&g(function(e){return o({},e,{end:!0})}):H()},[u,H,g,c]),{data:h,error:P,loading:b,loadMore:function(e){return H(e)},nextPage:function(){try{return p?Promise.resolve(H(o({},i,{first:p.size,skip:p.no*p.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=p.no+1,i=o({},p,{no:n,count:r,end:n*c>=r});return g(i),i}):Promise.resolve(y(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:p}},exports.usePreviousRoute=function(){var t=globalThis.sessionStorage,r=n.useRouter(),o=e.useState(void 0!==t?t.getItem("previousRoute"):null),i=o[0],u=o[1];return e.useEffect(function(){var e=t.getItem("currentRoute");e!==r.asPath&&(t.setItem("previousRoute",e),t.setItem("currentRoute",r.asPath),u(e))},[r.asPath,t]),e.useEffect(function(){var e=function(e){t.removeItem("previousRoute"),t.removeItem("currentRoute")};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),i},exports.useScrollInfo=function(t){void 0===t&&(t=0);var r="undefined"==typeof window,n=e.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:r?0:window.pageYOffset,documentHeight:r?0:document.documentElement.offsetHeight,viewportHeight:r?0:window.innerHeight,timer:null}),i=n[0],u=n[1],a=e.useRef(i),c=e.useCallback(function(){clearTimeout(a.current.timer);var e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=r?0:window.innerHeight,i=r?0:Math.max(0,Math.ceil(window.pageYOffset)),c=!r&&window.innerHeight+i>=e-t,s={isScrolling:!0,isPageTop:!!r||window.pageYOffset<=0,isPageBottom:c,isScrolledUp:i<a.current.scrolledPosition,isScrolledDown:i>a.current.scrolledPosition,scrolledPosition:i,documentHeight:e,viewportHeight:n,timer:a.current.timer};u(s),a.current=o({},s,{timer:setTimeout(function(){return u(o({},s,{isScrolling:!1}))},100)})},[r,t]);return e.useEffect(function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}},[c]),i},exports.useTransitionFix=function(){return e.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])};
//# sourceMappingURL=hooks.cjs.map
