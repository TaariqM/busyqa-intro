const express = require("express");

// create an instance of express app
const app = new express();
const watchListModule = require("./modules/watchListModule");

const port = 3000;

// define routes

// fetch watchlist
app.get("/watchlist", (req, res) => {
  console.log("GET - watchlist called");

  const data = watchListModule.getItems();
  // complete request, with response
  res.send(data);
});

// add to watchlist
app.post("/watchlist", (req, res) => {
  console.log("POST - received on server");
  // get the symbol from request parameters
  const { symbol } = req.query;
  console.log(JSON.stringify(req.query));

  watchListModule.addItem(symbol);

  res.send(`${symbol} added to watchlist`);
});

// remove from watchlist
app.delete("/watchlist", (req, res) => {
  console.log("DELETE - received on server");
  const { symbol } = req.query;
  console.log(JSON.stringify(req.query));

  watchListModule.removeItem(symbol);
  res.send(`${symbol} removed from watchlist`);
  //   res.send("DELETE /watchlist called...");
});

// start express server on specific port
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

// // add to list
// watchListModule.addItem("BTC");
// watchListModule.addItem("ADA");
// watchListModule.addItem("ETH");

// // fetch the watch list
// console.log(watchListModule.getItems());

// // remove ETH symbol
// watchListModule.removeItem("ETH");

// // fetch the watch list
// console.log(watchListModule.getItems());
