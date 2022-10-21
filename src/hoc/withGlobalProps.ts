import { apiQuery, SEOQuery } from "../api";
import { GetStaticProps } from 'next'
import type { TypedDocumentNode } from "@apollo/client";

export default function withGlobalProps(opt: any , callback : Function) : GetStaticProps {
  
  const revalidate : number = parseInt(process.env.REVALIDATE_TIME)
  const queries: TypedDocumentNode[] = []
  
  if(opt.query) 
    queries.push(opt.query)
  if(opt.queries) 
    queries.push.apply(queries, opt.queries)
  if(opt.seo) 
    queries.push(SEOQuery(opt.seo))
  
  return async (context) => {
    const props = await apiQuery(queries, {preview:context.preview});

    if(callback)
      return await callback({context, props: {...props}, revalidate});
    else
      return { props:{...props}, context, revalidate};
  }
}