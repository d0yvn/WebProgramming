// util.js
﻿
var util = {};

util.parseError = function(errors){
  var parsed = {};
  if(errors.name == 'ValidationError'){
    for(var name in errors.errors){
      var validationError = errors.errors[name];
      parsed[name] = { message:validationError.message };
    }
  } 
  else if(errors.code == '11000' && errors.errmsg.indexOf('username') > 0) {
    parsed.username = { message:'This username already exists!' };
  } 
  else {
    parsed.unhandled = JSON.stringify(errors);
  }
  return parsed;
}


util.isLoggedin = function(req, res, next){
    if(req.isAuthenticated()){
      next();
    } 
    else {
      req.flash('errors', {login:'Please login first'});
      res.redirect('/login');
    }
  }
  
  util.noPermission = function(req, res){
    req.flash('errors', {login:"You don't have permission"});
    req.logout();
    res.redirect('/login');
  }

  util.bytesToSize = function(bytes) { // 1
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }
 
 module.exports = util;
  