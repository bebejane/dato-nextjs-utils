import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import Link from "next/link.js";
import truncateMarkdown from 'markdown-truncate'
import remarkBreaks from 'remark-breaks'
import type { UrlObject } from 'url';
import { SpecialComponents } from "react-markdown/lib/ast-to-react.js";

type MarkdownProps = {
  children?: React.ReactNode,
  allowedElements?: string[]
  truncate?: number
  className?: string
  sentances?: number
  components?: Partial<Omit<any, keyof SpecialComponents> & SpecialComponents>
  scroll?: boolean,
  disableBreaks?: boolean
}

type AnchorProp = {
  children: any[],
  href: UrlObject
}

const truncateSentances = (markdown: string, limit: number): string => {
  if (!markdown) return markdown
  const sentances = markdown.split('.')
  return sentances.length >= limit ? sentances.slice(0, limit).join(' ') + '...' : markdown
}

const DatoMarkdown = ({ children, truncate, className, components, sentances, allowedElements, scroll = true, disableBreaks = false }: MarkdownProps) => {
  if (!children)
    return null

  const content: string = !truncate ? sentances ? truncateSentances(children as string, sentances) : children : truncateMarkdown(children, { limit: truncate, ellipsis: true })

  return (
    <ReactMarkdown
      remarkPlugins={disableBreaks ? [gfm] : [gfm, remarkBreaks]}
      className={className}
      children={content}
      allowedElements={allowedElements}
      //@ts-ignore
      components={components ?? {
        //@ts-ignore
        a: ({ children, href }: AnchorProp) => <Link scroll={scroll} href={href}>{children}</ Link>
      }}
    />
  )
}

export default DatoMarkdown

