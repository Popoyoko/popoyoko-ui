import "./index.css";
import React from "react";
import Rectangle from "../../Ratio/Rectangle";

interface MediaProps {}

const Media = ({}: MediaProps) => {
  return (
    <div className="card">
      <Rectangle></Rectangle>
    </div>
  );
};

export default Media;
