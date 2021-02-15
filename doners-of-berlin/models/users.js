const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const users = new Schema({
 firstName: String,
 lastName: String,
 password: String,
 email: String

});
 

module.exports = mongoose.model('user', users);


