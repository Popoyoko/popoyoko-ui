import "./index.css";
import React from "react";

export const L2H3 = ({ children }) => {
  return <div className="ratio ratio-2-3">{children}</div>;
};

L2H3.defaultProps = {
  children: null,
};

