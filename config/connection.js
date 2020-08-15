// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "	fva4oxd13vjkmq49",
  password: "miwbb2piep6tfjio",
  database: "kbk4fne2j55zwfu9"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    //console.error("error connecting: " + err.stack);
    return;
  }
  //console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
