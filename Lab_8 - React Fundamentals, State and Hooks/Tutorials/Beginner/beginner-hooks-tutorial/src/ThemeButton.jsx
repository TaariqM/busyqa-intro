import React from "react";
import "./css/btnTheme.css";

const ThemeButton = (props) => {
  return (
    <div>
      <button
        className={`${
          props.isTrue === "True" ? "btn-increment" : "btn-decrement"
        }`}
        onClick={props.countCallback}
      >
        {props.btnName}
      </button>
    </div>
  );
};

export default ThemeButton;
