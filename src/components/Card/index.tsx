import "./index.css";
import React from "react";

interface CardProps {
    label: string;
    background?: string;
    variant?: "simple" | "media";
}

const Card = ({
  variant = "simple",
  background,
  label,
  ...props
}: CardProps) => {
  const cardClass = variant === "simple" ? "card" : "card-media";
  return (
    <div 
    className={cardClass} 
    style={{ background }} 
    {...props}>
    {label}
    </div>
  );
};

export default Card;
