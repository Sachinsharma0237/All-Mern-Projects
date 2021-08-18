const userModel = require('../model/user');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport){

    passport.use(
        new localStrategy((email, password, done)=>{
            userModel.findOne({email: email}, (err, user)=>{
                if(err) throw err;
                if(!user) return done(null, false)
                bcrypt.compare(password, user.password, (err, result)=>{
                    if(err) throw err;
                    if(result == true){
                        return done(null, user);
                    }else{
                        return done(null, false);
                    }
                })
            })
        })
    )

    passport.serializeUser((userModel, cb) => {
        cb(null, userModel.id);
    })

    passport.deserializeUser((id, cb) => {
        userModel.findOne({_id: id}, (err, user) =>{
           cb(err, user)
        })
    })
}
