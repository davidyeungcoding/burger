var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: burgers_db
});

connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connection established as ID: ${connection.threadId}`);
});

module.exports = connection;