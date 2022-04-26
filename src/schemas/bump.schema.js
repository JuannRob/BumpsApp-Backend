const Joi = require('joi');

const bumpSchema = Joi.object({
    imagenUrl: Joi.string().required(),
    latitud: Joi.string().required(),
    longitud: Joi.string().required(),
    relevancia: Joi.string().required(),
    estado: Joi.string().required(),
    fechaIngreso: Joi.date().iso().required(),
    fechaReparacion: Joi.date().iso(),
})

module.exports = bumpSchema;