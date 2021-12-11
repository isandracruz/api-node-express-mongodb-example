const Artists = require('../models/artists');

exports.all = async (_, res, next) => {
    try {
        const docs = await Artists.all();
        res.json(docs);
    } catch (error) {
        next(error)
    }    
};

exports.findById = async (req, res, next) => {
    try {
        const doc = await Artists.findById(req.params.id);
        res.json(doc);
    } catch (error) {
        next(error)
    }    
};

exports.create = async (req, res, next) => {
    try {
        const doc = await Artists.create(req.body);
        res.json(doc);
    } catch (error) {
        next(error)
    }    
};

exports.update = async (req, res, next) => {
    try {       
        const doc = await Artists.update(req.params.id, req.body);
        res.json(doc);
    } catch (error) {
        next(error)
    }    
};

exports.delete = async (req, res, next) => {
    try {
        await Artists.delete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        next(error)
    }    
};