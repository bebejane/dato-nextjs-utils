var e=require("@apollo/client/core/core.cjs"),t=require("@apollo/client/link/batch-http/batchHttpLink.js"),r=require("@datocms/cma-client"),n=require("react"),o=require("next/router.js"),i=require("next-seo");function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var s,u,c,l="undefined"==typeof window,d=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",f=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,m={uri:d,fetch:process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return a({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:"Bearer "+f}},v=new t.BatchHttpLink(m),h=new t.BatchHttpLink(a({},m,{headers:a({},m.headers,{"X-Include-Drafts":!0})})),p=new e.ApolloClient({link:v,cache:new e.InMemoryCache,ssrMode:l,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),g=function(t){return e.gql("query GetSEO {seo: "+t+" {id tags: _seoMetaTags {attributes content tag}}}")},w=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o;if(null===e)throw new Error("Invalid query! Query is empty");if(!f)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){p.setLink(i?h:v);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return p.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=a({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},y=e.gql(s||(u=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],c||(c=u.slice(0)),u.raw=c,s=u));exports.DatoSEO=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.pathname,s=e.title,u=e.subtitle,c=e.description,l=e.noindex,d=void 0!==l&&l,f=function(e){var t=e.seo,r=e.site,n=e.pathname;if(!t||!r)return[];var o=(r||{}).globalSeo,i=(o||{}).fallbackSeo,s=(Array.isArray(t)?t:t.tags)||[],u=s.filter(function(e){return"title"===e.tag})[0];u&&o&&("/"===n?u=a({},u,{content:o.siteName}):o&&u.content.startsWith(o.siteName)&&(u=a({},u,{content:o.siteName+" – "+u.content}))),s=s.map(function(e){return"title"!==e.tag?e:u});var c={};if(s.forEach(function(e){c[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!c["og:image"]&&null!=i&&i.image){var l=1-(i.image.width-1e3)/i.image.width;c["og:image"]=i.image.url+"?w=1000",c["og:image:width"]=1e3,c["og:image:height"]=Math.round(i.image.height*l)}return c}({seo:void 0===t?{}:t,site:n,pathname:o}),m=n.globalSeo,v=n.favicon,h=v?v.map(function(e){return a({},e.attributes)}):[],p=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]}(f["og:image"],f["og:image:width"],f["og:image:height"]),g=""+process.env.NEXT_PUBLIC_SITE_URL+(o||"");return s=(s=s||(m?null==m?void 0:m.siteName:"Site title"))+" "+(null!=m&&m.titleSuffix?" "+(null==m?void 0:m.titleSuffix):"")+(u?" "+u:""),c=c||(f.description?f.description:m?null==m?void 0:m.fallbackSeo.description:"Site description"),/*#__PURE__*/React.createElement(i.NextSeo,{title:s,description:c,canonical:g,openGraph:{url:g,title:s,description:c,images:p,locale:f["og:locale"],type:f["og:type"],site_name:f["og:site_name"]},twitter:{title:s,image:f["og:image"],handle:null==m?void 0:m.twitterAccount,site:null==m?void 0:m.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:h,noindex:d,nofollow:d})},exports.SEOQuery=g,exports.apiQuery=w,exports.useApiQuery=function(e,t){var r=void 0===t?{}:t,o=r.variables,i=r.initialData,s=r.pageSize,u=n.useState(i),c=u[0],l=u[1],d=n.useState(s?{no:1,count:0,size:s,end:!1}:void 0),f=d[0],m=d[1],v=n.useState(),h=v[0],p=v[1],g=n.useState(!1),y=g[0],P=g[1],b=n.useCallback(function(t){return P(!0),w(e,{variables:t||o}).then(function(e){var t,r,n=(t=e,(r=c)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return l(n),n}).catch(function(e){return p(e)}).finally(function(){return P(!1)})},[e,o,c]);return n.useEffect(function(){var e;i?(null==(e=i.pagination)?void 0:e.count)<=s&&m(function(e){return a({},e,{end:!0})}):b()},[i,b,m,s]),{data:c,error:h,loading:y,loadMore:function(e){return b(e)},nextPage:function(){try{return f?Promise.resolve(b(a({},o,{first:f.size,skip:f.no*f.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=f.no+1,o=a({},f,{no:n,count:r,end:n*s>=r});return m(o),o}):Promise.resolve(p(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:f}},exports.usePreviousRoute=function(){var e=globalThis.sessionStorage,t=o.useRouter(),r=n.useState(void 0!==e?e.getItem("previousRoute"):null),i=r[0],a=r[1];return n.useEffect(function(){var r=e.getItem("currentRoute");r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),a(r))},[t.asPath,e]),n.useEffect(function(){var t=function(t){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)}}),i},exports.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=n.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),o=r[0],i=r[1],s=n.useRef(o),u=n.useCallback(function(){clearTimeout(s.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),u=!t&&window.innerHeight+o>=r-e,c={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:u,isScrolledUp:o<s.current.scrolledPosition,isScrolledDown:o>s.current.scrolledPosition,scrolledPosition:o,documentHeight:r,viewportHeight:n,timer:s.current.timer};i(c),s.current=a({},c,{timer:setTimeout(function(){return i(a({},c,{isScrolling:!1}))},100)})},[t,e]);return n.useEffect(function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}},[u]),o},exports.useTransitionFix=function(){return n.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},exports.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[y];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(g(e.seo)),function(e){try{return Promise.resolve(w(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:a({},n),revalidate:r})):{props:a({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(t,n){try{var o;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(n.status(401).send("Access denied"));var i=null==(o=t.body)?void 0:o.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,n,o,i=null==e||null==(t=e.relationships)||null==(n=t.item_type)||null==(o=n.data)?void 0:o.id;if(!i)throw"Model id not found in payload!";console.log("resolve modelId",i);var s=r.buildClient({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(s.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(s.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i;return console.log("revalidate",r.api_key),a({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){e(t,function(e){try{return Promise.resolve(function(t,r){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return console.log("revalidating done!"),n.json({revalidated:!0,paths:e})})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.error(e),n.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
