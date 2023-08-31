import React from "react";
import ReactSVG from "react-svg";
import styled from "styled-components";

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

const IconContainer = styled.div`
  width: 100%;
  height: 100%;

  &.icon-small {
    width: 8px;
    height: 8px;
  }

  &.icon-medium {
    width: 16px;
    height: 16px;
  }

  &.icon-large {
    width: 32px;
    height: 32px;
  }
`;

interface IconProps {
  size: "small" | "medium" | "large";
  icon: string;
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

export const Icon = ({ size = "medium", icon }: IconProps) => {
  const className = `icon-${size} icon`;

  const IconElement = iconMap[icon];

  return (
    <IconContainer className={className}>
      <ReactSVG src={IconElement} />
    </IconContainer>
  );
};

Icon.Add = (props) => <Icon icon="Add" {...props} />;
Icon.AddPicture = (props) => <Icon icon="AddPicture" {...props} />;
Icon.ArrowBottom = (props) => <Icon icon="ArrowBottom" {...props} />;
Icon.ArrowLeft = (props) => <Icon icon="ArrowLeft" {...props} />;
Icon.ArrowRight = (props) => <Icon icon="ArrowRight" {...props} />;
Icon.ArrowTop = (props) => <Icon icon="ArrowTop" {...props} />;
Icon.ArrowTriangle = (props) => <Icon icon="ArrowTriangle" {...props} />;
Icon.DateFlat = (props) => <Icon icon="DateFlat" {...props} />;
Icon.DateLine = (props) => <Icon icon="DateLine" {...props} />;
Icon.Information = (props) => <Icon icon="Information" {...props} />;
Icon.Search = (props) => <Icon icon="Search" {...props} />;
Icon.Upload = (props) => <Icon icon="Upload" {...props} />;
Icon.UserFlat = (props) => <Icon icon="UserFlat" {...props} />;
Icon.UserLine = (props) => <Icon icon="UserLine" {...props} />;
