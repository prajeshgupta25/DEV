const request = require("request");
const cheerio = require("cheerio");

let link = "https://github.com/topics";

request(link, cb);

function cb(error, response, html){
   if(!error){
      evalHTML(html);
   }else{
      console.log("Error has occurred!");
   }
}

function evalHTML(html){
   let ch = cheerio.load(html);
   let allTopicATags = ch(".topic-box a");
   let allTopicInfo = [];
   // console.log(allTopicATags);

   for(let i=0; i<allTopicATags.length; i++){
      let oneTopicATag = ch(allTopicATags[i]);
      let oneTopicLink = "https://www.github.com" + oneTopicATag.attr("href");
      // let oneTopicName = oneTopicATag.find(".f3").text().trim();
      
      let oneTopicName = oneTopicLink.split("/").pop();
      allTopicInfo.push( {topicName:oneTopicName, topicLink:oneTopicLink} );
      // console.log(oneTopicName);
   }
   console.log(allTopicInfo);
}