import React, { useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Navigation from "../components/Navigation";
import CryptoDashboard from "../components/CryptoDashboard";
import Footer from "../components/Footer";
import "../css/dashboard.css";

const Dashboard = () => {
  const [searchBoxVal, setSearchBoxVal] = useState(""); // stores the value of text that is typed in the search box, which is then passed down to child components
  const [dropDownVal, setDropDownVal] = useState("");

  // function that handles the text that is entered into the search box
  // it is passed down as a callback function, to the child components
  const handleSearch = (searchText) => {
    setSearchBoxVal(searchText);
  };

  const handleDropDown = (dropDownSelect) => {
    setDropDownVal(dropDownSelect);
    console.log(`Dropdown value in Dashboard component: ${dropDownVal}`);
  };

  return (
    <div className="dashboard-container">
      <header>
        <Navigation />
        <h1 className="website-title">Crypto Coin Tracker</h1>
      </header>
      <main>
        <SearchPanel
          searchCallback={handleSearch}
          dropDownCallback={handleDropDown}
        />
        <CryptoDashboard coin={searchBoxVal} dropSelect={dropDownVal} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;
