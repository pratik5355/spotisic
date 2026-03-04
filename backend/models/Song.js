const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
    audioUrl: { type: String, required: true }, // S3/CloudFront URL (HLS playlist .m3u8)
    coverImageUrl: { type: String, required: true },
    duration: { type: Number, required: true }, // in seconds
    language: { type: String, required: true, index: true }, // For regional filtering
    genre: { type: String, index: true }, // e.g., 'Devotional', 'Bollywood'
    plays: { type: Number, default: 0 }
}, { timestamps: true });

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
