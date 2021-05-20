const puppeteer = require("puppeteer");
let text = "sachin";
let emailId = "sachinsharma0237@gmail.com";
let gTab;
let browserOpenPromise = puppeteer.launch({
                                headless:false,
                                defaultViewport: null,
                                args: ["--start-maximized"]
                        });


browserOpenPromise.then(function(browser){
    let pagePromise = browser.pages();
    return pagePromise;
})
.then(function(pages){
    let tab = pages[0];
    gTab = tab;
    let pageOpenPromise = tab.goto("https://www.youtube.com");
    return pageOpenPromise;
})
.then(function(){
    let signinPromise = waitAndClick('#button.style-scope.ytd-button-renderer.style-suggestive.size-small');
    return signinPromise;
})
.then(function(){
    let waitPromise = gTab.waitForNavigation({ waitUntil: 'networkidle0' });
    return waitPromise;
})
.then(function(){
    let enterIdPromise = gTab.type('input[aria-label="Email or phone"]', emailId);
    return enterIdPromise;
})
.then(function(){
    let nextPromise = waitAndClick('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc');
    return nextPromise;
})
/*
.then(function(){
    let typeSearchPromise = gTab.type('input[autocapitalize="none"]', text);
    return typeSearchPromise;
})
.then(function(){
    let searchClickPromise = waitAndClick('#search-icon-legacy.style-scope.ytd-searchbox');
    return searchClickPromise;
})
.then(function(){
    let videoClickPromise = waitAndClick('yt-formatted-string[aria-label="Sachin A Billion Dreams Full Movie Promotional .Event | Sachin Tendulkar, MS Dhoni Yuraj Singh | by prateekmovies 2 months ago 2 hours, 17 minutes 331,795 views"]');
    return videoClickPromise;
})
.then(function(){
    let likeClickPromise = waitAndClick('#top-level-buttons yt-icon-button[class="style-scope ytd-toggle-button-renderer style-text"]');
    return likeClickPromise;
})
*/
.catch(function(error){
    console.log(error);
})


function waitAndClick(selector){
    return new Promise(function(resolve, reject){
        let waitPromise = gTab.waitForSelector(selector, {visible : true});
        waitPromise.then(function(){
            let clickPromise = gTab.click(selector);
            return clickPromise;
        })
        .then(function(){
            resolve();
        })
        .catch(function(error){
            reject(error);
        })
    });
}