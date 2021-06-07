const mypage = require('../models/mypage.js');
const path = require('path')

module.exports = (req,res,next)=>{

    mypage.updateOne({userid:req.session.userId},{
        $push : {foods:req.body.recipeInfo}
    },(err,result)=>{
        console.log(result);
    });
    next();
}