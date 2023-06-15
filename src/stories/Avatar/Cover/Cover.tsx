import "./Cover.css";
import React from "react";
import { Button } from "../../../components";
import edit from "../../../assets/edit.svg";

interface CoverProps {
  showedit?: boolean;
  background?: string;
}

export const Cover = ({ showedit, background }: CoverProps) => {
  return (
    <div className="cover" style={{ background }}>
      {showedit && (
        <div className="edit">
          <div className="edit">
            <Button.Tertiary typeSvg="right" label="Edit" srcIcon={edit} />
          </div>
        </div>
      )}
    </div>
  );
};
