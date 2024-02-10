# Miata Web Scraper API

The Miata Web Scraper API is a RESTful API designed to interact with the MongoDB database storing pricing information for Mazda Miata listings scraped from the Facebook Marketplace. This API provides endpoints for retrieving, deleting, and managing Miata prices.

## Installation

1. Clone the repository to your local machine:
`git clone https://github.com/your-username/miata-web-scraper-api.git`


2. Navigate to the project directory:
cd `miata-web-scraper-api`

3. Install dependencies:
Run `npm install`


4. Update the MongoDB connection URI, database name, and collection name in the `server.js` file as needed.

## Usage

1. Start the server:
Run `npm start`

4. Update the MongoDB connection URI, database name, and collection name in the `server.js` file as needed.

## Usage

1. Start the server:
Run `npm start`


The server will start listening on `port 3000` by default.

2. Access the API endpoints using a REST client or tools like `cURL` or `Postman`.

## Endpoints

- **GET /miata-prices**: Retrieve all Miata prices.
- **GET /miata-prices/:id**: Retrieve specific Miata prices by ID.
- **DELETE /miata-prices**: Delete all Miata prices.
- **DELETE /miata-prices/:id**: Delete specific Miata prices by ID.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for storing the scraped data.
- [MongoDB Node.js Driver](https://github.com/mongodb/node-mongodb-native): The official MongoDB driver for Node.js.
