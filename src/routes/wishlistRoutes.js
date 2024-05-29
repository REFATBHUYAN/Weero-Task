// src/routes/wishlistRoutes.js
const express = require('express');
const { getWishlistSuggestions } = require('../controllers/wishlistController');

const router = express.Router();

router.get('/:clientId/suggestions', getWishlistSuggestions);

module.exports = router;
