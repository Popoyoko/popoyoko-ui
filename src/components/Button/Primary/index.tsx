import "./index.css";
import "./index.scss";
import React from "react";

interface PrimaryProps {
  typeSvg: "none" | "left" | "right" | "only";
  label: string;
  srcIcon?: string;
  onClick?: () => void;
}

export const Primary = ({ label, typeSvg, srcIcon, onClick }: PrimaryProps) => {
  // let icon = null;
  if (typeSvg === "none") {
    return <button className="primary" onClick={onClick}>{label}</button>;
  } else if (typeSvg === "left") {
    return (
      <button className="primary" onClick={onClick}>
        <img src={srcIcon}></img>
        {label}
      </button>
    );
  } else if (typeSvg === "right") {
    return (
      <button className="primary" onClick={onClick}>
        {label}
        <img src={srcIcon}></img>
      </button>
    );
  } else if (typeSvg === "only") {
    return (
      <button className="primary" onClick={onClick}>
        <img src={srcIcon}></img>
      </button>
    );
  }
};
