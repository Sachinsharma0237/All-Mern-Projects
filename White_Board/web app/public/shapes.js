const shape = document.querySelector("#shape");
const shapeOptions = document.querySelector("#shapeOptions");
const myShape = document.querySelector(".myShape");
const circleShape = document.querySelector(".circleShape");
const squareShape = document.querySelector(".squareShape");
const ovalShape = document.querySelector(".ovalShape");
const triangleShape = document.querySelector(".triangleShape");
const circleInput = document.querySelector("#circle-input");
shape.addEventListener("click", function(){
    clickSound();
    if (shape.classList.contains("active-tool")) {
        if (shapeOptions.classList.contains("hide")) {
            shapeOptions.classList.remove("hide");
        }
        else {
            shapeOptions.classList.add("hide");
        }
    } else {
        if(!pencilOptions.classList.contains("hide") || !eraserOptions.classList.contains("hide") || !cornerOptions.classList.contains("hide")   ){
            pencilOptions.classList.add("hide");
            eraserOptions.classList.add("hide");
            cornerOptions.classList.add("hide");
        }
        pencil.classList.remove("active-tool");
        eraser.classList.remove("active-tool");
        corner.classList.remove("active-tool");
        shape.classList.add("active-tool");
    }
});

circleShape.addEventListener("click", function(){
    let rad = circleInput.value;
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.arc(500, 200, rad, 0, 2 * Math.PI);
    ctx.stroke();
});
squareShape.addEventListener("click", function(){
    let side = circleInput.value;
    ctx.strokeStyle = "black";
    ctx.lineWidth = "1";
    ctx.strokeRect(700, 100, side, side);
});
ovalShape.addEventListener("click", function(){
    let side = circleInput.value;
    ctx.beginPath();
    ctx.ellipse(150, 400, 50, side, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
});
triangleShape.addEventListener("click", function(){
    let side = circleInput.value;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 200);
    ctx.lineTo(200, side);
    ctx.lineTo(100, 100);
    ctx.stroke();
});


function clickSound(){
    const audio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatpellet.ogg");
    audio.play();
}