import "./index.css";
import React from "react";
// import {
//   Add,
//   AddPicture,
//   ArrowBottom,
//   ArrowLeft,
//   ArrowRight,
//   ArrowTop,
//   ArrowTriangle,
//   DateFlat,
//   DateLine,
//   Information,
//   Search,
//   Upload,
//   UserFlat,
//   UserLine,
// } from "../../Icons/index";

import Add  from "../../Icons/Add/add.svg"
import AddPicture  from "../../Icons/Add/add.svg"

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

    default:
      break;
  }

  return (
    //svg add for now
    // <svg
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M12 4H10V11H3V13H10V20H12V13H19V11H12V4Z" fill="#2018B0" />
    // </svg>
    //exportation of svg doesn't rly work 

      <img src={selectedIcon}/>

  );
};

export default Icon;
