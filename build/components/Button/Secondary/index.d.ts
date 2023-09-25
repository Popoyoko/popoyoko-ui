import React from "react";
interface SecondaryProps {
    typeSvg?: "none" | "left" | "right" | "only";
    label?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
export declare const Secondary: ({ label, typeSvg, children, onClick, }: SecondaryProps) => React.JSX.Element;
export {};
