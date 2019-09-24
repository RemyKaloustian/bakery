import { ADD_ADDRESS, TOGGLE_ADDRESS_SELECTION_IN_ORDER, UPDATE_ADDRESS } from '../../../actions/constants';
import { createAddress } from './addressReducerHelper';

//temporary, will have its own file
const addresses = [
  {address:'Home', isSelected: false}, 
  {address:'Office', isSelected: false},
];
  
const addressReducer = (state = addresses, action) => {
  let itemIndex = 0;
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, createAddress(action.address)];

    case TOGGLE_ADDRESS_SELECTION_IN_ORDER:
      itemIndex = state.findIndex(x => x.address === action.address);
      return [...state.slice(0,itemIndex), 
              {...state[itemIndex], isSelected: action.isSelected},
              ...state.slice(itemIndex+1, state.length)];

    case UPDATE_ADDRESS:
      itemIndex = state.findIndex(x=> x.address === action.oldAddress);
      return [...state.slice(0,itemIndex), 
        {...state[itemIndex], address: action.newAddress},
        ...state.slice(itemIndex+1, state.length)];
        
    default:
      return state;
  }
};
  
export default addressReducer;