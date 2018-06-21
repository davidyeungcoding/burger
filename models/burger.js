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
    updateOne: function(colName, newValue, itemID, cb) {
        orm.updateOne('burgers', colName, newValue, itemID, function(res) {
            cb(res);
        });
    }

};

module.exports = burger;