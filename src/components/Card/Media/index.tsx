import "./index.css";
import React from "react";
import RatioRectangle from "../../Ratio/Rectangle";

interface MediaProps {}

const Media = ({}: MediaProps) => {
  return (
    <div className="card">
      <RatioRectangle></RatioRectangle>
    </div>
  );
};

export default Media;
