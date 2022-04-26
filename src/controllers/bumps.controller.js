const bumpSchema = require('../schemas/bump.schema');
const Joi = require('joi');
const Bump = require('../models/bump.model');

async function getBumps(req, res) {
    Bump.find({}, (err, bumps) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                "bumps": bumps
            });
        }
    })
}

async function getBumpById(req, res) {
    const bumpId = req.params.id;
    console.log("ID: " + bumpId)
    Bump.findById(bumpId, (err, bump) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                "Bump": bump
            });
        }
    });
}

async function createBump(req, res) {
    const data = req.body;
    try {
        Joi.assert(data, bumpSchema);
        const bump = new Bump(data);
        await bump.save();
        res.status(200).json({
            message: 'everything ok',
        });
    } catch (err) {
        const error = new Error();
        Object.assign(error, {
            code: 'bad_request',
            message: err.details[0].message,
            severity: 'LOW',
        })
        res.status(400).json(error)
    }
}

async function deleteBumpById(req, res) {
    const bumpId = req.params.id;
    console.log("ID: " + bumpId)
    Bump.findByIdAndDelete(bumpId, (err, bump) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                "Deleted": bump
            });
        }
    });
}

async function editBumpById(req, res) {
    const data = req.body;
    const bumpId = req.params.id;
    console.log("ID: " + bumpId)
    console.log({ "Previous data ": data })

    try {
        Joi.assert(data, bumpSchema);
        Bump.findByIdAndUpdate(bumpId, data, { returnOriginal: false }, (err1, bump) => {
            if (err1) {
                res.send(err1);
            }
            else {
                res.send({
                    "Edited ": bump
                });
            }
        });
    } catch (err2) {
        console.log(err2)
        const error = new Error();
        Object.assign(error, {
            code: 'bad_request',
            message: err2.details[0].message,
            severity: 'LOW',
        })
        res.status(400).json(error)
    }


}

module.exports = {
    getBumps,
    getBumpById,
    createBump,
    deleteBumpById,
    editBumpById,
}