import{ApolloClient as e,InMemoryCache as t,gql as r}from"@apollo/client/core/core.cjs";import{BatchHttpLink as o}from"@apollo/client/link/batch-http/batchHttpLink.js";import{buildClient as a}from"@datocms/cma-client";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s.apply(this,arguments)}const n="undefined"==typeof window,i=process.env.GRAPHQL_API_ENDPOINT||process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT||"https://graphql.datocms.com",c=process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,l={uri:i,fetch:process.env.LOG_GRAPHQL?async(e,t)=>{const r=t?JSON.parse(t.body.toString()):void 0,o=`${(r?Array.isArray(r)?r.map(e=>e.operationName):[r.operationName]:[]).join(", ")}`,a=await fetch(e,t),n=(new Date).getTime();return s({},a,{async text(){const e=await a.text();return console.log("[33m%s[0m","gql  ",`- ${o}`,`- ${(new Date).getTime()-n}ms`),e}})}:void 0,batchMax:10,batchInterval:50,headers:{Authorization:`Bearer ${c}`}},p=new o(l),u=new o(s({},l,{headers:s({},l.headers,{"X-Include-Drafts":!0})})),d=new e({link:p,cache:new t,ssrMode:n,defaultOptions:{query:{fetchPolicy:process.env.DEV_CACHE?"cache-first":"no-cache",errorPolicy:"all"}}});let h;function y(e,t){const o=parseInt(process.env.REVALIDATE_TIME),a=[f];return e.query&&a.push(e.query),e.queries&&a.push.apply(a,e.queries),e.seo&&a.push(r("query GetSEO {seo: "+e.seo+" {id tags: _seoMetaTags {attributes content tag}}}")),async e=>{const r=await(async(e,t)=>{const{variables:r,preview:o=!1}=t||{};if(null===e)throw new Error("Invalid query! Query is empty");if(!c)throw new Error("No graphql api token exists in .env");try{d.setLink(o?u:p);const t=(Array.isArray(e)?e:[e]).map((e,t)=>{const o=Array.isArray(r)&&r.length>t-1?r[t]:r||{};return d.query({query:e,variables:o})}),a=await Promise.all(t),n=[];if(a.filter(({errors:e})=>e).forEach(({errors:e})=>{e.map(e=>e.message).forEach(e=>n.push(e))}),n.length)throw new Error(n.join(". "));let i={};return a.forEach(e=>i=s({},i,null==e?void 0:e.data)),i}catch(e){throw e}})(a,{preview:e.preview});return t?await t({context:e,props:s({},r),revalidate:o}):{props:s({},r),context:e,revalidate:o}}}const f=r(h||(h=(e=>e)`
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
`));async function v(e,t){if(e.query.secret!==process.env.DATOCMS_PREVIEW_SECRET||!e.query.slug)return t.status(401).json({message:"Invalid token"});const{slug:r}=e.query;try{t.setPreviewData({},{maxAge:10}),t.writeHead(307,{Location:r||"/"}),t.end()}catch(e){return console.error(e),t.status(401).json({message:"Error previewing page!"})}}function w(e){return async(t,r)=>{var o;if(!(e=>{const t=e.headers.authorization;if(!t)return!0;const r=t.split(" ")[1],[o,a]=Buffer.from(r,"base64").toString().split(":");return o===process.env.BASIC_AUTH_USER&&a===process.env.BASIC_AUTH_PASSWORD})(t))return r.status(401).send("Access denied");const n=null==(o=t.body)?void 0:o.entity;if(!n)throw"Payload is empty";const i=await(async e=>{var t,r,o;const n=null==e||null==(t=e.relationships)||null==(r=t.item_type)||null==(o=r.data)?void 0:o.id;if(!n)throw"Model id not found in payload!";console.log("resolve modelId",n);const i=a({apiToken:process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,requestTimeout:3e3}),c=(await i.itemTypes.list()).find(e=>e.id===n),l=(await i.items.list({filter:{type:c.api_key,fields:{id:{eq:e.id}}}}))[0];if(!l)throw`No record found with modelId: ${n}`;return console.log("revalidate",c.api_key),s({},l,{model:c})})(n);e(i,async e=>{try{if(!e.length)throw"Nothing to revalidate";return console.log("revalidating paths",e),await Promise.all(e.map(e=>r.revalidate(e))),console.log("revalidating done!"),r.json({revalidated:!0,paths:e})}catch(e){return console.error(e),r.json({revalidated:!1,err:e})}})}}export{y as withGlobalProps,v as withPreview,w as withRevalidate};
//# sourceMappingURL=hoc.modern.js.map
