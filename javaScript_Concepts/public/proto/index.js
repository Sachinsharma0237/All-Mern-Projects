
let object = {
    name:"Sachin Sharma",
    age:"24",
    myIntro: function(){
        console.log(this.name + "my age" + this.age);
    }
}

let object2 = {
    name:"Steve"
}

object2.__proto__ = object;
