const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BacheSchema = new Schema({
    imagenUrl: {
        type: String,
        required: true,
    },
    latitud: {
        type: String,
        required: true,
    },
    longitud: {
        type: String,
        required: true,
    },
    relevancia: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    fechaIngreso: {
        type: Date,
        required: true,
    },
    fechaReparacion: {
        type: Date,
    },
})

const Bache = mongoose.model("Bache", BacheSchema);

module.exports = Bache;