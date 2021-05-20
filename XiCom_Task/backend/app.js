const express = require("express");
const { userRouter } = require("./router/userRouter");
const app = express();


app.use( express.json());
app.use( express.static("public"));

app.use("/api/user", userRouter);

let port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`server started at Port no ${port}`);
} )