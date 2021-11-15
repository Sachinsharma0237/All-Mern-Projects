const express = require('express');
const { isLoggedIn, logout } = require('../controller/authController');
const { getDemoPage, getHomePage, getLoginPage, getSignUpPage, getPlansPage, getResetPasswordPage, getProfilePage } = require('../controller/viewController');
const viewRouter = express.Router();


viewRouter.use(isLoggedIn);
// next() => logged in => req.name = "sachin"
// next() => logged out => req.name = undefined

viewRouter.route("")
.get(getDemoPage);

viewRouter.route("/home")
.get(getHomePage);

viewRouter.route("/login")
.get(getLoginPage);

viewRouter.route("/signup")
.get(getSignUpPage);

viewRouter.route("/plans")
.get(getPlansPage);

viewRouter.route("/logout")
.get(logout);

viewRouter.route("/profile")
.get(getProfilePage);

viewRouter.route("/resetpassword/:token")
.get(getResetPasswordPage);

module.exports = viewRouter;