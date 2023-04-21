import "./index.css";
import React from "react";

interface CardProps {
  mention?: string;
  label?: string;
  subTitle?: string;
  price?: number;
  background?: string;
  backgroundColor?: string;
  variant?: "simple" | "media";
}

const Card = ({
  background,
  backgroundColor,
  label,
  mention,
  subTitle,
  price, 
  ...props
}: CardProps) => {
  const variant = label ? "media" : "simple";
  const cardClass = variant === "simple" ? "card" : "card media";
  return (
    <div className="card">
      <div className={cardClass} style={{ background }} {...props}></div>
      {label && (
        <div className="card-section" style={{ backgroundColor }}>
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
