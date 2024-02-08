const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
// Database name
const dbName = 'scrapedData';
// Collection name
const collectionName = 'miataPrices';

// Middleware to parse JSON bodies
app.use(express.json());

// Define MongoDB client outside the endpoint handlers
const client = new MongoClient(uri);

// Retrieve all Miata prices
app.get('/miata-prices', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const prices = await collection.find().toArray();
    res.json(prices);
  } catch (error) {
    console.error('Error retrieving Miata prices:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Retrieve a specific Miata price by ID
app.get('/miata-prices/:id', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const price = await collection.findOne({ _id: new ObjectId(req.params.id) });
    if (!price) {
      res.status(404).json({ error: 'Price not found' });
    } else {
      res.json(price);
    }
  } catch (error) {
    console.error('Error retrieving Miata price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete all Miata prices
app.delete('/miata-prices', async (req, res) => {
    try {
      const client = new MongoClient(uri);
      await client.connect();
      const database = client.db(dbName);
      const collection = database.collection(collectionName);
      const result = await collection.deleteMany({});
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting all Miata prices:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await client.close();
    }
  });

// Delete a specific Miata price by ID
app.delete('/miata-prices/:id', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'Price not found' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    console.error('Error deleting Miata price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`RESTful API server listening at http://localhost:${port}`);
});
