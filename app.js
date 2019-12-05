const express = require("express");
const cors = require("cors");
const scraper = require("./scraperclientjson.js");
const mysql = require("mysql");
const query = require("./query.js")
let app = express();

app.use(cors());

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.get("/search/:searchterm", (req, res) => {
  scraper.search(req.params.searchterm, function(message){
    res.json(message);
  });
});

app.get("/query/ticker=:ticker", (req, res) => {
  query.query("SELECT Ticker_symbol, Price, Official_name from Stocks where Ticker_symbol = '" + req.params.ticker + "'", function(result){
    res.json(result);
  });
});

app.get("/query/price=:price", (req, res) => {
  query.query("SELECT Ticker_symbol, Price from Stocks where Price < '" + req.params.price + "' Order by Price desc limit 1", function(result){
    res.json(result);
  });
});
