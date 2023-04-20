import "./index.css";
import React from "react";
import information from "../../assets/information.svg";

interface InformationProps {
  label?: string;
  background?: string;
}

const Information = ({
  background,
  label,
  ...props
}: InformationProps) => {

  return (
<div className="container-information" style={{ background }}>
    <h2>Information</h2>
    <div className="information-section" >
        <div className="information-svg"><img src = {information} alt="Information"/></div>
        <div className="information-content">{label}</div>
    </div>
</div>
  );
};

export default Information;
