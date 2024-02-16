import React from "react";
declare const Button: {
    ({ variant, children, action, value, type }: {
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
    }): React.FunctionComponentElement<import("styled-components/dist/types").FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>>;
    Primary(props: any): React.FunctionComponentElement<{
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
    }>;
    Secondary(props: any): React.FunctionComponentElement<{
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
    }>;
    Tertiary(props: any): React.FunctionComponentElement<{
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
    }>;
};
export default Button;
