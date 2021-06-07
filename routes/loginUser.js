const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) =>{
    const { username, password } = req.body;
    
    User.findOne({username:username}, (error,user) => {      
      if(user){           
        bcrypt.compare(password, user.password, (error, same) =>{       // hash된 db의 패스워드와 입력된 패스워드의 값이 같으면.    
          if(same){ 
            req.session.userId=user._id    
            console.log("login success");        
            res.redirect('/')
          }
          else{
            res.redirect('/auth/login')  
          }
        })
      }
      else{
        res.redirect('/auth/login')
        
      }
    })
}
  