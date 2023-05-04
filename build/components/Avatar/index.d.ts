/// <reference types="react" />
import "./index.css";
interface AvatarProps {
    small?: boolean;
    background?: string;
}
declare const Avatar: ({ small, background }: AvatarProps) => JSX.Element;
export default Avatar;
