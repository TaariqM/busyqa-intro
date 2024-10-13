import { useState, useEffect } from "react";
import axios from "axios";
import "../css/heartIcon.css";

const HeartIcon = (props) => {
  // this is a boolean variable which will determine if the heart icon becomes red, otherwise remains neutral
  const [isLiked, setIsLiked] = useState(false);

  /**
   * This function handles when the heart button gets clicked
   */
  const handleWatchList = () => {
    alert("Added to watchlist");
    // props.isWatchedCallback(!props.isWatched);
    setIsLiked(!isLiked);
  };

  // component did update
  useEffect(() => {
    updateWatchList();
    // console.log(`'isLiked value: ${isLiked}`);
  }, [isLiked]);

  const updateWatchList = async () => {
    console.log(`Updating Watch List`);

    if (isLiked) {
      try {
        await axios.post(
          `http://localhost:3000/watchlist?symbol=${props.tickerSymbol}`
        );
      } catch (error) {
        throw new Error(
          `There is an error updating the watch list. Here is the error: ${error}`
        );
      }
    }
  };

  return (
    <div>
      <button
        className="crypto-card-heart-icon"
        onClick={handleWatchList}
        // disabled={!props.isWatched}
      >
        <i
          className={`fa-regular fa-heart ${props.isWatched ? "red" : ""}`}
        ></i>
      </button>
    </div>
  );
};

export default HeartIcon;
