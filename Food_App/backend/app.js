const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const planRouter = require('./routes/planRouter');

app.use( express.static('public') );
app.use( express.json() );
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // ?


app.use( function(req, res, next) {
    console.log("Middleware of backend");
    next();
})

app.use("/api/user", userRouter );
app.use("/api/plans", planRouter);

app.get('/', (req, res)=>{
    res.status(200).send("It's Working !!!");
})

app.listen( process.env.PORT, (req, res)=>{
    console.log(`Server listening at port no ${process.env.PORT}`)
})