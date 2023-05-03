import "./Icon.css";
import React from "react";
import icon from "../../assets/icon.svg";

interface IconProps {
    size?: "small" | "medium" | "large";
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export const Icon = ({ small, medium, large }: IconProps) => {
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
