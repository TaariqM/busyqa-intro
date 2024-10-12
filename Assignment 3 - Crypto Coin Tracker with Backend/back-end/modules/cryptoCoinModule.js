const { coinMarketCapApiKey, coinMarketCapApiUrl } = require("./configModule");
const getWatchItemSymbols = require("./mongooseModule");
const axios = require("axios");

const getCryptoCoins = async () => {
  console.log("fetching data from coinmarketcap");

  try {
    response = await axios.get(coinMarketCapApiUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": coinMarketCapApiKey,
      },
      params: {
        start: 1,
        limit: 30,
        convert: "USD",
      },
    });

    if (response) {
      const rawData = await response.data.data;
      console.log(`coin market data: ${JSON.stringify(rawData)}`);

      // return rawData;

      // create a data transfer object, containing only the data fields the UI needs
      const dtoData = rawData.map((coin) => {
        return {
          id: coin.id,
          name: coin.name,
          tickerSymbol: coin.symbol,
          price: coin.quote.USD.price.toFixed(2),
          marketCap: coin.quote.USD.market_cap.toFixed(2),
          volume_24: coin.quote.USD.volume_24h.toFixed(2),
          change_24: coin.quote.USD.percent_change_24h.toFixed(2),
        };
      });

      //
      const watchListSymbols = await getWatchItemSymbols();

      // iterate over the dto data and dynamically toggle isWateched
      const watchedDtoData = dtoData.map((coin) => ({
        // spread out the object properties
        ...coin,
        // dynamically set the isWatched field, if coin symbol is in the watch list
        isWatched: watchListSymbols.includes(coin.tickerSymbol),
      }));

      // return dtoData;
      return watchedDtoData;
    } else {
      throw new Error("There was an error loading data");
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = getCryptoCoins;
