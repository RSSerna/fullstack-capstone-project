// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    console.log('connectToDatabase');
    if (dbInstance){
        return dbInstance
    };
    console.log('Creating dbInstance');
    const client = new MongoClient(url);      
    console.log('Client Created');
    // Task 1: Connect to MongoDB
    await client.connect();
    console.log('Client Connected');
    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName);
    console.log('Client Assigned');
    // Task 3: Return database instance
    return dbInstance;;
}

module.exports = connectToDatabase;
