let radius = [1, 2, 3, 4];
/*callback Functions*/
const area = function(radius){
    return Math.PI*radius*radius;
}
const diameter = function(radius){
    return radius*2;
}
const circumference = function(radius){
    return Math.PI*2*radius;
}
/*callback Functions*/

const  calculate = function(radius, logic){
    let output = [];
    for(let i = 0; i < radius.length; i++){
        output.push( logic(radius[i]) );
    }
    return output;
}

console.log( calculate( radius, area ) );
console.log( calculate( radius, diameter ) );
console.log( calculate( radius, circumference ) );
