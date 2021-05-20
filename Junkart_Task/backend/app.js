const express = require("express");
const userRouter = require("./router/userRouter");
const app = express();
app.use( express.static("public"));
app.use( express.json() );



app.use("/api/user", userRouter);


app.listen("4000",function(req, res){
    console.log("Server Started on Port 4000");
})