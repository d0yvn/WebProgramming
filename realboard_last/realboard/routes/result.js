
module.exports = (req,res)=>{
    res.render('/recommend/result',req.body.food);
}
