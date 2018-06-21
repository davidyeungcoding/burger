var orm = require('../config/orm.js');

var burger = {

    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(colName, newBurger, cb) {
        orm.insertOne('burgers', colName, newBurger, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne('burgers', condition, function(res) {
            cb(res);
        });
    }

};

module.exports = burger;