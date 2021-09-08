const userModel = require("../model/user");
const bcrypt = require("bcryptjs");
const keys = require('../config/keys');
const chalk = require('chalk');

const localStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const LinkedInStrategy = require("passport-linkedin").Strategy;
const GithubStrategy = require("passport-github").Strategy;


module.exports = function (passport) {

  // Local Strategy
  passport.use(
    new localStrategy((username, password, done) => {
      userModel.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );


  // Facebook Strategy
  passport.use( new FacebookStrategy({
      clientID: keys.FACEBOOK.clientID,
      clientSecret: keys.FACEBOOK.clientSecret,
      callbackUrl: "http://localhost:5000/auth/facebook/callback"
  },
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }));


  // // Amazon Strategy
  passport.use(new AmazonStrategy({
    clientID: keys.AMAZON.clientID,
    clientSecret: keys.AMAZON.clientSecret,
    callbackURL: "http://localhost:5000/auth/amazon/callback"
  },
    (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
  }));


  // Google Strategy
  passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
    (accessToken, refreshToken, profile, cb) => {
    // console.log(chalk.blue(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
  }));


  // Twitter Strategy
  passport.use(new TwitterStrategy({
    consumerKey: keys.TWITTER.clientID,
    consumerSecret: keys.TWITTER.clientSecret,
    callbackURL: "http://localhost:5000/auth/twitter/callback"
  },
    (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
  }));

  // LinkedIn Strategy
  passport.use(new LinkedInStrategy({
    consumerKey: keys.LINKEDIN.clientID,
    consumerSecret: keys.LINKEDIN.clientSecret,
    callbackURL: "http://localhost:5000/auth/linkedin/callback"
  },
    (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
  }));

  // Github Strategy
  passport.use(new GithubStrategy({
    clientID: keys.GITHUB.clientID,
    clientSecret: keys.GITHUB.clientSecret,
    callbackURL: "http://localhost:5000/auth/github/callback"
  },
    (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
  }));



  passport.serializeUser((user, cb) => {
    cb(null, user);
    // console.log("serializeUser",user);
  });

  passport.deserializeUser((user, cb) => {
      cb(null, user);
      // console.log("DeserializeUser",user);
  });

};
