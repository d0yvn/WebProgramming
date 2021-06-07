const User = require('../models/User.js');
const mypage = require('../models/mypage');
const path = require('path')

module.exports = (req,res)=>{
    console.log(req.body);
    User.create(req.body,(error,user) =>{
        console.log(user);
        if(error){
            return res.redirect('/auth/register');
        }else{
            mypage.create({userid: user.id},(err,result)=>{
                res.redirect('/auth/login');
            })
        }
    })
}