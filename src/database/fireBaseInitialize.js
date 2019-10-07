import * as firebase from "firebase/app";
import "firebase/database";

//NB: This part was cool to learn but I no longer use it
//because the synchronisation between redux and firebase was off scope
//of what I want to work on for this project(which is improve my skills with UI components).
//I leave it here just in case I want to go back to it after the main job is done.

export  let database  = [];
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
  
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
    
}

