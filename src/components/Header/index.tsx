import "./index.css";
import React from "react";
import Logo from "../Logo";

import Avatar from "../Avatar";

const Header = () => {
  return (
    <div className="container-header">
      <Logo src=""></Logo>
      <Avatar.Small></Avatar.Small>
    </div>
  );
};

export default Header;
