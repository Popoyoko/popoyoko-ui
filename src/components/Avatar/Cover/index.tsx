import "./index.css";
import React from "react";
import edit from "../../../assets/edit.svg";

interface CoverProps {
  showedit?: boolean;
  background?: string;
}

const Cover = ({ showedit, background }: CoverProps) => {
  const backgroundImageStyle = background ? { backgroundImage: `url(${background})` } : {backgroundImage: `url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)`};

  return (
    <div className="cover" style={backgroundImageStyle}>
        {showedit && (
        <div className="edit">
            <button className="btn-edit">
              <p>Edit</p>
              <img src={edit} alt="edit" />
            </button>
        </div>
        )}
    </div>
  );
};

export default Cover;
