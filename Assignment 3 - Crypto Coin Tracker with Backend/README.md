# Crypto Coin Tracker

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [API](#api)
  - [Database](#database)
  - [Deployment](#deployment)
- [Next Steps](#next-steps)
- [How to run this project](#how-to-run-this-project)

## Introduction

Crypto Coin Tracker is a project that tracks the data of certain crypto coins. This project is part 3 of an assignment, where part 1 only included the HTML and CSS of the project, part 2 was the react implementation of the assignment, and now part 3 is the backend development and implementation.

## Features

- Users can view individual crypto coin cards that contain data on crypto coins. Data such as: Ticker symbol, current price, market cap, 24th volume, and 24th change
- Users can search the name of crypto coins.
- Users can sort coins using the dropdown menu.
- Users can add a crypto coin to their watch list by clicking the heart icon on a crypto coin card

## API Endpoints

This web application utitilizes both the CoinMarketCap API and a separate designed RESTful API. This CoinMarketCap API allows this web application to retrieve the latest crypto coin data at this base URL: `https://pro-api.coinmarketcap.com`. For further information, please refer to their [documentation](https://coinmarketcap.com/api/documentation/v1/#section/Introduction).

The specific API endpoint that was used from CoinMarketCap is:

| HTTP Request Method | Enpoint(s)                         | Action                                                                    | Optional Parameters                                                                                                                                                                                                                                                                |
| ------------------- | ---------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET                 | /v1/cryptocurrency/listings/latest | Returns a list of all active cryptocurrencies with the latest market data | `start` - integer value that sets what cryptocurrency the list should start at. `limit`- integer values that specifies the number of results that should be returned. `convert` - string value that converts the market value of the cryptocurrencies to a specific fiat currency. |

For the separately designed RESTful API, the follow endpoints were designed and implemented to allow users to fetch, add, and remove cryptocoins from their watchlist.

| HTTP Request Method | Endpoints        | Action                                                                                                           | Optional Parameters |
| ------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------- |
| GET                 | /api/watchlist   | Returns all cryptocoins in watch list                                                                            | N/A                 |
| POST                | /api/watchlist   | Adds a cryptocoin to the watch list                                                                              | N/A                 |
| DELETE              | /api/watchlist   | Removes a cryptocoin from the watch list                                                                         | N/A                 |
| GET                 | /api/cryptocoins | Fetches all cryptocoins from the CoinMarketCap API. This endpoint interacts with the endpoint in the table above | N/A                 |

## Technologies Used

### Frontend

- React
- Vite
- JavaScript
- HTML
- CSS
- Icons - [Font Awesome](https://fontawesome.com/docs/web/use-with/react/)

### Backend

- JavaScript
- Node.js
- Express.js

### API

- Postman

### Database

- MongoDB
  - MongoDB Compass for local development
  - MongoDB Atlas for production
- Mongoose

### Deployment

- [Render](https://render.com/)

## Next Steps

The next steps to this project is to implement user registration and user login. This would create a subscription/membership functionality to the web application

## How to run this project

To run this project, please clone this repository onto your laptop/PC. Open up two terminals, either through your code editor, or having two command prompts open. Navigate to this project in both terminals.

To start the backend server, go to your first terminal and type:

- `cd back-end`
- `npm install`
- `node app.js` (you can also type `nodemon app.js`)

To start the frontend server, go to your second terminal and type:

- `cd front-end-ui`
- `npm install`
- `npm run dev`
