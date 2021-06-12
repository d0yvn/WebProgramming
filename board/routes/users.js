var express = require('express');
var router = express.Router();
var User = require('../models/User');
var util = require('../util'); // 1


// Index // 1
// router.get('/', function(req, res){
//   User.find({})
//     .sort({username:1})
//     .exec(function(err, users){
//       if(err) return res.json(err);
//       res.render('users/index', {users:users});
//     });
// });

// New
router.get('/new', function(req, res){
  res.render('users/new');
});

// create
router.post('/', function(req, res){
  User.create(req.body, function(err, user){
    if(err){
      req.flash('user', req.body);
      req.flash('errors', util.parseError(err)); // 1
      return res.redirect('/users/new');
    }
    res.redirect('/users');
  });
});
// show
router.get('/:username', util.isLoggedin, checkPermission, function(req, res){ // 3
  User.findOne({username:req.params.username}, function(err, user){
    if(err) return res.json(err);
    res.render('users/show', {user:user});
  });
});

// edit
router.get("/:username/edit", util.isLoggedin, checkPermission, function(req, res){ // 3
  User.findOne({username:req.params.username}, function(err, user){
    if(err) return res.json(err);
    res.render('users/edit', {user:user});
  });
});

// update
router.put("/:username", util.isLoggedin, checkPermission, function(req, res, next){ // 3
  User.findOne({username:req.params.username})
    .select('password')
    .exec(function(err, user){
      if(err) return res.json(err);

      // update user object ...

      // save updated user
      user.save(function(err, user){
        if(err){
          req.flash('user', req.body);
          req.flash('errors', util.parseError(err));
          return res.redirect('/users/'+req.params.username+'/edit'); // 1
        }
        res.redirect('/users/'+user.username);
      });
  });
});
// destroy
// router.delete('/:username', function(req, res){
//   User.deleteOne({username:req.params.username}, function(err){
//     if(err) return res.json(err);
//     res.redirect('/users');
//   });
// });

module.exports = router;

// private functions // 2
function checkPermission(req, res, next){
  User.findOne({username:req.params.username}, function(err, user){
   if(err) return res.json(err);
   if(user.id != req.user.id) return util.noPermission(req, res);
 
   next();
  });
 }