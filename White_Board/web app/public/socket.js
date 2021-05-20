/** This is Client B */
socket.on("md", function(lineObj){
    //It'll save current setting of pen using ctx ki object
    let currentStrokeStyle = ctx.strokeStyle;
    let currentPenWidth = ctx.lineWidth;
    let currentCornerStyle = ctx.lineCap;
    let x = lineObj.x;
    let y = lineObj.y;

    //It'll set pen color and width according to lineObj
    ctx.strokeStyle = lineObj.color;
    ctx.lineWidth = lineObj.width;
    ctx.lineCap = lineObj.corner;

    ctx.beginPath();
    ctx.moveTo(x, y);

    //Again it'll set pen setting to original setting
    ctx.strokeStyle = currentStrokeStyle;
    ctx.lineWidth = currentPenWidth;
    ctx.lineCap = currentCornerStyle;
});
socket.on("mm", function(lineObj){
    let currentStrokeStyle = ctx.strokeStyle;
    let currentPenWidth = ctx.lineWidth;
    let currentCornerStyle = ctx.lineCap;
    let x = lineObj.x;
    let y = lineObj.y;

    ctx.strokeStyle = lineObj.color;
    ctx.lineWidth = lineObj.width;
    ctx.lineCap = lineObj.corner;

    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.strokeStyle = currentStrokeStyle;
    ctx.lineWidth = currentPenWidth;
    ctx.lineCap = currentCornerStyle;
});

socket.on("undosocket", function(undoDb){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redrawSocket(undoDb);
});

socket.on("redosocket", function(redoLine){
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
});

socket.on("resizeWindow", function(db){
    for(let i = 0; i < db.length; i++){
        let line = db[i];
        for(let j = 0; j < line.length; j++){
            let lineObj = line[j];
            ctx.lineWidth = lineObj.width;
            ctx.strokeStyle = lineObj.color;
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

socket.on("trashCleared", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function redrawSocket(socketDb){
    for(let i = 0; i < socketDb.length; i++){
        let line = socketDb[i];
        for(let j = 0; j < line.length; j++){
            let lineObj = line[j];
            ctx.strokeStyle = lineObj.color;
            ctx.lineWidth = lineObj.width;
            ctx.lineCap = lineObj.corner;
            if(lineObj.id == "md"){
                ctx.beginPath();
                ctx.moveTo(lineObj.x, lineObj.y);
            }else{
                ctx.lineTo(lineObj.x, lineObj.y);
                ctx.stroke();
            }
        }
    }
};