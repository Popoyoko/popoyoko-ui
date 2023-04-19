import "./Card.css";
import React from "react";

interface CardProps {
  mention?: string;
  label?: string;
  subTitle?: string;
  price?: number;
  background?: string;
  variant?: "simple" | "media";
}

export const Card = ({
  background,
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
        <div className="card-section">
          <div className="card-groud">
            {mention}
            <div className="card-information">
              <div className="card-title">
                {label}
                {subTitle}
              </div>
              {price}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

