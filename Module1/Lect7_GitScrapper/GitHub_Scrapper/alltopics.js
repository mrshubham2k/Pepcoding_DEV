let gitlink = 'https://github.com/topics';
const request = require("request");
const cheerio = require("cheerio");
const linkrecieve = require("./topics");

request(gitlink, function(err, res, data)
{
    processlink(data);
})

function processlink(data)
{
    let ch = cheerio.load(data);

    let alltopics = ch(".topic-box a");
    for(let i=0;i<alltopics.length;i++)
    {
        let topiclink = "https://github.com"+ch(alltopics[i]).attr("href")
        // console.log(topiclink);
        linkrecieve(topiclink);
    }
}