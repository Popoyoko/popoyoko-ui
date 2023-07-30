import React from "react";
import {Default, DefaultProps} from "./Default";
import {Media} from "./Media";

interface CardProps {
  children?: React.ReactNode;
}

interface CardComponent extends React.FC<CardProps> {
  Default: React.FC<DefaultProps>;
  Media: typeof Media;
}

const Card: CardComponent = ({ children }) => {
  return <div>{children}</div>;
};

Card.Default = Default;
Card.Media = Media;

export default Card;
