/// <reference types="react" />
import "./Information.css";
interface InformationProps {
    label?: string;
    background?: string;
}
export declare const Information: ({ background, label, ...props }: InformationProps) => JSX.Element;
export {};
