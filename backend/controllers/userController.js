const User = require('../models/User');
const Song = require('../models/Song');

// @desc    Get user's liked songs
// @route   GET /api/users/liked-songs
// @access  Private
const getLikedSongs = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).populate({
            path: 'likedSongs',
            populate: { path: 'artist', select: 'name avatarUrl' }
        });

        res.json(user.likedSongs);
    } catch (error) {
        next(error);
    }
};

// @desc    Toggle like status of a song
// @route   POST /api/users/like/:songId
// @access  Private
const toggleLikeSong = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        const songId = req.params.songId;

        const isLiked = user.likedSongs.includes(songId);

        if (isLiked) {
            user.likedSongs = user.likedSongs.filter(
                (id) => id.toString() !== songId
            );
        } else {
            user.likedSongs.push(songId);
        }

        await user.save();
        res.json(user.likedSongs);
    } catch (error) {
        next(error);
    }
};

module.exports = { getLikedSongs, toggleLikeSong };
