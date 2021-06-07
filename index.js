var express = require('express');
var ejs = require('ejs');
const cookieParser = require('cookie-parser');

const expressSession = require('express-session');
var mainController = require('./routes/main')
var recommendController = require('./routes/recommend');
var recommendProcessController = require('./routes/recommendProcess');
var loginController = require('./routes/login');//로그인페이지
var loginUserController = require('./routes/loginUser') // 로그인 처리
var registerController = require('./routes/register');//회원가입 페이지
var registerUserController = require('./routes/registerUser'); // 회원가입 처리
var showRecipeController = require('./routes/showRecipe');

const saveRecipes = require('./middleware/saveRecipe'); // 레시피 저장.
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const isValidInfo = require('./middleware/isValidInfo');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://doyun:1234@cluster0.ldvri.mongodb.net/finalProject', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true    
});
        
var app = express();

app.use(cookieParser());
app.set('views', __dirname+ '/views');
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));
app.use(express.static('public'))
app.use('/users/register',isValidInfo);

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

let port = process.env.PORT;

if (port == null||port==""){
    port = 4000;
}

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});


app.get('/',mainController);
app.get('/recommend',recommendController);
app.post('/recommend_process',recommendProcessController);
// app.get('/result',resultController);

app.get('/auth/login',redirectIfAuthenticatedMiddleware,loginController); // 로그인 화면
app.post('/users/login',redirectIfAuthenticatedMiddleware,loginUserController); // 로그인 절차.
app.post('/UpdateRecipes',saveRecipes);//마이페이지에 레시피 저장.
app.get('/recipe/:id',showRecipeController) // 추천된 레시피 누르면 만개의 iframe 만개의 레시피
app.get('/auth/register',redirectIfAuthenticatedMiddleware,registerController); // 회원가입화면
app.post('/users/register',redirectIfAuthenticatedMiddleware,registerUserController); // 회원가입 절차.

app.listen(3000,function(){
    console.log("App listening on port 3000");
})