var mysql = require('mysql');

var local = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'burgers_db'
}

var connection = mysql.createConnection(process.env.JAWSDB_URL || local);

connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connection established as ID: ${connection.threadId}`);
});

module.exports = connection;