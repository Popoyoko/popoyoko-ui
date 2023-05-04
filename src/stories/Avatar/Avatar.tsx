import "./Avatar.css";
import React from "react";
import edit from "../../assets/edit.svg";

interface AvatarProps {
  small?: boolean;
  background?: string;
}

export const Avatar = ({ small, background }: AvatarProps) => {
  let className = "avatar";
  if (small) className += " avatar-small";

  return (
    <div className={className} style={{ background }}>
      {small ? (
        <div className="badge"></div>
      ) : (
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

