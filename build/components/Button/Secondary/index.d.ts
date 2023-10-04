import React from "react";
interface SecondaryProps {
    typeSvg?: "none" | "left" | "right" | "only";
    label?: string;
    children?: React.ReactNode;
}
export declare const Secondary: ({ label, typeSvg, children, }: SecondaryProps) => React.JSX.Element;
export {};
