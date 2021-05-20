const express = require("express");
const postRouter = require("./router/postRouter");
const app = express();


app.use( express.json() );
app.use( express.static("public") );

app.use("/api/user", postRouter);

app.listen("4000", function(req, res){
    console.log("Server created at 4000");
})