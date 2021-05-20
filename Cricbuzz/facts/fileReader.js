let fs = require("fs");
let cheerio = require("cheerio");


let fileContent = fs.readFileSync("./f1.txt");
console.log(fileContent + "");

let htmlFile = fs.readFileSync("./index.html");
console.log(htmlFile + "");

let ch = cheerio.load(htmlFile);

let h1Tag = ch("h1").text();

console.log(h1Tag);