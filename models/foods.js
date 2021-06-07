const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    category : String,
    food_style : [String],
    title : String,
    ingredients : [String],// 재료는 메인이랑 서브랑 통합해서 저장.
    time : Number,
    image: String,
    link : String,
});

const foods = mongoose.model('foods',foodSchema);
module.exports = foods;