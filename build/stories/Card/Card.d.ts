import "./Card.css";
interface CardProps {
    label?: string;
    mention?: string;
    subTitle?: string;
    price?: number;
    background?: string;
    backgroundColor?: string;
    variant?: "simple" | "media";
}
export declare const Card: ({ background, backgroundColor, label, mention, subTitle, price, ...props }: CardProps) => JSX.Element;
export {};
