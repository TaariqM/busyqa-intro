import Navigation from "../components/Navigation";
import SearchPanel from "../components/SearchPanel";
import "../css/watchlist.css";

const Watchlist = () => {
  return (
    <div>
      <header>
        <Navigation />
        <h1 className="watchlist-title">Crypto Coin Watchlist</h1>
      </header>
      <main>
        <SearchPanel />
      </main>
      <footer></footer>
    </div>
  );
};

export default Watchlist;
