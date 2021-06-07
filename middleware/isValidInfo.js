module.exports = (req,res,next) => {
    if(req.body.username == null || req.body.password  == null || req.body.confirm_password == null){
        res.redirect('/auth/register');
    }
    next();
}