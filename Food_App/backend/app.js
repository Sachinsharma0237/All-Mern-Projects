const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const planRouter = require('./routes/planRouter');
const database = require('./db/database');
const cors = require("cors");
const viewRouter = require('./routes/viewRouter');
require("express-async-errors");
const path = require("path");
const cookieParser = require('cookie-parser');
const { bookingRouter } = require('./routes/bookingRouter');

//########################################---MiddleWare---########################################
app.use( express.static(__dirname+'/public'));
app.use( express.json() );
app.use(cookieParser());
app.use( function(req, res, next) {
    if( req.path == '/api/user/login' || req.path == '/api/user/signup' ){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
            next();
        }else{
            res.status(400).send('Bad Request');
        }
    }else{
        next();
    }
})
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "view"));
//########################################---MiddleWare---########################################

app.use("/api/booking", bookingRouter);
app.use("/api/user", userRouter );
app.use("/api/plans", planRouter);
app.use("/", viewRouter);


app.listen( process.env.PORT, (req, res)=>{
    console.log(`Server listening at port no ${process.env.PORT}`)
})