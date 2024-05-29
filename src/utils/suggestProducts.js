// src/utils/suggestProducts.js
const connectDB = require('../config/db');

const suggestProducts = async (wishlistProducts) => {
    const db = await connectDB();
    const allProducts = await db.collection('products').find().toArray();

    const suggestedProducts = allProducts.filter(product => !wishlistProducts.includes(product._id))
                                          .slice(0, 10);

    return suggestedProducts;
};

module.exports = suggestProducts;
