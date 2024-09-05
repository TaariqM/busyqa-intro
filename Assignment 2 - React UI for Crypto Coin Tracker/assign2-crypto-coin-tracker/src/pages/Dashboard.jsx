import React from "react";
import SearchPanel from "../components/SearchPanel";
import Navigation from "../components/Navigation";
import CryptoDashboard from "../components/CryptoDashboard";
import "../css/dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <header>
        <Navigation />
        <h1 className="website-title">Crypto Coin Tracker</h1>
      </header>
      <main>
        <SearchPanel />
        <CryptoDashboard />
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
