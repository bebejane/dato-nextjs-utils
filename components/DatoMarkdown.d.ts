import React from "react";
declare type MarkdownProps = {
    children?: React.ReactNode;
    allowedElements?: string[];
    truncate?: number;
    className?: string;
    sentances?: number;
};
declare const DatoMarkdown: ({ children, truncate, className, sentances, allowedElements }: MarkdownProps) => JSX.Element;
export default DatoMarkdown;
