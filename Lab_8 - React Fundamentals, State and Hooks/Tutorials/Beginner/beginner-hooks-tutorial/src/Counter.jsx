import React, { useState } from "react";
import CounterWithReducer from "./CounterWithReducer";
import ThemeButton from "./ThemeButton";

const Counter = () => {
  const [count, setCount] = useState(0); // this will store the value of the count

  // this function will act as a callback function to handle the decrement button
  const handleReducer = () => {
    setCount(count - 1);
  };

  // this function will act as a callback function to handle the increment button
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <ThemeButton
        btnName={"Increment"}
        isTrue={"True"}
        countCallback={handleIncrement}
      />
      <br />
      <CounterWithReducer countCallback={handleReducer} />
    </div>
  );
};

export default Counter;
