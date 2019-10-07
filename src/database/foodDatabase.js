import * as firebase from "firebase/app";
import "firebase/database";
import debug from '../utils/debug';

//Read from db
export const getFoodItems = () => {
  const foodItems = [];
  var query = firebase.database().ref("/foodItems").orderByKey();
  query.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        foodItems.push(childData);
      });
      return foodItems;
  });
}