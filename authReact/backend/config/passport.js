const userModel = require('../model/user');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const TwitchStrategy = require("passport-twitch.js").Strategy;
module.exports = function(passport){

    passport.use(
        new LocalStrategy((email, password, done)=>{
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

    /** Serialize */
    passport.serializeUser( function(user, done){
        done( null, user );
    })
    
    /** Deserialize */
    passport.deserializeUser( function(user, done){
        done( null, user );
    })


    // // Facebook Strategy
    // passport.use(new FacebookStrategy({
    //     clientID: keys.FACEBOOK.clientID,
    //     clientSecret: keys.FACEBOOK.clientSecret,
    //     callbackURL: "/auth/facebook/callback"
    // },
    // (accessToken, refreshToken, profile, cb) => {
    //     console.log(chalk.blue(JSON.stringify(profile)));
    //     user = { ...profile };
    //     return cb(null, profile);
    // }));

    // // Amazon Strategy
    // passport.use(new AmazonStrategy({
    //     clientID: keys.AMAZON.clientID,
    //     clientSecret: keys.AMAZON.clientSecret,
    //     callbackURL: "/auth/amazon/callback"
    // },
    // (accessToken, refreshToken, profile, cb) => {
    //     console.log(chalk.blue(JSON.stringify(profile)));
    //     user = { ...profile };
    //     return cb(null, profile);
    // }));

    // // Github Strategy
    // passport.use(new GithubStrategy({
    //     clientID: keys.GITHUB.clientID,
    //     clientSecret: keys.GITHUB.clientSecret,
    //     callbackURL: "/auth/github/callback"
    // },
    // (accessToken, refreshToken, profile, cb) => {
    //     console.log(chalk.blue(JSON.stringify(profile)));
    //     user = { ...profile };
    //     return cb(null, profile);
    // }));

    // // Google Strategy
    // passport.use(new GoogleStrategy({
    //     clientID: keys.GOOGLE.clientID,
    //     clientSecret: keys.GOOGLE.clientSecret,
    //     callbackURL: "/auth/google/callback"
    // },
    // (accessToken, refreshToken, profile, cb) => {
    //     console.log(chalk.blue(JSON.stringify(profile)));
    //     user = { ...profile };
    //     return cb(null, profile);
    // }));

    // // Instagram Strategy
    // passport.use(new InstagramStrategy({
    //     clientID: keys.INSTAGRAM.clientID,
    //     clientSecret: keys.INSTAGRAM.clientSecret,
    //     callbackURL: "/auth/instagram/callback"
    // },
    // (accessToken, refreshToken, profile, cb) => {
    //     console.log(chalk.blue(JSON.stringify(profile)));
    //     user = { ...profile };
    //     return cb(null, profile);
    // }));

    // // Spotify Strategy
    // passport.use(new SpotifyStrategy({
    //     clientID: keys.SPOTIFY.clientID,
    //     clientSecret: keys.SPOTIFY.clientSecret,
    //     callbackURL: "/auth/spotify/callback"
    // },
    // (accessToken, refreshToken, profile, cb) => {
    //     console.log(chalk.blue(JSON.stringify(profile)));
    //     user = { ...profile };
    //     return cb(null, profile);
    // }));

    // // Twitch Strategy
    // passport.use(new TwitchStrategy({
    //     clientID: keys.TWITCH.clientID,
    //     clientSecret: keys.TWITCH.clientSecret,
    //     callbackURL: "/auth/twitch/callback"
    // },
    // (accessToken, refreshToken, profile, cb) => {
    //     console.log(chalk.blue(JSON.stringify(profile)));
    //     user = { ...profile };
    //     return cb(null, profile);
    // }));


}



// app.post("/login", (req, res, next)=>{
//     passport.authenticate("local", (err, user, info) =>{
//         if(err) throw err;
//         if(!user) res.send("No User Exists");
//         else{
//             req.login( (user, err)=>{
//                 if(err) throw err;
//                 res.send("Successfully Authenticated");
//                 console.log(req.user);
//             });
//         }
//     })(req, res, next);
// });