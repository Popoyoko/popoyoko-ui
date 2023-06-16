import "./index.css";
import React from "react";

import { ReactComponent as Add } from "../../Icons/Add/add.svg";
import { ReactComponent as AddPicture } from "../../Icons/AddPicture/addPicture.svg";

// import { ReactComponent as Add } from "react";


interface IconProps {
  size: "small" | "medium" | "large";
  icon: string; // Type générique pour le composant SVG
}

const Icon = ({ icon, size }: IconProps) => {
  const className = `icon-${size}`;

  return (
    <svg className={className}>
      <use xlinkHref={icon} />
    </svg>
  );
};

export default Icon;