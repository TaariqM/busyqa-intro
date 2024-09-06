import React from "react";
import SearchPanel from "../components/SearchPanel";
import Navigation from "../components/Navigation";
import CryptoDashboard from "../components/CryptoDashboard";
import Footer from "../components/Footer";
import "../css/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <Navigation />
        <h1 className="website-title">Crypto Coin Tracker</h1>
      </header>
      <main>
        <SearchPanel />
        <CryptoDashboard />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;
