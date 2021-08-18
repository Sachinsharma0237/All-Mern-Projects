const { modelNames } = require('mongoose');
const { v4 : uuidv4 } = require('uuid');
const planModel = require('../model/plan');


//##############################-->Controllers For Plans<---###########################################

module.exports.createPlans = function(req, res){
    if( req.body == null ){
        res.status(400).send('Bad Request');
        return;
    }else{
        let {name, duration, price, ratings, discount} = req.body;
        planModel.findOne({ 'name': name }, function(err, plan){
            if(err) throw err;
            if( plan != null ){ 
                res.status(400).send("bad request");
                process.exit();
             }
            if(plan == null ){
                var insertData = {
                    name,
                    duration,
                    price,
                    ratings,
                    discount
                }
                plan = new planModel(insertData);
            }
            res.json({
                message:"Plan Inserted In MongoDB!",
                plan
            })
            plan.save(function(err){ if(err) { console.log(err); } })
        });
    }

}

module.exports.getAllPlans = function(req, res){
    planModel.find({}, function(err, plans){
        if( err ) throw err;
        if( plans == null ){
            res.status(404).send("no result found");
            process.exit();
        }
        if( plans != null ){
            res.json({
                message: "got all plans",
                plans
            })
        }
    })
}

module.exports.getPlanById = function(req, res){
    let { id } = req.params;
    planModel.findOne( { '_id': id }, function(err, plan){
        if( plan == null ){
            res.status(404).send('no result found');
            process.exit();
        }
        res.json({
            message: "got plan!",
            plan
        })
    })
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