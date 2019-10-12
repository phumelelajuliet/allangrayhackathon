require( 'datatables.net-dt' )();
require( 'datatables.net-buttons-dt' )();
require( 'datatables.net-keytable-dt' )();
require( 'datatables.net-responsive-dt' )();
require( 'datatables.net-select-dt' )();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "demouser",
  password: "DemoPassword4*",
  database: "fintechdb"
});

var dataSet= ["1","2","3","4","5","6"]
  //table data document
  $(document).ready(function() {
    $('#bookPurchase').DataTable({
      data: dataSet,
        columns: [
            { title: "ISBN13" },
            { title: "ISBN10" },
            { title: "Author" },
            { title: "Edition" },
            { title: "Publisher" },
            { title: "Published" }
        ]
    });
} );