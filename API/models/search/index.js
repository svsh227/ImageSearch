var searchModel = require('./models/searchModels');
var search = {};

module.exports = search;

search.listAllSeach = function () {
    return searchModel.find().sort({ createdAt: -1 }).exec();
};

search.seacrhById = function (id) {
    return searchModel.findById(id).exec();
};


search.createSearch = function (object) {
    return new searchModel(object).save();
}