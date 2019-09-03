// reducers.js
import {  combineReducers,} from 'redux';

//temporary, will be placed in a config file
const foodItems = [
  'croissant', 
  'pain-au-chocolat', 
  'croissant-au-nutella',
  'brioche'];

//Temporary, will have its own file
export const foodReducer = (state = foodItems, action) => {
  switch (action.type) {
    case 'GET_FOOD':
      console.log("In foodReducer, GET_FOOD");
      return [...state, "yolo"];
    default:
      return state;
  }
};

  //Temporary will have its own file
export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log("In cartReducer, ADD_TO_CART "+ action.item);
      return [...state, action.item];
    case 'REMOVE_FROM_CART':
      console.log("Removing " + action.item);
      return state.filter(e => e !== action.item);
    default:
      return state;
  }
};
  
//Combining all the reducers that will be used in the app
export const reducers = combineReducers({
  foodReducer,
  cartReducer,
});