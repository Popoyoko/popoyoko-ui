import './index.css';
import React from 'react';
interface SecondaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}
export declare const Secondary: ({ label, typeSvg, srcIcon, onClick, }: SecondaryProps) => React.JSX.Element;
export {};
