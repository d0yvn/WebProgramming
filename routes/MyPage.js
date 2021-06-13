const mypage = require('../models/mypage.js')
const foods = require('../models/foods.js')

var express = require('express');
var router = express.Router();

router.use('/saveRecipe',function(req,res){ //마이페이지에 레시피 저장.
  mypage.findOneAndUpdate(
      {userid:req.session.userId},
      {$push : {foods:req.body.recipeInfo}},
      {upsert: true},(err,result)=>{
      console.log(result);
  });
  next();
});

router.get('/show',function(req,res){ //마이페이지에 저장된 나의 레시피 확인.
  mypage.findOne({"userid" : req.session.userId}).populate('foods').exec(function(err,data){
      var food = new Array;
      for(var i = 0;i<data.foods.length;i++){
          food.push(data.foods[i])
      }
      console.log(food);
      res.render('/mypage/myPage',{food});
  })
})

module.exports = router;
