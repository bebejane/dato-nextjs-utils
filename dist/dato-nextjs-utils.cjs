var e=require("@apollo/client"),t=require("@apollo/client/link/batch-http"),r=require("next/router"),n=require("react"),i=require("@datocms/cma-client-node"),o=require("react-markdown"),a=require("remark-gfm"),s=require("next/link"),u=require("markdown-truncate"),c=require("remark-breaks"),l=require("next-seo");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=/*#__PURE__*/d(o),m=/*#__PURE__*/d(a),v=/*#__PURE__*/d(s),p=/*#__PURE__*/d(u),g=/*#__PURE__*/d(c),w={__proto__:null,isServer:"undefined"==typeof window};function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}var P,b,E,S="undefined"==typeof window,_=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",A=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,I={uri:_,fetch:process.env.LOG_GRAPHQL?function(e,t){try{var r=t?JSON.parse(t.body.toString()):void 0,n=""+(r?Array.isArray(r)?r.map(function(e){return e.operationName}):[r.operationName]:[]).join(", ");return Promise.resolve(fetch(e,t)).then(function(e){var t=(new Date).getTime();return y({},e,{text:function(){try{return Promise.resolve(e.text()).then(function(e){return console.log("[33m%s[0m","gql  ","- "+n,"- "+((new Date).getTime()-t)+"ms"),e})}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:"Bearer "+A}},q=new t.BatchHttpLink(I),x=new t.BatchHttpLink(y({},I,{headers:y({},I.headers,{"X-Include-Drafts":!0})})),T=new e.ApolloClient({link:q,cache:new e.InMemoryCache,ssrMode:S,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),k=function(t){return e.gql("query GetSEO {seo: "+t+" {id tags: _seoMetaTags {attributes content tag}}}")},N=function(e,t){try{var r=t||{},n=r.variables,i=r.preview,o=void 0!==i&&i;if(null===e)throw new Error("Invalid query! Query is empty");if(!A)throw new Error("No graphql api token exists in .env");return Promise.resolve(function(t,r){try{var i=function(){T.setLink(o?x:q);var t=(Array.isArray(e)?e:[e]).map(function(e,t){var r=Array.isArray(n)&&n.length>t-1?n[t]:n||{};return T.query({query:e,variables:r})});return Promise.resolve(Promise.all(t)).then(function(e){var t=[];if(e.filter(function(e){return e.errors}).forEach(function(e){e.errors.map(function(e){return e.message}).forEach(function(e){return t.push(e)})}),t.length)throw new Error(t.join(". "));var r={};return e.forEach(function(e){return r=y({},r,null==e?void 0:e.data)}),r})}()}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},H=e.gql(P||(b=["\n  site: _site {\n    favicon: faviconMetaTags {\n    attributes\n    content\n    tag\n  }\n  globalSeo {\n    facebookPageUrl\n    siteName\n    titleSuffix\n    twitterAccount\n    fallbackSeo {\n      description\n      title\n      twitterCard\n      image {\n        id\n        title\n        width\n        responsiveImage {\n          alt\n          aspectRatio\n          base64\n          bgColor\n          height\n          sizes\n          src\n          srcSet\n          webpSrcSet\n          title\n          width\n        }\n      }\n    }\n  }\n}\n"],E||(E=b.slice(0)),b.raw=E,P=b));exports.DatoSEO=function(e){var t=e.seo,r=e.site,n=void 0===r?{}:r,i=e.pathname,o=e.title,a=e.subtitle,s=e.description,u=e.noindex,c=void 0!==u&&u,d=function(e){var t=e.seo,r=e.site,n=e.pathname;if(!t||!r)return[];var i=(r||{}).globalSeo,o=(i||{}).fallbackSeo,a=(Array.isArray(t)?t:t.tags)||[],s=a.filter(function(e){return"title"===e.tag})[0];s&&i&&("/"===n?s=y({},s,{content:i.siteName}):i&&s.content.startsWith(i.siteName)&&(s=y({},s,{content:i.siteName+" – "+s.content}))),a=a.map(function(e){return"title"!==e.tag?e:s});var u={};if(a.forEach(function(e){u[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!u["og:image"]&&null!=o&&o.image){var c=1-(o.image.width-1e3)/o.image.width;u["og:image"]=o.image.url+"?w=1000",u["og:image:width"]=1e3,u["og:image:height"]=Math.round(o.image.height*c)}return u}({seo:void 0===t?{}:t,site:n,pathname:i}),f=n.globalSeo,m=n.favicon,v=m?m.map(function(e){return y({},e.attributes)}):[],p=function(e,t,r){if(e)return e.split("?"),[{url:e,width:t,height:r}]}(d["og:image"],d["og:image:width"],d["og:image:height"]),g=""+process.env.NEXT_PUBLIC_SITE_URL+(i||"");return o=(o=o||(f?null==f?void 0:f.siteName:"Site title"))+" "+(null!=f&&f.titleSuffix?" "+(null==f?void 0:f.titleSuffix):"")+(a?" "+a:""),s=s||(d.description?d.description:f?null==f?void 0:f.fallbackSeo.description:"Site description"),h(l.NextSeo,{title:o,description:s,canonical:g,openGraph:{url:g,title:o,description:s,images:p,locale:d["og:locale"],type:d["og:type"],site_name:d["og:site_name"]},twitter:{title:o,image:d["og:image"],handle:null==f?void 0:f.twitterAccount,site:null==f?void 0:f.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:v,noindex:c,nofollow:c})},exports.Markdown=function(e){var t=e.children,r=e.truncate,n=e.className,i=e.sentances;if(!t)return null;var o=r?p.default(t,{limit:r,ellipsis:!0}):i?function(e,t){if(!e)return e;var r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e}(t,i):t;return h(f.default,{remarkPlugins:[m.default,g.default],className:n,children:o,components:{a:function(e){return h(v.default,{scroll:!1,href:e.href,prefetch:!1},h("a",null,e.children[0]))}}})},exports.SEOQuery=k,exports.apiQuery=N,exports.usePreviousRoute=function(){var e=globalThis.sessionStorage,t=r.useRouter(),i=n.useState(void 0!==e?e.getItem("previousRoute"):null),o=i[0],a=i[1];return n.useEffect(function(){var r=e.getItem("currentRoute");r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),a(r))},[t.asPath,e]),n.useEffect(function(){var t=function(t){e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)}}),o},exports.useScrollInfo=function(e){void 0===e&&(e=0);var t="undefined"==typeof window,r=n.useState({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),i=r[0],o=r[1],a=n.useRef(i),s=n.useCallback(function(){clearTimeout(a.current.timer);var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,i=t?0:Math.max(0,Math.ceil(window.pageYOffset)),s=!t&&window.innerHeight+i>=r-e,u={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:s,isScrolledUp:i<a.current.scrolledPosition,isScrolledDown:i>a.current.scrolledPosition,scrolledPosition:i,documentHeight:r,viewportHeight:n,timer:a.current.timer};o(u),a.current=y({},u,{timer:setTimeout(function(){return o(y({},u,{isScrolling:!1}))},100)})},[t,e]);return n.useEffect(function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}},[s]),i},exports.useTransitionFix=function(){return n.useEffect(function(){Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(function(e){e.removeAttribute("data-n-p")});var e=new MutationObserver(function(e){e.forEach(function(e){var t=e.target;"STYLE"===t.nodeName&&"x"===t.getAttribute("media")&&t.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),function(){e.disconnect()}},[])},exports.utils=w,exports.withGlobalProps=function(e,t){var r=parseInt(process.env.REVALIDATE_TIME),n=[H];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(k(e.seo)),function(e){try{return Promise.resolve(N(n,{preview:e.preview})).then(function(n){return t?Promise.resolve(t({context:e,props:y({},n),revalidate:r})):{props:y({},n),context:e,revalidate:r}})}catch(e){return Promise.reject(e)}}},exports.withPreview=function(e,t){try{if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return Promise.resolve(t.status(401).json({message:"Invalid token"}));var r=e.query.slug;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),Promise.resolve(t.status(401).json({message:"Error previewing page!"}))}return Promise.resolve()}catch(e){return Promise.reject(e)}},exports.withRevalidate=function(e){return function(t,r){try{var n;if(!function(e){var t=e.headers.authorization;if(!t)return!0;var r=t.split(" ")[1],n=Buffer.from(r,"base64").toString().split(":");return n[0]===process.env.BASIC_AUTH_USER&&n[1]===process.env.BASIC_AUTH_PASSWORD}(t))return Promise.resolve(r.status(401).send("Access denied"));var o=null==(n=t.body)?void 0:n.entity;if(!o)throw"Payload is empty";return Promise.resolve(function(e){try{var t,r,n,o=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(n=r.data)?void 0:n.id;if(!o)throw"Model id not found in payload!";console.log("resolve modelId",o);var a=i.buildClient({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3});return Promise.resolve(a.itemTypes.list()).then(function(t){var r=t.find(function(e){return e.id===o});return Promise.resolve(a.items.list({filter:{type:r.api_key,fields:{id:{eq:e.id}}}})).then(function(e){var t=e[0];if(!t)throw"No record found with modelId: "+o;return console.log("revalidate",r.api_key),y({},t,{model:r})})})}catch(e){return Promise.reject(e)}}(o)).then(function(t){e(t,function(e){try{return Promise.resolve(function(t,n){try{var i=function(){if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),Promise.resolve(Promise.all(e.map(function(e){return r.revalidate(e)}))).then(function(){return console.log("revalidating done!"),r.json({revalidated:!0,paths:e})})}()}catch(e){return n(e)}return i&&i.then?i.then(void 0,n):i}(0,function(e){return console.error(e),r.json({revalidated:!1,err:e})}))}catch(e){return Promise.reject(e)}})})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=dato-nextjs-utils.cjs.map
