const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const userModel = require('./model/user');


//---------------------------START OF MIDDLEWARE-----------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:3000",   // <-----location of the react app we're connecting to
    credentials: true
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//---------------------------END OF MIDDLEWARE-----------------------------------------------

app.post("/login", (req, res, next)=>{
    passport.authenticate("local", (err, user, info) =>{
        if(err) throw err;
        if(!user) res.send("No User Exists");
        else{
                res.send("Successfully Authenticated");
                console.log(req.user);
        }
    })(req, res, next);
});

app.post("/signup", (req, res)=>{
    userModel.findOne({email: req.body.email}, async (err, doc)=>{
        if (err) throw err;
        if(doc) res.send("user already exists");
        if(!doc){
            if( req.body.password === req.body.confirmPassword ){
                const hashedPassword = await bcrypt.hash(req.body.password, 12);
                const newUser = new userModel({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    username: req.body.username,
                    password: hashedPassword
                })
                await newUser.save();
                res.send("User Created");
            }else{
                console.log("Password doesn't match");
                process.exit();
            }
        }
    })
})

app.get("/user", (req, res)=>{
    res.send(req.user);
})


app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server Listening at PORT ${process.env.PORT}`)
})