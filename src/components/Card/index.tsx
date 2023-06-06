import "./index.css";
import React from "react";
import RatioRectangle from "../Ratio/RatioRectangle";

interface CardProps {
  label?: string;
  mention?: string;
  subTitle?: string;
  price?: number;
  variant?: "simple" | "media";
}

const Card = ({
  label,
  mention,
  subTitle,
  price, 
  ...props
}: CardProps) => {
  return (
    <div>
      <div className="card"><RatioRectangle></RatioRectangle></div>
      {label && (
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
      )}
    </div>
  );
};

export default Card;
