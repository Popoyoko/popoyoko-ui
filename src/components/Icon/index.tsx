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
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4H10V11H3V13H10V20H12V13H19V11H12V4Z" fill="#2018B0"/>
</svg>
  );
};

export default Icon;