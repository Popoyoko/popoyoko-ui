import "./Information.css";
import React from "react";
import information from "../../assets/information.svg";

interface InformationProps {
  label?: string;
  background?: string;
}

export const Information = ({
  background,
  label,
  ...props
}: InformationProps) => {

  return (
<div className="container-information" >
    <h2>Information</h2>
    <div className="information-section" style={{ background }}>
        <div className="information-svg"><img src = {information} alt="Information"/></div>
        <div className="information-content">{label}</div>
    </div>
</div>
  );
};

