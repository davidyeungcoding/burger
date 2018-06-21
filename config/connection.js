var mysql = require('mysql');

var connection = mysql.createConnection(process.env.JAWSDB_URL || process.env.local);

connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connection established as ID: ${connection.threadId}`);
});

module.exports = connection;