import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./Counter";
import DataFetching from "./DataFetching";

import "./App.css";

function App() {
  const [reduceCount, setReduceCount] = useState(0);

  return (
    <>
      <Counter />
      <DataFetching />
    </>
  );
}

export default App;
