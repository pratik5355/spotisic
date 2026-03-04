const Artist = require('../models/Artist');
const Song = require('../models/Song');
const Album = require('../models/Album');

// @desc    Fetch all artists
// @route   GET /api/artists
// @access  Public
const getArtists = async (req, res, next) => {
    try {
        const artists = await Artist.find({}).sort({ monthlyListeners: -1 });
        res.json(artists);
    } catch (error) {
        next(error);
    }
};

// @desc    Fetch single artist with top songs and albums
// @route   GET /api/artists/:id
// @access  Public
const getArtistById = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.id);

        if (artist) {
            // Get top 5 songs by plays
            const topSongs = await Song.find({ artist: artist._id })
                .sort({ plays: -1 })
                .limit(5);

            const albums = await Album.find({ artist: artist._id });

            res.json({
                artist,
                topSongs,
                albums
            });
        } else {
            res.status(404);
            throw new Error('Artist not found');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { getArtists, getArtistById };
