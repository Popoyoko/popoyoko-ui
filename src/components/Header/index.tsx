import React from "react";
import { Logo } from "../Logo";
import { InputSearch } from "../Inputs/Search";
import Avatar from "../Avatar";
import { loadTokens } from "../../../tokens-config/loadTokens";

interface HeaderProps {
  brand: string;
  logoBackground?: string;
  avatarBackground?: string;
  onClick?: () => void;
}

export const Header = ({ brand, logoBackground, avatarBackground, onClick }: HeaderProps) => {
  const tokens = loadTokens({ brand });

  return (
    <div>
      <Logo background={logoBackground}/>
      <InputSearch placeholder=""/>
      <Avatar.Small background={avatarBackground} onClick={onClick}/>
    </div>
  );
};
