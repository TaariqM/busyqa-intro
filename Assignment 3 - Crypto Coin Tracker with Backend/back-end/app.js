const express = require("express");
const { connectToDb } = require("./database/connectionManager");

// create an instance of express app
const app = new express();
const watchListModule = require("./modules/watchListModule");

const port = 3000;

//------------------------------------------ Setup Middleware ------------------------------------------ //
app.use(express.json()); // middleware to parse JSON requests

//------------------------------------------ Define Routes ------------------------------------------ //
// fetch watchlist
app.get("/watchlist", async (req, res) => {
  console.log("GET - watchlist called");

  const data = await watchListModule.getItems();
  // complete request, with response
  res.send(data);
});

// add to watchlist
app.post("/watchlist", async (req, res) => {
  console.log("POST - received on server");
  // get the symbol from request parameters
  const { symbol } = req.query;
  console.log(JSON.stringify(req.query));

  await watchListModule.addItem(symbol);

  res.send();
});

// remove from watchlist
app.delete("/watchlist", async (req, res) => {
  console.log("DELETE - received on server");
  const { symbol } = req.query;

  await watchListModule.removeItem(symbol);

  res.send();
});

// ------------------------------------------ Connect to MongoDB and Start Express Server ------------------------------------------ //
connectToDb().then(() => {
  console.log("MongoDB connection completed");

  // Start Express Server on Specific Port
  app.listen(port, () => {
    console.log(`Express Server started on ${port}`);
  });
});
