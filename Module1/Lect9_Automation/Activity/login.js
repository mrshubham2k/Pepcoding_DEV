const puppeteer = require("puppeteer");
const id = "vehob39529@awinceo.com";
const psw = "1234509876";
let tab;

// puppeteer functions => promisifed functions

// open a browser

// You have to type ctrl+c to stop the automation in  the terminal window

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

browserOpenPromise.then(function (browserInstance) 
{
    let pagesPromise = browserInstance.pages();
    return pagesPromise; // Promise<Pending>
})
.then(function (pages)
{
    let page = pages[0];
    tab = page;
    let gotoPromise = tab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    return gotoPromise;
})
.then(function()
{
    let idpromise = tab.type("#input-1",id);
    return idpromise;
})
.then(function(){
    let pwdpromise = tab.type("#input-2",psw);
    return pwdpromise;
})
.then(function()
{
    let loginPromise = tab.click(".ui-btn.ui-btn-large  ");
    return loginPromise;
})
.then(function()
{
    // Wait for selector
    let waitpromise =  tab.waitForSelector("#base-card-1-link",{visible:true});
    return waitpromise;
})
.then(function()
{
    let nextpromise = tab.click('#base-card-1-link');
    return nextpromise;
})
.then(function()
{
    let waitpromise = tab.waitForSelector('a[data-attr1="warmup"]',{visible:true});
    return waitpromise;
})
.then(function()
{
    let nextpromise = tab.click('a[data-attr1="warmup"]');
    return nextpromise;
})
.then(function(){
    let waitPromise = tab.waitForSelector('.js-track-click.challenge-list-item');
    return waitPromise;
})
.then(function(){
    let allATagsPromise = tab.$$('.js-track-click.challenge-list-item');
    return allATagsPromise;
})
.then(function(allATags){
    //[<a href=""></a> , <a ></a> , <a></a> , <a></a> ];
    let allQuesLinksPromise = [];
    for(let i=0 ; i<allATags.length ; i++){
        let quesLinkPromise = tab.evaluate( function(elem){  return elem.getAttribute("href");   }  , allATags[i] );
        allQuesLinksPromise.push(quesLinkPromise);
    }
  //   allQuesLinkPromise = [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
  let combinedPromise = Promise.all(allQuesLinksPromise);
  return combinedPromise; //Promise<Pending>
})
.then(function(allQuesLinks){
    console.log(allQuesLinks);
})
.then(function()
{
    console.log("Login Sucessfull");
})
.catch(function(error)
{
    console.log(error);
})
