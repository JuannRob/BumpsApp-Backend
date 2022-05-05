const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BumpSchema = new Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    zone: {
        type: String,
        required: true,
    },
    relevance: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    entryDate: {
        type: Date,
        required: true,
    },
    repairDate: {
        type: Date,
    },
})

const Bump = mongoose.model("Bump", BumpSchema);

module.exports = Bump;