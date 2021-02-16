const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const shopsSchema = new Schema({
 name: String,
 address1: String,
 address2: String,
 postcode: Number,
 city: String,
 telephone: Number,
 coordinates: Array,
 Photographs: Array,
 menuItems: [{
   fooditem: String,
   price: Number,
 }],
 reviews: [{
   reviewername: String,
   review: String
 }],
});

const Shops = mongoose.model('Shops', shopsSchema) 
module.exports = Shops