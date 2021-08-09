const userDB = require('../db/userDB.json');
const fs = require('fs');
const { v4 : uuidv4 } = require('uuid');

//---------------------Controllers For User-------------------------------------------------------

module.exports.getAllUsers = function(req, res){
    if(userDB.length){
        res.status(200)
        .json({
            users: userDB
        })
    }else{
        res.status(404).send("no user found");
    }
}

module.exports.createUser = async function(req, res){
    let user = await req.body;
    if( user != null ){
        user.id = uuidv4();
        userDB.push(user);
        fs.writeFileSync('../db/userDB.json', JSON.stringify(userDB));
        res.status(200)
        .json({
            message:"user created successfully",
            user: user
        })
    }else{
        res.json(400).send('bad request');
    }
}

module.exports.getUserById = function(req, res){
    let id = req.params.id;
    let filteredUser = userDB.filter( user=>{
        user.id == id;
    })
    if(filteredUser){
        res.status(200)
        .json({
            user: filteredUser
        })
    }else{
        res.status(404).send("no user found");
    }
}

module.exports.updateUserById = function(req, res){
    let id = req.params.id;
    let updatedData = req.body;
    let filteredUser = userDB.filter( user=>{
        return user.id == id;
    })
    if(filteredUser){
        for(key in updatedData){
            filteredUser[key] = updatedData[key];
        }
        fs.writeFileSync('../db/userDB.json', JSON.stringify(userDB))
    }else{
        res.status(400).send('bad request');
    }
}

module.exports.deleteUserById = function(req, res){
    let id = req.params.id;
    let filteredUsers = userDB.filter( user=>{
        return user.id != id;
    })
    if(filteredUsers != userDB ){
        res.status(200).send("user deleted successfully");
        fs.writeFileSync('../db/userDB.json', JSON.stringify(filteredUsers));
    }else{
        res.status(404).send("no user found");
    }
}
