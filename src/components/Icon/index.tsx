import "./index.css";
import React from "react";
import incon from "../../assets/incon.svg";

interface IconProps {
    size?: "small" | "medium" | "large";
}

const Icon = ({
  size
}: IconProps) => {
  return (
    <div className="icon">
        <img src = {incon} alt="Icon"/>
    </div>
  );
};

export default Icon;
