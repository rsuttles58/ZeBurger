var mysql = require("mysql");
// var login = require("../login")
var connection;

//jawsDB database connection protocol for connecting to the burgers_db
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.SECRET_KEY,
    database: "burgers_db"
});
}

//Database connection is attempted.  If error, error is logged.
// else, connection threadID is logged.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
