const { mongoose } = require("../model/db");
const userModel = require("../model/userModel");



async function createUser(req, res){
    try{
        let userObj = req.body;
        let userCreated = await userModel.create(userObj);
        res.json({
            message:"User Created Successfully",
            userCreated
        })
    }
    catch(error){
        res.json({
            message:"Failed to create user",
            error
        })
    }
}


async function getAllUsers(req, res){
    try{
        let allUsers = await userModel.find({});
        res.json({
            message:"Got all users Successfully",
            allUsers
        })
    }
    catch(error){
        res.json({
            message:"Failed to get all users",
            error
        })
    }
}

async function getUserById(req, res){
    try{
        let id = req.params.id;
        let user = await userModel.findById(id);
        res.json({
            message:"Got User Successfully",
            user
        })
    }
    catch(error){
        res.json({
            message:"Failed to get user",
            error
        })
    }
}

async function updateUserById(req, res){
    try{
        let id = req.params.id;
        let updateObj = req.body;
        let user = await userModel.findById(id);
        for(let key in updateObj){
            user[key] = updateObj[key];
        }
        let updatedUser = await user.save();
        res.json({
            message:"user updated successfully",
            updatedUser
        })
    }
    catch(error){   
        res.json({
            message:"failed to update user",
            error
        })
    }
}


module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.createUser = createUser;
module.exports.updateUserById = updateUserById;