import React from "react";
import "../css/searchPanel.css";

const SearchPanel = () => {
  return (
    <div className="searchBar-dropdown-container">
      <div className="searchBar">
        <input
          placeholder="Search Cryptocurrency"
          className="searchBar-input"
        />
      </div>

      <div className="dropdown-menu">
        <select>
          <option selected>- Select -</option>
          <option>Current Price</option>
          <option>Market Cap</option>
          <option>24th Volume</option>
          <option>24th Change</option>
        </select>
      </div>

      <button className="btn">Search</button>
    </div>
  );
};

export default SearchPanel;
