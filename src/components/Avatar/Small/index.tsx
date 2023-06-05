import "./index.css";
import React from "react";

interface SmallProps {
  showbadge?: boolean;
  background?: string;
}

const Small = ({ showbadge, background }: SmallProps) => {

  return (
    <div className="small" style={{ background }}>
      {showbadge && <div className="badge"></div>}
    </div>
  );
};

export default Small;
