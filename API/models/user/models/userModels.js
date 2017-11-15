var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

// schema
var schema = new Schema({
    firstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Mobile: { type: String, required: true },
});

// model
module.exports = mongoose.model('User', schema);