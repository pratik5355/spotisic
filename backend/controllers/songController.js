const Song = require('../models/Song');

// @desc    Fetch all songs (supports filtering)
// @route   GET /api/songs
// @access  Public
const getSongs = async (req, res, next) => {
    try {
        const { language, genre, artist } = req.query;

        let query = {};
        if (language) query.language = language;
        if (genre) query.genre = genre;
        if (artist) query.artist = artist;

        const songs = await Song.find(query).populate('artist', 'name avatarUrl').populate('album', 'title coverImageUrl');
        res.json(songs);
    } catch (error) {
        next(error);
    }
};

// @desc    Fetch single song
// @route   GET /api/songs/:id
// @access  Public
const getSongById = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.id)
            .populate('artist', 'name avatarUrl')
            .populate('album', 'title coverImageUrl');

        if (song) {
            res.json(song);
        } else {
            res.status(404);
            throw new Error('Song not found');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Increment play count
// @route   POST /api/songs/:id/play
// @access  Public (should track user if authenticated in full prod)
const incrementPlay = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.id);

        if (song) {
            song.plays += 1;
            await song.save();
            res.json({ message: 'Play incremented' });
        } else {
            res.status(404);
            throw new Error('Song not found');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { getSongs, getSongById, incrementPlay };
