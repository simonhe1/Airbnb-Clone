import React, { useState } from "react";
import "./SearchDates.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const SearchDates = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search_dates">
      <DateRangePicker
        ranges={[
          {
            startDate: startDate,
            endDate: endDate,
            key: "selection",
          },
        ]}
        onChange={handleSelect}
      />
      <h2>
        Number of guests <People />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button>Search Airbnb</Button>
    </div>
  );
};

export default SearchDates;
