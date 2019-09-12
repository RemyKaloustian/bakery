import { ADD_ADDRESS, SELECT_ADDRESS_FOR_ORDER, REMOVE_ADDRESS_FROM_ORDER, TOGGLE_ADDRESS_SELECTION_IN_ORDER } from "../../actions/constants";
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
        return [...state, action.address];

      case SELECT_ADDRESS_FOR_ORDER:
        debug.log('SELECT_ADDRESS_FOR_ORDER', action.address);
        itemIndex = state.findIndex(x => x.address === action.address);
        return [...state.slice(0,itemIndex), 
                {...state[itemIndex], isSelected: true},
                ...state.slice(itemIndex+1, state.length)];

      case REMOVE_ADDRESS_FROM_ORDER:
        debug.log(REMOVE_ADDRESS_FROM_ORDER, action.address);
        itemIndex = state.findIndex(x => x.address === action.address);
        return [...state.slice(0,itemIndex), 
                {...state[itemIndex], isSelected: false},
                ...state.slice(itemIndex+1, state.length)];

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
  
  export default addressReducer;