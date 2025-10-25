import React from "react";
import { SpecialComponents } from "react-markdown/lib/ast-to-react.js";
type MarkdownProps = {
    children?: React.ReactNode;
    allowedElements?: string[];
    truncate?: number;
    className?: string;
    sentances?: number;
    components?: Partial<Omit<any, keyof SpecialComponents> & SpecialComponents>;
    scroll?: boolean;
    disableBreaks?: boolean;
};
declare const DatoMarkdown: ({ children, truncate, className, components, sentances, allowedElements, scroll, disableBreaks }: MarkdownProps) => import("react/jsx-runtime").JSX.Element;
export default DatoMarkdown;
