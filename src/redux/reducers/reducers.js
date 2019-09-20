import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import addressReducer from './address/addressReducer';
import modalsReducer from './modals/modalsReducer';
import ordersReducer from './orders/ordersReducer';

//Combining all the reducers that will be used in the app
export const reducers = combineReducers({
  cartReducer,
  addressReducer,
  modalsReducer,
  ordersReducer,
});