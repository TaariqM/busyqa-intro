const { coinMarketCapApiKey, coinMarketCapApiUrl } = require("./configModule");
const axios = require("axios");

const getCryptoCoins = async () => {
  console.log("fetching data from coinmarketcao");

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
      //   setCoinMarketCapData(response.data.data);
      //   setCoinData(response.data.data);
      const rawData = await response.data.data;
      console.log(`coin market data: ${JSON.stringify(rawData)}`);

      return rawData;
    } else {
      throw new Error("There was an error loading data");
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = getCryptoCoins;
