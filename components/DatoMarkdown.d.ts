import React from "react";
declare type MarkdownProps = {
    children: React.ReactNode | React.ReactNode[];
    truncate?: number;
    className?: string;
    sentances?: number;
};
declare const DatoMarkdown: ({ children, truncate, className, sentances }: MarkdownProps) => JSX.Element;
export default DatoMarkdown;
