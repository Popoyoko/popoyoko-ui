import "./index.css";
import React from "react";

interface ButtonProps {
  type: "primary" | "secondary" | "tertiary";
  typeSvg: "none" | "left" | "right" | "only";
  label: string;
  srcIcon?: string;
  onClick?: () => void;
}

const Button = ({
  type = "primary",
  label,
  typeSvg,
  srcIcon,
  onClick,
}: ButtonProps) => {
  if (typeSvg === "none") {
    return <button className={type}>{label}</button>;
  } else if (typeSvg === "left") {
    return (
      <button className={type}>
        <img src={srcIcon} alt="Icon" />
        {label}
      </button>
    );
  } else if (typeSvg === "right") {
    return (
      <button className={type}>
        {label}
        <img src={srcIcon} alt="Icon" />
      </button>
    );
  } else if (typeSvg === "only") {
    return (
      <button className={type}>
        <img src={srcIcon} alt="Icon" />
      </button>
    );
  }
};

Button.Primary = (props: Omit<ButtonProps, "type">) => {
  return <Button type="primary" {...props} />;
};

Button.Secondary = (props: Omit<ButtonProps, "type">) => {
  return <Button type="secondary" {...props} />;
};

Button.Tertiary = (props: Omit<ButtonProps, "type">) => {
  return <Button type="tertiary" {...props} />;
};

export default Button;
