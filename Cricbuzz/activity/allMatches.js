let request = require("request");
let cheerio = require("cheerio");

function getAllMatches(link){
    request(link, function(error, response, data){
        myFun(data);
    })
}
function myFun(html){
    let ch = cheerio.load(html);
    let allATag = ch('a[class="text-hvr-underline"]');
    for(let i = 0; i < allATag.length; i++){
        let link = ch(allATag[i]).attr("href");
        let completeLink = "https://www.cricbuzz.com" + link;
        console.log(completeLink);
    }
}


module.exports = getAllMatches;