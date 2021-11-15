const planModel = require('../model/plan');

module.exports.getDemoPage = function(req, res, next){
    //send demo page to client
    res.render("base.pug", {title:"Demo Page", content:"Im from object"});
}

module.exports.getHomePage = async function(req, res, next){
    try{
        let plans = await planModel.find();
        plans = plans.splice(0, 3);
        res.render("homepage.pug", {title:"Home Page", name: req.name, plans});
    }
    catch(err){
        console.log(err);
    }
}   

module.exports.getLoginPage = function(req, res, next){
    res.render("login.pug", {title:"Login Page", name: req.name});
}

module.exports.getSignUpPage = function(req, res, next){
    res.render("signup.pug" , {name:req.name});
}

module.exports.getPlansPage = async function(req , res){
    try{
        let plans = await planModel.find(); 
        console.log(plans);
        res.render("plans.pug" ,{name:req.name , plans:plans})
    }
    catch(error){
        console.log(error);
    }
}

module.exports.getResetPasswordPage = function(req, res){
    res.render("resetPassword.pug", {name:req.name});
}

module.exports.getProfilePage = function(req, res){
    res.render("profilePage.pug", { user: req.user });
}