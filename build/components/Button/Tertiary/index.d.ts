import React from "react";
interface TertiaryProps {
    typeSvg?: "none" | "left" | "right" | "only";
    label?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
export declare const Tertiary: ({ label, typeSvg, children, onClick, }: TertiaryProps) => React.JSX.Element;
export {};
