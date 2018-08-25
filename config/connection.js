var mysql      = require('mysql');

var jawsUrl = process.env.JAWSDB_MARIA_URL;
var local = {
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'password',
  database : 'burgers_db'
};

var connection;
if(typeof jawsUrl !== 'undefined'){
  connection = mysql.createConnection(jawsUrl);
}
else{
  connection = mysql.createConnection(local);
}
 


// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  