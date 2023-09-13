import React from "react";
interface InputDateProps {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
}
export declare const InputDate: ({ label, value, onChange }: InputDateProps) => React.JSX.Element;
export {};
