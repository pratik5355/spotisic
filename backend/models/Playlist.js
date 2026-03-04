const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    coverImageUrl: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Null if it's a global curated playlist (e.g. Diwali)
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    isPublic: { type: Boolean, default: true }
}, { timestamps: true });

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
