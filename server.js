// ==================
// || REQUIREMENTS ||
// ==================

var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_contoller.js');

// ===============
// || VARIABLES ||
// ===============

var PORT = process.env.PORT || 8080;
var app = express();

// =========
// || APP ||
// =========

app.use(express.static('publlic'));
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