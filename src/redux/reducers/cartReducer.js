import debug from '../../utils/debug';
 
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      debug.log('In cartReducer, ADD_TO_CART ', action.item);
      return [...state, action.item];
    case 'REMOVE_FROM_CART':
      debug.log('Removing' , action.item);
      return state.filter(e => e !== action.item);
    default:
      return state;
  }
};

export default cartReducer;