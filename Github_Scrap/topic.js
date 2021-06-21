const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

function processOneTopic(topicInfoObject){
   let {topicLink} = topicInfoObject;
   request(topicLink, function cb(err, resp, html){
      processData(html);
   })
}

function processData(html){
   let ch = cheerio.load(html);
}