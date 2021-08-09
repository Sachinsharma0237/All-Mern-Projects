const express = require('express');
const { getAllPlans, createPlans, getPlanById, updatePlanById, deletePlanById } = require('../controller/planController');
const planRouter = express.Router();

planRouter.route("")
.get(getAllPlans)
.post(createPlans);

planRouter.route("/:id")
.get(getPlanById)
.patch(updatePlanById)
.delete(deletePlanById);

module.exports = planRouter;