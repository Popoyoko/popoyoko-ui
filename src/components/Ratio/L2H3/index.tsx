import "./index.css";
import React, { ReactNode } from "react";

interface L2H3Props {
  children?: ReactNode;
}

const L2H3 = ({ children }: L2H3Props) => {
  return <div className="ratio ratio-2-3">
{children && (
        <div>{children}</div>
      )}
  </div>;
};

export default L2H3;
