var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema ({
    email:String

});
exports.users= mongoose.model('users', users);