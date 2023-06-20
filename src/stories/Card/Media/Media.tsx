import "./Media.css";
import React from "react";
import Ratio from "../../../components/Ratio";

interface MediaProps {}

export const Media = ({}: MediaProps) => {
  return (
    <div className="card">
      <Ratio.L2H3></Ratio.L2H3>
    </div>
  );
};

