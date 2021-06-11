const fs = require("fs");
const cheerio = require("cheerio");


let htmlkadata = fs.readFileSync("\index.html","utf-8");
let ch = cheerio.load(htmlkadata);

// For return value in text form
// let ptag = ch("p").text();
// console.log(ptag);


// get all the matching p tag inside ul tag
let ptagInsideul = ch("ul p").text();// particularly ul-->p
// console.log(ptagInsideul);

//direct ul children
let directptag= ch("ul>p").text();
// console.log(directptag);

// Inside div
let divptag = ch("ul div p").text();
// console.log(divptag);

// classes and Id's


