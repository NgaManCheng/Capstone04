import firebase from "firebase";
import "@firebase/firestore";
import "firebase/firestore";

  var firebaseConfig = {
    apiKey: "AIzaSyCwU0ujuoOeE7uz1TbNvBNyMs-dHhnCdb8",
    authDomain: "capstone-rutgers.firebaseapp.com",
    databaseURL: "https://capstone-rutgers.firebaseio.com",
    projectId: "capstone-rutgers",
    storageBucket: "",
    messagingSenderId: "409337452213",
    appId: "1:409337452213:web:9be9a4716b105066e910fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth()
  export const firestore = firebase.firestore();
  export default firebase;
