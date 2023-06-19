import "./index.css";
import React from "react";
import Logo from "../Logo";

import Avatar from "../Avatar";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="container-header">
      <Logo src=""></Logo>
      <Avatar.Small></Avatar.Small>
    </div>
  );
};

export default Header;
