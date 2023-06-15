import "./index.css";
import React from "react";
import { Add, AddPicture } from "../../Icons/index";

interface IconProps {
  size: "small" | "medium" | "large";
  iconId: string;
}

const Icon = ({ size, iconId }: IconProps) => {
  const className = `icon-${size}`;

  let selectedIcon = null;

  switch (iconId) {
    case "Add":
      selectedIcon = <Add />;
      break;
    case "AddPicture":
      selectedIcon = <AddPicture />;
      break;
    // Ajoutez le reste des cas pour les autres icônes SVG

    default:
      break;
  }

  return (
    // <svg className={className}>
    //   <symbol id="Add" viewBox="0 0 24 24">
    //   <use xlinkHref={`#${iconId}`} />
    //   </symbol>
    // </svg>
    <svg className={className}><use xlinkHref={`#${iconId}`} /></svg>
  );
};

export default Icon;
