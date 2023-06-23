import React from "react";
import {Small} from "./Small";
import {Cover} from "./Cover";

interface AvatarProps {
    children?: React.ReactNode;
}

interface AvatarComponent extends React.FC<AvatarProps> {
  Small: typeof Small;
  Cover: typeof Cover;
}

const Avatar: AvatarComponent = ({ children }) => {
  return <div>{children}</div>;
};

Avatar.Small = Small;
Avatar.Cover = Cover;

export default Avatar;
