const { client } = require('../db/redis');
const planModel = require('../model/plan');

//##############################-->Controllers For Plans<---###########################################

module.exports.createPlans = async function(req, res){
    try{
            let {name, duration, price, ratings, discount} = req.body;
            await planModel.findOne({ 'name': name }, function(err, plan){
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
    catch(err){
        res.status(501).send("error occured");
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
            client.setex('postData', 60, JSON.stringify(plans))
            res.json({
                message: "got all plans",
                plans
            })
        }
    })
}

module.exports.redisPost = (req, res, next)=>{
    client.get('postData', (err, redisData)=>{
        if(err) throw err;
        if(redisData){
            console.log("Fetching data...(from REDIS)");
            res.status(200).json({
                data: JSON.parse(redisData)
            })
        }else{
            console.log("Fetching data...(from main API)");
            next();
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

module.exports.updatePlanById = async function(req, res){
    try{
        let id = req.params.id;
        let {payload, data} = req.body;

        let plan = await planModel.findById(id);
        for(let key in data){
            plan[key] = data[key];
        }
        let updatedPlan = await plan.save();
        res.json({
            message:"Plan updated Sucessfully",
            updatedPlan
        })
    }
    catch(error){
        res.json({
            message:"failed to update plan!!!",
            error: error.errors.discount.message
        })
    }
}

module.exports.deletePlanById = async function(req, res){
    try{
        let id = req.params.id;
         let deletedPlan =  await planModel.findByIdAndDelete(id);
         res.json({
             message:"user deleted",
             deletedPlan
         })
    }
    catch(error){
        res.json({
            message:"failed to delete",
            error
        })
    }
}