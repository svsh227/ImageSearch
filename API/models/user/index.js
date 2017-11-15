var UserModel = require('./models/userModels');
var user = {};

module.exports = user;

user.listAll = function () {
    return UserModel.find().exec();
};