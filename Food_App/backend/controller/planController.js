const plans = require('../db/plans.json');
const fs = require('fs');
const { v4 : uuidv4 } = require('uuid');


//---------------------Controllers For Plans-----------------------------------------------------

module.exports.getAllPlans = function(req, res){
    if( plans.length > 0 ){
        res.status(200)
        .json({
            data: plans
        })
    }else{
        res.status(404).send("No Result Found");
    }
}

module.exports.createPlans = async function(req, res){
    let plan = await req.body;
    if( plan !== null ){
        plan.id = uuidv4();
        plans.push(plan);
        fs.writeFileSync('../db/plans.json', JSON.stringify(plans) );
        res.status(201)
        .json({
            message:"plan pushed inside db",
            plan
        })
    }else{
        res.status(400).send('bad request');
    }
}

module.exports.getPlanById = function(req, res){
    let { id } = req.params;
    let filteredPlan = plans.filter( plan=>{
        return plan.id == id;
    })
    if( filteredPlan.length > 0 ){
        res.status(201)
        .json({
            message:"got plan",
            plan: filteredPlan
        })
    }else{
        res.status(404).send("no result found");
    }
}

module.exports.updatePlanById = function(req, res){
    let { id } = req.params;
    let updateObj = req.body;
    
    let filteredPlan = plans.filter( (plan)=>{
        return plan.id == id;
    })
    if( filteredPlan.length ){
        let plan = filteredPlan[0];
        for(key in updateObj){
            plan[key] = updateObj[key];
        }
        fs.writeFileSync('../db/plans.json', JSON.stringify(plans));
        res.status(200).send("plan updated");
    }else{
        res.status(400).send("no changes found");
    }
}

module.exports.deletePlanById = function(req, res){
    let { id } = req.params;
    let filteredPlan = plans.filter( plan=>{
        return plan.id != id;
    })
    if( filteredPlan.length == plans.length ){
        res.status(404).send("no document found")
    }else{
        fs.writeFileSync('../db/plans.json', JSON.stringify(filteredPlan) );
        res.status(200).send("plan deleted successfully");
    }
}