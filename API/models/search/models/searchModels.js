var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var options = { timestamps: true }

// schema
var schema = new Schema({
    searchUrls: [{ type: String, required: true }],
    searchKeyword: { type: String, required: true },
}, options);

// model
module.exports = mongoose.model('searchResult', schema);