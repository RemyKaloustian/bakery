import { combineReducers } from 'redux';
import addressReducer from './address/addressReducer';
import cartReducer from './cart/cartReducer';
import foodReducer from './food/foodReducer';
import modalsReducer from './modals/modalsReducer';
import ordersReducer from './orders/ordersReducer';

//Combining all the reducers that will be used in the app
export const reducers = combineReducers({
  addressReducer,
  cartReducer,
  foodReducer,
  modalsReducer,
  ordersReducer,
});