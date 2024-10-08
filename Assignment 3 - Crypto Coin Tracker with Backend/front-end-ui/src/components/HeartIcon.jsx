import { useState } from "react";
import "../css/heartIcon.css";

const HeartIcon = () => {
  // this is a boolean variable which will determine if the heart icon becomes red, otherwise remains neutral
  const [isLiked, setIsLiked] = useState(false);

  /**
   * This function handles when the heart button gets clicked
   */
  const handleButtonClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <button className="crypto-card-heart-icon" onClick={handleButtonClick}>
        <i className={`fa-regular fa-heart ${isLiked ? "red" : ""}`}></i>
      </button>
    </div>
  );
};

export default HeartIcon;
