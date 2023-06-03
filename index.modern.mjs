import{ApolloClient as e,InMemoryCache as t,gql as r}from"@apollo/client/core/core.cjs";import{BatchHttpLink as n}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as o}from"@datocms/cma-client";import s,{useState as i,useEffect as a,useCallback as l,useRef as c}from"react";import{useRouter as u}from"next/router.js";import{DefaultSeo as d,NextSeo as p}from"next-seo";import m from"react-markdown";import f from"remark-gfm";import g from"next/link.js";import h from"markdown-truncate";import v from"remark-breaks";function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}var y,E;const A="undefined"==typeof window,S=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",T=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,_=null!=(y=null!=(E=process.env.DATOCMS_ENVIRONMENT)?E:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?y:"main",b=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,I={uri:S,fetch:"true"===process.env.LOG_GRAPHQL?async(e,t)=>{const r=t?JSON.parse(t.body.toString()):void 0,n=`${(r?Array.isArray(r)?r.map(e=>e.operationName):[r.operationName]:[]).join(", ")}`,o=await fetch(e,t),s=(new Date).getTime();return w({},o,{async text(){const e=await o.text();return console.log("[33m%s[0m","gql  ",`- ${n}`,`- ${(new Date).getTime()-s}ms`),e}})}:void 0,batchMax:10,batchInterval:50},P=(e=!1,t)=>{const r={Authorization:`Bearer ${t}`,"X-Exclude-Invalid":!0};return(e||b)&&(r["X-Include-Drafts"]=!0),_&&(r["X-Environment"]=_),new n(w({},I,{headers:r}))},C=P(!1,T),O=P(!0,T),R=new e({link:C,cache:new t,ssrMode:A,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),N=async(e,t)=>{const{variables:r,preview:n=!1,apiToken:o}=t||{};if(null===e)throw new Error("Invalid query! Query is empty");if(!T&&!o)throw new Error("No graphql api token exists in .env");try{R.setLink(o?P(n,o):n?O:C);const t=(Array.isArray(e)?e:[e]).map((e,t)=>{const n=Array.isArray(r)&&r.length>t-1?r[t]:r||{};return R.query({query:e,variables:n})}),s=await Promise.all(t),i=[];if(s.filter(({errors:e})=>e).forEach(({errors:e})=>{e.map(e=>e.message).forEach(e=>i.push(e))}),i.length)throw new Error(i.join(". "));let a={};return s.forEach(e=>a=w({},a,null==e?void 0:e.data)),a}catch(e){throw e}},L=async(e,t={},r={batchSize:50,delay:100})=>{var n;const o={};let s=100;const i=await N(e,{variables:w({},t.variables,{first:s,skip:0})});if(void 0===(null==(n=i.pagination)?void 0:n.count))throw new Error("Not a pagable query");const{count:a}=i.pagination,l=e=>{const t=Object.keys(e);for(let r=0;r<t.length;r++){const n=t[r],s=e[t[r]];o[n]=Array.isArray(s)&&o[n]?o[n].concat(s):s}},c=e=>"rejected"===e.status;l(i);let u=[];for(let n=s;n<a;n+=s)if(u.length<r.batchSize&&n+s<a)u.push(N(e,{variables:w({},t.variables,{first:s,skip:n})}));else{var d;u.push(N(e,{variables:w({},t.variables,{first:s,skip:n})}));const o=await Promise.allSettled(u),i=null==(d=o.find(c))?void 0:d.reason;if(i)throw new Error(i);for(let e=0;e<o.length;e++)l(o[e].value);await new Promise(e=>setTimeout(e,r.delay)),u=[]}return o},H=(e,t)=>r(`query GetSEO{\n    seo: ${e} ${t?`( filter: { id: { eq: "${t}" } })`:""} {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }`),U=e=>(console.error(e),e.message||e);let $;function k(e,t){const r=parseInt(process.env.REVALIDATE_TIME),n=[x];return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(H(e.seo.model,e.seo.id)),async e=>{const o=await N(n,{preview:e.preview});return t?await t({context:e,props:w({},o),revalidate:r}):{props:w({},o),context:e,revalidate:r}}}const x=r($||($=(e=>e)`
  query Global {
    site: _site {
      favicon: faviconMetaTags {
      attributes
      content
      tag
    }
    globalSeo {
      facebookPageUrl
      siteName
      titleSuffix
      twitterAccount
      fallbackSeo {
        description
        title
        twitterCard
        image {
          id
          title
          width
          responsiveImage {
            alt
            aspectRatio
            base64
            bgColor
            height
            sizes
            src
            srcSet
            webpSrcSet
            title
            width
          }
        }
      }
    }
  }
}
`));async function M(e,t){if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return t.status(401).json({message:"Invalid token"});const{slug:r}=e.query,n=r?r.startsWith("/")?r:`/${r}`:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:n}),t.end()}catch(e){return console.error(e),t.status(401).json({message:"Error previewing page!"})}}function j(e){return async(t,r)=>{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),r.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),r.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return r.status(200).send("ok");if(!t.body)throw new Error("No body found in request");const n=t.body,o=await e(n),s=[],i=null!=o&&o.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;var a,l;return o&&(s.push({label:"Live",url:`${i}${o}`}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(a=n.item)||null==(l=a.meta)?void 0:l.status)&&s.push({label:"Preview",url:`${i}/api/preview?slug=${o}&secret=${process.env.DATOCMS_PREVIEW_SECRET}`})),r.status(200).json({previewLinks:s})}}const D={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function q(e,t){return Array.isArray(t)?t.some(t=>q(e,t)):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function B(e,t){const r=new Headers;return"*"===t?r.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(r.set("Access-Control-Allow-Origin",t),r.append("Vary","Origin")):(q(null!=e?e:"",t)&&e&&r.set("Access-Control-Allow-Origin",e),r.append("Vary","Origin")),r}async function X(e,t,r){var n;const o=w({},D,r),{headers:s}=t,i=await async function(e,t){const r=e.headers.get("Origin")||void 0,n="function"==typeof t?await t(r,e):t;if(n)return B(r,n)}(e,null!=(n=o.origin)&&n),a=(e,t)=>{"Vary"===t?s.append(t,e):s.set(t,e)};if(!i)return t;i.forEach(a),o.credentials&&s.set("Access-Control-Allow-Credentials","true");const l=Array.isArray(o.exposedHeaders)?o.exposedHeaders.join(","):o.exposedHeaders;if(l&&s.set("Access-Control-Expose-Headers",l),"OPTIONS"===e.method){if(o.methods){const e=Array.isArray(o.methods)?o.methods.join(","):o.methods;s.set("Access-Control-Allow-Methods",e)}return function(e,t){const r=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),r.append("Vary","Access-Control-Request-Headers")),t&&r.set("Access-Control-Allow-Headers",t),r}(e,o.allowedHeaders).forEach(a),"number"==typeof o.maxAge&&s.set("Access-Control-Max-Age",String(o.maxAge)),o.preflightContinue?t:(s.set("Content-Length","0"),new Response(null,{status:o.optionsSuccessStatus,headers:s}))}return t}function z(e){const t={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return async(r,n)=>{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if("OPTIONS"===r.method)return X(r,new Response("ok",{status:200}),t);const o=await r.json();if(!o)throw new Error("No form data in request body");const s=await e(o),i=[],a=null!=s&&s.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;var l,c;return s&&(i.push({label:"Live",url:`${a}${s}`}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==o||null==(l=o.item)||null==(c=l.meta)?void 0:c.status)&&i.push({label:"Preview",url:`${a}/api/preview?slug=${s}&secret=${process.env.DATOCMS_PREVIEW_SECRET}`})),X(r,new Response(JSON.stringify({previewLinks:i}),{status:200,headers:{"Content-Type":"application/json"}}),t)}}function G(e){return async(t,r)=>{var n,s;if("GET"===t.method&&null!=(n=t.query)&&n.ping)return r.status(200).send("pong");if(!(e=>{const t=e.headers.authorization;if(!t)return!0;const r=t.split(" ")[1],[n,o]=Buffer.from(r,"base64").toString().split(":");return n===process.env.BASIC_AUTH_USER&&o===process.env.BASIC_AUTH_PASSWORD})(t))return r.status(401).send("Access denied");const i=null==(s=t.body)?void 0:s.entity;if(!i)throw"Payload is empty";const a=await(async e=>{var t,r,n;const s=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(n=r.data)?void 0:n.id;if(!s)throw"Model id not found in payload!";const i=o({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3}),a=(await i.itemTypes.list()).find(e=>e.id===s),l=(await i.items.list({filter:{type:a.api_key,fields:{id:{eq:e.id}}}}))[0];if(!l)throw`No record found with modelId: ${s} (${a.api_key})`;return console.log("revalidate",a.api_key),w({},l,{model:a})})(i);a._payload=i,e(a,async e=>{try{if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),await Promise.all(e.map(e=>r.revalidate(e))),console.log("revalidating done!"),r.json({revalidated:!0,paths:e})}catch(e){return console.error(e),r.json({revalidated:!1,err:e})}})}}function V(e){return async(t,r)=>{const n=t.headers.authorization;if(!n)return r.status(401).send("Access denied");const o=n.split(" ")[1],[s,i]=Buffer.from(o,"base64").toString().split(":");return s===process.env.BASIC_AUTH_USER&&i===process.env.BASIC_AUTH_PASSWORD?e(t,r):r.status(401).send("Access denied")}}function W(e){return async(t,r)=>{const n=t.headers.get("authorization");if(!n)return new Response("Access denied",{status:401});const o=n.split(" ")[1],[s,i]=Buffer.from(o,"base64").toString().split(":");return s===process.env.BASIC_AUTH_USER&&i===process.env.BASIC_AUTH_PASSWORD?e(t,r):new Response("Access denied. Wrong password or username.",{status:401})}}const Q=(e,{variables:t,initialData:r,pageSize:n,preview:o=!1}={})=>{var s,c,u;const[d,p]=i(r),[m,f]=i(r),[g,h]=i(n?{no:1,count:(null==(s=r.pagination)?void 0:s.count)||0,size:n,end:(null==(c=r.pagination)?void 0:c.count)>0&&(null==(u=r.pagination)?void 0:u.count)<=n}:void 0),[v,y]=i(),[E,A]=i(!1);a(()=>{JSON.stringify(r)!==JSON.stringify(d)&&(f(r),p(r))},[r]);const S=l(r=>(A(!0),N(e,{variables:w({},t,r),preview:o}).then(e=>{const t=_(e,m);return f(t),t}).finally(()=>A(!1))),[e,t,m]),T=l(async()=>{if(!g)return y(new Error("No page size set!"));const e=g.size,r=g.no*g.size;if(r>g.count&&g.count>0)return g;try{var o;const s=await S(w({},t.variables,{first:e,skip:r})),i=(null==(o=s[Object.keys(s).find(e=>!isNaN(s[e].count))])?void 0:o.count)||0,a=g.no+1,l=w({},g,{no:a,count:i,end:a*n>=i});return h(l),l}catch(e){return y(e),g}},[g,t,n,h,y,S]),_=(e,t)=>t&&e?(Object.keys(e).forEach(r=>{t[r]&&Array.isArray(t[r])&&(e[r]=t[r].concat(e[r]))}),e):e;return a(()=>{!r&&S()},[r,S]),{data:m,error:v,loading:E,loadMore:e=>S(e),nextPage:T,page:g}},J=()=>{const e=globalThis.localStorage,t=u(),[r,n]=i(void 0!==e?e.getItem("previousRoute"):null);return a(()=>{const r=e.getItem("currentRoute")||null;r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),n(r))},[t.asPath,e]),a(()=>{const t=()=>{e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("unload",t),()=>window.removeEventListener("unload",t)},[]),r};function K(e=0){const t="undefined"==typeof window,[r,n]=i({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),o=c(r),s=l(()=>{clearTimeout(o.current.timer);const r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),s=t?0:window.innerHeight,i=t?0:Math.max(0,Math.ceil(window.pageYOffset)),a=!t&&window.innerHeight+i>=r-e,l={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:a,isScrolledUp:i<o.current.scrolledPosition,isScrolledDown:i>o.current.scrolledPosition,scrolledPosition:i,documentHeight:r,viewportHeight:s,timer:o.current.timer};n(l),o.current=w({},l,{timer:setTimeout(()=>n(w({},l,{isScrolling:!1})),100)})},[t,e]);return a(()=>(s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}),[s]),r}const Y=()=>a(()=>{Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(e=>{e.removeAttribute("data-n-p")});const e=new MutationObserver(e=>{e.forEach(({target:e})=>{"STYLE"===e.nodeName&&"x"===e.getAttribute("media")&&e.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),()=>{e.disconnect()}},[]),F=e=>{var t,r;if(!process.env.NEXT_PUBLIC_SITE_URL)throw"Set NEXT_PUBLIC_SITE_URL env variable";const n=ee(e),o=`${e.siteTitle}${null!=(t=n.globalSeo)&&t.titleSuffix?` ${null==(r=n.globalSeo)?void 0:r.titleSuffix}`:" —"} %s`;/*#__PURE__*/return s.createElement(d,w({},n,{titleTemplate:o,defaultTitle:e.siteTitle,canonical:`${process.env.NEXT_PUBLIC_SITE_URL}${e.path||""}`,additionalLinkTags:n.favicons}))},Z=e=>{const t=ee(e);/*#__PURE__*/return s.createElement(p,t)},ee=({seo:e={},site:t={},title:r,description:n,noindex:o=!1})=>{const s=re({seo:e,site:t}),{globalSeo:i,favicon:a}=t,l=a?a.map(({attributes:e})=>w({},e)):[],c=te(s["og:image"],s["og:image:width"],s["og:image:height"]);return n||(n=s.description?s.description:i?null==i?void 0:i.fallbackSeo.description:void 0),{openGraph:{title:r,images:c,description:n,locale:s["og:locale"],type:s["og:type"],site_name:s["og:site_name"]},twitter:{title:r,image:s["og:image"],handle:null==i?void 0:i.twitterAccount,site:null==i?void 0:i.twitterAccount,cardType:"summary_large_image"},noindex:o,nofollow:o,meta:s,title:r,description:n,favicons:l,globalSeo:i,images:c}},te=(e,t,r)=>{if(e)return e.split("?"),[{url:e,width:t,height:r}]},re=({seo:e,site:t})=>{if(!e||!t)return[];const{globalSeo:r}=t||{},{fallbackSeo:n}=r||{};let o=(Array.isArray(e)?e:e.tags)||[],s=o.filter(e=>"title"===e.tag)[0];s&&r&&r&&s.content.startsWith(r.siteName)&&(s=w({},s,{content:`${r.siteName} – ${s.content}`})),o=o.map(e=>"title"!==e.tag?e:s);const i={};if(o.forEach(e=>{i[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!i["og:image"]&&null!=n&&n.image){const e=1e3,t=1-(n.image.width-e)/n.image.width;i["og:image"]=`${n.image.url}?w=1000`,i["og:image:width"]=e,i["og:image:height"]=Math.round(n.image.height*t)}return i},ne=({children:e,truncate:t,className:r,sentances:n,allowedElements:o,scroll:i=!0,disableBreaks:a=!1})=>{if(!e)return null;const l=t?h(e,{limit:t,ellipsis:!0}):n?((e,t)=>{if(!e)return e;const r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e})(e,n):e;/*#__PURE__*/return s.createElement(m,{remarkPlugins:a?[f]:[f,v],className:r,children:l,allowedElements:o,components:{a:({children:e,href:t})=>/*#__PURE__*/s.createElement(g,{scroll:i,href:t},e[0])}})},oe="undefined"==typeof window,se=(e,t)=>{const r=[];for(let n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r},ie=e=>e.errors.map(({attributes:{code:e,details:t}})=>({code:e,field:null==t?void 0:t.field,message:null==t?void 0:t.message,detailsCode:null==t?void 0:t.code,errors:Array.isArray(null==t?void 0:t.errors)?null==t?void 0:t.errors.join(". "):void 0})).map(({code:e,field:t,message:r,detailsCode:n,errors:o})=>`${e} ${t?`(${t})`:""} ${r||""} ${n||""} ${o?`(${o})`:""}`).join("\n"),ae=e=>0===Object.keys(e).filter(t=>void 0!==e[t]).length,le=(e,t=!1)=>(t?e.toLowerCase():e).replace(/(?:^|\s|["'([{])+\S/g,e=>e.toUpperCase()),ce=e=>new Promise((t,r)=>setTimeout(t,e)),ue=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),de=(e,t=1,r=!0,n=200)=>{var o,s;if(!e||e.length<n)return e;let i=null==(o=e.split("."))?void 0:o.slice(0,t+1).join(".").lastIndexOf("."),a=null==(s=e.split("? "))?void 0:s.slice(0,t+1).join("? ").lastIndexOf("? ");const l=-1!==a&&a<i||-1===i&&a>-1;return-1===i&&-1===a&&(i=n-1,r=!0),`${e.substring(0,l?a:i)}${r?"...":l?"?":"."}`},pe=(e,t)=>{if(e.length<=t)return e;var r=e.substring(0,t),n=r.lastIndexOf(" ");return-1!==n&&(r=r.substr(0,n)),r+"..."},me=(e,t)=>{const r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];return e.sort((e,n)=>{const o=r.findIndex(r=>r===(t?e[t]:e).charAt(0).toUpperCase()),s=r.findIndex(e=>e===(t?n[t]:n).charAt(0).toUpperCase());return o>s?1:o===s?0:-1})},fe=async e=>{const t=function(e){return(e.match(/(#[0-9][^\s:,]*)/g)||[]).forEach(function(t){e=e.replace(t,'[id="'+t.replace("#","")+'"]')}),e};for(let r=0;r<100;r++){const r=document.querySelector(t(e));if(r)return r;await ce(30)}throw new Error(`Element ${e} not found`)};export{ne as DatoMarkdown,Z as DatoSEO,F as DefaultDatoSEO,H as SEOQuery,N as apiQuery,L as apiQueryAll,fe as awaitElement,le as capitalize,se as chunkArray,R as client,U as datoError,ae as isEmpty,oe as isServer,ie as parseDatoError,ue as rInt,ce as sleep,me as sortSwedish,de as truncateParagraph,pe as truncateWords,Q as useApiQuery,J as usePreviousRoute,K as useScrollInfo,Y as useTransitionFix,V as withBasicAuth,W as withBasicAuthEdge,k as withGlobalProps,M as withPreview,G as withRevalidate,j as withWebPreviews,z as withWebPreviewsEdge};
//# sourceMappingURL=index.modern.mjs.map
