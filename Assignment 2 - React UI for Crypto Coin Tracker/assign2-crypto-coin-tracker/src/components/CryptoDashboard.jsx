import React from "react";
import { useState, useEffect } from "react";
import CoinCard from "./CoinCard";
import "../css/cryptoDashboard.css";
import axios from "axios";

const CryptoDashboard = () => {
  const [coinCardInfo, setCoinCardInfo] = useState();

  return (
    <div className="crypto-container">
      <CoinCard />
    </div>
  );
};

export default CryptoDashboard;
