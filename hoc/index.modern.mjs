import{ApolloClient as e,InMemoryCache as t,gql as s}from"@apollo/client/core/core.cjs";import{BatchHttpLink as r}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as n}from"@datocms/cma-client";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},o.apply(this,arguments)}var a,i;const c="undefined"==typeof window,l=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",u=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN||process.env.GRAPHQL_API_TOKEN,p=null!=(a=null!=(i=process.env.DATOCMS_ENVIRONMENT)?i:process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)?a:"main",d=!!process.env.DATOCMS_INCLUDE_DRAFTS&&"true"===process.env.DATOCMS_INCLUDE_DRAFTS,h={uri:l,fetch:"true"===process.env.LOG_GRAPHQL?async(e,t)=>{const s=t?JSON.parse(t.body.toString()):void 0,r=`${(s?Array.isArray(s)?s.map(e=>e.operationName):[s.operationName]:[]).join(", ")}`,n=await fetch(e,t),a=(new Date).getTime();return o({},n,{async text(){const e=await n.text();return console.log("[33m%s[0m","gql  ",`- ${r}`,`- ${(new Date).getTime()-a}ms`),e}})}:void 0,batchMax:10,batchInterval:50},A=(e=!1,t)=>{const s={Authorization:`Bearer ${t}`,"X-Exclude-Invalid":!0};return(e||d)&&(s["X-Include-Drafts"]=!0),p&&(s["X-Environment"]=p),new r(o({},h,{headers:s}))},f=A(!1,u),v=A(!0,u),E=new e({link:f,cache:new t,ssrMode:c,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});let y;function _(e,t){const r=parseInt(process.env.REVALIDATE_TIME),n=[w];var a;return e.query&&n.push(e.query),e.queries&&n.push.apply(n,e.queries),e.seo&&n.push(s(`query GetSEO{\n    seo: ${e.seo.model} ${(a=e.seo.id)?`( filter: { id: { eq: "${a}" } })`:""} {\n      id \n      tags: _seoMetaTags {\n        attributes \n        content \n        tag\n      }\n    }\n  }`)),async e=>{const s=await(async(e,t)=>{const{variables:s,preview:r=!1,apiToken:n}=t||{};if(null===e)throw new Error("Invalid query! Query is empty");if(!u&&!n)throw new Error("No graphql api token exists in .env");try{E.setLink(n?A(r,n):r?v:f);const t=(Array.isArray(e)?e:[e]).map((e,t)=>{const r=Array.isArray(s)&&s.length>t-1?s[t]:s||{};return E.query({query:e,variables:r})}),a=await Promise.all(t),i=[];if(a.filter(({errors:e})=>e).forEach(({errors:e})=>{e.map(e=>e.message).forEach(e=>i.push(e))}),i.length)throw new Error(i.join(". "));let c={};return a.forEach(e=>c=o({},c,null==e?void 0:e.data)),c}catch(e){throw e}})(n,{preview:e.preview});return t?await t({context:e,props:o({},s),revalidate:r}):{props:o({},s),context:e,revalidate:r}}}const w=s(y||(y=(e=>e)`
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
`));async function T(e,t){if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return t.status(401).json({message:"Invalid token"});const{slug:s}=e.query,r=s?s.startsWith("/")?s:`/${s}`:"/";try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r}),t.end()}catch(e){return console.error(e),t.status(401).json({message:"Error previewing page!"})}}function g(e){return async(t,s)=>{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if(s.setHeader("Access-Control-Allow-Origin","*"),s.setHeader("Access-Control-Allow-Methods","POST,OPTIONS"),s.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),s.setHeader("Content-Type","application/json"),"OPTIONS"===t.method)return s.status(200).send("ok");if(!t.body)throw new Error("No body found in request");const r=t.body,n=await e(r),o=[],a=null!=n&&n.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;var i,c;return n&&(o.push({label:"Live",url:`${a}${n}`}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==r||null==(i=r.item)||null==(c=i.meta)?void 0:c.status)&&o.push({label:"Preview",url:`${a}/api/preview?slug=${n}&secret=${process.env.DATOCMS_PREVIEW_SECRET}`})),s.status(200).json({previewLinks:o})}}const S={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function m(e,t){return Array.isArray(t)?t.some(t=>m(e,t)):"string"==typeof t?e===t:t instanceof RegExp?t.test(e):!!t}function C(e,t){const s=new Headers;return"*"===t?s.set("Access-Control-Allow-Origin","*"):"string"==typeof t?(s.set("Access-Control-Allow-Origin",t),s.append("Vary","Origin")):(m(null!=e?e:"",t)&&e&&s.set("Access-Control-Allow-Origin",e),s.append("Vary","Origin")),s}async function I(e,t,s){var r;const n=o({},S,s),{headers:a}=t,i=await async function(e,t){const s=e.headers.get("Origin")||void 0,r="function"==typeof t?await t(s,e):t;if(r)return C(s,r)}(e,null!=(r=n.origin)&&r),c=(e,t)=>{"Vary"===t?a.append(t,e):a.set(t,e)};if(!i)return t;i.forEach(c),n.credentials&&a.set("Access-Control-Allow-Credentials","true");const l=Array.isArray(n.exposedHeaders)?n.exposedHeaders.join(","):n.exposedHeaders;if(l&&a.set("Access-Control-Expose-Headers",l),"OPTIONS"===e.method){if(n.methods){const e=Array.isArray(n.methods)?n.methods.join(","):n.methods;a.set("Access-Control-Allow-Methods",e)}return function(e,t){const s=new Headers;return t?Array.isArray(t)&&(t=t.join(",")):(t=e.headers.get("Access-Control-Request-Headers"),s.append("Vary","Access-Control-Request-Headers")),t&&s.set("Access-Control-Allow-Headers",t),s}(e,n.allowedHeaders).forEach(c),"number"==typeof n.maxAge&&a.set("Access-Control-Max-Age",String(n.maxAge)),n.preflightContinue?t:(a.set("Content-Length","0"),new Response(null,{status:n.optionsSuccessStatus,headers:a}))}return t}function P(e){const t={origin:"*",methods:["POST","OPTIONS"],allowedHeaders:["Content-Type","Authorization"],preflightContinue:!1};return async(s,r)=>{if(!process.env.NEXT_PUBLIC_SITE_URL&&!process.env.SITE_URL)throw new Error("NEXT_PUBLIC_SITE_URL is not set in .env");if("OPTIONS"===s.method)return I(s,new Response("ok",{status:200}),t);const n=await s.json();if(!n)throw new Error("No form data in request body");const o=await e(n),a=[],i=null!=o&&o.startsWith("https://")?"":process.env.NEXT_PUBLIC_SITE_URL||process.env.SITE_URL;var c,l;return o&&(a.push({label:"Live",url:`${i}${o}`}),process.env.DATOCMS_PREVIEW_SECRET&&"published"!==(null==n||null==(c=n.item)||null==(l=c.meta)?void 0:l.status)&&a.push({label:"Preview",url:`${i}/api/preview?slug=${o}&secret=${process.env.DATOCMS_PREVIEW_SECRET}`})),I(s,new Response(JSON.stringify({previewLinks:a}),{status:200,headers:{"Content-Type":"application/json"}}),t)}}function O(e){return async(t,s)=>{var r,a;if("GET"===t.method&&null!=(r=t.query)&&r.ping)return s.status(200).send("pong");if(!(e=>{const t=e.headers.authorization;if(!t)return!0;const s=t.split(" ")[1],[r,n]=Buffer.from(s,"base64").toString().split(":");return r===process.env.BASIC_AUTH_USER&&n===process.env.BASIC_AUTH_PASSWORD})(t))return s.status(401).send("Access denied");const i=null==(a=t.body)?void 0:a.entity;if(!i)throw"Payload is empty";const c=await(async e=>{var t,s,r;const a=null==e||null==(t=e.relationships)||null==(s=t.item_type)||null==(r=s.data)?void 0:r.id;if(!a)throw"Model id not found in payload!";const i=n({apiToken:process.env.GRAPHQL_API_TOKEN||process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3}),c=(await i.itemTypes.list()).find(e=>e.id===a),l=(await i.items.list({filter:{type:c.api_key,fields:{id:{eq:e.id}}}}))[0];if(!l)throw`No record found with modelId: ${a} (${c.api_key})`;return console.log("revalidate",c.api_key),o({},l,{model:c})})(i);c._payload=i,e(c,async e=>{try{if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),await Promise.all(e.map(e=>s.revalidate(e))),console.log("revalidating done!"),s.json({revalidated:!0,paths:e})}catch(e){return console.error(e),s.json({revalidated:!1,err:e})}})}}function R(e){return async(t,s)=>{const r=t.headers.authorization;if(!r)return s.status(401).send("Access denied");const n=r.split(" ")[1],[o,a]=Buffer.from(n,"base64").toString().split(":");return o===process.env.BASIC_AUTH_USER&&a===process.env.BASIC_AUTH_PASSWORD?e(t,s):s.status(401).send("Access denied")}}function N(e){return async(t,s)=>{const r=t.headers.get("authorization");if(!r)return new Response("Access denied",{status:401});const n=r.split(" ")[1],[o,a]=Buffer.from(n,"base64").toString().split(":");return o===process.env.BASIC_AUTH_USER&&a===process.env.BASIC_AUTH_PASSWORD?e(t,s):new Response("Access denied. Wrong password or username.",{status:401})}}export{R as withBasicAuth,N as withBasicAuthEdge,_ as withGlobalProps,T as withPreview,O as withRevalidate,g as withWebPreviews,P as withWebPreviewsEdge};
//# sourceMappingURL=index.modern.mjs.map
