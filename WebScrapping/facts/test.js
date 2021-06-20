const request = require("request");
const cheerio = require("cheerio");

let link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

request(link, cb);

function cb(error, response, html){
   evalhtml(html);
}

function evalhtml(html){
   let ch = cheerio.load(html);

   let res = ch(".match-header .status-text span").text();

   console.log(res);
}