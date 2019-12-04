
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "dbtbt326.cjwujllbnqqi.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "mlehoullier",
    password: "DBTBT326",
    database: "mydb"
  });


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO stocktest (ticker, price) VALUES ('ABC', 20)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

  // con.connect(function(err) {
  //   if (err) throw err;
  //   var sql = "SELECT * FROM stocktest";
  //   con.query(sql, function(err, result){
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // });
