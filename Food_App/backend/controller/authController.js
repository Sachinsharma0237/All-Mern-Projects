const userModel = require("../model/user")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

module.exports.signup = async(req, res)=>{
    try{
        let User = await userModel.create({
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            fullName: req.body.fullName,
            role: req.body.role      
        });
        let newUser = await User.save();
        res.status(201).json({
            message:"Signup Successfully",
            newUser
        })
    }
    catch(error){
        res.status(501).json({
            message:"Signup ERROR",
            error
        })
    }
}

module.exports.login = async(req, res)=>{
    try{
        let{ email, password } = req.body;
        await userModel.findOne({email}, (err, result)=>{
            if(err) throw err;
            if(result){
                if(result.password == password){
                    const token = jwt.sign( {id: result["_id"]}, process.env.SECRETKEY);
                    
                    res.status(200).json({
                        message:"Password Matched",
                        result,
                        token
                    })
                }else{
                    res.status(501).json({
                        message:"Password didn't matched!"
                    })
                }
            }else{
                res.status(501).json({
                    message:"User Not Found Signup First!"
                })
            }
        })
    }
    catch(err){
        res.status(400).json({
            err
        })
    }
}

module.exports.protectRoute = async(req, res, next)=>{
    try{
        let data = req.body;
        const payload = jwt.verify(req.body.token, process.env.SECRETKEY);
        if(payload){
            req.body = {payload, data};
            next();
        }else{
            res.status(501).json({
                message:"Signup First!"
            })
        }
    }
    catch(err){
        res.status(501).json({
            message:"Token Invalid",
            err
        })
    }
}

module.exports.isAuthorized = async function(req, res, next){
        try{    
            let {payload, data} = req.body;
            let obj = req.body
            await userModel.findOne({"_id": payload.id}, (err, result)=>{
                if(err) return err
                if(result.role == 'admin'){
                    req.body = obj;
                    next();
                }else{
                    res.status(501).send("you don't have admin rights!");
                }
            })
        }
        catch(err){
            res.status(501)
            .json({
                message:"unauthorized"
            })
        }
}