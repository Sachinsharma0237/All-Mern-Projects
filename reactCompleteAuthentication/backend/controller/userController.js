const userModel = require('../model/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');


async function userSignup(req, res){
    try{
        userModel.findOne({ email: req.body.email }, async (err, doc) => {
            console.log("Im inside Signup")
            if (err) throw err;
            if (doc) 
            {
                console.log("my doc", doc);
                res.json({
                    message: "User Already Exists",
                    doc,
                    session: req.session
                })
            }
            if (!doc) {
              const hashedPassword = await bcrypt.hash(req.body.password, 10);
              console.log("my doc2", req.body);
              const newUser = new userModel({
                email: req.body.email,
                password: hashedPassword,
                fullName: req.body.fullName,
                dob: req.body.dob,
                gender: req.body.gender,
                occupation: req.body.occupation,
                state: req.body.state,
                city: req.body.city
              });
              await newUser.save();
              res.json({
                  message: "User Created",
                  doc,
                  session: req.session
              })
            }
          });
    }
    catch (err) {
        res.json({
            error
        })
    }
}

function userLogin(req, res, next){
    passport.authenticate("local", (err, user, info) =>{
        if(err) throw err;
        if(!user){
            res.json({
                message: "No User Exists",
                user
            })
        }
        else if(user){
            res.json({
                message: "Successfully Authenticated",
                user
            })
        }
    })(req, res, next)
}


module.exports.userSignup = userSignup;
module.exports.userLogin = userLogin;