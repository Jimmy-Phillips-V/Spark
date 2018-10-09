const express = require("express");
const firebase = require("firebase")
const functions = require('firebase-functions');
const app = express();
// The Firebase Admin SDK to access the Firebase Realtime Database. 
//const admin = require('firebase-admin');
firebase.initializeApp();
//Name Triggers testData 
exports.testData = functions.database.ref('/data/{pushId}').onWrite(event => 
{
  // Grab the current value of what was written to the Realtime Database.
  const original = event.data.val();

});

// const sequelize = require("sequelize");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

var db = require("./models")

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/nytarticles"
// );

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    
  })
})


// Start the API server
// app.listen(PORT, () =>
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
// );



