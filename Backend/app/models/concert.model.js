const mongoose = require('mongoose');

const ConcertSchema = mongoose.Schema({
    artist: String,
    date: Date,
    venue: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Concert', ConcertSchema);