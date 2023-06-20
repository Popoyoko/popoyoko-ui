import "./index.css";
import React from "react";

const L2H3 = ({ children }) => {
  return <div className="ratio ratio-2-3">
{children}
  </div>;
};

L2H3.defaultProps = {
  children: null
};

export default L2H3;
