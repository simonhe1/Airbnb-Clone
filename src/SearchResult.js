import { FavoriteBorder, Star } from "@material-ui/icons";
import React from "react";
import "./SearchResult.css";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="search_result">
      <img src={img} alt="result" />
      <FavoriteBorder className="search_result_icon" />
      <div className="search_result_info">
        <div className="search_result_info_top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>description</p>
        </div>

        <div className="search_result_info_bottom">
          <div className="search_result_stars">
            <Star className="search_result_stars_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>

          <div className="search_result_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
