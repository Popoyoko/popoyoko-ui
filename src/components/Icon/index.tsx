import React from "react";
import ReactSVG  from "react-svg";
import "./index.css";

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

type IconType = "Add" | "AddPicture" | "ArrowBottom" | "ArrowLeft" | "ArrowRight" | "ArrowTop" | "ArrowTriangle" | "DateFlat" | "DateLine" | "Information" | "Search" | "Upload" | "UserFlat" | "UserLine";

interface IconProps {
  size?: "small" | "medium" | "large";
  icon: IconType;
}

const iconMap = {
  Add,
  AddPicture,
  ArrowBottom,
  ArrowLeft,
  ArrowRight,
  ArrowTop,
  ArrowTriangle,
  DateFlat,
  DateLine,
  Information,
  Search,
  Upload,
  UserFlat,
  UserLine,
};

const Icon = ({ size = "medium", icon }: IconProps) => {
  const className = `icon-${size} icon`;

  const IconElement = iconMap[icon];

  return (
    <div className={className}>
      <ReactSVG src={IconElement} />
    </div>
  );
};

// Définir les propriétés pour chaque icône
Icon.Add = (props: Omit<IconProps, "icon">) => <Icon icon="Add" {...props} />;
Icon.AddPicture = (props: Omit<IconProps, "icon">) => <Icon icon="AddPicture" {...props} />;
Icon.ArrowBottom = (props: Omit<IconProps, "icon">) => <Icon icon="ArrowBottom" {...props} />;
Icon.ArrowLeft = (props: Omit<IconProps, "icon">) => <Icon icon="ArrowLeft" {...props} />;
Icon.ArrowRight = (props: Omit<IconProps, "icon">) => <Icon icon="ArrowRight" {...props} />;
Icon.ArrowTop = (props: Omit<IconProps, "icon">) => <Icon icon="ArrowTop" {...props} />;
Icon.ArrowTriangle = (props: Omit<IconProps, "icon">) => <Icon icon="ArrowTriangle" {...props} />;
Icon.DateFlat = (props: Omit<IconProps, "icon">) => <Icon icon="DateFlat" {...props} />;
Icon.DateLine = (props: Omit<IconProps, "icon">) => <Icon icon="DateLine" {...props} />;
Icon.Information = (props: Omit<IconProps, "icon">) => <Icon icon="Information" {...props} />;
Icon.Search = (props: Omit<IconProps, "icon">) => <Icon icon="Search" {...props} />;
Icon.Upload = (props: Omit<IconProps, "icon">) => <Icon icon="Upload" {...props} />;
Icon.UserFlat = (props: Omit<IconProps, "icon">) => <Icon icon="UserFlat" {...props} />;
Icon.UserLine = (props: Omit<IconProps, "icon">) => <Icon icon="UserLine" {...props} />;

export {Icon};
