import React, { useState, useEffect } from "react";
import { coinMarketCapApiKey, coinMarketCapApiUrl } from "../common/constants";
import CoinCard from "./CoinCard";
import axios from "axios";
import "../css/cryptoDashboard.css";

// This array holds prop data for several crypto coins
// This array is no longer used. The crypto coin data is received from an API
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

/**
 * Array that holds the values that the crypto coins can be sorted by.
 * This array is created to make sorting of the crypto coins easier,
 * as the options in the drop down menu are not exactly the same as whats in the array of objects.
 * For example, 'Current Price' in the drop down menu is not equal to 'price'
 */
const dropDownOptions = ["price", "market", "volume", "change"];

const CryptoDashboard = (props) => {
  // this 'coinData' state variable will hold the unfiltered and unsorted crypto coins
  // this was created so that when a user is filtering the coins based on text multiple times, it would apply the filter on all of the coins,
  // and not just on the coins that were filtered previously
  // For example, when the component is mounted, and the coins are fetched from the API, the 'coinData' array will be [bitcoin, ethereum, dogecoin, bnb],
  // and the 'coinMarketCapData' array will also be [bitcoin, ethereum, dogecoin, bnb]
  // If the text inputted is 'coin', 'coinMarketCapData' becomes [bitcoin, dogecoin]
  // If the user inputs 'Ethereum' into the input box, it wouldn't be able to check the 'coinMarketCapData' array since its been filtered out previously by 'coin'
  // This is where the 'coinData' array comes in. It will apply the filter to 'coinData', which holds all the coins. These coins that are filtered get placed into the 'coinMarketCapData'
  // Please refer to the 'filter()' function to how this is implemented
  const [coinData, setCoinData] = useState([]);
  const [coinMarketCapData, setCoinMarketCapData] = useState([]); // stores the sorted and/or filtered crypto coins
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Function that will filter the coins with the specific search text that was inputted in the search bar
   *
   * @param {string} searchText
   * @returns the coinData array that is filtered if there is text in the search box, otherwise returns nothing
   */
  const filter = (searchText) => {
    if (!searchText) {
      return;
    }

    const filterCoins = coinData.filter((coin) => {
      return coin.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setCoinMarketCapData(filterCoins);
  };

  /**
   * Function that will sort the coins in descending order, depending on what dropdown menu option is selected
   *
   * @param {string} selectedOption
   * @returns the coinMarketCapData array that is sorted if there is a dropdown menu option selected, otherwise returns nothing
   */
  const sortCoins = (selectedOption) => {
    if (!selectedOption) {
      return;
    }

    const sortedCoins = [...coinMarketCapData]; // make a copy of the coins that may or may not be filtered by the search input text
    let menuOption = ""; // this variable will store what menu option will be used to sort the coinData array

    // for loop that checks if any of the string items in the 'dropDownOptions' array, is within the 'selectedOption' string
    // this will tell me what string in the 'dropDownOptions' array I should use, to sort the crypto coins
    for (let dropDownOption of dropDownOptions) {
      if (selectedOption.toLowerCase().includes(dropDownOption)) {
        menuOption = dropDownOption;
        break;
      }
    }

    // Based on what the dropdown menu option is, the crypto coins will be sorted in descending order using the sort function -> sort((a,b) => (b - a))
    if (menuOption === "price") {
      sortedCoins.sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });
    } else if (menuOption === "market") {
      sortedCoins.sort((a, b) => {
        return Number(b.marketCap) - Number(a.marketCap);
      });
    } else if (menuOption === "volume") {
      sortedCoins.sort((a, b) => {
        return Number(b.volume_24) - Number(a.volume_24);
      });
    } else if (menuOption === "change") {
      sortedCoins.sort((a, b) => {
        return Number(b.change_24) - Number(a.change_24);
      });
    } else {
      return;
    }

    setCoinMarketCapData(sortedCoins);
  };

  // API call. component did mount
  useEffect(() => {
    fetchServerCoinData();
  }, []);

  // fetching cryptocoin data from the server
  const fetchServerCoinData = async () => {
    console.log("fetching server data");

    try {
      const response = await axios.get("http://localhost:3000/cryptocoins");
      if (response) {
        setCoinMarketCapData(response.data);
        setCoinData(response.data);
      } else {
        throw new Error("There was an error loading data");
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // component did update
  useEffect(() => {
    filter(props.coin);
  }, [props.coin]);

  // component did update
  useEffect(() => {
    sortCoins(props.dropSelect);
  }, [props.dropSelect]);

  if (isLoading) {
    return <p style={{ textAlign: "center", color: "white" }}>Loading....</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center" }}>{error.message}</p>;
  }

  return (
    <div className="crypto-container">
      {coinMarketCapData.map((currentCoin) => {
        return <CoinCard key={currentCoin.name} {...currentCoin} />;
      })}
    </div>
  );
};

export default CryptoDashboard;
