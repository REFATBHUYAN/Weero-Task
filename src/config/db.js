// src/config/db.js
const { MongoClient } = require('mongodb');


const url = 'mongodb+srv://weroo:weroo123@cluster0.dp83dff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
const dbName = 'ecommerce';

let db;

const connectDB = async () => {
    if (db) return db;
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db(dbName);
    return db;
};

module.exports = connectDB;

