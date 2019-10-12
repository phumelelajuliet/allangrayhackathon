import * as require from './node_modules/require.js/require.js'
//require( 'datatables.net-dt' )();
require( './node_modules/datatables.net-dt' )();
//require( 'datatables.net-buttons-dt' )();
require( './node_modules/datatables.net-buttons' )();
require('./node_modules/datatables.net-buttons-dt')
//require( 'datatables.net-keytable-dt' )();
require( './node_modules/datatables.net-keytable' )();
require('./node_modules/datatables.net-keytable-dt')
//require( 'datatables.net-responsive-dt' )();
require( './node_modules/datatables.net-responsive' )();
require( './node_modules/datatables.net-responsive-dt' )();
//require( 'datatables.net-select-dt' )();
require( './node_modules/datatables.net-select' )();
require( './node_modules/datatables.net-select-dt')();
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
    });
} );

//read json file into sql server