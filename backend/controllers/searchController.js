const Song = require('../models/Song');
const Artist = require('../models/Artist');
const Album = require('../models/Album');

// @desc    Search songs, artists, and albums
// @route   GET /api/search
// @access  Public
const searchAll = async (req, res, next) => {
    try {
        const query = req.query.q;

        if (!query) {
            return res.status(400).json({ message: 'Search query is required' });
        }

        // Use regex for case-insensitive search
        const regex = new RegExp(query, 'i');

        // Search Songs
        const songs = await Song.find({ title: regex })
            .populate('artist', 'name avatarUrl')
            .populate('album', 'title coverImageUrl')
            .limit(10);

        // Search Artists
        const artists = await Artist.find({ name: regex })
            .limit(5);

        // Search Albums
        const albums = await Album.find({ title: regex })
            .populate('artist', 'name avatarUrl')
            .limit(5);

        res.json({
            songs,
            artists,
            albums
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { searchAll };
