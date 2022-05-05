const Joi = require('joi');

const bumpSchema = Joi.object({
    imageUrl: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    zone: Joi.string().required(),
    relevance: Joi.string().required(),
    status: Joi.string().required(),
    entryDate: Joi.date().iso().required(),
    repairDate: Joi.date().iso(),
})

module.exports = bumpSchema;