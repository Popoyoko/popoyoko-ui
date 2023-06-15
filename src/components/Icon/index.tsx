import "./index.css";
import React from "react";
import {Add, AddPicture} from "../../Icons/index"

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
    <svg
    xmlns={`#${iconId}`}
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill="none" />
    <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/>
  </svg>
  );
};

export default Icon;