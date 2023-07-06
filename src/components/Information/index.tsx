import "./index.css";
import React from "react";
import { Icon } from "../Icon";

interface InformationProps {
  label?: string;
}

export const Information = ({
  label,
}: InformationProps) => {

  return (
<div className="container-information">
    <h2>Information</h2>
    <div className="information-section" >
        <div className="information-svg"><Icon.Information size="small"/></div>
        <div className="information-content">{label}</div>
    </div>
</div>
  );
};
