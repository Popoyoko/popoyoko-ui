import "./Section.css";
import React from "react";

import upload from "../../Icons/Upload/upload.svg";


interface SectionProps {
  title?: string;
  label?: string;
}

export const Section = ({
  title,
  label,
}: // ...props
SectionProps) => {
  return (
    <div className="container-section">
      <h2>{title}</h2>
      <div className="section-btn">
        <div className="section-svg">
          <img src={upload} alt="upload" />
        </div>
        <p>{label}</p>
      </div>
    </div>
  );
};

