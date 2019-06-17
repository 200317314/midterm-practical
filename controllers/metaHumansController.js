const Resource = require('../models/metaHuman');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    Resource.find()
        .then(metaHumans => {
            res.render('metaHumans/index', {
                metaHumans: metaHumans,
                title: 'MetaHumans'
            });
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.redirect('/');
        });
};

exports.show = (req, res) => {
    Resource.findById(req.params.id)
        .then(metaHuman => {
            res.render('metaHumans/show', {
                title: 'MetaHuman Show',
                alias: metaHuman.alias,
                fullName: metaHuman.fullName,
                affiliation: metaHuman.affiliation,
                metaType: metaHuman.metaType
            });
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.redirect('/');
        });
};

exports.new = (req, res) => {
    res.render('metaHumans/new', {
        title: 'New MetaType'
    });
};

exports.edit = (req, res) => {
    Resource.findById(req.params.id)
        .then(metaHuman => {
            res.render('metaHumans/edit', {
                title: `Edit ${metaHuman.title}`,
                metaHuman: metaHuman
            });
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.redirect('/');
        });
};

exports.create = async (req, res) => {
    Resource.create(req.body.metaHuman)
        .then(() => {
            req.flash('success', 'Your new metahuman was successfully bred.');
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);

            req.flash('error', `ERROR: ${err}`);
            res.render('metaHumans/new', {
                metaHuman: req.body.metaHuman,
                title: 'New MetaHuman'
            });
        });
};

exports.update = (req, res) => {
        Resource.updateOne({
            _id: req.body.id
        }, req.body.metaHuman, {
            runValidators: true
        })
        .then(() => {
            req.flash('success', 'Your Meta Human was updated successfully.');
            res.redirect('/');
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.render('metaHumans/edit', {
                metaHuman: req.body.metaHuman,
                title: `Edit ${req.body.metaHuman.alias}`
            });
        });
};

exports.destroy = (req, res) => {
        Resource.deleteOne({
            _id: req.body.id
        })
        .then(() => {
            req.flash('success', 'Your Meta Human was deleted successfully.');
            res.redirect("/");
        })
        .catch(err => {
            req.flash('error', `ERROR: ${err}`);
            res.redirect('/');
        });
};