import "./Information.css";
import React from "react";
import information from "../../assets/information.svg";

interface InformationProps {
  label?: string;
}

export const Information = ({
  label,
}: InformationProps) => {

  return (
<div className="container-information" >
    <h2>Information</h2>
    <div className="information-section">
        <div className="information-svg"><img src = {information} alt="Information"/></div>
        <div className="information-content">{label}</div>
    </div>
</div>
  );
};

