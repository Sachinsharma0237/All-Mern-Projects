const express = require('express');
const app = express();
const userModel = require('./model/userModel');
const requestRouter = require('./router/requestRouter');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const authRouter = require('./router/authRouter');
const cookie = require("cookie-session");
const passport = require("passport");
let GoogleStrategy = require("passport-google-oauth2").Strategy;
let {CLIENT_ID, CLIENT_PW} = require("./config/secrets");

app.use( express.static("public") );

app.use( cookie({
    maxAge: 24*24*100,
    keys : ["ajksfhkajbfkjabu"]  // userInfo + keys => id cookie save hoti hai => cookie id + keys => userInfo
}))

//Dumps post data into req.body
app.use( express.json() )

app.use(passport.initialize());
app.use(passport.session());

//Serialize User
passport.serializeUser(function(user, done){
    console.log("Inside Serialize user!!");
    console.log(user);
    done(null, user);
})

//Deserialize User
passport.deserializeUser(function(user, done){
    console.log("Inside Deserialize!!!");
    done(null, user);
})


//setup Passport
passport.use( 
    new GoogleStrategy( 
    { 
    clientID:CLIENT_ID, 
    clientSecret:CLIENT_PW, 
    callbackURL:"http://localhost:4000/auth/callback", 
    passReqToCallback:true
    },
   async function(request, accessToken, refreshToken, profile, done){
        //Yha pe ayegi User ki sarri info 
        //if user exist ===> continue
        //if user don't exist ==> create new user

        try{
            console.log("Inside passport callback function!!!");
            let email = profile.email;
            let data = await userModel.find({email:email}).exec();
            if(data.length){
                //proceed to serialize
                console.log("Inside Already Signed Up!!!");
                done(null, data[0]);
            }else{
                //signup
                let userObject = {
                    name: profile.displayName,
                    username:  profile.email,
                    email: profile.email,
                    bio:"I'm New",
                    password:"123456789"
                };
                let userCreated = await userModel.create(userObject);
                console.log("Inside Signup!");
                console.log(userCreated);
                done(null, userCreated);
            }
        }
        catch(error){
            done(error);
        }
}));



//for all user related functions navigate to userRouter
app.use("/api/user", userRouter);

app.use("/api/post", postRouter);
app.use("/api/request", requestRouter);


app.use("/auth", authRouter);

app.get("/destroyCookie", function(req, res){
    req.session= null;
})

//let port = process.env.PORT || 4000;
app.listen(4000, function(){
    console.log(`server started at 4000`);
})

