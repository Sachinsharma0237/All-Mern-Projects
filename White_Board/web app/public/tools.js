const pencil = document.querySelector("#pencil");
const pencilSize = document.querySelector("#pencil-size");
const pencilOptions = document.querySelector("#pencil-options");
const eraser = document.querySelector("#eraser");
const eraserSize = document.querySelector("#eraser-size");
const eraserOptions = document.querySelector("#eraser-options");

const black = document.querySelector(".black");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");
const indigo = document.querySelector(".indigo");
const brown = document.querySelector(".brown");

const undo = document.querySelector("#undo");
const redo = document.querySelector("#redo");

const trash = document.querySelector("#trash");
//-------------------------------------------------Pencil and Eraser Size----------------------------------------------------------------------
let lastPencilSize = 1;
let lastEraserSize = 1;
pencilSize.addEventListener("change", function(){
    lastPencilSize = pencilSize.value;
    ctx.lineWidth = lastPencilSize;
});

eraserSize.addEventListener("change", function(){
    lastEraserSize = eraserSize.value;
    ctx.lineWidth = lastEraserSize;
});

//---------------------------------------------------------------------------------------------------------------------------------------------

pencil.addEventListener("click", function(){
    clickSound();
    if(pencil.classList.contains("active-tool")){
        //options kholunga
        if(pencilOptions.classList.contains("hide")){
            pencilOptions.classList.remove("hide");
        }
        else{
            pencilOptions.classList.add("hide");
        }

    }else{
        ctx.strokeStyle = "black";
        ctx.lineWidth = lastPencilSize;
        if(!shapeOptions.classList.contains("hide") || !eraserOptions.classList.contains("hide") || !cornerOptions.classList.contains("hide")){
            eraserOptions.classList.add("hide");
            cornerOptions.classList.add("hide");
            shapeOptions.classList.add("hide");
        }
        corner.classList.remove("active-tool");
        eraser.classList.remove("active-tool");
        shape.classList.remove("active-tool");
        pencil.classList.add("active-tool");
    }

});
eraser.addEventListener("click", function(){
    clickSound();
    if(eraser.classList.contains("active-tool")){

        if(eraserOptions.classList.contains("hide")){
            eraserOptions.classList.remove("hide");
        }else{
            eraserOptions.classList.add("hide");
        }
    }else{
        ctx.strokeStyle = "white";
        ctx.lineWidth = lastEraserSize;
        if(!shapeOptions.classList.contains("hide") || !pencilOptions.classList.contains("hide") || !cornerOptions.classList.contains("hide")){
            pencilOptions.classList.add("hide");
            cornerOptions.classList.add("hide");
            shapeOptions.classList.add("hide");
        }
        corner.classList.remove("active-tool");
        pencil.classList.remove("active-tool");
        shape.classList.remove("active-tool");
        eraser.classList.add("active-tool");
    }
})



//--------------------------------------------------------------------Pencil Color-------------------------------------------------------------

black.addEventListener("click", function(){
    ctx.strokeStyle = "black";
});
red.addEventListener("click", function(){
    ctx.strokeStyle = "red";
});
blue.addEventListener("click", function(){
    ctx.strokeStyle = "blue";
});
green.addEventListener("click", function(){
    ctx.strokeStyle = "green";
});
orange.addEventListener("click", function(){
    ctx.strokeStyle = "orange";
});
yellow.addEventListener("click", function(){
    ctx.strokeStyle = "yellow";
});
indigo.addEventListener("click", function(){
    ctx.strokeStyle = "indigo";
});
brown.addEventListener("click", function(){
    ctx.strokeStyle = "brown";
});
//----------------------------------------------------------------------------------------------------------------------------------------------

undo.addEventListener("click", function(){
    clickSound();
    if( db.length > 0 ){
        let undoLine = db.pop();
        redoDb.push(undoLine);
        socket.emit("undoclick", db);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redraw();
    }
});

redo.addEventListener("click", function(){
    clickSound();
    if(redoDb.length > 0){
        let redoLine = redoDb.pop();
        socket.emit("redoclick", redoLine);
        db.push(redoLine);
        for(let i = 0; i < redoLine.length; i++){
            let lineObj = redoLine[i];
            ctx.lineWidth = lineObj.width;
            ctx.strokeStyle = lineObj.color;
            ctx.lineCap = lineObj.corner;
            if(lineObj.id == 'md'){
                ctx.beginPath();
                ctx.moveTo(lineObj.x, lineObj.y);
            }else{
                ctx.lineTo(lineObj.x, lineObj.y);
                ctx.stroke();
            }       
        }
    }
});

//-----------------Trash bin--------------------------------------------------------
trash.addEventListener("click", function(){
    clickSound();
    db = [];
    redoDb = [];
    line = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    socket.emit("trashClean");
});





