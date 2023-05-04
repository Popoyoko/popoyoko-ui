import "./Icon.css";
interface IconProps {
    size?: "small" | "medium" | "large";
    small?: boolean;
    medium?: boolean;
    large?: boolean;
}
export declare const Icon: ({ small, medium, large }: IconProps) => JSX.Element;
export {};
