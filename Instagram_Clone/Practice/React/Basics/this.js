// "use strict";
name = "Steve";


let obj = {
    name:"SAchin Sharma",
    sayHi : function(){
        console.log(this);
        console.log("hi from sayHi function");
         callMe = () => {
            console.log("inside callMe");
            console.log(this);
        }
        callMe();    //Function Call
    }
}

obj.sayHi();        //Method Call

function fun(){
    console.log(this.name);
    console.log("Hello from fun!!!");
}

fun();