const scraper = require('./scraperclientjson.js');

scraper.search("carpet", function(message){
  console.log(message);
});
