// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    // * `selectAll()` READ
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err , result){
            if(err){
                throw err
            };
            cb(result)
        });
    },
    //  * `insertOne()` CREATE
    insertOne: function(input, cb){
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)" , input, function(err , result){
            if(err){
                throw err
            };
            cb(result)
        })
    },
    //  * `updateOne()` UPDATE
    updateOne: function(devourValue, id, cb) {
        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devourValue, id], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
}

module.exports = orm;