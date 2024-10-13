import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HeartIcon from "./HeartIcon";
import "../css/coinCard.css";

const CoinCard = (props) => {
  // const [isWatchedVal, setIsWatchedVal] = useState();
  // const [cryptoSymbol, setCryptoSymbol] = useState();

  // const isWatchedCallback = (watchedVal) => {
  //   // setIsWatchedVal(watchedVal);
  // };

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
        {props.tickerSymbol}
      </div>
      <div className="crypto-card-current-price">
        <span>Current Price: </span>
        {`$${props.price}`}
      </div>
      <div className="crypto-card-market-cap">
        <span>Market Cap: </span>
        {`$${props.marketCap}`}
      </div>
      <div className="crypto-card-volume">
        <span>24th Volume: </span>
        {`$${props.volume_24}`}
      </div>
      <div className="crypto-card-change">
        <span>24th Change: </span>
        {`${props.change_24}%`}
      </div>
      <HeartIcon
        isWatched={props.isWatched}
        tickerSymbol={props.tickerSymbol}
        // isWatchedCallback={isWatchedCallback}
      />
    </div>
  );
};

export default CoinCard;
