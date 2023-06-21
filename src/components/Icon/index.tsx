import "./index.css";
import React from "react";
import { ReactSVG } from "react-svg";

import Add from "../../Icons/Add/add.svg";
import AddPicture from "../../Icons/AddPicture/addPicture.svg";
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

interface IconProps {
  size: "small" | "medium" | "large";
  icon: string;
}

const Icon = ({ size, icon }: IconProps) => {
  const className = `icon-${size}`;

  let iconElement = null;

  switch (icon) {
    case "add":
      iconElement = <ReactSVG src={Add} />;
      break;
    case "addPicture":
      iconElement = <ReactSVG src={AddPicture} />;
      break;
    case "arrowBottom":
      iconElement = <ReactSVG src={ArrowBottom} />;
      break;
    case "addPicture":
      iconElement = <ReactSVG src={AddPicture} />;
      break;
      case "addPicture":
        iconElement = <ReactSVG src={AddPicture} />;
        break;
        case "addPicture":
      iconElement = <ReactSVG src={AddPicture} />;
      break;
      case "addPicture":
      iconElement = <ReactSVG src={AddPicture} />;
      break;
      case "addPicture":
      iconElement = <ReactSVG src={AddPicture} />;
      break;
      
    default:
      break;
  }

  return <div className={className}>{iconElement}</div>;
};

Icon.Add = () => <Icon icon="add" size="large" />;
Icon.AddPicture = () => <Icon icon="addPicture" size="large" />;
Icon.ArrowBottom = () => <Icon icon="arrowBottom" size="large" />;
// Ajoutez d'autres sous-composants pour les autres icônes

export default Icon;
