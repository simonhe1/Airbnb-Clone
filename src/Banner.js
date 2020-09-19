import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import SearchDates from "./SearchDates";

const Banner = () => {
  const [showSearchDates, setShowSearchDates] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearchDates && <SearchDates />}
        <Button
          variant="outlined"
          className="banner_search_button"
          onClick={() => setShowSearchDates(!showSearchDates)}
        >
          {showSearchDates ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
