var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "demouser",
  password: "DemoPassword4*",
  database: "fintechdb"
});
//pull data from database
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM book", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });