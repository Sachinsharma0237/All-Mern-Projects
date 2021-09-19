const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const plans = require('./db/plans.json');
const userDB = require('./db/userDB.json');
const fs = require('fs');
const { v4 : uuidv4 } = require('uuid');
const path = require('path');
const jwt = require('jsonwebtoken');
app.use( express.static('public') );
app.use( express.json() );
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // ?


app.use( function(req, res, next) {
    console.log("Middleware of backend");
    next();
})

//###########################USERS##################################################

// function getAllUsers(req, res){
//     if(userDB.length){
//         res.status(200)
//         .json({
//             users: userDB
//         })
//     }else{
//         res.status(404).send("no user found");
//     }
// }
// async function createUser(req, res){
//     let user = await req.body;
//     if( user != null ){
//         user.id = uuidv4();
//         userDB.push(user);
//         fs.writeFileSync('./db/userDB.json', JSON.stringify(userDB));
//         res.status(200)
//         .json({
//             message:"user created successfully",
//             user: user
//         })
//     }else{
//         res.json(400).send('bad request');
//     }
// }
// function getUserById(req, res){
//     let id = req.params.id;
//     let filteredUser = userDB.filter( user=>{
//         user.id == id;
//     })
//     if(filteredUser){
//         res.status(200)
//         .json({
//             user: filteredUser
//         })
//     }else{
//         res.status(404).send("no user found");
//     }
// }
// function updateUserById(req, res){
//     let id = req.params.id;
//     let updatedData = req.body;
//     let filteredUser = userDB.filter( user=>{
//         return user.id == id;
//     })
//     if(filteredUser){
//         for(key in updatedData){
//             filteredUser[key] = updatedData[key];
//         }
//         fs.writeFileSync('./db/userDB.json', JSON.stringify(userDB))
//     }else{
//         res.status(400).send('bad request');
//     }
// }
// function deleteUserById(req, res){
//     let id = req.params.id;
//     let filteredUsers = userDB.filter( user=>{
//         return user.id != id;
//     })
//     if(filteredUsers != userDB ){
//         res.status(200).send("user deleted successfully");
//         fs.writeFileSync('./db/userDB.json', JSON.stringify(filteredUsers));
//     }else{
//         res.status(404).send("no user found");
//     }
// }

// app.get('/api/user', getAllUsers );
// app.post('/api/user', createUser );
// app.get('/api/user/:id', getUserById );
// app.patch('/api/user/:id', updateUserById );
// app.delete('/api/user/:id', deleteUserById );

// //###########################PLANS##################################################


// function getAllPlans(req ,res){
//     if( plans.length > 0 ){
//         res.status(200)
//         .json({
//             data: plans
//         })
//     }else{
//         res.status(404).send("No Result Found");
//     }
// }
// async function createPlans(req, res){
//     let plan = await req.body;
//     if( plan !== null ){
//         plan.id = uuidv4();
//         plans.push(plan);
//         fs.writeFileSync( './db/plans.json', JSON.stringify(plans) );
//         res.status(201)
//         .json({
//             message:"plan pushed inside db",
//             plan
//         })
//     }else{
//         res.status(400).send('bad request');
//     }
// }
// function getPlanById(req, res){
//     let { id } = req.params;
//     let filteredPlan = plans.filter( plan=>{
//         return plan.id == id;
//     })
//     if( filteredPlan.length > 0 ){
//         res.status(201)
//         .json({
//             message:"got plan",
//             plan: filteredPlan
//         })
//     }else{
//         res.status(404).send("no result found");
//     }
// }
// function updatePlanById(req, res){
//     let { id } = req.params;
//     let updateObj = req.body;
    
//     let filteredPlan = plans.filter( (plan)=>{
//         return plan.id == id;
//     })
//     if( filteredPlan.length ){
//         let plan = filteredPlan[0];
//         for(key in updateObj){
//             plan[key] = updateObj[key];
//         }
//         fs.writeFileSync('./db/plans.json', JSON.stringify(plans));
//         res.status(200).send("plan updated");
//     }else{
//         res.status(400).send("no changes found");
//     }
// }
// function deletePlanById(req, res){
//     let { id } = req.params;
//     let filteredPlan = plans.filter( plan=>{
//         return plan.id != id;
//     })
//     if( filteredPlan.length == plans.length ){
//         res.status(404).send("no document found")
//     }else{
//         fs.writeFileSync( './db/plans.json', JSON.stringify(filteredPlan) );
//         res.status(200).send("plan deleted successfully");
//     }
// }

// app.get('/api/plans', getAllPlans );
// app.post('/api/plans', createPlans );
// //get a plan by ID
// app.get('/api/plans/:id', getPlanById );
// //update a plan by ID
// app.patch('/api/plans/:id', updatePlanById );
// //delete a plan by ID
// app.delete('/api/plans/:id', deletePlanById )


app.post('/tokenCreator', (req,res)=>{
    let {email, password} = req.body;

    const token = jwt.sign({id:"49dfosdkfdsf"}, "secretKey")
    console.log(token);
    res.status(200).json({
        token
    })
})

app.post('/tokenVerify', (req,res)=>{
    const {token} = req.body;
    const payLoad = jwt.verify(token, "secretKey");
    res.status(200).json({
        payLoad
    })
    console.log(payLoad)
})

app.get('/', (req, res)=>{
    res.status(200).send("It's Working !!!");
})

app.listen( port, (req, res)=>{
    console.log(`Server listening at port no ${port}`)
})