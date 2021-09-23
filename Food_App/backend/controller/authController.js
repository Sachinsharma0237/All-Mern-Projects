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
        let {data} = req.body;
        let token = req.headers.authorization.split(" ").pop();  //or req.body.token
        const payload = jwt.verify(token, process.env.SECRETKEY);
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
            await userModel.findOne({"_id": payload.id}, (err, result)=>{
                if(err) return err
                if(result.role == 'admin'){
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

module.exports.forgotPassword = async function(req, res, next){
    try{
        let { email } = req.body;
        
        let user = await userModel.findOne({email});
        if(user){
            let token = user.createPwToken();
            console.log(token);
            let updatedUser = await user.save({validateBeforeSave: false});
            let resetLink = `http://localhost:5000/api/user/forgot/${token}`;
            res.status(200)
            .json({
                message:"Reset link is sent to email",
                resetLink
            })
        }
        else{
            res.status(404).send("Not found!");
        }
    }
    catch(err){
        res.status(501).json({
            message:"Failed to forgot password",
            err
        })
    }
}

module.exports.resetPassword = async function(req, res, next){
    try{
        const token = req.params.token;
        const { password, confirmPassword } = req.body;
        let user = await userModel.findOne({
            pwToken: token,
            tokenTime: { $gt: Date.now() }
            })
        if(user){
            user.resetPasswordHandler(password, confirmPassword);
            await user.save();
            res.status(200).json({
                message:"Password Reset Successfully"
            })
        }else{
            res.status(200).json({
                message:"password reset link expired!"
            })
        }    
    }
    catch(err){
        res.status(404).json({
            message:"error occured",
            err
        })
    }
}