
var mongoose = require('mongoose');

// schema
var postSchema = mongoose.Schema({
  title:{type:String, required:true},
  body:{type:String, required:true},
  createdAt:{type:Date, default:Date.now},
  updatedAt:{type:Date},
  numId:{type:Number},
  attachment:{type:mongoose.Schema.Types.ObjectId, ref:'file'}, // 1
  createdAt:{type:Date, default:Date.now},
});

// model & export
var Post = mongoose.model('post', postSchema);
module.exports = Post;
