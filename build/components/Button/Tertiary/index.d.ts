import './index.css';
import React from 'react';
interface TertiaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}
export declare const Tertiary: ({ label, typeSvg, srcIcon, onClick, }: TertiaryProps) => React.JSX.Element;
export {};
