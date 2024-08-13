import React from "react";
declare const Button: {
    ({ variant, children, action, value, type, disabled }: {
        variant?: string;
        children: any;
        action?: () => void;
        value?: any;
        type?: any;
        disabled?: boolean;
    }): React.DOMElement<{
        className: string;
        onClick: () => void;
        type: any;
        value: any;
        disabled: boolean;
    }, Element>;
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
