import './buttonTertiary.css';
interface ButtonTertiaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}
export declare const ButtonTertiary: ({ label, typeSvg, srcIcon, onClick, }: ButtonTertiaryProps) => JSX.Element;
export {};
