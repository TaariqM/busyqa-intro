const WatchItem = require("../models/watchItem");

const addItem = async (symbol) => {
  try {
    if (!symbol) {
      console.log("Symbol is not valid");
    }

    // add symbol to watch list
    const item = new WatchItem({
      symbol: symbol,
      dateCreated: Date.now(),
    });

    await item.save();
  } catch (err) {
    console.log(`error adding item: ${err}`);
  }

  console.log(`item ${symbol} added to watch list`);
};

const getItems = async () => {
  try {
    console.log(`watch list items fetched...`);

    // convert this to async/await to allow the database to respond
    const items = await WatchItem.find({});
    return items;
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
