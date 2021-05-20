const { userModel } = require("../model/userModel");

async function createUser(req, res){
    try{
        let userObject = req.body;
        console.log(userObject);
        let userCreated = await userModel.create(userObject);
        res.json({
            message:"User Created Successfully",
            userCreated
        })
    }
    catch(error){
        res.json({
            message:"Failed to Create User",
            error
        })
    }
}


module.exports.createUser = createUser;