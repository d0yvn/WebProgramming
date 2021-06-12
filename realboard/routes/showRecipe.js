const foods = require('../models/foods');

module.exports = (req,res)=>{
    food_id = req.params.id;
    foods.find({_id:food_id},(err,food)=>{
        res.render('showRecipe',{food});
    })
}
