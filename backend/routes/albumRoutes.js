const express = require('express');
const router = express.Router();
const Album = require('../models/Album');

// @route   GET /api/albums
// @desc    Get all albums
router.get('/', async (req, res) => {
    try {
        const albums = await Album.find({});
        res.json(albums);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
