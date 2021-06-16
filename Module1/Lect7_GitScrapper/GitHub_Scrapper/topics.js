
const request = require("request");
const cheerio = require("cheerio");
const linkload = require("./issues");
const fs = require("fs");
function linkrecieve(topiclink)
{
    request(topiclink , function (err, res,data)
    {
        workonlink(data);
    });
}

function workonlink(data)
{
    let ch = cheerio.load(data);
    let topicname = ch(".col-sm-10 h1").text().trim();
    let topicstopten = ch("article .px-3 .text-bold");
    // console.log(topicname);
    let topicnamepath = `./Github_topic/${topicname}` 
    if(!fs.existsSync(topicnamepath))
    {
        fs.mkdirSync(topicnamepath);
    }
    for(let i=0;i<10;i++)
    {
        let topicstoptenname = ch(topicstopten[i]).text().trim().split("/");
        let newtopicname = topicstoptenname.join("_");
        let topicstoptennamepath = `${topicnamepath}/${newtopicname}`;
        if(!fs.existsSync(topicstoptennamepath))
        {
            fs.mkdirSync(topicstoptennamepath);
        }
        let toptenlink = "https://github.com" + ch(topicstopten[i]).attr("href")+"/issues";
        // console.log(toptenlink);
        linkload(toptenlink,topicstoptennamepath);
    }

}


module.exports = linkrecieve;