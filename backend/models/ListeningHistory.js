const mongoose = require('mongoose');

const listeningHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    song: { type: mongoose.Schema.Types.ObjectId, ref: 'Song', required: true },
    playedAt: { type: Date, default: Date.now },
    durationListened: { type: Number } // For tracking drop-offs or partial plays
});

const ListeningHistory = mongoose.model('ListeningHistory', listeningHistorySchema);
module.exports = ListeningHistory;
