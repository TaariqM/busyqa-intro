import { useState, useEffect } from "react";
import Feed from "./components/Feed";
import "./css/frontPage.css";
// import "./App.css";

function App() {
  useEffect(() => {
    console.log("Feed component is mounted");
  }, []);

  return (
    <div className="app">
      <Feed />
    </div>
  );
}

export default App;
