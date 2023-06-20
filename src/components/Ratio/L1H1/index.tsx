import "./index.css";
import React from "react";

const L1H1 = ({ children }) => {
  return <div className="ratio ratio-1-1">
{children}
  </div>;
};

L1H1.defaultProps = {
  children: null
};

export default L1H1;
