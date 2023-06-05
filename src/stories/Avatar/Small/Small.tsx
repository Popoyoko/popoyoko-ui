import "./Small.css";
import React from "react";

interface SmallProps {
  showbadge?: boolean;
  background?: string;
}

export const Small = ({ showbadge, background }: SmallProps) => {

  return (
    <div className="small" style={{ background }}>
      {showbadge && <div className="badge"></div>}
    </div>
  );
};

