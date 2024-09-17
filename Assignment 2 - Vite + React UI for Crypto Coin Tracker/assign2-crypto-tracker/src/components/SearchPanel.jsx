import React, { useState } from "react";
import "../css/searchPanel.css";

const SearchPanel = (props) => {
  const [searchText, setSearchText] = useState("");
  const [dropDownSelect, setDropDownSelect] = useState("");

  //this function will handle when the search button is clicked
  const handleClick = () => {
    if (!searchText && !dropDownSelect) {
      return;
    }

    if (dropDownSelect) {
      console.log(`Dropdown value in SearchPanel Component: ${dropDownSelect}`);
      props.dropDownCallback(dropDownSelect);
    }

    props.searchCallback(searchText);
  };

  // this function checks the state of which option is selected in the drop down menu
  const handleSelectChange = (e) => {
    alert("select changed");
    setDropDownSelect(e.target.value);
  };

  //this function will check if the enter key is pressed
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      // if the keyboard key that is pressed is the 'Enter' key (the key code for enter is '13')
      props.searchCallback(searchText);
    }
  };

  //this function tracks the state of the text inputted in the search bar
  const handleOnChange = (e) => {
    setSearchText(e.target.value); //update search text state
  };

  return (
    <div className="searchBar-dropdown-container">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Cryptocurrency"
          className="searchBar-input"
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          value={searchText}
        />
      </div>

      <div className="dropdown-menu">
        <select onChange={handleSelectChange}>
          <option defaultValue={"- Select - "}>- Select -</option>
          <option>Current Price</option>
          <option>Market Cap</option>
          <option>24th Volume</option>
          <option>24th Change</option>
        </select>
      </div>

      <button className="btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchPanel;
