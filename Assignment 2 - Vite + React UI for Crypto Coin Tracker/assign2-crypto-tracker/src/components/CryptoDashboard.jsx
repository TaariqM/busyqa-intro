import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";
import "../css/cryptoDashboard.css";

const cryptoCoins = [
  {
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032",
    title: "Bitcoin",
    tickerSymbol: "BTC",
    price: "$59,488.82",
    marketCap: "$1,174,375,896,134",
    volume: "$13,551,561,529",
    change: "1.16%",
  },
  {
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032",
    title: "Ethereum",
    tickerSymbol: "ETH",
    price: "$2,609.36",
    marketCap: "$313,866,034,960",
    volume: "$6,753,663,877",
    change: "2.15%",
  },
  {
    image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=032",
    title: "Tether",
    tickerSymbol: "USDT",
    price: "$1.00",
    marketCap: "$116,859,483,151",
    volume: "$27,726,710,049",
    change: "23.78%",
  },
  {
    image: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=032",
    title: "BNB",
    tickerSymbol: "BNB",
    price: "$540.82",
    marketCap: "$78,913,855,990",
    volume: "$1,541,986,220",
    change: "1.95%",
  },
  {
    image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032",
    title: "Solana",
    tickerSymbol: "SOL",
    price: "$141.48",
    marketCap: "$65,946,047,559",
    volume: "$1,228,481,862",
    change: "1.87%",
  },
  {
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=032",
    title: "USDC",
    tickerSymbol: "USDC",
    price: "$0.9999",
    marketCap: "$34,834,565,172",
    volume: "$2,370,638,578",
    change: "6.84%",
  },
  {
    image: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032",
    title: "XRP",
    tickerSymbol: "XRP",
    price: "$0.566",
    marketCap: "$31,762,039,652",
    volume: "$485,165,112",
    change: "1.53%",
  },
  {
    image: "https://cryptologos.cc/logos/toncoin-ton-logo.png?v=032",
    title: "Toncoin",
    tickerSymbol: "TON",
    price: "$6.44",
    marketCap: "$16,221,070,265",
    volume: "$188,235,308",
    change: "1.17%",
  },
  {
    image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=032",
    title: "Dogecoin",
    tickerSymbol: "DOGE",
    price: "$0.1028",
    marketCap: "$14,966,652,988",
    volume: "$307,063,457",
    change: "2.05%",
  },
  {
    image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=032",
    title: "Cardano",
    tickerSymbol: "ADA",
    price: "$0.3358",
    marketCap: "$12,074,876,222",
    volume: "$160,751,859",
    change: "1.33%",
  },
  {
    image: "https://cryptologos.cc/logos/tron-trx-logo.png?v=032",
    title: "TRON",
    tickerSymbol: "TRX",
    price: "$0.135",
    marketCap: "$11,735,595,316",
    volume: "$310,795,446",
    change: "2.63%",
  },
  {
    image: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=032",
    title: "Shiba Inu",
    tickerSymbol: "SHIB",
    price: "$0.00001338",
    marketCap: "$7,884,620,798",
    volume: "$93,290,811",
    change: "1.18%",
  },
];

const CryptoDashboard = (props) => {
  const [coinData, setCoinData] = useState(cryptoCoins);

  //function that will filter the coins with the specific search text that was inputted in the search bar
  const filter = (searchText) => {
    const filterCoins = coinData.filter((coin) => {
      coin.title.includes(searchText);
    });
    setCoinData(filterCoins);
  };

  useEffect(() => {
    filter(props.coin);
  }, []);

  // const [coinIndex, setCoinIndex] = useState(0); // getter and setter for the index of a specific crypto coin in the cryptoCoins array

  // function that returns true if the coin parameter is equal to the title
  // of a crypto coin within the cryptoCoins array, o/w returns false
  // const isInputACoin = (coin) => {
  //   // return cryptoCoins.map((cryptoCoin, index) => {
  //   //   setCoinIndex(index);
  //   //   return coin == cryptoCoin.title;
  //   // });
  //   for (let index in cryptoCoins) {
  //     if (coin == cryptoCoins[index].title) {
  //       setCoinIndex(index);
  //       return True;
  //     }
  //   }

  //   return false;
  // };

  return (
    <div className="crypto-container">
      {/* {isInputACoin(props.coin) ? (
        <CoinCard specificCoin={cryptoCoins[coinIndex]} />
      ) : (
        cryptoCoins.map((currentCoin) => {
          return <CoinCard key={currentCoin.title} {...currentCoin} />;
        })
      )} */}
      {coinData.map((currentCoin) => {
        return <CoinCard key={currentCoin.title} {...currentCoin} />;
      })}
    </div>
  );
};

export default CryptoDashboard;
