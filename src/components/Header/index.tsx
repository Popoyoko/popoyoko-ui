import "./index.css";
import React from "react";
import { Logo } from "../Logo";
import { InputSearch } from "../Inputs/Search";
import Avatar from "../Avatar";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className="container-header">
      <Logo src=""></Logo>
      <InputSearch
        placeholder="Hypnose, massages, magnétiseur..."
        srcIcon=""
      ></InputSearch>
      <Avatar.Small></Avatar.Small>
    </div>
  );
};
