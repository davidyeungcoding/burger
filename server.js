// ==================
// || REQUIREMENTS ||
// ==================

var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_contoller.js');

// ==================
// || HEROKU SETUP ||
// ==================

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection ({
        host: 'q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'rlx5tmtmlpolqtai',
        password: 'lcl6lve3y3g8n311',
        database: 'afkbe9vacxchr40c'
    });
};

// ===============
// || VARIABLES ||
// ===============

var PORT = process.env.PORT || 8080;
var app = express();

// =========
// || APP ||
// =========

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(routes);


// ==============
// || LISTENER ||
// ==============

app.listen(PORT, function() {
    console.log(`App is now listening at localhost ${PORT}`);
});