import "./index.css";
import React from "react";
import {Add, AddPicture} from "../../Icons/index"

interface IconProps {
  size: "small" | "medium" | "large";
  iconId: string;
}



const Icon = ({ size, iconId }: IconProps) => {
  const className = `icon-${size}`;

  return (
    <svg className={className}>
    <use xlinkHref={#${iconId}}/>
  </svg>
  );
};

export default Icon;
