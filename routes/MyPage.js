const mypage = require('../models/MyPage.js')

module.exports = async (req, res) =>{
    const mypage = await mypage.find({}).populate('userid')  
    // console.log(req.session)      
    res.render('myPage',{
        foods
    });
}