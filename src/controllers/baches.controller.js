const bacheSchema = require('../schemas/bache.schema');
const Joi = require('joi');
const Bache = require('../models/bache.model');

async function getBaches(req, res) {
    Bache.find({}, (err, baches) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                "baches": baches
            });
        }
    })
}

async function getBacheById(req, res) {
    const bacheId = req.params.id;
    console.log("ID: "+bacheId)
    Bache.findById(bacheId, (err, bache) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                "Bache": bache
            });
        }
    });
}

async function createBache(req, res) {
    const data = req.body;
    try {
        Joi.assert(data, bacheSchema);
        const bache = new Bache(data);
        await bache.save();
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

async function deleteBacheById(req, res) {
    const bacheId = req.params.id;
    console.log("ID: "+bacheId)
    Bache.findByIdAndDelete(bacheId, (err, bache) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                "Deleted": bache
            });
        }
    });
}

async function editBacheById(req, res) {
    const data = req.body;
    const bacheId = req.params.id;
    console.log("ID: "+bacheId)
    console.log({"Datos previos":data})

    try {
        Joi.assert(data, bacheSchema);
        Bache.findByIdAndUpdate(bacheId, data, {returnOriginal: false}, (err1, bache) => {
            if (err1) {
                res.send(err1);
            }
            else {
                res.send({
                    "Edited": bache
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
    getBaches,
    getBacheById,
    createBache,
    deleteBacheById,
    editBacheById,
}