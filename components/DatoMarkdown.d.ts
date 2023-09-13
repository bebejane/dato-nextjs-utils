import React from "react";
declare type MarkdownProps = {
    children?: React.ReactNode;
    allowedElements?: string[];
    truncate?: number;
    className?: string;
    sentances?: number;
    scroll?: boolean;
    disableBreaks?: boolean;
};
declare const DatoMarkdown: ({ children, truncate, className, sentances, allowedElements, scroll, disableBreaks }: MarkdownProps) => JSX.Element;
export default DatoMarkdown;
