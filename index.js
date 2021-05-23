var express = require('express');
var ejs = require('ejs');

var mainController = require('./routes/main')
var recommendController = require('./routes/recommend');
var recommendProcessController = require('./routes/recommendProcess');
var resultController = require('./routes/result');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://doyun:1234@cluster0.ldvri.mongodb.net/finalProject', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true    
});
        
var app = express();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

app.use(express.static('public'))

app.get('/',mainController);
app.get('/recommend',recommendController);
app.post('/recommend_process',recommendProcessController);
// app.get('/result',resultController);
app.listen(3000,function(){
    console.log("App listening on port 3000");
})