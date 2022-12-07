import React from "react";
declare type MarkdownProps = {
    children?: React.ReactNode;
    allowedElements?: string[];
    truncate?: number;
    className?: string;
    sentances?: number;
    scroll?: boolean;
};
declare const DatoMarkdown: ({ children, truncate, className, sentances, allowedElements, scroll }: MarkdownProps) => JSX.Element;
export default DatoMarkdown;
