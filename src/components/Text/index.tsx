import "./index.css";
import React from "react";

interface TextProps {
  title: string;
  description: string;
}

const Text = ({ title, description}: TextProps) => {
  return (
    <div className="text-layout">
      <p className="text-title">{title}</p>
      <p className="text-description">{description}</p>
    </div>
  );
};

export default Text;
