const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    category : [String],
    title : String,
    ingredients : [String],
    time : Number,
    image: String,
    link : String
});

const foods = mongoose.model('foods',foodSchema);
module.exports = foods;