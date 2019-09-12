import { ADD_ADDRESS, TOGGLE_ADDRESS_SELECTION_IN_ORDER } from "../../actions/constants";
import debug from "../../utils/debug";
//temporary, will have its own file
const addresses = [
    {address:'Home', isSelected: false}, 
    {address:'Office', isSelected: false},
    ];
  

  const addressReducer = (state = addresses, action) => {
    let itemIndex = 0
    switch (action.type) {
      case ADD_ADDRESS:
        debug.log('Adding an address in reducer', action.address);
        return [...state, createAddress(action.address)];

      case TOGGLE_ADDRESS_SELECTION_IN_ORDER:
          debug.log(TOGGLE_ADDRESS_SELECTION_IN_ORDER, action.address);
          itemIndex = state.findIndex(x => x.address === action.address);
          return [...state.slice(0,itemIndex), 
                  {...state[itemIndex], isSelected: action.isSelected},
                  ...state.slice(itemIndex+1, state.length)];

      default:
        return state;
    }
  };

  const createAddress = (address) =>{
    return { address, isSelected:false };
  }
  
  export default addressReducer;