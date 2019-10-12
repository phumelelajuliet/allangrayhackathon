import * as require from './node_modules/require.js/require.js';
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
    var sqlbook = "CREATE TABLE if not exists book (id INT AUTO_INCREMENT PRIMARY KEY, ISBN13 VARCHAR(255),ISBN10 VARCHAR(255), author VARCHAR(255), edition VARCHAR(10), publisher VARCHAR(128),published date)";
    var sqlbookstore = "CREATE TABLE if not exists school (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),ISBN10 VARCHAR(255), location VARCHAR(255), status VARCHAR(10), publisher VARCHAR(128),published date)";
    var sqlbookstore = "CREATE TABLE if not exists bookstore (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),location VARCHAR(255))";
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
