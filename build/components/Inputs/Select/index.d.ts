import './index.css';
import { JSX } from 'react';
interface InputSelectProps {
    label: string;
    href: string;
    options: string[];
    anchorElement: JSX.Element;
}
export declare const InputSelect: ({ label, href, options, anchorElement, }: InputSelectProps) => JSX.Element;
export {};
