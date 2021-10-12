

module.exports.getDemoPage = function(req, res, next){
    //send demo page to client
    res.render("base.pug", {title:"Demo Page", content:"Im from object"});
}

module.exports.getHomePage = function(req, res, next){
    res.render("homepage.pug", {title:"Home Page", content:""});
}   