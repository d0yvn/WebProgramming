const mypage = require('../models/mypage.js')
const foods = require('../models/foods.js')

function findRecipe(mypageRecipe){
    var food = new Array();

    for(var i = 0;i<mypageRecipe.length;i++){ // 레시피 갯수만큼 find로 레시피 정보 찾기.
        foods.find({_id : mypageRecipe[i]},(err,output)=>{
            food.push(output);
        })
    }
    return food;
}
module.exports = (req, res) =>{
    mypage.findOne({"userid" : req.session.userId}).populate('foods').exec(function(err,data){
        var food = new Array;
        for(var i = 0;i<data.foods.length;i++){
            food.push(data.foods[i])
        }
        console.log(food);
        res.render('/mypage/myPage',{food});
    })
}
