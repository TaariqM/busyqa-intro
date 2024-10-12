import { useState } from "react";
import "../css/heartIcon.css";

const HeartIcon = (props) => {
  // this is a boolean variable which will determine if the heart icon becomes red, otherwise remains neutral
  const [isLiked, setIsLiked] = useState(false);

  /**
   * This function handles when the heart button gets clicked
   */
  const handleWatchList = () => {
    alert("Added to watchlist");
    // setIsLiked(!isLiked);
  };

  return (
    <div>
      <button
        className="crypto-card-heart-icon"
        onClick={handleWatchList}
        disabled={!props.isWatched}
      >
        <i
          className={`fa-regular fa-heart ${props.isWatched ? "red" : ""}`}
        ></i>
      </button>
    </div>
  );
};

export default HeartIcon;
