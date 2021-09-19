const express = require('express');
const { protectRoute, isAuthorized } = require('../controller/authController');
const { getAllPlans, createPlans, getPlanById, updatePlanById, deletePlanById } = require('../controller/planController');
const planRouter = express.Router();

planRouter.route("")
.get(getAllPlans)
.post(createPlans);

planRouter.route("/:id")
.get( protectRoute , getPlanById)
.patch(protectRoute, isAuthorized ,updatePlanById)
.delete(protectRoute, isAuthorized, deletePlanById);

module.exports = planRouter;