import "./index.css";
import React from "react";
import icon from "../../assets/icon.svg";

interface IconProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const Icon = ({ small, medium, large }: IconProps) => {
  let className = "icon";
  if (small) className += " icon-small";
  if (medium) className += " icon-medium";
  if (large) className += " icon-large";

  return (
    <div className={className}>
      <img src={icon} alt="Icon" />
    </div>
  );
};

export default Icon;
