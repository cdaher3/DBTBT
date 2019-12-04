const express = require("express");
const cors = require("cors");
const scraper = require("./scraperclientjson.js");
const mysql = require("mysql");
let app = express();

app.use(cors());

// let dbconn = mysql.createConnection ({
//   host: "dbtbt326.cjwujllbnqqi.us-east-1.rds.amazonaws.com",
//   port: "3306",
//   user: "mlehoullier",
//   password: "DBTBT326",
//   database: "mydb"
// })



app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.get("/search/:searchterm", (req, res) => {
  scraper.search(req.params.searchterm, function(message){
    res.json(message);
  });
});

// app.get("/query/ticker=:ticker", (req, res) => {
//
// });
//
// app.get("/query/price=:price", (req, res) => {
//
// });
