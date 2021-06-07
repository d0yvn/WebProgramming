const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mypageSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    foods:[String]
});

const mypage = mongoose.model('mypage',mypageSchema);
module.exports = mypage;