import "./index.css";
import React from "react";

import addSvg from "../../Icons/Add/add.svg";
import addPictureSvg from "../../Icons/AddPicture/addPicture.svg";
import { ReactSVG } from 'react-svg';
// import { ReactComponent as Add } from "react";


interface IconProps {
  size: "small" | "medium" | "large";
  icon: string; // Type générique pour le composant SVG
}

const Icon = ({ icon, size }: IconProps) => {
  const className = `icon-${size}`;

  return (
    <div className={className}>
    {icon === "add" && <ReactSVG src={addSvg} />}
    {icon === "addPicture" && <ReactSVG src={addPictureSvg} />}
  </div>
 
  );
};

export default Icon;