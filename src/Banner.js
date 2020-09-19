import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import SearchDates from "./SearchDates";
import { useHistory } from "react-router-dom";

const Banner = ({ startDate, endDate, handleUpdate }) => {
  const [showSearchDates, setShowSearchDates] = useState(false);
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearchDates && (
          <SearchDates
            startDate={startDate}
            endDate={endDate}
            handleUpdate={handleUpdate}
          />
        )}
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
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
