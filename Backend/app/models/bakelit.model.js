const mongoose = require('mongoose');

const BakelitSchema = mongoose.Schema({
    artist: String,
    title: String,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Bakelit', BakelitSchema);