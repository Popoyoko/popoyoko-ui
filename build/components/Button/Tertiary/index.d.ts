import React from "react";
interface TertiaryProps {
    typeSvg?: "none" | "left" | "right" | "only";
    label?: string;
    children?: React.ReactNode;
}
export declare const Tertiary: ({ label, typeSvg, children, }: TertiaryProps) => React.JSX.Element;
export {};
