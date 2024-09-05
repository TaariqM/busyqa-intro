import React from "react";
import "../css/coinCard.css";

const CoinCard = () => {
  return (
    <div className="crypto-card">
      <div className="crypto-card-image">
        <img src="" alt="" className="responsive-image" />
      </div>
      <div className="crypto-card-title"></div>
      <div className="crypto-card-ticker-symbol">
        <span>Ticker Symbol: </span>
        {/*Insert value here */}
      </div>
      <div className="crypto-card-current-price">
        <span>Current Price: </span>
        {/*Insert value here */}
      </div>
      <div className="crypto-card-market-cap">
        <span>Market Cap: </span>
        {/*Insert value here */}
      </div>
      <div className="crypto-card-volume">
        <span>24th Volume: </span>
        {/*Insert value here */}
      </div>
      <div className="crypto-card-change">
        <span>24th Change: </span>
        {/*Insert value here */}
      </div>

      <button className="crypto-card-heart-icon">
        <i class="fa-regular fa-heart"></i>
      </button>
    </div>
  );
};

export default CoinCard;
