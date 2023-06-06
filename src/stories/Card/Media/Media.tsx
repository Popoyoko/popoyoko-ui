import "./Media.css";
import React from "react";
import Rectangle from "../../../components/Ratio/Rectangle";

interface MediaProps {}

export const Media = ({}: MediaProps) => {
  return (
    <div className="card">
      <Rectangle></Rectangle>
    </div>
  );
};

