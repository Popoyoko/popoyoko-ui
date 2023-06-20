import "./index.css";
import React from "react";
import Ratio from "../../Ratio";

interface MediaProps {}

const Media = ({}: MediaProps) => {
  return (
    <div className="card">
      <Ratio.L2H3></Ratio.L2H3>
    </div>
  );
};

export default Media;
