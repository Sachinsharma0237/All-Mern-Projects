const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const plans = require('./db/plans.json');
const fs = require('fs');
const { v4 : uuidv4 } = require('uuid')

app.use( express.static('public') );
app.use( express.json() );


app.get('/api/plans', (req, res)=>{
    if( plans.length > 0 ){
        res.status(200)
        .json({
            data: plans
        })
    }else{
        res.status(404).send("No Result Found");
    }
})

app.post('/api/plans', async(req, res)=>{
    let plan = await req.body;
    if( plan !== null ){
        plan.id = uuidv4();
        plans.push(plan);
        fs.writeFileSync( './db/plans.json', JSON.stringify(plans) );
        res.status(201)
        .json({
            message:"plan pushed inside db",
            plan
        })
    }else{
        res.status(400).send('bad request');
    }
})

//get a plan by ID
app.get('/api/plans/:id', (req, res)=>{

    let { id } = req.params;
    let filteredPlan = plans.filter( plan=>{
        return plan.id == id;
    })
    if( filteredPlan.length > 0 ){
        res.status(201)
        .json({
            message:"got plan",
            plan: filteredPlan
        })
    }else{
        res.status(404).send("no result found");
    }

})

//update a plan by ID
app.patch('/api/plans/:id', (req, res)=>{
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
        fs.writeFileSync('./db/plans.json', JSON.stringify(plans));
        res.status(200).send("plan updated");
    }else{
        res.status(400).send("no changes found");
    }
})

//delete a plan by ID
app.delete('/api/plans/:id', (req, res)=>{
    let { id } = req.params;
    let filteredPlan = plans.filter( plan=>{
        return plan.id != id;
    })
    if( filteredPlan.length == plans.length ){
        res.status(404).send("no document found")
    }else{
        fs.writeFileSync( './db/plans.json', JSON.stringify(filteredPlan) );
        res.status(200).send("plan deleted successfully");
    }

})


app.get('/', (req, res)=>{
    res.status(200).send("It's Working !!!");
})

app.listen( port, (req, res)=>{
    console.log(`Server listening at port no ${port}`)
})