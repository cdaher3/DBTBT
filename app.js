const express = require("express");
const scraper = require("./scraperclientjson.js");
let app = express();

app.listen(3001, () => {
  console.log("Server running on port 3000");
});

app.get("/search/:searchterm", (req, res) => {
  scraper.search(req.params.searchterm, function(message){
    res.json(message);
  });
});
