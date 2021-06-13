var express = require('express');
var router = express.Router();
const foods = require('../models/foods');

router.get('/',function(req,res){
  res.render('recommend/index')
})
router.post('/process',function(req,res){
  const time = req.body.time;

    if(time == 1){
        foods.find({"time":{$lte:30}},(error,food) => {
            console.log("short");

            var category = req.body.category;
            var food_style = req.body.food_style;
            var main_ingredients = req.body.main_ingredients;
            var sub_ingredients = req.body.sub_ingredients;
            var category_filter = category_filtering(category,food) // 일식 중식 한식 양식 중 선택한 것 필터링.
            console.log(category_filter.length);
            var foodstyle_filter = foodstyle_filtering(food_style,category_filter); // "맛있는 한끼,면,
            console.log(foodstyle_filter);
            var ingredients_filtering = mainIngredients_filtering(main_ingredients,foodstyle_filter);
            // main ingredients filtering 메인재료 반드시 포함되게!

            food = ingredientCount(sub_ingredients,ingredients_filtering);
            // sub 재료는 가장 중첩되게!
            console.log(food);
            food = food.slice(0,2);
            res.render('recommend/result',{food});
        })
    }else{
        foods.find({"time":{$gt:30}},(error,food) => {
            console.log("long");
            var category = req.body.category;
            var food_style = req.body.food_style;
            var main_ingredients = req.body.main_ingredients;
            var sub_ingredients = req.body.sub_ingredients;

            var category_filter = category_filtering(category,food) // 일식 중식 한식 양식 중 선택한 것 필터링.
            var foodstyle_filter = foodstyle_filtering(food_style,category_filter); // "맛있는 한끼,면,
            var ingredients_filtering = mainIngredients_filtering(main_ingredients,foodstyle_filter);
            // main ingredients filtering 메인재료 반드시 포함되게!

            //이상 없음.
            food = ingredientCount(sub_ingredients,ingredients_filtering);
            // sub 재료는 가장 중첩되게!
            food = food.slice(0,2);
            res.render('recommend/result',{food});
        })
    }
});

router.get('/:id',function(req,res){
  food_id = req.params.id;
  foods.find({_id:food_id},(err,food)=>{
      res.render('recommend/show',{food});
  })
})

function desSort(a,b){
    if(a.count == b.count){
        return 0;
    }else{
        return a.count < b.count ? 1:-1;
    }
}

function category_filtering(category,food){
    var aJsonArray = new Array();
    if(!Array.isArray(category)){
        for(var j = 0;j<food.length;j++){
            if(category == food[j].category){
                aJsonArray.push(food[j]);
                break;
            }
        }
    }else{
        for(var j = 0;j<food.length;j++){
            for(var i = 0;i<category.length;i++){
                if(category[i] == food[j].category){
                    aJsonArray.push(food[j]);
                    break;
                }
            }
        }
    }
    return aJsonArray;
}
function foodstyle_filtering(food_style,food){
    var aJsonArray = new Array();

    for(var j = 0;j<food.length;j++){
        var sum = new Array();
        for(var i = 0;i<food_style.length;i++){
            sum.push(food_style[i]);
        }
        for(i = 0; i<food[j].food_style.length;i++){
            sum.push(food[j].food_style[i]);
        }
        result = sum.filter((item, index) => sum.indexOf(item) !== index)
        if(result.length != 0){
            aJsonArray.push(food[j]);
        }
    }
    return aJsonArray;
}
function mainIngredients_filtering(main_ingredients,food){// 선택된 메인 재료가 최소 하나라도 포함된 음식 추출
    var aJsonArray = new Array();
    for(var j = 0;j<food.length;j++){
        var sum = new Array();
        if(!Array.isArray(main_ingredients)){
            sum[0] = main_ingredients;
        }else{
            sum.push(main_ingredients);
            for(var i = 0;i<main_ingredients.length;i++){
                sum.push(main_ingredients[i]);
            }
        }
        console.log(sum);
        for(i = 0; i<food[j].ingredients.length;i++){
            sum.push(food[j].ingredients[i]);
        }
        console.log(sum);
        // console.log(food[j].ingredients + " " + main_ingredients);
        result = sum.filter((item, index) => sum.indexOf(item) !== index)
        if(result.length != 0){ // 선택된 메인 재료 반드시 선택
            aJsonArray.push(food[j]);
        }
    }
    return aJsonArray;
}
function ingredientCount(sub_ingredients,food){ // 중첩된 sub_ingredients의 갯수를 내림차순으로 정리.
    var aJsonArray = new Array();
    for(var j = 0;j<food.length;j++){
        var sum = sub_ingredients.concat(food[j].ingredients);
        result = sum.filter((item, index) => sum.indexOf(item) !== index)
        if(result.length != 0){ // 중복된게 없으면 포함 X
            food[j].count = result.length;
            aJsonArray.push(food[j]);
        }
    }
    return aJsonArray.sort(desSort);
}


module.exports = router;