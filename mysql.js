
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "dbtbt326.cjwujllbnqqi.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "mlehoullier",
    password: "DBTBT326",
    database: "DBTBT326"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
  