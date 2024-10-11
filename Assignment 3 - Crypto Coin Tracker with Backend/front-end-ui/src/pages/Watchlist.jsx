import { useState, useEffect } from "react";
import axios from "axios";
import CoinCard from "../components/CoinCard";
import Navigation from "../components/Navigation";
import SearchPanel from "../components/SearchPanel";
import Footer from "../components/Footer";
import "../css/watchlist.css";

const Watchlist = () => {
  const [watchItems, setWatchItems] = useState([]);
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
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWatchList();
  }, []);

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
          {watchItems.map((currentCoin) => {
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
