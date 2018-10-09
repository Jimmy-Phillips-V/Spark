const sequelize = require("sequelize");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  zip: {type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;


//Jimmy's Code
const firebase = require("../client/src/base")
var database = firebase.database();


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    uid: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var name = user.name;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var uid = user.uid;
        // ...
        console.log(name)
        console.log(uid)
    
  
        var newUser = {
          name: name,
          uid: uid,
          email: email
          }
        }
      
    database.ref('/login').push(newUser);
    // window.location.replace("/local");
  })

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  return User;
};


