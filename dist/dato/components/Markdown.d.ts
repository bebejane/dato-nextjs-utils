/// <reference types="react" resolution-mode="require"/>
declare type MarkdownProps = {
    children?: string;
    truncate?: number;
    className?: string;
    sentances?: number;
};
declare const Markdown: ({ children, truncate, className, sentances }: MarkdownProps) => JSX.Element;
export default Markdown;
