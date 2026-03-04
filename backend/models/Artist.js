const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    avatarUrl: { type: String, required: true },
    language: { type: String }, // Primary region/language e.g., 'Hindi', 'Punjabi'
    monthlyListeners: { type: Number, default: 0 }
}, { timestamps: true });

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
