const mysql = require("mysql");

const dbconfig = {
  host: "dbtbt326.cjwujllbnqqi.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "mlehoullier",
  password: "DBTBT326",
  database: "mydb"
}

let pool = mysql.createPool(dbconfig);

query = async function(sql, callback) {
  pool.getConnection(function(err, con){
    if (err) throw err;
    con.query(sql, function(err, result, fields){
      if (err) throw err;
      callback(result);
    });
    con.release();
  });
};
module.exports.query = query;
