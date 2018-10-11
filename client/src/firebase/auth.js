const firebase = require("firebase")
//import { FirebaseAuth } from '@firebase/auth-types';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyB8nJB4M4D0GTwOUBQlHen0tYSGfINrASA",
  authDomain: "spark-aec8c.firebaseapp.com",
  databaseURL: "https://spark-aec8c.firebaseio.com",
  projectId: "spark-aec8c",
  storageBucket: "spark-aec8c.appspot.com",
  messagingSenderId: "263817810568"
  };
firebase.initializeApp(config)

const auth = firebase.auth();

export {
    auth,
};