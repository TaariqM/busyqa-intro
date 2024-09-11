import React, { useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Navigation from "../components/Navigation";
import CryptoDashboard from "../components/CryptoDashboard";
import Footer from "../components/Footer";
import "../css/dashboard.css";

const Dashboard = () => {
  const [searchBoxVal, setSearchBoxVal] = useState("");

  // function that handles the text that is entered into the search box
  // it is passed down as a callback function, to the child components
  const handleSearch = (searchText) => {
    alert(`parent received ${searchText} from child component`);
    console.log(searchText);
    setSearchBoxVal(searchText);
    console.log(`searchBoxVal = ${searchBoxVal}`);
  };

  return (
    <div className="dashboard-container">
      <header>
        <Navigation />
        <h1 className="website-title">Crypto Coin Tracker</h1>
      </header>
      <main>
        <SearchPanel searchCallback={handleSearch} />
        <CryptoDashboard coin={searchBoxVal} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;
