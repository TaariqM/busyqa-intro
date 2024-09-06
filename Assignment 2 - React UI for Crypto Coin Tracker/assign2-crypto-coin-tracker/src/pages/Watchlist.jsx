import Navigation from "../components/Navigation";
import SearchPanel from "../components/SearchPanel";
import Footer from "../components/Footer";
import "../css/watchlist.css";

const Watchlist = () => {
  return (
    <div className="watchlist-container">
      <header>
        <Navigation />
        <h1 className="watchlist-title">Crypto Coin Watchlist</h1>
      </header>
      <main>
        <SearchPanel />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Watchlist;
