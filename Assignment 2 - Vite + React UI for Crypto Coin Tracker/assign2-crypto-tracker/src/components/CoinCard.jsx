import React from "react";
import HeartIcon from "./HeartIcon";
import "../css/coinCard.css";

const CoinCard = (props) => {
  return (
    <div className="crypto-card">
      <div className="crypto-card-image">
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${props.id}.png`}
          alt={props.name}
          className="responsive-image"
        />
      </div>
      <div className="crypto-card-title">{props.name}</div>
      <div className="crypto-card-ticker-symbol">
        <span>Ticker Symbol: </span>
        {props.symbol}
      </div>
      <div className="crypto-card-current-price">
        <span>Current Price: </span>
        {`$${props.quote.USD.price.toFixed(2)}`}
      </div>
      <div className="crypto-card-market-cap">
        <span>Market Cap: </span>
        {`$${props.quote.USD.market_cap.toFixed(2)}`}
      </div>
      <div className="crypto-card-volume">
        <span>24th Volume: </span>
        {`$${props.quote.USD.volume_24h.toFixed(2)}`}
      </div>
      <div className="crypto-card-change">
        <span>24th Change: </span>
        {`${props.quote.USD.percent_change_24h.toFixed(2)}%`}
      </div>
      <HeartIcon />
    </div>
  );
};

export default CoinCard;
