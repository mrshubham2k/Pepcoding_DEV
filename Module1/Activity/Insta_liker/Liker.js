const puppeteer = require("puppeteer");
const id = "yetanex190@greenkic.com";
const pw = "1029384756";
const cheerio = require("cheerio");

(async function(){
    try{
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
          });
        let pages = await browser.pages();
        let tab = pages[0];
        await tab.goto("https://www.instagram.com/accounts/login/");
        await tab.waitForSelector(`input[name="username`);
        await tab.type('input[name="username"]',id);
        await tab.type('input[name="password"]',pw);
        await tab.click('.sqdOP.L3NKy');
        await tab.waitForSelector(`.XTCLo.x3qfX`);
        await tab.type('.XTCLo.x3qfX',`pepcoding`);
        await tab.waitForSelector(`a[href="/pepcoding/"]`);
        await tab.click('a[href="/pepcoding/"]');
        await tab.waitForSelector(`span span[class="g47SY "]`);
        let noOfPost = await tab.$eval(`span span[class="g47SY "]`,el => el.innerText);
        await tab.waitForSelector(`a[href="/p/CQS4b2BLUgw/"]`);
        await tab.click(`a[href="/p/CQS4b2BLUgw/"]`);
        for(let i=0;i<noOfPost;i++)
        {
            await tab.waitForSelector(`.ltpMr.Slqrh svg[aria-label="Like"]`);
            await tab.click(`.ltpMr.Slqrh svg[aria-label="Like"]`);
            await tab.click(` .coreSpriteRightPaginationArrow`);
        }
    }
    catch(err)
    {
        console.log(err);
    }
    
})();