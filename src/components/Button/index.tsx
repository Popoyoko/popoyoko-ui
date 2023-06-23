import React from "react";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";
import { Tertiary } from "./Tertiary";
import "./index.scss";

interface ButtonProps {
  children?: React.ReactNode;
}

interface ButtonComponent extends React.FC<ButtonProps> {
  Primary: typeof Primary;
  Secondary: typeof Secondary;
  Tertiary: typeof Tertiary;
}

const Button: ButtonComponent = ({ children }) => {
  return <div>{children}</div>;
};

Button.Primary = Primary;
Button.Secondary = Secondary;
Button.Tertiary = Tertiary;

export default Button;
