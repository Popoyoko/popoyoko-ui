import "./index.css";
import React from "react";
import Rectangle from "../../Ratio/L2H3";

interface DefaultProps {
  label?: string;
  mention?: string;
  subTitle?: string;
  price?: number;
}

const Default = ({ label, mention, subTitle, price, ...props }: DefaultProps) => {
  return (
    <div>
      <div className="card">
        <Rectangle></Rectangle>
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

export default Default;
