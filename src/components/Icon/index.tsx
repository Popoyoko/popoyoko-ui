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
    case "ArrowLeft":
      iconElement = <ReactSVG src={ArrowLeft} />;
      break;
      case "ArrowRight":
        iconElement = <ReactSVG src={ArrowRight} />;
        break;
        case "ArrowTop":
      iconElement = <ReactSVG src={ArrowTop} />;
      break;
      case "ArrowTriangle":
      iconElement = <ReactSVG src={ArrowTriangle} />;
      break;
      case "DateFlat":
      iconElement = <ReactSVG src={DateFlat} />;
      break;
      case "DateLine":
      iconElement = <ReactSVG src={DateLine} />;
      break;
      case "Information":
      iconElement = <ReactSVG src={Information} />;
      break;
      case "Search":
      iconElement = <ReactSVG src={Search} />;
      break;
      case "Upload":
      iconElement = <ReactSVG src={Upload} />;
      break;
      case "UserFlat":
      iconElement = <ReactSVG src={UserFlat} />;
      break;
      case "UserLine":
      iconElement = <ReactSVG src={UserLine} />;
      break;

    default:
      break;
  }

  return <div className={className}>{iconElement}</div>;
};

Icon.Add = () => <Icon icon="add" size="large" />;
Icon.AddPicture = () => <Icon icon="addPicture" size="large" />;
Icon.ArrowBottom = () => <Icon icon="arrowBottom" size="large" />;
Icon.ArrowLeft = () => <Icon icon="arrowLeft" size="large" />;
Icon.ArrowRight = () => <Icon icon="ArrowRight" size="large" />;
Icon.ArrowTop = () => <Icon icon="ArrowTop" size="large" />;
Icon.ArrowTriangle = () => <Icon icon="ArrowTriangle" size="large" />;
Icon.DateFlat = () => <Icon icon="DateFlat" size="large" />;
Icon.DateLine = () => <Icon icon="DateLine" size="large" />;
Icon.Information = () => <Icon icon="Information" size="large" />;
Icon.Search = () => <Icon icon="Search" size="large" />;
Icon.Upload = () => <Icon icon="Upload" size="large" />;
Icon.UserFlat = () => <Icon icon="UserFlat" size="large" />;
Icon.UserLine = () => <Icon icon="UserLine" size="large" />;


// Ajoutez d'autres sous-composants pour les autres icônes

export default Icon;
