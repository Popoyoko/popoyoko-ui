import React from "react";
interface PrimaryProps {
    typeSvg: "none" | "left" | "right" | "only";
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}
export declare const Primary: ({ label, typeSvg, srcIcon, onClick }: PrimaryProps) => React.JSX.Element;
export {};
