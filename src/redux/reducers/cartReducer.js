import debug from '../../utils/debug';
import { 
  ADD_TO_CART,
  TOGGLE_REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  CLEAN_REMOVED_ITEMS,
  RESET_CART_REDUCER,
 } from '../../actions/constants';
 
const cartReducer = (state = [], action) => {
  let itemIndex = 0;
  switch (action.type) {
    case ADD_TO_CART:
      debug.log('cartReducer.ADD_TO_CART ', action.item);
        //  state = [];
      return addToCart(action.item,state);

    case TOGGLE_REMOVE_FROM_CART:
      debug.log('cartReducer.REMOVE_FROM_CART' , action.item);
      itemIndex = state.findIndex(x => x.name === action.item);
      return [...state.slice(0,itemIndex), {...state[itemIndex], isRemoved:action.isRemoved},...state.slice(itemIndex+1, state.length)];

    case CHANGE_QUANTITY:
      itemIndex = state.findIndex(x => x.name === action.item);
      let newValue = state[itemIndex].qty + action.additionalQuantity;
      debug.log('change_quantity', newValue);
      return [...state.slice(0,itemIndex), {...state[itemIndex], qty: newValue},...state.slice(itemIndex+1, state.length)];
    
    case CLEAN_REMOVED_ITEMS:
      let stateWithoutRemovedItems = state.filter(x => x.isRemoved === false);
      debug.log('clean cart from removed', stateWithoutRemovedItems);
      return stateWithoutRemovedItems;

    case RESET_CART_REDUCER:
      state = [];
      debug.log('reset cart reducer', state);
      return state;
      
    default:
      return state;
  }
};

const createItem = (name) => {
  return {  name,
            qty: 1, 
            isRemoved:false,
  };
}

const addToCart = (itemName, state) => {
  if (state.some(item=> item.name === itemName)) {
    let objectToUpdate = state.find(o=>o.name===itemName);
    debug.log('found object to update', objectToUpdate);
    objectToUpdate.qty += 1;
    debug.log('after qty update', objectToUpdate);
    return state;
  }
  else{
    debug.log('adding new item', itemName);
    return [...state, createItem(itemName)];
  }
}

export default cartReducer;