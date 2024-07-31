import React from "react";
declare const Button: {
    ({ variant, children, action, value, type, disabled }: {
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
        disabled?: boolean;
    }): React.FunctionComponentElement<import("styled-components/dist/types").FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>>;
    Primary(props: any): React.FunctionComponentElement<{
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
        disabled?: boolean;
    }>;
    Secondary(props: any): React.FunctionComponentElement<{
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
        disabled?: boolean;
    }>;
    Tertiary(props: any): React.FunctionComponentElement<{
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
        disabled?: boolean;
    }>;
};
export default Button;
