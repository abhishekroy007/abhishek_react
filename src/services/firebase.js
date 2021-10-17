import firebase from "firebase";
const config = {
  apiKey: "YOUR_DETAILS_HERE",
  authDomain: "YOUR_DETAILS_HERE.firebaseapp.com",
  databaseURL: "https://YOUR_DETAILS_HERE.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
