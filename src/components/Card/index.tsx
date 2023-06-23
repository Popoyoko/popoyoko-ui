import React from "react";
import {Default} from "./Default";
import {Media} from "./Media";

interface CardProps {
  children?: React.ReactNode;
}

interface CardComponent extends React.FC<CardProps> {
  Default: typeof Default;
  Media: typeof Media;
}

const Card: CardComponent = ({ children }) => {
  return <div>{children}</div>;
};

Card.Default = Default;
Card.Media = Media;

export default Card;
