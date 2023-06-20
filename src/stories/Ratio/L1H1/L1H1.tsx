import "./L1H1.css";
import React from "react";

export const L1H1 = ({ children }) => {
  return <div className="ratio ratio-1-1">
{children}
  </div>;
};

L1H1.defaultProps = {
  children: null
};
