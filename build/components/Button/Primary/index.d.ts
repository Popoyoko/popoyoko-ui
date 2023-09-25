import React from "react";
interface PrimaryProps {
    typeSvg?: "none" | "left" | "right" | "only";
    label?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
export declare const Primary: ({ label, typeSvg, children, onClick, }: PrimaryProps) => React.JSX.Element;
export {};
