import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8qgjRKOiCjXtR1BbVSpur6fsrF0d__EQ",
  authDomain: "catch-of-the-day-hhmch.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-hhmch.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
