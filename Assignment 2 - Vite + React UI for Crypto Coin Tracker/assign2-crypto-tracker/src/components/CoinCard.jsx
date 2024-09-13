import React from "react";
import "../css/coinCard.css";

const CoinCard = (props) => {
  return (
    <div className="crypto-card">
      <div className="crypto-card-image">
        <img src={props.image} alt={props.title} className="responsive-image" />
      </div>
      <div className="crypto-card-title">{props.title}</div>
      <div className="crypto-card-ticker-symbol">
        <span>Ticker Symbol: </span>
        {props.tickerSymbol}
      </div>
      <div className="crypto-card-current-price">
        <span>Current Price: </span>
        {props.price}
      </div>
      <div className="crypto-card-market-cap">
        <span>Market Cap: </span>
        {props.marketCap}
      </div>
      <div className="crypto-card-volume">
        <span>24th Volume: </span>
        {props.volume}
      </div>
      <div className="crypto-card-change">
        <span>24th Change: </span>
        {props.change}
      </div>

      <button className="crypto-card-heart-icon">
        <i className="fa-regular fa-heart"></i>
      </button>
    </div>
  );
};

export default CoinCard;
