
const foods = require('../models/foods');

function outputFoods(category,food){
    var aJsonArray = new Array();
    for(var j = 0;j<food.length;j++){
        var sum = category.concat(food[j].category);
        result = sum.filter((item, index) => sum.indexOf(item) !== index)
        if(result != 0){
            aJsonArray.push(food[j]);
        }
    }
    return aJsonArray;
}

function desSort(a,b){
    if(a.count == b.count){
        return 0;
    }else{
        return a.count < b.count ? 1:-1;
    }
}

function ingredientCount(ingredients,food){
    var aJsonArray = new Array();
    for(var j = 0;j<food.length;j++){
        var sum = ingredients.concat(food[j].ingredients);
        result = sum.filter((item, index) => sum.indexOf(item) !== index)
        if(result.length != 0){
            food[j].count = result.length;
            aJsonArray.push(food[j]);
        }
    }
    return aJsonArray.sort(desSort);
}

module.exports = async(req,res)=>{
    const time = req.body.time;

    foods.find({},(error,food) => {
        console.log("long");
        var category = req.body.category;
        var ingredients = req.body.ingredients;
        if(food.length == 0){
            console.log("0");
        }
        var first_filtering = food;
        
        if(ingredients.length != 0){
            first_filtering = outputFoods(category,food);
        }
        if(first_filtering.length == 0){
            console.log("0");
        }
        var result = ingredientCount(ingredients,first_filtering);
        food = result.slice(0,2);
        console.log(food);
        res.render('result',{food});
    })
    // if(time == 1){
    //     foods.find({time:{$le:30}},(error,food) => {
    //         console.log("short");
    //         console.log(food);
    //         var category = req.body.category;
    //         var ingredients = req.body.ingredients;
    //         if(food.length == 0){
    //             console.log("0");
    //         }
    //         var first_filtering = food;
    
    //         if(ingredients.length != 0){
    //             first_filtering = outputFoods(category,food);
    //         }
    //         if(first_filtering.length == 0){
    //             console.log("0");
    //         }
    //         var result = ingredientCount(ingredients,first_filtering);
    //         food = result.slice(0,2);
    //         console.log(food);
    //         res.render('result',{food});
    //     })
    // }else{
    //     foods.find({time:{$gt:30}},(error,food) => {
    //         console.log("long");
    //         var category = req.body.category;
    //         var ingredients = req.body.ingredients;
    //         if(food.length == 0){
    //             console.log("0");
    //         }
    //         var first_filtering = food;
            
    //         if(ingredients.length != 0){
    //             first_filtering = outputFoods(category,food);
    //         }
    //         if(first_filtering.length == 0){
    //             console.log("0");
    //         }
    //         var result = ingredientCount(ingredients,first_filtering);
    //         food = result.slice(0,2);
    //         console.log(food);
    //         res.render('result',{food});
    //     })
    // }
    

        
    
}
