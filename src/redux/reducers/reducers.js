import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';
import modalsReducer from './modalsReducer';
import ordersReducer from './ordersReducer';

//Combining all the reducers that will be used in the app
export const reducers = combineReducers({
  foodReducer,
  cartReducer,
  addressReducer,
  modalsReducer,
  ordersReducer,
});