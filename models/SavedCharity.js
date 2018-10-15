const firebase = require("../client/src/base")
var database = firebase.database();


module.exports = function(sequelize, DataTypes) {
  var SavedCharity = sequelize.define("Charities", {
    uid: DataTypes.STRING,
    charityName: DataTypes.String,
    
  })
  return SavedCharity;
}
