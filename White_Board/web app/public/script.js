const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');

let {top : canvasTop} = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;


//---------------------------------------------------------------------------------------------------------------------------------------------

let db = [];
let line = [];
let redoDb = [];

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight - canvasTop;
    canvas.width = window.innerWidth;
    socket.emit("resize", db);
    redraw();
});

let isPenDown = false;
canvas.addEventListener("mousedown", function(e){
    let x = e.clientX;
    let y = e.clientY - canvasTop;  
    isPenDown = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
    let pointObj = {
        id : 'md',
        x : x,
        y : y,
        width : ctx.lineWidth,
        color : ctx.strokeStyle,
        corner : ctx.lineCap
    }
    line.push(pointObj);
    socket.emit("mousedown", pointObj);
})
canvas.addEventListener("mousemove", function(e){
    if(isPenDown){
        let x = e.clientX;
        let y = e.clientY - canvasTop;
        //ctx.lineCap = "butt" || "round" || "square";
        ctx.lineTo(x, y);
        ctx.stroke();
        let pointObj = {
            id : 'mm', 
            x : x,
            y : y,
            width : ctx.lineWidth,
            color : ctx.strokeStyle,
            corner : ctx.lineCap
        }
        line.push(pointObj);
        socket.emit("mousemove", pointObj);
    } 
});
canvas.addEventListener("mouseup", function(e){
    isPenDown = false;
    db.push(line);
    line = [];
});

//--------------------------------------------------------------------------------------------------------------------------------------------

function redraw(){
    for(let i = 0; i < db.length; i++){
        let line = db[i];
        for(let j = 0; j < line.length; j++){
            let lineObj = line[j];
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
};

//----------------------------------------------------------Redraw Logic----------------------------------------------------------------------