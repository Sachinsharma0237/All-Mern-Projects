const userModel = require("../model/user")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports.signup = async(req, res)=>{
    try{
        let User = await userModel.create({
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            fullName: req.body.fullName,
            role: req.body.role      
        });
        let newUser = await User.save();
        res.status(201).json({
            message:"Signup Successfully",
            newUser
        })
    }
    catch(error){
        res.status(501).json({
            message:"Signup ERROR",
            error
        })
    }
}

module.exports.login = async(req, res)=> {
      try {
        let { email, password } = req.body;
        console.log(email, password);
        let loggedInUser = await userModel.find({ email: email });
        console.log(loggedInUser);
        if (loggedInUser.length) {
          let user = loggedInUser[0];
          if (user.password == password) {
            // token ban na chahie
            const token = jwt.sign({ id: user["_id"] }, process.env.SECRET_KEY);
            res.cookie("jwt", token, { httpOnly: true });
            res.status(200).json({
              message: "Logged in succesfully !!",
              data: loggedInUser[0],
            });
          } else {
            res.status(200).json({
              message: "Email and password not matched",
            });
          }
        } else {
          res.status(200).json({
            message: "No user found, Please signup first",
          });
        }
      } catch (error) {
        res.status(200).json({
          message: "Login Failed !!",
          error,
        });
      }
}

module.exports.isLoggedIn = async(req, res, next)=> {
    try{
        let token = req.cookies.jwt;
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        if(payload){
            let user = await userModel.findOne({_id: payload.id});
            req.name = user.fullName;
            req.user = user;
            next();
        }else{
            next();
        }
    }
    catch(err){
        // res.status(200).json({
        //     err
        // })
        next();
    }
}

module.exports.logout = async(req, res, next)=> {
    try{
        res.clearCookie("jwt");
        res.redirect("/login");
    }
    catch(err){
        res.status(200).json({
            err
        })
    }
}

module.exports.protectRoute = async(req, res, next)=>{
    try{
        let token = req.cookies.jwt;
        // let token = req.headers.authorization.split(" ").pop();  //or req.body.token
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        if(payload){
            req.body = payload.id;
            next();
        }else{
            res.status(501).json({
                message:"Please Login First!"
            })
        }
        console.log(req.cookies);
    }
    catch(err){
        res.status(501).json({
            message:"Token Invalid",
            err
        })
    }
}

module.exports.isAuthorized = async function(req, res, next){
        try{    
            let {payload, data} = req.body;
            await userModel.findOne({"_id": payload.id}, (err, result)=>{
                if(err) return err
                if(result.role == 'admin'){
                    next();
                }else{
                    res.status(501).send("you don't have admin rights!");
                }
            })
        }
        catch(err){
            res.status(501)
            .json({
                message:"unauthorized"
            })
        }
}

module.exports.forgotPassword = async function(req, res, next){
    try{
        let { email } = req.body;
        let user = await userModel.findOne({email: email});
        console.log(user)
        if(user){
            let token = user.createResetToken();
            console.log(token);
            await user.save({validateBeforeSave: false});
            let resetLink = `http://localhost:5000/resetpassword/${token}`;
            let message = {
                from: "sachinsharma.nodejs@gmail.com",
                to: user.email,
                name: user.fullName,
                subject: "Reset Password",
                link: resetLink
            }
            let response = await sendEmail(message);
            console.log(response)
            res.json({
                message:"Reset link is successfully sent to your registered email",
                response
            })
        }
        else{
            res.status(404).send("Not found!");
        }
    }
    catch(err){
        res.status(501).json({
            message:"Failed to forgot password",
            err
        })
    }
}

module.exports.resetPassword = async function(req, res, next){
    try{
        const token = req.params.token;
        const { password, confirmPassword } = req.body;
        let user = await userModel.findOne({
            pwToken: token,
            tokenTime: { $gt: Date.now() }
            })
        if(user){
            user.resetPasswordHandler(password, confirmPassword);
            await user.save();
            res.status(200).json({
                message:"Password Reset Successfully"
            })
        }else{
            res.status(200).json({
                message:"password reset link expired!"
            })
        }    
    }
    catch(err){
        res.status(404).json({
            message:"error occured",
            err
        })
    }
}

async function sendEmail(req, res){
    try{
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,  //smtp.mailtrap.io
            // port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_AUTH_USER,  //a320382a9aeb27
                pass: process.env.EMAIL_AUTH_PASS
            }
        })
    
        let info = await transporter.sendMail({
            from: message.from, // sender address '"Sachin Sharma 👻" <sachinsharma.nodejs@gmail.com>'
            to: message.to,// list of receivers "sachinsharma0237@gmail.com"
            subject: message.subject, // Subject line
            html: 
            `<div><b>Hello ${message.name}, Greetings from eat & treat</b> 
            <div>  You are receiving this because you (or someone else) have requested the reset of the password for your account. </div> 
                <span>Given below is the link to reset your old password, Click on the link to proceed reset process</span>
                <a href=${message.link}>${message.link}</a>
            </div>`, // html body
          }); 

          return info;

        }
        catch(err){
            console.log(err);
        }
}