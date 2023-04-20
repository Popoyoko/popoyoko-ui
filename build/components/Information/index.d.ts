import "./index.css";
import React from "react";
declare const Information: ({ background, label, ...props }: {
    [x: string]: any;
    background: any;
    label: any;
}) => React.DetailedReactHTMLElement<{
    className: string;
    style: {
        background: any;
    };
}, HTMLElement>;
export default Information;
