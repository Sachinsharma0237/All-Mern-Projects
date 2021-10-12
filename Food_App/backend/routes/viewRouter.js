const express = require('express');
const { getDemoPage, getHomePage } = require('../controller/viewController');
const viewRouter = express.Router();


viewRouter.route("")
.get(getDemoPage);

viewRouter.route("/home")
.get(getHomePage);


module.exports = viewRouter;