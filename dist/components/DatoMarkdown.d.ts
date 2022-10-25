/// <reference types="react" />
declare type MarkdownProps = {
    children?: string;
    truncate?: number;
    className?: string;
    sentances?: number;
};
declare const DatoMarkdown: ({ children, truncate, className, sentances }: MarkdownProps) => JSX.Element;
export default DatoMarkdown;
