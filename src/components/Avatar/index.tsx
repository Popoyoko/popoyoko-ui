import "./index.css";
import React from "react";
import edit from "../../assets/edit.svg";

interface AvatarProps {
  small?: boolean;
  badge?: boolean;
  background?: string;
}

const Avatar = ({ small, badge, background }: AvatarProps) => {
  let className = "avatar";
  if (small) className += " avatar-small";

  return (
    <div className={className} style={{ background }}>
      {small ? (
        badge &&<div className="badge"></div>
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

export default Avatar;
