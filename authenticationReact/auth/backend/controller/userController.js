const userModel = require('../model/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');


async function userSignup(req, res){
    try{
        userModel.findOne({ username: req.body.username }, async (err, doc) => {
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
                username: req.body.username,
                password: hashedPassword,
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