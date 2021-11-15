const bcrypt = require('bcryptjs');
const userModel = require('../model/user');
const User = require('../model/user');

//---------------------Controllers For User-------------------------------------------------------

module.exports.getAllUsers = function(req, res){
    try{
        User.find({}, function(err, users){
        if( err ) throw err;
        if( users == null ){
            res.status(404).send("no result found");
            process.exit();
        }
        if( users != null ){
            res.json({
                message: "got all users",
                users
            })
        }
        })
    }
    catch(err){

    }
}

module.exports.createUser = async function(req, res){
    try{
        User.findOne({ email: req.body.email }, async (err, doc) => {
            if (err) throw err;
            if (doc) 
            {
                res.json({
                    message: "User Already Exists",
                    doc,
                    session: req.session
                })
            }
            if (!doc) {
              const hashedPassword = await bcrypt.hash(req.body.password, 10);
              const newUser = new User({
                email: req.body.email,
                password: hashedPassword,
                fullName: req.body.fullName,
                dob: req.body.dob,
                gender: req.body.gender,
                role: req.body.role,
                occupation: req.body.occupation,
                state: req.body.state,
                city: req.body.city
              });
              let newDoc = await newUser.save();
              res.json({
                  message: "User Created",
                  newDoc,
                  session: req.session
              })
            }
          });
    }
    catch (err) {
        res.json({
            error
        })
    }
}

module.exports.getUserById = async function(req, res){
    try{
        let { payload } = req.body;
        await User.findOne({"_id": payload.id}, (err, user)=>{
            if( err ) throw err;
            if( user == null ){
                res.status(404).send("no result found");
                process.exit();
            }
            if( user != null ){
                res.json({
                    message: "got user",
                    user
                })
            }
        })
    }
    catch(err){
        res.status(404).json({
            message:"Error in finding!"
        })
    }
}

module.exports.updateUserById = async function(req, res){
    try{
        let {payload, data} = req.body;
        console.log(data);
        let user = await User.findOne({"_id": payload.id});
        if(user){
            for(let key in data){
                user[key] = data[key];
            }
            let updatedUser = await user.save();
            res.status(200).json({
                message:"User Updated",
                updatedUser
            })
        }else{
            res.status(200).json({
                message:"No user Found"
            })
        }  
    }
    catch(err){
        res.status(400).send("Error Occured")
    }
    
}

module.exports.deleteUserById = async function(req, res){
    try{
        let { payload } = req.body;
        await User.findByIdAndDelete({"_id": payload.id}, (err, result)=>{
            if(err) return err
            if(result){
                res.status(200).json({
                    message:"user deleted successfully!",
                    result
                })
            }
        })
    }
    catch(error){
        res.json({
            message:"failed to delete",
            error
        })
    }
}

module.exports.updateProfilePhoto = async function(req ,res, next){
    try{
        let file = req.file;
        console.log(file);
        let imagePath = file.destination + "/" + file.filename;
        imagePath = imagePath.substring(6);
        console.log(imagePath);
        let id = req.id;
        let user = await userModel.findById(id);
        console.log(user);
        user.pImage = imagePath;
        let x = await user.save();
        res.json({
            message:"Profile Image Updated!"
        })
    }
    catch(err){
        res.status(200).json({
            message:"failed to update photo",
            err
        })
    }
}