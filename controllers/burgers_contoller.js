var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne('name', req.body.name, function(result) {
        res.json({id: result.id})
    });
});

router.update('/api/burgers/:id', function(req, res) {
    var condition = `id = ${req.params.id}`;
    console.log('condition', condition);
    burger.update({devoured: req.body.devoured}, condition, function(result) {
        if (results.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;