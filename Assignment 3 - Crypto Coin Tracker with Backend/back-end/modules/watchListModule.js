// const WatchItem = require("../models/watchItem");
const { getWatchItemSymbols, createWatchItem } = require("./mongooseModule");
const getCryptoCoins = require("./cryptoCoinModule");

const addItem = async (symbol) => {
  try {
    if (!symbol) {
      console.log("Symbol is not valid");
    }

    // add symbol to watch list
    // const item = new WatchItem({
    //   symbol: symbol,
    //   dateCreated: Date.now(),
    // });

    // await item.save();
    createWatchItem(symbol);
  } catch (err) {
    console.log(`error adding item: ${err}`);
  }

  console.log(`item ${symbol} added to watch list`);
};

const getItems = async () => {
  try {
    console.log(`watch list items fetched...`);

    // move Watchlist front end logic for filtering coins to server side/backend
    const coins = await getCryptoCoins();

    // fetch all wathlist docs from MongoDB
    // convert this to async/await to allow the database to respond
    // const watchItems = await WatchItem.find({});

    // const watchListSymbols = watchItems.map((item) => {
    //   return item.symbol;
    // });

    const watchSymbols = await getWatchItemSymbols();

    const filteredCoinsData = coins.filter((coin) => {
      return watchSymbols.includes(coin.tickerSymbol);
    });

    return filteredCoinsData;
  } catch (err) {
    console.log(`error fetching items ${err}`);
  }
};

const removeItem = async (symbol) => {
  try {
    if (!symbol) {
      console.log("Symbol is not valid");
    }

    await WatchItem.deleteOne({ symbol: symbol });
    console.log(`item ${symbol} removed from watch list`);
  } catch (err) {
    console.log(`error removing item: ${err}`);
  }
};

module.exports = {
  addItem,
  removeItem,
  getItems,
};
