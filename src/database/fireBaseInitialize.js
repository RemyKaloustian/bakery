import * as firebase from "firebase/app";
import "firebase/database";

export const fireBaseInitialize = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAvNF4_FhM3ptTaqZSdjrMfobj_PR4PLnA",
    authDomain: "bakery-f2ef1.firebaseapp.com",
    databaseURL: "https://bakery-f2ef1.firebaseio.com",
    projectId: "bakery-f2ef1",
    storageBucket: "bakery-f2ef1.appspot.com",
    messagingSenderId: "245447026612",
    appId: "1:245447026612:web:beb62795c0fc3d719cb4e1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("Initialized firebase");
  var database = firebase.database();

//Add item to DB
//   database.ref('foodItems/'+"0").set({
//     name: "croissant",
//   });

}

