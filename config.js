import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCMuWeIb0AwsmnhkuzzZ3rlIerC50OjFWA",
  authDomain: "bgffgfdgdfgggggg.firebaseapp.com",
  projectId: "bgffgfdgdfgggggg",
  storageBucket: "bgffgfdgdfgggggg.appspot.com",
  messagingSenderId: "892856568063",
  appId: "1:892856568063:web:166faf758c46d05de8a4ca"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
