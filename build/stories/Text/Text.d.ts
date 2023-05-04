import "./Text.css";
interface TextProps {
    title: string;
    description: string;
    backgroundColor?: string;
    divWidth?: string;
}
export declare const Text: ({ title, description, backgroundColor, divWidth }: TextProps) => JSX.Element;
export {};
