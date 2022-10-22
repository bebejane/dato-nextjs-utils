declare module 'dato-nextjs-utils/api' {
  import { ApolloClient } from '@apollo/client';
  import { TypedDocumentNode } from '@apollo/client';
  export type ApiQueryOptions = {
      variables?: any | any[];
      preview?: boolean;
  };
  export const client: ApolloClient<import("@apollo/client").NormalizedCacheObject>;
  export const SEOQuery: (schema: string) => TypedDocumentNode;
  export const apiQuery: (query: TypedDocumentNode | TypedDocumentNode[], options?: ApiQueryOptions) => Promise<any>;

}
declare module 'dato-nextjs-utils/dato/components/DatoSEO' {
  /// <reference types="react" />
  const DatoSEO: ({ seo, site, pathname, title, subtitle, description, noindex }: any) => JSX.Element;
  const DefaultDatoSEO: ({ site, url }: {
      site: any;
      url: any;
  }) => JSX.Element;
  export { DefaultDatoSEO };
  export default DatoSEO;

}
declare module 'dato-nextjs-utils/dato/components/Markdown' {
  /// <reference types="react" />
  type MarkdownProps = {
      children?: string;
      truncate?: number;
      className?: string;
      sentances?: number;
  };
  const Markdown: ({ children, truncate, className, sentances }: MarkdownProps) => JSX.Element;
  export default Markdown;

}
declare module 'dato-nextjs-utils/dato/hoc/withRevalidate' {
  import type { NextApiRequest, NextApiResponse } from 'next';
  export const basicAuth: (req: NextApiRequest) => boolean;
  export default function withRevalidate(callback: (record: any, revalidate: (paths: string[]) => Promise<void>) => Promise<void>): (req: NextApiRequest, res: NextApiResponse) => void;

}
declare module 'dato-nextjs-utils/dato/hooks/useApiQuery' {
  import { TypedDocumentNode } from '@apollo/client';
  export type UseApiQueryProps = {
      variables?: any;
      initialData?: any;
      pageSize?: number;
  };
  export type Pagination = {
      no: number;
      count: number;
      size: number;
      end: boolean;
  };
  const useApiQuery: <T>(document: TypedDocumentNode, { variables, initialData, pageSize }?: UseApiQueryProps) => {
      data: T;
      error: Error;
      loading: boolean;
      loadMore: (vars: any) => Promise<any>;
      nextPage: () => Promise<void | {
          no: number;
          count: any;
          end: boolean;
          size: number;
      }>;
      page: Pagination;
  };
  export default useApiQuery;

}
declare module 'dato-nextjs-utils/hoc/withGlobalProps' {
  import { GetStaticProps } from 'next';
  export default function withGlobalProps(opt: any, callback: Function): GetStaticProps;

}
declare module 'dato-nextjs-utils/hoc/withPreview' {
  import type { NextApiRequest, NextApiResponse } from "next";
  export default function withPreview(req: NextApiRequest, res: NextApiResponse): Promise<void>;

}
declare module 'dato-nextjs-utils/hooks/usePreviousRoute' {
  const usePreviousRoute: () => string;
  export default usePreviousRoute;

}
declare module 'dato-nextjs-utils/hooks/useScrollInfo' {
  export type ScrollInfo = {
      isScrolling: boolean;
      isPageTop: boolean;
      isPageBottom: boolean;
      isScrolledUp: boolean;
      isScrolledDown: boolean;
      scrolledPosition: number;
      documentHeight: number;
      viewportHeight: number;
      timer: ReturnType<typeof setTimeout>;
  };
  export default function useScrollInfo(pageBottomLimit?: number): ScrollInfo;

}
declare module 'dato-nextjs-utils/hooks/useTransitionFix' {
  const useTransitionFix3: () => void;
  export default useTransitionFix3;

}
declare module 'dato-nextjs-utils/utils' {
  export const isServer: boolean;

}
declare module 'dato-nextjs-utils' {
  import main = require('dato-nextjs-utils/index');
  export = main;
}