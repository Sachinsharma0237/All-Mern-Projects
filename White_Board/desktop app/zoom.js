const zoomIn = document.querySelector("#zoom-in");
const zoomOut = document.querySelector("#zoom-out");

zoomIn.addEventListener("click", function(){
    clickSound();
    zoomin();
})
zoomOut.addEventListener("click", function(){
    clickSound();
    zoomout();
})



function zoomin() { 
    let org = document.getElementById("canvas"); 
    let currHeight = org.clientHeight; 
    org.style.height = (currHeight + 40) + "px"; 
} 
function zoomout() { 
    let org = document.getElementById("canvas"); 
    let currHeight = org.clientHeight; 
    org.style.height = (currHeight - 40) + "px"; 
}