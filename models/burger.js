var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
    },
    



    model.exports = burger;
    