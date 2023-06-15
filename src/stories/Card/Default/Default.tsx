import "./Default.css";
import React from "react";
import L2H3 from "../../../components/Ratio/L2H3";

interface DefaultProps {
  label?: string;
  mention?: string;
  subTitle?: string;
  price?: number;
}

export const Default = ({ label, mention, subTitle, price, ...props }: DefaultProps) => {
  return (
    <div>
      <div className="card">
        <L2H3></L2H3>
      </div>
      <div className="card-section">
        <div className="card-group">
          <p>{mention}</p>
          <div className="card-information">
            <div className="card-title">
              <p>{label}</p>
              <p>{subTitle}</p>
            </div>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

