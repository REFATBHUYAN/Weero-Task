// src/controllers/wishlistController.js
const connectDB = require('../config/db');
const suggestProducts = require('../utils/suggestProducts');

const getWishlistSuggestions = async (req, res) => {
    const { clientId } = req.params;

    try {
        const db = await connectDB();
        const wishlist = await db.collection('wishlists').findOne({ clientId });
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        const suggestedProducts = await suggestProducts(wishlist.products);
        res.json(suggestedProducts);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

module.exports = { getWishlistSuggestions };
