require( './node_modules/datatables.net-dt' )();
require( './node_modules/datatables.net-buttons' )();
require('./node_modules/datatables.net-buttons-dt');
require( './node_modules/datatables.net-responsive' )();
require( './node_modules/datatables.net-responsive-dt' )();
require( './node_modules/datatables.net-select' )();
require( 'http' )();
require( 'mysql' )();


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "demouser",
  password: "DemoPassword4*",
  database: "fintechdb"
});

var server = app.listen(3000, function () {
  console.log('Server is running...');

var dataSet= ["1","2","3","4"];
  //table data document
  $(document).ready(function() {
    $('#bookPurchase').DataTable({
      data: dataSet,
        columns: [
            { title: "Author" },
            { title: "Title" },
            { title: "ISBN13" },
            { title: "Rating" }
        ]
    });});});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "demouser",
  password: "DemoPassword4*",
  database: "fintechdb"
});
//create the book table
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE if not exists book (id INT AUTO_INCREMENT PRIMARY KEY, ISBN13 VARCHAR(255),ISBN10 VARCHAR(255), author VARCHAR(255), edition VARCHAR(10), publisher VARCHAR(128),published date)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
  });
});

//create a school table
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE if not exists school (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),ISBN10 VARCHAR(255), location VARCHAR(255), status VARCHAR(10), publisher VARCHAR(128),published date)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
  });
});

//create the bookstore table
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE if not exists bookstore (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),location VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
  });
});
