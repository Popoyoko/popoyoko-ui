import "./index.css";
import React from "react";
interface ButtonProps {
    type: "primary" | "secondary" | "tertiary";
    typeSvg: "none" | "left" | "right" | "only";
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}
declare const Button: {
    ({ type, label, typeSvg, srcIcon, onClick, }: ButtonProps): React.JSX.Element;
    Primary(props: Omit<ButtonProps, "type">): React.JSX.Element;
    Secondary(props: Omit<ButtonProps, "type">): React.JSX.Element;
    Tertiary(props: Omit<ButtonProps, "type">): React.JSX.Element;
};
export default Button;
