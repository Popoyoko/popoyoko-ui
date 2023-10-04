import React from "react";
interface PrimaryProps {
    typeSvg?: "none" | "left" | "right" | "only";
    label?: string;
    children?: React.ReactNode;
}
export declare const Primary: ({ label, typeSvg, children, }: PrimaryProps) => React.JSX.Element;
export {};
