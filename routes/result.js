
module.exports = (req,res)=>{
    console.log(req.body);
    res.render('result',req.body.food);
}