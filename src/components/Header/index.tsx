import React from "react";
import { Logo } from "../Logo";
import { InputSearch } from "../Inputs/Search";
import Avatar from "../Avatar";

interface HeaderProps {
  logoBackground?: string;
  avatarBackground?: string;
  onClick?: () => void;
}

export const Header = ({ logoBackground, avatarBackground, onClick }: HeaderProps) => {

  return (
    <div>
      <Logo background={logoBackground}/>
      <InputSearch placeholder=""/>
      <Avatar.Small background={avatarBackground} onClick={onClick}/>
    </div>
  );
};
