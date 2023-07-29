import React from "react";
import { Default } from "./Default";
import { Media } from "./Media";
interface CardProps {
    children?: React.ReactNode;
}
interface CardComponent extends React.FC<CardProps> {
    Default: typeof Default;
    Media: typeof Media;
}
declare const Card: CardComponent;
export default Card;
