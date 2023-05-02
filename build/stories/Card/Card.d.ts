/// <reference types="react" />
import "./Card.css";
interface CardProps {
    mention?: string;
    label?: string;
    subTitle?: string;
    price?: number;
    background?: string;
    variant?: "simple" | "media";
}
export declare const Card: ({ background, label, mention, subTitle, price, ...props }: CardProps) => JSX.Element;
export {};
