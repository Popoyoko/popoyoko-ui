import React from "react";
import { Small, SmallProps } from "./Small";
import { Cover, CoverProps } from "./Cover";

interface AvatarProps {
  children?: React.ReactNode;
}

interface AvatarComponent extends React.FC<AvatarProps> {
  Small: React.FC<SmallProps>;
  Cover: React.FC<CoverProps>;
}

const Avatar: AvatarComponent = ({ children }) => {
  return <div>{children}</div>;
};

Avatar.Small = Small;
Avatar.Cover = Cover;

export default Avatar;
