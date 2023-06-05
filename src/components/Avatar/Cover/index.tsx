import "./index.css";
import React from "react";
import edit from "../../../assets/edit.svg";

interface CoverProps {
  showedit?: boolean;
  background?: string;
}

const Cover = ({ showedit, background }: CoverProps) => {

  return (
    <div className="cover" style={{ background }}>
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
