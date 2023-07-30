import React from "react";
import { Small } from "../../../src/components/Avatar/Small";
import { Cover } from "./Cover";
interface AvatarProps {
    children?: React.ReactNode;
}
interface AvatarComponent extends React.FC<AvatarProps> {
    Small: typeof Small;
    Cover: typeof Cover;
}
declare const Avatar: AvatarComponent;
export default Avatar;
