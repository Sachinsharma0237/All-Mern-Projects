const corner = document.querySelector("#corner");
const cornerOptions = document.querySelector("#corner-options");
const cornerType = document.querySelector(".corner-type");
const round = document.querySelector(".round");
const square = document.querySelector(".square");
const butt = document.querySelector(".butt");

let lastCornerStyle = "round";
corner.addEventListener("click", function () {
         clickSound();
    if (corner.classList.contains("active-tool")) {
        if (cornerOptions.classList.contains("hide")) {
            cornerOptions.classList.remove("hide");
        }
        else {
            cornerOptions.classList.add("hide");
        }
    } else { 
        ctx.lineCap = lastCornerStyle;
        if(!pencilOptions.classList.contains("hide") || !eraserOptions.classList.contains("hide")|| !shapeOptions.classList.contains("hide")){
            pencilOptions.classList.add("hide");
            eraserOptions.classList.add("hide");
            shapeOptions.classList.add("hide");        
        }
        pencil.classList.remove("active-tool");
        eraser.classList.remove("active-tool");
        shape.classList.remove("active-tool");
        corner.classList.add("active-tool");
    }
});
round.addEventListener("click", function(){
    ctx.lineCap = "round";
});
square.addEventListener("click", function(){
    ctx.lineCap = "square";
});
butt.addEventListener("click", function(){
    ctx.lineCap = "butt";
});

