import "./index.css";
import React from "react";
import { Logo } from "../Logo";
import { InputSearch } from "../Inputs/Search";
import Avatar from "../Avatar";

// interface HeaderProps {}

export const Header = () => {
  return (
    <div className="container-header">
      <Logo src=""></Logo>
      <InputSearch
        placeholder="Hypnose, massages, magnétiseur..."
      ></InputSearch>
      <Avatar.Small></Avatar.Small>
    </div>
  );
};
