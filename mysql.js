
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "dbtbt326.cjwujllbnqqi.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "mlehoullier",
    password: "DBTBT326",
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
  