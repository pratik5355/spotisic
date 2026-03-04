const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// @route   GET /api/songs
// @desc    Get all songs
router.get('/', async (req, res) => {
    try {
        const songs = await Song.find({});
        res.json(songs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   POST /api/songs
// @desc    Add a new song (Admin)
router.post('/', async (req, res) => {
    try {
        const { title, artist, album, audioUrl, imageUrl, duration } = req.body;

        const song = new Song({
            title,
            artist,
            album,
            audioUrl,
            imageUrl,
            duration
        });

        const createdSong = await song.save();
        res.status(201).json(createdSong);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
