import './index.css';
import React from 'react';
interface InputSelectProps {
    label: string;
    href: string;
    options: string[];
    anchorElement: JSX.Element;
}
export declare const InputSelect: ({ label, href, options, anchorElement, }: InputSelectProps) => React.JSX.Element;
export {};
