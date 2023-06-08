import "./index.css";
import React from "react";

interface SmallProps {
  showbadge?: boolean;
  background?: string;
}

const Small = ({ showbadge, background }: SmallProps) => {
  const backgroundImageStyle = background ? { backgroundImage: `url(${background})` } : {backgroundImage: `url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)`};

  return (
    <div className="small" style={backgroundImageStyle}>
      {showbadge && <div className="badge"></div>}
    </div>
  );
};

export default Small;
