import { useState, useEffect } from "react";
import { coinMarketCapApiKey, coinMarketCapApiUrl } from "../common/constants";
import axios from "axios";
import CoinCard from "../components/CoinCard";
import Navigation from "../components/Navigation";
import SearchPanel from "../components/SearchPanel";
import Footer from "../components/Footer";
import "../css/watchlist.css";

const Watchlist = () => {
  const [watchItems, setWatchItems] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [coinMarketCapData, setCoinMarketCapData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // asynchronously fetch watch list on componentDidMount
  useEffect(() => {
    const fetchWatchList = async () => {
      console.log("watchItems fetched");

      try {
        const response = await axios.get("http://localhost:3000/watchlist");
        if (!response) {
          throw new Error("There was an error fetching watchlist");
        }
        console.log(`watchlist data: ${JSON.stringify(response.data)}`);
        setWatchItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWatchList();
  }, []);

  // using a second useEffecct, to only fire when watchItems changes
  useEffect(() => {
    const getCryptoData = async () => {
      let response = null;

      try {
        const response = await axios.get("http://localhost:3000/cryptocoins");
        if (response) {
          setCoinMarketCapData(response.data);
          // setCoinData(response.data);
        } else {
          throw new Error("There was an error loading data");
        }
        // response = await axios.get(coinMarketCapApiUrl, {
        //   headers: {
        //     "X-CMC_PRO_API_KEY": coinMarketCapApiKey,
        //   },
        //   params: {
        //     start: 1,
        //     limit: 12,
        //     convert: "USD",
        //   },
        // });

        // // debugger;
        // if (response) {
        //   setCoinMarketCapData(response.data.data);
        //   // setCoinData(response.data.data);
        // } else {
        //   throw new Error("There was an error loading data");
        // }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getCryptoData();
  }, [watchItems]); //only fire this useEffect, when the watchItems changes

  // using a third useEffect, to only fire when the watchItems and the coinMarketCapData changes
  // this way, the filterData useState variable will be set
  useEffect(() => {
    const filterCryptoData = () => {
      // need to filter on symbol only
      const watchListSymbols = watchItems.map((item) => {
        return item.symbol;
      });
      const filteredData = coinMarketCapData.filter((coin) => {
        return watchListSymbols.includes(coin.symbol);
      });
      setFilterData(filteredData);
    };

    filterCryptoData();
  }, [watchItems, coinMarketCapData]);

  if (isLoading) {
    return <p style={{ textAlign: "center", color: "white" }}>Loading....</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center" }}>{error.message}</p>;
  }

  return (
    <div className="watchlist-container">
      <header>
        <Navigation />
        <h1 className="watchlist-title">Crypto Coin Watchlist</h1>
      </header>
      <main>
        <SearchPanel />
        <div className="crypto-container">
          {filterData.map((currentCoin) => {
            return <CoinCard key={currentCoin.name} {...currentCoin} />;
          })}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Watchlist;
