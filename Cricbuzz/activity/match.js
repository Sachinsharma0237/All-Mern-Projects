let request = require("request");
let cheerio = require("cheerio");

request("https://www.cricbuzz.com/cricket-scores/31622/mi-vs-dc-final-indian-premier-league-2020", function(error, response, data){
        myFun1(data);
})
function myFun1(html){
    let ch = cheerio.load(html);
    let aTag = ch('a[href="/live-cricket-scorecard/31622/mi-vs-dc-final-indian-premier-league-2020"]');
    let link = ch(aTag).attr("href");
    let completeLink = "https://www.cricbuzz.com" + link;
    console.log("myLink");
    console.log(completeLink);
    myFun2(completeLink);
}
function myFun2(link){
    request(link, function(error, response, data){
        myFun3(data);
    })
}
function myFun3(html){
    let ch = cheerio.load(html);
    let firstInning = ch('#innings_1');
    let secondInning = ch('#innings_2');
    let teamName1 = ch(firstInning).find('#innings_1 .cb-col.cb-col-100.cb-scrd-hdr-rw').text();
    teamName1 = teamName1.split("Innings")[0].trim();
    console.log(teamName1);
    let teamName2 = ch(secondInning).find('#innings_2 .cb-col.cb-col-100.cb-scrd-hdr-rw').text();
    teamName2 = teamName2.split("Innings")[0].trim();
    console.log(teamName2);
    let allTrs = ch(firstInning).find("#innings_1 .cb-col.cb-col-100.cb-ltst-wgt-hdr");
    for(let j = 2; j <= 8; j++){
        let allTds = ch(allTrs[j]).find("")
    }
}


// #innings_1 .cb-col.cb-col-100.cb-ltst-wgt-hdr   ==> iske andar sarre player ki info hai
// #innings_1 .cb-col.cb-col-100.cb-ltst-wgt-hdr .cb-col.cb-col-100.cb-scrd-itms => iske andar player ka sarra data