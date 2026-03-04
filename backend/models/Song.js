const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String, // Keeping it simple for now, can be an ObjectId ref later
        required: true
    },
    audioUrl: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    duration: {
        type: String, // e.g., "3:45"
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);
