import { 
  ADD_TO_CART,
  TOGGLE_REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  CLEAN_REMOVED_ITEMS,
  EMPTY_CART,
 } from '../../actions/constants';
 
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

//TODO: Put these functions in their own helper file

const createItem = (name) => {
  return {  name,
            qty: 1, 
            isRemoved:false,
  };
}

const addToCart = (itemName, state) => {
  if (state.some(item=> item.name === itemName)) {
    let objectToUpdate = state.find(o=>o.name===itemName);
    objectToUpdate.qty += 1;
    return state;
  }
  else{
    return [...state, createItem(itemName)];
  }
}

export default cartReducer;