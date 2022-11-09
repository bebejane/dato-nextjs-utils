var e=require("@apollo/client/core/core.cjs"),t=require("@apollo/client/link/batch-http/batchHttpLink.js"),r=require("@datocms/cma-client"),n=require("react"),o=require("next/router.js"),i=require("next-seo"),a=require("react-markdown"),u=require("remark-gfm"),s=require("next/link.js"),c=require("markdown-truncate"),l=require("remark-breaks");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=/*#__PURE__*/f(n),v=/*#__PURE__*/f(a),m=/*#__PURE__*/f(u),h=/*#__PURE__*/f(s),p=/*#__PURE__*/f(c),g=/*#__PURE__*/f(l);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}var y,P,E,b="undefined"==typeof window,S=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",A=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,_={uri:S,fetch:"true"===process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return w({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50},T=function(e,r){void 0===e&&(e=!1),void 0===r&&(r=A);var n={Authorization:"Bearer "+r,"X-Exclude-Invalid":!0};return e&&(n["X-Include-Drafts"]=!0),new t.BatchHttpLink(w({},_,{headers:n}))},I=T(!1,A),x=T(!0,A),q=new e.ApolloClient({link:I,cache:new e.InMemoryCache,ssrMode:b,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),k=function(e,t){try{var r=t||{},n=r.variables,o=r.preview,i=void 0!==o&&o,a=r.apiToken;if(null===e)throw new Error("Invalid query! Query is empty");if(!A)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var o=function(){q.setLink(a?T(i,a):i?x:I);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return q.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=w({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},N=function(t,r){return e.gql("query GetSEO{\n    seo: "+t+" "+(r?'( filter: { id: { eq: "'+r+'" } })':"")+" {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }")},j=e.gql(y||(P=["\n  query Global {\n    site: _site {\n      favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n    globalSeo {\n      facebookPageUrl\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          id\n          title\n          width\n          responsiveImage {\n            alt\n            aspectRatio\n            base64\n            bgColor\n            height\n            sizes\n            src\n            srcSet\n            webpSrcSet\n            title\n            width\n          }\n        }\n      }\n    }\n  }\n}\n"],E||(E=P.slice(0)),P.raw=E,y=P)),L=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,o=e.title,i=e.description,a=e.noindex,u=void 0!==a&&a,s=R({seo:void 0===t?{}:t,site:n}),c=n.globalSeo,l=n.favicon,f=l?l.map(function(e){return w({},e.attributes)}):[],d=H(s["og:image"],s["og:image:width"],s["og:image:height"]);return i||(i=s.description?s.description:c?null==c?void 0:c.fallbackSeo.description:void 0),{openGraph:{title:o,images:d,description:i,locale:s["og:locale"],type:s["og:type"],site_name:s["og:site_name"]},twitter:{title:o,image:s["og:image"],handle:null==c?void 0:c.twitterAccount,site:null==c?void 0:c.twitterAccount,cardType:"summary_large_image"},noindex:u,nofollow:u,meta:s,title:o,description:i,favicons:f,globalSeo:c,images:d}},H=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]},R=function(e){var t=e.seo,r=e.site;if(!t||!r)return[];var n=(r||{}).globalSeo,o=(n||{}).fallbackSeo,i=(Array.isArray(t)?t:t.tags)||[],a=i.filter(function(e){return"title"===e.tag})[0];a&&n&&n&&a.content.startsWith(n.siteName)&&(a=w({},a,{content:n.siteName+" – "+a.content})),i=i.map(function(e){return"title"!==e.tag?e:a});var u={};if(i.forEach(function(e){u[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!u["og:image"]&&null!=o&&o.image){var s=1-(o.image.width-1e3)/o.image.width;u["og:image"]=o.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(o.image.height*s)}return u};exports.DatoMarkdown=function(e){var t=e.children,r=e.truncate,n=e.className,o=e.sentances;if(!t)return null;var i=r?p.default(t,{limit:r,ellipsis:!0}):o?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,o):t;/*#__PURE__*/return d.default.createElement(v.default,{remarkPlugins:[m.default,g.default],className:n,children:i,components:{a:function(e){/*#__PURE__*/return d.default.createElement(h.default,{scroll:!1,href:e.href},/*#__PURE__*/d.default.createElement("a",null,e.children[0]))}}})},exports.DatoSEO=function(e){var t=L(e);/*#__PURE__*/return d.default.createElement(i.NextSeo,t)},exports.DefaultDatoSEO=function(e){var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";var n=L(e),o=e.siteTitle+(null!=(t=n.globalSeo)&&t.titleSuffix?" "+(null==(r=n.globalSeo)?void 0:r.titleSuffix):"")+" %s";/*#__PURE__*/return d.default.createElement(i.DefaultSeo,w({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:""+process.env.NEXT_PUBLIC_SITE_URL+(e.path||""),additionalLinkTags:n.favicons}))},exports.SEOQuery=N,exports.apiQuery=k,exports.client=q,exports.datoError=function(e){return console.error(e),e.message||e},exports.useApiQuery=function(e,t){var r,o,i=void 0===t?{}:t,a=i.variables,u=i.initialData,s=i.pageSize;console.log("useApiQuery");var c=n.useState(u),l=c[0],f=c[1],d=n.useState(s?{no:1,count:0,size:s,end:(null==(r=u.pagination)?void 0:r.count)>0&&(null==(o=u.pagination)?void 0:o.count)<=s}:void 0),v=d[0],m=d[1],h=n.useState(),p=h[0],g=h[1],y=n.useState(!1),P=y[0],E=y[1],b=n.useCallback(function(t){return E(!0),k(e,{variables:t||a}).then(function(e){var t,r,n=(t=e,(r=l)?(Object.keys(t).forEach(function(e){r[e]&&Array.isArray(r[e])&&(t[e]=r[e].concat(t[e]))}),t):t);return f(n),n}).catch(function(e){return g(e)}).finally(function(){return E(!1)})},[e,a,l]);return n.useEffect(function(){!u&&b()},[u,b]),{data:l,error:p,loading:P,loadMore:function(e){return b(e)},nextPage:function(){try{return v?Promise.resolve(b(w({},a,{first:v.size,skip:v.no*v.size}))).then(function(e){var t,r=(null==(t=e[Object.keys(e).find(function(t){return!isNaN(e[t].count)})])?void 0:t.count)||0,n=v.no+1,o=w({},v,{no:n,count:r,end:n*s>=r});return m(o),o}):Promise.resolve(g(new Error("No page size set!")))}catch(e){return Promise.reject(e)}},page:v}},exports.usePreviousRoute=function(){var e=globalThis.sessionStorage,t=o.useRouter(),r=n.useState(void 0!==e?e.getItem("previousRoute"):null),i=r[0],a=r[1];return n.useEffect(function(){var r=e.getItem("currentRoute");r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),a(r))},[t.asPath,e]),n.useEffect(function(){var t=function(t){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)}}),i},exports.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=n.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),o=r[0],i=r[1],a=n.useRef(o),u=n.useCallback(function(){clearTimeout(a.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,o=t?0:Math.max(0,Math.ceil(window.pageYOffset)),u=!t&&window.innerHeight+o>=r-e,s={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:u,isScrolledUp:o<a.current.scrolledPosition,isScrolledDown:o>a.current.scrolledPosition,scrolledPosition:o,documentHeight:r,viewportHeight:n,timer:a.current.timer};i(s),a.current=w({},s,{timer:setTimeout(function(){return i(w({},s,{isScrolling:!1}))},100)})},[t,e]);return n.useEffect(function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}},[u]),o},exports.useTransitionFix=function(){return n.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},exports.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[j];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(N(e.seo.model,e.seo.id)),function(e){try{return Promise.resolve(k(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:w({},n),revalidate:r})):{props:w({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(t,n){try{var o;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(n.status(401).send("Access denied"));var i=null==(o=t.body)?void 0:o.entity;if(!i)throw"Payload is empty";return Promise.resolve(function(e){try{var t,n,o,i=null==e||null==(t=e.relationships)||null==(n=t.item_type)||null==(o=n.data)?void 0:o.id;if(!i)throw"Model id not found in payload!";console.log("resolve modelId",i);var a=r.buildClient({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===i});return Promise.resolve(a.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+i;return console.log("revalidate",r.api_key),w({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(i)).then(function(t){e(t,function(e){try{return Promise.resolve(function(t,r){try{var o=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return n.revalidate(e)}))).then(function(){return console.log("revalidating done!"),n.json({revalidated:!0,paths:e})})}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.error(e),n.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=index.cjs.map
