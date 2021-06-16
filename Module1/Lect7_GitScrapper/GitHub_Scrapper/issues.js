
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

function linkload(toptenlink,topicstoptennamepath)
{
    request(toptenlink,function (err, res, data)
    {
        workonissues(data,topicstoptennamepath);
    })
}

function workonissues(data,topicstoptennamepath)
{
    let ch = cheerio.load(data);
    let topissues = ch('.js-navigation-container .js-issue-row a[data-hovercard-type="issue"]');

    for(let i=0;i<10;i++)
    {   
        // Filtering folder name
        let toptenissuesname = ch(topissues[i]).text().trim().split(" ")[0];// let x = toptenissuesname.join("_");
        let x = toptenissuesname.split(".")[0];
        let y = x.split('"')[0];
        let z = y.split("[")[0];
        let a = z.split("]")[0];
        let b = a.split("/")[0];
        let c = b.split(":")[0];
        let d = c.split("'")[0];
        let e = d.split(",")[0];

        // Generating address
        let toptenissues = "https://github.com" + ch(topissues[i]).attr("href");
        let issuespath = `${topicstoptennamepath}/${e}.json`;

        // Checking for files and saving
        if(!fs.existsSync(issuespath))
        {
            let detailsfile = [];
            let details = {
                Issues : toptenissuesname,
                Link : toptenissues
            }
            detailsfile.push(details);
            fs.writeFileSync(issuespath,JSON.stringify(details));
        } 
        // console.log(toptenissuesname);
        // console.log(toptenissues);
    }
}



module.exports = linkload;