// src/index.js
const express = require('express');
const wishlistRoutes = require('./routes/wishlistRoutes');
require("dotenv").config();
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/wishlist', wishlistRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
