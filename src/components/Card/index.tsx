import "./index.css";
import React from "react";

interface CardProps {
  label?: string;
  background?: string;
  variant?: "simple" | "media";
}

const Card = ({
  background,
  label,
  ...props
}: CardProps) => {
  const variant = label ? "media" : "simple";
  const cardClass = variant === "simple" ? "card" : "card media";
  return (
    <div className="card">
      <div className={cardClass} style={{ background }} {...props}></div>
      {label && <div className="card-label">{label}</div>}
    </div>
  );
};

export default Card;
