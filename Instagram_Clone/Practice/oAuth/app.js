const express = require("express");
const app = express();
let passport = require("passport");


let {mongoose} = require("../../backend/model/db");
let userModel = require("../../backend/model/userModel"); //{ name, username, bio, email, password }


//to use public folder
app.use(express.static("public"));

app.use( cookie({
    maxAge: 24*24*100,
    keys:["akjhashaskdhasjkas"]
}))


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
    console.log(user);
    done(null, user);
})


//setup Passport
passport.use( new GoogleStrategy( 
    { 
    clientID:CLIENT_ID, 
    clientSecret:CLIENT_PW, 
    callbackURL:"http://localhost:3000/auth/callback", 
    passReqToCallback:true
    },
   async function(request, accessToken, refreshToken, profile, done){
        //Yha pe ayegi User ki sarri info 
        //if user exist ===> continue
        //if user don't exist ==> create new user

        try{
            let email = profile.email;
            console.log("Inside passport callback function!!!");
            let data = await userModel.find({email:email}).exec();
            if(data.length){
                //proceed to serialize
                console.log("Inside Already Signed Up!!!");
                done(null, data[0]);
            }else{
                //signup
                let userObject = {
                    name:profile.displayName,
                    username:profile.email,
                    email:profile.email,
                    bio:"I'm New",
                    password:"123456789"
                }
                console.log(userObject);
                let userCreated = await userModel.create(userObject);
                console.log(userCreated);
                done(null, userCreated);
            }
        }
        catch(error){
            done(error);
        }
}));

app.get("/auth/google", passport.authenticate( 'google', { scope:['email', 'profile']} ) ,function(req, res){
    res.send("Logged In!!!");
})

//for oAuth callBack
app.get("/auth/callback", passport.authenticate('google') ,function(req, res){
    //res.send("Logged In" + req.user);
    res.redirect("/");
})

//check Auth
app.get("/checkAuth", function(req, res){
    if(req.user){
        res.send("You're Logged In...Welcome to the HomePage " + JSON.stringify(req.user));
    }else{
        res.send("You're not Logged In!!!");
    }
})

app.listen(3000, function(){
    console.log("Server started at 3000!!!");
})