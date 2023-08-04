import "./index.css";
import React from "react";
declare const Button: {
    ({ type, label, typeSvg, srcIcon }: {
        type?: string;
        label: any;
        typeSvg: any;
        srcIcon: any;
    }): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
    Primary(props: any): React.FunctionComponentElement<{
        type?: string;
        label: any;
        typeSvg: any;
        srcIcon: any;
    }>;
    Secondary(props: any): React.FunctionComponentElement<{
        type?: string;
        label: any;
        typeSvg: any;
        srcIcon: any;
    }>;
    Tertiary(props: any): React.FunctionComponentElement<{
        type?: string;
        label: any;
        typeSvg: any;
        srcIcon: any;
    }>;
};
export default Button;
