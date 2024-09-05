import React from "react";
import "../css/navigation.css";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <a href="/">Crypto Dashboard</a>
          </li>
          <li>
            <a href="/watchlist">Watchlist</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
