import { jsx as _jsx } from "react/jsx-runtime";
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
const DatoMarkdown = ({ children, truncate, className, components, sentances, allowedElements, scroll = true, disableBreaks = false }) => {
    if (!children)
        return null;
    const content = !truncate ? sentances ? truncateSentances(children, sentances) : children : truncateMarkdown(children, { limit: truncate, ellipsis: true });
    return (_jsx(ReactMarkdown, { remarkPlugins: disableBreaks ? [gfm] : [gfm, remarkBreaks], className: className, children: content, allowedElements: allowedElements, 
        //@ts-ignore
        components: components ?? {
            //@ts-ignore
            a: ({ children, href }) => _jsx(Link, { scroll: scroll, href: href, children: children })
        } }));
};
export default DatoMarkdown;
//# sourceMappingURL=DatoMarkdown.js.map