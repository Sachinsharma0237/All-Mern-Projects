const authRouter = require('express').Router();
const passport = require('passport');
const { userSignup, userLogin } = require('../controller/userController');

// GOOGLE
authRouter.route("/google").get( passport.authenticate('google', {scope: ['email', 'profile']}), (req, res)=>{
}) 
authRouter.route("/google/callback").get( passport.authenticate('google'), (req, res)=>{
    console.log('Connect.sid', req.headers.cookie);
    res.redirect("http://localhost:3000/");
})

// AMAZON
authRouter.route("/amazon").get( passport.authenticate('amazon', {scope: ['profile']}), (req, res)=>{
    
}) 
authRouter.route("/amazon/callback").get( passport.authenticate('amazon'), (req, res)=>{
    res.redirect("http://localhost:3000/");
})

// FACEBOOK
authRouter.route("/facebook").get( passport.authenticate('facebook'), (req, res)=>{
    
}) 
authRouter.route("/facebook/callback").get( passport.authenticate('facebook'), (req, res)=>{
    res.redirect("http://localhost:3000/");
})

// GITHUB
authRouter.route("/github").get( passport.authenticate('github'), (req, res)=>{
    
}) 
authRouter.route("/github/callback").get( passport.authenticate('github'), (req, res)=>{
    res.redirect("http://localhost:3000/");
})

// CHECK AUTH
authRouter.route("/checkAuth").get((req, res)=>{
    let ssid = "";
    if( req.headers.cookie ){
        ssid = req.headers.cookie.slice(12);
    }
    if( req.user ){
        res.json({
          message:"you're Logged In",
          user: req.user,
          isAuth: true,
          ssid
        })
    }else{
      res.json({
        message: "you're not Logged In",
        isAuth: false
      })
    }
})

// LOGOUT
authRouter.route("/destroyCookie").get((req, res)=>{
    req.logOut();
    res.status(200).clearCookie('connect.sid', {
        path: '/'
    });
    req.session.destroy(function(err){
        res.redirect('/');
    })
})

// LOCAL-SIGNUP
authRouter.route("/signup").post(userSignup);

// LOCAL-LOGIN
authRouter.route("/login").post(userLogin);


module.exports.authRouter = authRouter;