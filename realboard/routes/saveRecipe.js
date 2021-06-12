const mypage = require('../models/mypage.js');
const path = require('path')

module.exports = (req,res,next)=>{
    mypage.findOneAndUpdate(
        {userid:req.session.userId},
        {$push : {foods:req.body.recipeInfo}},
        {upsert: true},(err,result)=>{
        console.log(result);
    });
    next();
}