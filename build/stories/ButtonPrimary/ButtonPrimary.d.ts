import './buttonPrimary.css';
interface ButtonPrimaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}
export declare const ButtonPrimary: ({ label, typeSvg, srcIcon, onClick, }: ButtonPrimaryProps) => JSX.Element;
export {};
