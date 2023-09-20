import React from "react";
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
display: flex;
align-items: center;
justify-content: center;

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

const IconImage = styled.img`
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
  size?: "small" | "medium" | "large";
  icon?: string;
}

const iconMap: Record<string, string> = {
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

  const iconSrc = iconMap[icon];

  return (
    <IconContainer className={className}>
      <IconImage src={iconSrc} alt={icon} />
    </IconContainer>
  );
};

Icon.Add = (props: IconProps) => <Icon icon="Add" {...props} />;
Icon.AddPicture = (props: IconProps) => <Icon icon="AddPicture" {...props} />;
Icon.ArrowBottom = (props: IconProps) => <Icon icon="ArrowBottom" {...props} />;
Icon.ArrowLeft = (props: IconProps) => <Icon icon="ArrowLeft" {...props} />;
Icon.ArrowRight = (props: IconProps) => <Icon icon="ArrowRight" {...props} />;
Icon.ArrowTop = (props: IconProps) => <Icon icon="ArrowTop" {...props} />;
Icon.ArrowTriangle = (props: IconProps) => <Icon icon="ArrowTriangle" {...props} />;
Icon.DateFlat = (props: IconProps) => <Icon icon="DateFlat" {...props} />;
Icon.DateLine = (props: IconProps) => <Icon icon="DateLine" {...props} />;
Icon.Information = (props: IconProps) => <Icon icon="Information" {...props} />;
Icon.Search = (props: IconProps) => <Icon icon="Search" {...props} />;
Icon.Upload = (props: IconProps) => <Icon icon="Upload" {...props} />;
Icon.UserFlat = (props: IconProps) => <Icon icon="UserFlat" {...props} />;
Icon.UserLine = (props: IconProps) => <Icon icon="UserLine" {...props} />;