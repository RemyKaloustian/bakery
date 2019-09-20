import { 
  ADD_TO_CART,
  TOGGLE_REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  CLEAN_REMOVED_ITEMS,
  EMPTY_CART,
 } from '../../../actions/constants';
import { addToCart } from './cartReducerHelper';

const cartReducer = (state = [], action) => {
  let itemIndex = 0;
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(action.item,state);

    case TOGGLE_REMOVE_FROM_CART:
      itemIndex = state.findIndex(x => x.name === action.item);
      return [...state.slice(0,itemIndex), {...state[itemIndex], isRemoved:action.isRemoved},...state.slice(itemIndex+1, state.length)];

    case CHANGE_QUANTITY:
      itemIndex = state.findIndex(x => x.name === action.item);
      let newValue = state[itemIndex].qty + action.additionalQuantity;
      return [...state.slice(0,itemIndex), {...state[itemIndex], qty: newValue},...state.slice(itemIndex+1, state.length)];
    
    case CLEAN_REMOVED_ITEMS:
      let stateWithoutRemovedItems = state.filter(x => x.isRemoved === false);
      return stateWithoutRemovedItems;

    case EMPTY_CART:
      state = [];
      return state;
      
    default:
      return state;
  }
};

export default cartReducer;