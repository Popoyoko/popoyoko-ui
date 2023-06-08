import React from "react";
import Add from "./Add/add.svg";
import AddPicture from "./AddPicture/addPicture.svg";
import ArrowBottom from "./ArrowBottom/bottom.svg";
import ArrowLeft from "./ArrowLeft/left.svg";
import ArrowRight from "./ArrowRight/right.svg";
import ArrowTop from "./ArrowTop/top.svg";
import ArrowTriangle from "./ArrowTriangle/triangle.svg";
import DateFlat from "./DateFlat/dateFlat.svg";
import DateLine from "./DateLine/dateLine.svg";
import Information from "./Information/information.svg";
import Search from "./Search/search.svg";
import Upload from "./Upload/section.svg";
import UserFlat from "./UserFlat/userFlat.svg";
import UserLine from "./UserLine/userLine.svg";

interface IconsProps {
  size: "small" | "medium" | "large";
  children?: React.ReactNode;
}

interface IconsComponent extends React.FC<IconsProps> {
  Add: typeof Add;
  AddPicture: typeof AddPicture;
  ArrowBottom: typeof ArrowBottom;
  ArrowLeft: typeof ArrowLeft;
  ArrowRight: typeof ArrowRight;
  ArrowTop: typeof ArrowTop;
  ArrowTriangle: typeof ArrowTriangle;
  DateFlat: typeof DateFlat;
  DateLine: typeof DateLine;
  Information: typeof Information;
  Search: typeof Search;
  Upload: typeof Upload;
  UserFlat: typeof UserFlat;
  UserLine: typeof UserLine;
}

const Icons: IconsComponent = ({ size, children }) => {
    const className = `icon-${size}`;


  return <div className={className}>{children}</div>;
};

Icons.Add = Add;
Icons.AddPicture = AddPicture;
Icons.ArrowBottom = ArrowBottom;
Icons.ArrowLeft = ArrowLeft;
Icons.ArrowRight = ArrowRight;
Icons.ArrowTop = ArrowTop;
Icons.ArrowTriangle = ArrowTriangle;
Icons.DateFlat = DateFlat;
Icons.DateLine = DateLine;
Icons.Information = Information;
Icons.Search = Search;
Icons.Upload = Upload;
Icons.UserFlat = UserFlat;
Icons.UserLine = UserLine;

export default Icons;
