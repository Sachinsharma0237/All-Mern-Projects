let cheerio = require("cheerio");
let request = require("request");
const getAllMatches = require("./allMatches");

request("https://www.cricbuzz.com/cricket-series/3130/indian-premier-league-2020", function(error, response, data){
        fun(data);
})
function fun(html){
    let ch = cheerio.load(html);
    let aTag = ch('.cb-col.cb-col-100.cb-more-btn-cntnr a[href="/cricket-series/3130/indian-premier-league-2020/matches"]');
    let link = aTag.attr("href");
    let completeLink = "https://www.cricbuzz.com" + link;
    console.log("first Link");
    console.log(completeLink);
    //https://www.cricbuzz.com/cricket-series/3130/indian-premier-league-2020/matchesns
    getAllMatches(completeLink);
}