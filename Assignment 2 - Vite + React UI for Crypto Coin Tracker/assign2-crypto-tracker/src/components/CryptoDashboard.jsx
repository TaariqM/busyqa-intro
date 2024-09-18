import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";
import "../css/cryptoDashboard.css";

const cryptoCoins = [
  {
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032",
    title: "Bitcoin",
    tickerSymbol: "BTC",
    price: "$59,488.82",
    market: "$1,174,375,896,134",
    volume: "$13,551,561,529",
    change: "1.16%",
  },
  {
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032",
    title: "Ethereum",
    tickerSymbol: "ETH",
    price: "$2,609.36",
    market: "$313,866,034,960",
    volume: "$6,753,663,877",
    change: "2.15%",
  },
  {
    image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=032",
    title: "Tether",
    tickerSymbol: "USDT",
    price: "$1.00",
    market: "$116,859,483,151",
    volume: "$27,726,710,049",
    change: "23.78%",
  },
  {
    image: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=032",
    title: "BNB",
    tickerSymbol: "BNB",
    price: "$540.82",
    market: "$78,913,855,990",
    volume: "$1,541,986,220",
    change: "1.95%",
  },
  {
    image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032",
    title: "Solana",
    tickerSymbol: "SOL",
    price: "$141.48",
    market: "$65,946,047,559",
    volume: "$1,228,481,862",
    change: "1.87%",
  },
  {
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=032",
    title: "USDC",
    tickerSymbol: "USDC",
    price: "$0.9999",
    market: "$34,834,565,172",
    volume: "$2,370,638,578",
    change: "6.84%",
  },
  {
    image: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032",
    title: "XRP",
    tickerSymbol: "XRP",
    price: "$0.566",
    market: "$31,762,039,652",
    volume: "$485,165,112",
    change: "1.53%",
  },
  {
    image: "https://cryptologos.cc/logos/toncoin-ton-logo.png?v=032",
    title: "Toncoin",
    tickerSymbol: "TON",
    price: "$6.44",
    market: "$16,221,070,265",
    volume: "$188,235,308",
    change: "1.17%",
  },
  {
    image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=032",
    title: "Dogecoin",
    tickerSymbol: "DOGE",
    price: "$0.1028",
    market: "$14,966,652,988",
    volume: "$307,063,457",
    change: "2.05%",
  },
  {
    image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=032",
    title: "Cardano",
    tickerSymbol: "ADA",
    price: "$0.3358",
    market: "$12,074,876,222",
    volume: "$160,751,859",
    change: "1.33%",
  },
  {
    image: "https://cryptologos.cc/logos/tron-trx-logo.png?v=032",
    title: "TRON",
    tickerSymbol: "TRX",
    price: "$0.135",
    market: "$11,735,595,316",
    volume: "$310,795,446",
    change: "2.63%",
  },
  {
    image: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=032",
    title: "Shiba Inu",
    tickerSymbol: "SHIB",
    price: "$0.00001338",
    market: "$7,884,620,798",
    volume: "$93,290,811",
    change: "1.18%",
  },
];

// array that holds the values that the crypto coins can be sorted by
// this array is created to make sorting of the crypto coins easier, as the options in the drop down menu are not exactly the same as whats in the array of objects
// for example, 'Current Price' in the drop down menu is not equal to 'price'
const dropDownOptions = ["price", "market", "volume", "change"];

const CryptoDashboard = (props) => {
  const [coinData, setCoinData] = useState(cryptoCoins);

  //function that will filter the coins with the specific search text that was inputted in the search bar
  const filter = (searchText) => {
    if (!searchText) {
      return;
    }

    const filterCoins = cryptoCoins.filter((coin) => {
      return coin.title.toLowerCase().includes(searchText.toLowerCase());
    });

    setCoinData(filterCoins);
  };

  // function that will sort the coins in descending order, depending on what drop down menu option is selected
  const sortCoins = (selectedOption) => {
    if (!selectedOption) {
      return;
    }

    const sortedCoins = [...coinData]; // make a copy of the coins that may or may not be filtered by the search input text
    let menuOption = ""; // this variable will store what menu option will be used to sort the coinData array

    for (let dropDownOption of dropDownOptions) {
      if (selectedOption.toLowerCase().includes(dropDownOption)) {
        menuOption = dropDownOption;
        break;
      }
    }

    if (menuOption === "price") {
      sortedCoins.sort((a, b) => {
        return (
          Number(b.price.replace("$", "").replaceAll(",", "")) -
          Number(a.price.replace("$", "").replaceAll(",", ""))
        );
      });
    } else if (menuOption === "market") {
      sortedCoins.sort((a, b) => {
        return (
          Number(b.market.replace("$", "").replaceAll(",", "")) -
          Number(a.market.replace("$", "").replaceAll(",", ""))
        );
      });
    } else if (menuOption === "volume") {
      sortedCoins.sort((a, b) => {
        return (
          Number(b.volume.replace("$", "").replaceAll(",", "")) -
          Number(a.volume.replace("$", "").replaceAll(",", ""))
        );
      });
    } else if (menuOption === "change") {
      sortedCoins.sort((a, b) => {
        return (
          Number(b.change.replace("%", "")) - Number(a.change.replace("%", ""))
        );
      });
    } else {
      return;
    }

    setCoinData(sortedCoins);
  };

  // component did mount
  useEffect(() => {
    setCoinData(cryptoCoins);
  }, []);

  // component did update
  useEffect(() => {
    filter(props.coin);
  }, [props.coin]);

  // component did update
  useEffect(() => {
    sortCoins(props.dropSelect);
  }, [props.dropSelect]);

  return (
    <div className="crypto-container">
      {coinData.map((currentCoin) => {
        return <CoinCard key={currentCoin.title} {...currentCoin} />;
      })}
    </div>
  );
};

export default CryptoDashboard;
