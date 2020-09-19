import React from "react";
import "./Header.css";
import { ExpandMore, Language, Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="airbnb logo"
        />
      </Link>

      <div className="header_center">
        <input type="text" />
        <Search />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
