/* CRUD ============>>>>>> Create Read Update Delete */ 
const mysqlConnection = require('../model/db');

async function createUser(req, res){
    try{
        let {firstName, lastName, emailId, mobile, password}  = req.body;
        if( !req.file ){
            return res.status(400).send("No files were uploaded");
        }else{
            let profilePicPath = req.file.destination.substring(6) + "/" + req.file.filename;
            console.log(profilePicPath);
            let sql = `INSERT INTO userdata (first_name, last_name, email_id, image, mob_no, password) VALUES('${firstName}', '${lastName}', '${emailId}', '${profilePicPath}', ${mobile}, '${password}' ); `
            mysqlConnection.query(sql, (error, result)=>{
                if(!error){
                    res.json({
                        message:"User Created Successfully",
                        result
                    })
                }else{
                    res.json({
                        message:"Failed to create user",
                        error
                    })
                }
            })
        }
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
        await mysqlConnection.query(' SELECT * FROM userdata',(error, rows, fields)=>{
            if(!error){
                console.log(rows );
                res.json({
                    message:"Successfully got All Users",
                    rows
                })
            }else{
                res.json({
                    error
                })
            }
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
        await mysqlConnection.query('SELECT * FROM userdata WHERE id=?',[req.params.id], (error, rows, fields)=>{
            if( !error ){
                res.json({
                    message:"Got user Successfully",
                    rows
                })
            }else{
                res.json({
                    message:"Failed to get user",
                    error
                })
            }
        })
    }
    catch(error){
        res.json({
            message:"Failed to get user by id",
            error
        })
    }
}
async function updateUserById(req, res){
    try{
        let profilePicPath;
        let id = req.params.id;
        let {firstName, lastName, emailId, mobile, password}  = req.body;
        if( req.file ){
            let userPath = req.file.destination.substring(6) + "/" + req.file.filename;
            profilePicPath = userPath;
        }

        let sql = `UPDATE userdata SET
                    first_name = '${firstName}',
                    last_name = '${lastName}',
                    email_id = '${emailId}',
                    mob_no = ${mobile},
                    image = '${profilePicPath}',
                    password = '${password}'
                    WHERE id = ${id}`  
        await mysqlConnection.query(sql, (error, result)=>{
            if(!error){
                res.json({
                    message:"User updated",
                    result    
                })
            }else{
                res.json({
                    message:"Failed to update user",
                    error
                })
            }
        })      
    }
    catch(error){

    }
}
async function deleteUserById(req, res){
    try{
        await mysqlConnection.query('DELETE FROM userdata WHERE id = ? ', [req.params.id], (error, rows, fields)=>{
            if( !error ){
                res.json({
                    message:"User Deleted Successfully",
                    rows
                })
            }else{
                res.json({
                    message:"Failed to delete User",
                    error
                })
            }
        })
    }
    catch(error){
        res.json({
            message:"Failed to delete user by id",
            error
        })
    }
}

module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;

