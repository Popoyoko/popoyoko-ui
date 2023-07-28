import "./index.css";
import React from "react";
import Ratio from "../../Ratio";

export interface DefaultProps {
  label?: string;
  mention?: string;
  subTitle?: string;
  price?: number;
}

export const Default = ({
  label = "",
  mention = "",
  subTitle = "",
  price = 0,
}: DefaultProps) => {
  return (
    <div>
      <div className="card">
        <Ratio.L2H3></Ratio.L2H3>
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

