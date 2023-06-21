import "./index.css";
import React from "react";

import AddSvg from "../../Icons/Add/add.svg";
import AddPictureSvg from "../../Icons/AddPicture/addPicture.svg";
import ArrowBottom from "../../Icons/ArrowBottom/bottom.svg";
import ArrowLeft from "../../Icons/ArrowLeft/left.svg";
import ArrowRight from "../../Icons/ArrowRight/right.svg";
import ArrowTop from "../../Icons/ArrowTop/top.svg";
import ArrowTriangle from "../../Icons/ArrowTriangle/triangle.svg";
import DateFlat from "../../Icons/DateFlat/dateFlat.svg";
import DateLine from "../../Icons/DateLine/dateLine.svg";
import Information from "../../Icons/Information/information.svg";
import Search from "../../Icons/Search/search.svg";
import Upload from "../../Icons/Upload/upload.svg";
import UserFlat from "../../Icons/UserFlat/userFlat.svg";
import UserLine from "../../Icons/UserLine/userLine.svg";

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
    {icon === "add" && <ReactSVG src={Add} />}
    {icon === "addPicture" && <ReactSVG src={AddPicture} />}
  </div>
 
  );
};

export default Icon;