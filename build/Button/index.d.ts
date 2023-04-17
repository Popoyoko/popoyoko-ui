import "./index.css";
import React from "react";
declare const Button: ({ primary, size, backgroundColor, label, ...props }: {
    [x: string]: any;
    primary?: boolean;
    size?: string;
    backgroundColor: any;
    label: any;
}) => React.DetailedReactHTMLElement<{
    type: string;
    className: string;
    style: {
        backgroundColor: any;
    };
}, HTMLElement>;
export default Button;
