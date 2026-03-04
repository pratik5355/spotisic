const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    coverImageUrl: { type: String, required: true },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    releaseDate: { type: Date }
}, { timestamps: true });

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
