setTimeout( function(){
    console.log("Timer");
}, 5000 )

function x(){
    console.log("I'm x");
}
function y(x){
    console.log("I'm y");
    x();
}
y(x);