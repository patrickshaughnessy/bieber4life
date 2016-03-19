'use strict';

var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({
    title: String,
    url: String,
    file: String,
    description: String
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
