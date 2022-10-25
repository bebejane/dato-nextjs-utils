import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import Link from "next/link.js";
import truncateMarkdown from 'markdown-truncate';
import remarkBreaks from 'remark-breaks';
const truncateSentances = (markdown, limit) => {
    if (!markdown)
        return markdown;
    const sentances = markdown.split('.');
    return sentances.length >= limit ? sentances.slice(0, limit).join(' ') + '...' : markdown;
};
const Markdown = ({ children, truncate, className, sentances }) => {
    if (!children)
        return null;
    const content = !truncate ? sentances ? truncateSentances(children, sentances) : children : truncateMarkdown(children, { limit: truncate, ellipsis: true });
    return (<ReactMarkdown remarkPlugins={[gfm, remarkBreaks]} className={className} 
    // eslint-disable-next-line react/no-children-prop
    children={content} components={{
            // @ts-ignore
            a: ({ children, href }) => <Link scroll={false} href={href} prefetch={false}>
            <a>{children[0]}</a>
          </Link>
        }}/>);
};
export default Markdown;