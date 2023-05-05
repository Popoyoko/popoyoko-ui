import "./buttonSecondary.css";
interface ButtonSecondaryProps {
    typeSvg: "none" | "left" | "right" | "only";
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}
export declare const ButtonSecondary: ({ label, typeSvg, srcIcon, onClick, }: ButtonSecondaryProps) => JSX.Element;
export {};
