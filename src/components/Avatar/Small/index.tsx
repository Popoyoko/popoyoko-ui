import "./index.css";
import React from "react";

export interface SmallProps {
  showbadge?: boolean;
  background?: string;
}

export const Small = ({ showbadge = true, background=`url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)` }: SmallProps) => {
  const backgroundImageStyle = background
    ? { backgroundImage: `url(${background})` }
    : {
        backgroundImage: `url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)`,
      };

  return (
    <div className="small">
      <img
        className="small"
        src={background}
        style={backgroundImageStyle}
      ></img>
      {showbadge && <div className="badge"></div>}
    </div>
  );
};
