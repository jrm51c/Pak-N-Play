// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var inventory = {
  all: function(cb) {
    orm.all("stock", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("stock", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("stock", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (itemsController.js).
module.exports = inventory;
