// temporary cache, until we add the database
let watchListData = [];

const addItem = (symbol) => {
  if (!symbol) {
    console.log("Symbol is not valid");
  }

  watchListData.push(symbol);
  console.log(`item ${symbol} added to watch list`);
};

const removeItem = (symbol) => {
  if (!symbol) {
    console.log("Symbol is not valid");
  }

  // filter out the symbol to remove
  const filteredList = watchListData.filter((item) => item !== symbol);

  // set the watchlist to filered list
  watchListData = filteredList;
  console.log(`item ${symbol} removed from watch list`);
};

const getItems = () => {
  console.log(`watch list items fetched...`);
  return watchListData;
};

module.exports = {
  addItem,
  removeItem,
  getItems,
};
