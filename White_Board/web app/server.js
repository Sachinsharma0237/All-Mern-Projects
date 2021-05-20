// npm install express// npm install nodemon// npm install socket.io
/* This is Server side */
const express = require("express");
const app = express();

//Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use( express.static("public"));
 
 //on data consume  
io.on('connection', function(socket){
    console.log(`Connection id = ${socket.id}`);
    socket.on("mousedown", function(lineObj){
       socket.broadcast.emit("md", lineObj);
    });
    socket.on("mousemove", function(lineObj){
       socket.broadcast.emit("mm", lineObj);
    });
    socket.on("undoclick", function(db){
      socket.broadcast.emit("undosocket", db);
    });
    socket.on("redoclick", function(redoLine){
      socket.broadcast.emit("redosocket", redoLine);
    });
    socket.on("trashClean", function(){
      socket.broadcast.emit("trashCleared");
    });
    socket.on("resize", function(db){
      socket.broadcast.emit("resizeWindow", db);
    });
    

  });

  let port = process.env.PORT || 3000;
http.listen( port, function(){
    console.log(`Server on at port = ${port}`);
});
