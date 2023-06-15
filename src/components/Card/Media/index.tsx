import "./index.css";
import React from "react";
import Rectangle from "../../Ratio/L2H3";

interface MediaProps {}

const Media = ({}: MediaProps) => {
  return (
    <div className="card">
      <Rectangle></Rectangle>
    </div>
  );
};

export default Media;
