import "./Cover.css";
import React from "react";
import Button from "../../../components/Button";
import Ratio from "../../../components/Ratio"
import edit from "../../../assets/edit.svg";

interface CoverProps {
  showedit?: boolean;
  background?: string;
}

export const Cover = ({ showedit, background }: CoverProps) => {
  const backgroundImageStyle = background
    ? { backgroundImage: `url(${background})` }
    : {
        backgroundImage: `url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)`,
      };

  return (
    <div className="cover">
      <img className="cover" src={background} style={backgroundImageStyle}></img>
      {showedit && (
        <div className="edit">
          <Button.Tertiary typeSvg="right" label="Edit" srcIcon={edit} />
        </div>
      )}
    </div>
  );
};