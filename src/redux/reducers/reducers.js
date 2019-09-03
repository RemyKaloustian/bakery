import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import cartReducer from './cartReducer';

//Combining all the reducers that will be used in the app
export const reducers = combineReducers({
  foodReducer,
  cartReducer,
});