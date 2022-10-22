import{ApolloClient as e,InMemoryCache as t,gql as r}from"@apollo/client/core";import{BatchHttpLink as o}from"@apollo/client/link/batch-http/batchHttpLink.js";import{useRouter as i}from"next/router.js";import{useState as n,useEffect as a,useRef as s,useCallback as l}from"react";import{buildClient as c}from"@datocms/cma-client-node";import u from"react-markdown";import d from"remark-gfm";import m from"next/link";import p from"markdown-truncate";import g from"remark-breaks";import{NextSeo as f}from"next-seo";var w={__proto__:null,isServer:"undefined"==typeof window};function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},v.apply(this,arguments)}const y="undefined"==typeof window,b=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",E=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,_={uri:b,fetch:process.env.LOG_GRAPHQL?async(e,t)=>{const r=t?JSON.parse(t.body.toString()):void 0,o=`${(r?Array.isArray(r)?r.map(e=>e.operationName):[r.operationName]:[]).join(", ")}`,i=await fetch(e,t),n=(new Date).getTime();return v({},i,{async text(){const e=await i.text();return console.log("[33m%s[0m","gql  ",`- ${o}`,`- ${(new Date).getTime()-n}ms`),e}})}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:`Bearer ${E}`}},A=new o(_),P=new o(v({},_,{headers:v({},_.headers,{"X-Include-Drafts":!0})})),S=new e({link:A,cache:new t,ssrMode:y,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}}),T=e=>r("query GetSEO {seo: "+e+" {id tags: _seoMetaTags {attributes content tag}}}"),I=async(e,t)=>{const{variables:r,preview:o=!1}=t||{};if(null===e)throw new Error("Invalid query! Query is empty");if(!E)throw new Error("No graphql api token exists in .env");try{S.setLink(o?P:A);const t=(Array.isArray(e)?e:[e]).map((e,t)=>{const o=Array.isArray(r)&&r.length>t-1?r[t]:r||{};return S.query({query:e,variables:o})}),i=await Promise.all(t),n=[];if(i.filter(({errors:e})=>e).forEach(({errors:e})=>{e.map(e=>e.message).forEach(e=>n.push(e))}),n.length)throw new Error(n.join(". "));let a={};return i.forEach(e=>a=v({},a,null==e?void 0:e.data)),a}catch(e){throw e}},N=()=>{const e=globalThis.sessionStorage,t=i(),[r,o]=n(void 0!==e?e.getItem("previousRoute"):null);return a(()=>{const r=e.getItem("currentRoute");r!==t.asPath&&(e.setItem("previousRoute",r),e.setItem("currentRoute",t.asPath),o(r))},[t.asPath,e]),a(()=>{const t=t=>{e.removeItem("previousRoute"),e.removeItem("currentRoute")};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)}),r};function H(e=0){const t="undefined"==typeof window,[r,o]=n({isScrolling:!1,isPageTop:!1,isPageBottom:!1,isScrolledUp:!0,isScrolledDown:!1,scrolledPosition:t?0:window.pageYOffset,documentHeight:t?0:document.documentElement.offsetHeight,viewportHeight:t?0:window.innerHeight,timer:null}),i=s(r),c=l(()=>{clearTimeout(i.current.timer);const r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=t?0:window.innerHeight,a=t?0:Math.max(0,Math.ceil(window.pageYOffset)),s=!t&&window.innerHeight+a>=r-e,l={isScrolling:!0,isPageTop:!!t||window.pageYOffset<=0,isPageBottom:s,isScrolledUp:a<i.current.scrolledPosition,isScrolledDown:a>i.current.scrolledPosition,scrolledPosition:a,documentHeight:r,viewportHeight:n,timer:i.current.timer};o(l),i.current=v({},l,{timer:setTimeout(()=>o(v({},l,{isScrolling:!1})),100)})},[t,e]);return a(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[c]),r}const k=()=>a(()=>{Array.from(document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')).forEach(e=>{e.removeAttribute("data-n-p")});const e=new MutationObserver(e=>{e.forEach(({target:e})=>{"STYLE"===e.nodeName&&"x"===e.getAttribute("media")&&e.removeAttribute("media")})});return e.observe(document.head,{subtree:!0,attributeFilter:["media"]}),()=>{e.disconnect()}},[]);function L(e){return async(t,r)=>{var o;if(!(e=>{const t=e.headers.authorization;if(!t)return!0;const r=t.split(" ")[1],[o,i]=Buffer.from(r,"base64").toString().split(":");return o===process.env.BASIC_AUTH_USER&&i===process.env.BASIC_AUTH_PASSWORD})(t))return r.status(401).send("Access denied");const i=null==(o=t.body)?void 0:o.entity;if(!i)throw"Payload is empty";const n=await(async e=>{var t,r,o;const i=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(o=r.data)?void 0:o.id;if(!i)throw"Model id not found in payload!";console.log("resolve modelId",i);const n=c({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3}),a=(await n.itemTypes.list()).find(e=>e.id===i),s=(await n.items.list({filter:{type:a.api_key,fields:{id:{eq:e.id}}}}))[0];if(!s)throw`No record found with modelId: ${i}`;return console.log("revalidate",a.api_key),v({},s,{model:a})})(i);e(n,async e=>{try{if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),await Promise.all(e.map(e=>r.revalidate(e))),console.log("revalidating done!"),r.json({revalidated:!0,paths:e})}catch(e){return console.error(e),r.json({revalidated:!1,err:e})}})}}let x;function q(e,t){const r=parseInt(process.env.REVALIDATE_TIME),o=[O];return e.query&&o.push(e.query),e.queries&&o.push.apply(o,e.queries),e.seo&&o.push(T(e.seo)),async e=>{const i=await I(o,{preview:e.preview});return t?await t({context:e,props:v({},i),revalidate:r}):{props:v({},i),context:e,revalidate:r}}}const O=r(x||(x=(e=>e)`
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
`));async function R(e,t){if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return t.status(401).json({message:"Invalid token"});const{slug:r}=e.query;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),t.status(401).json({message:"Error previewing page!"})}}const $=({children:e,truncate:t,className:r,sentances:o})=>{if(!e)return null;const i=t?p(e,{limit:t,ellipsis:!0}):o?((e,t)=>{if(!e)return e;const r=e.split(".");return r.length>=t?r.slice(0,t).join(" ")+"...":e})(e,o):e;return h(u,{remarkPlugins:[d,g],className:r,children:i,components:{a:({children:e,href:t})=>h(m,{scroll:!1,href:t,prefetch:!1},h("a",null,e[0]))}})},j=({seo:e={},site:t={},pathname:r,title:o,subtitle:i,description:n,noindex:a=!1})=>{const s=D({seo:e,site:t,pathname:r}),{globalSeo:l,favicon:c}=t,u=c?c.map(({attributes:e})=>v({},e)):[],d=C(s["og:image"],s["og:image:width"],s["og:image:height"]),m=`${process.env.NEXT_PUBLIC_SITE_URL}${r||""}`;return o=`${o=o||(l?null==l?void 0:l.siteName:"Site title")} ${null!=l&&l.titleSuffix?` ${null==l?void 0:l.titleSuffix}`:""}${i?` ${i}`:""}`,n=n||(s.description?s.description:l?null==l?void 0:l.fallbackSeo.description:"Site description"),h(f,{title:o,description:n,canonical:m,openGraph:{url:m,title:o,description:n,images:d,locale:s["og:locale"],type:s["og:type"],site_name:s["og:site_name"]},twitter:{title:o,image:s["og:image"],handle:null==l?void 0:l.twitterAccount,site:null==l?void 0:l.twitterAccount,cardType:"summary_large_image"},additionalLinkTags:u,noindex:a,nofollow:a})},C=(e,t,r)=>{if(e)return e.split("?"),[{url:e,width:t,height:r}]},D=({seo:e,site:t,pathname:r})=>{if(!e||!t)return[];const{globalSeo:o}=t||{},{fallbackSeo:i}=o||{};let n=(Array.isArray(e)?e:e.tags)||[],a=n.filter(e=>"title"===e.tag)[0];a&&o&&("/"===r?a=v({},a,{content:o.siteName}):o&&a.content.startsWith(o.siteName)&&(a=v({},a,{content:`${o.siteName} – ${a.content}`}))),n=n.map(e=>"title"!==e.tag?e:a);const s={};if(n.forEach(e=>{s[e.attributes?e.attributes.property||e.attributes.name:e.tag]=e.attributes?e.attributes.content||e.attributes:e.content}),!s["og:image"]&&null!=i&&i.image){const e=1e3,t=1-(i.image.width-e)/i.image.width;s["og:image"]=`${i.image.url}?w=1000`,s["og:image:width"]=e,s["og:image:height"]=Math.round(i.image.height*t)}return s};export{j as DatoSEO,$ as Markdown,T as SEOQuery,I as apiQuery,N as usePreviousRoute,H as useScrollInfo,k as useTransitionFix,w as utils,q as withGlobalProps,R as withPreview,L as withRevalidate};
//# sourceMappingURL=dato-nextjs-utils.modern.mjs.map
