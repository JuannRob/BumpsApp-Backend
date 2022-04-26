const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BumpSchema = new Schema({
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

const Bump = mongoose.model("Bump", BumpSchema);

module.exports = Bump;