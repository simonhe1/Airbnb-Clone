import React, { useState } from "react";
import "./Header.css";
import { ExpandMore, Language, Search } from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const [inputVal, setInputVal] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push("/search");
  };

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
        <form className="header_center_search" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <Button onClick={() => history.push("/search")}>
            <Search />
          </Button>
        </form>
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
