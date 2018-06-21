var mysql = require('mysql');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db'
    });
};

// var connection = mysql.createConnection(process.env.JAWSDB_URL || process.env.test);

connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connection established as ID: ${connection.threadId}`);
});

module.exports = connection;