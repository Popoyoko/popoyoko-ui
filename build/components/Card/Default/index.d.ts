import "./index.css";
import React from "react";
interface DefaultProps {
    label?: string;
    mention?: string;
    subTitle?: string;
    price?: number;
}
export declare const Default: ({ label, mention, subTitle, price, ...props }: DefaultProps) => React.JSX.Element;
export {};
