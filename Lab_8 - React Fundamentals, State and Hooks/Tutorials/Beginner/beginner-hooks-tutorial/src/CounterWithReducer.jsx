import React from "react";
import ThemeButton from "./ThemeButton";

const CounterWithReducer = (props) => {
  return (
    <div>
      <ThemeButton
        btnName={"Decrement"}
        isTrue={"False"}
        countCallback={props.countCallback}
      />
    </div>
  );
};

export default CounterWithReducer;
