import * as firebase from "firebase/app";
import "firebase/database";

//Read from db
export const getFoodItems = () => {
  const foodItems = [];
  var query = firebase.database().ref("/foodItems").orderByKey();
  query.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        // key will be "ada" the first time and "alan" the second time
        var key = childSnapshot.key;
        // childData will be the actual contents of the child
        var childData = childSnapshot.val();
        foodItems.push(childData);
    });
  });
  return foodItems;
}