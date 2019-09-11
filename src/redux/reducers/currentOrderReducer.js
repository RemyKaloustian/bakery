import { ADD_ADDRESS_TO_ORDER, RESET_CURRENT_ORDER, REMOVE_ADDRESS_FROM_ORDER } from "../../actions/constants";
import debug from "../../utils/debug";
//temporary, will have its own file
const currentItems = [
  ];

const currentOrderReducer = (state = currentItems, action) => {
  let itemIndex = 0;
  switch (action.type) {

    case ADD_ADDRESS_TO_ORDER:
      debug.log('ADD_ADDRESS_TO_ORDER', action.address);
      return [...state, action.address];

    case REMOVE_ADDRESS_FROM_ORDER:
      debug.log('REMOVE_ADDRESS_FROM_ORDER', action.address);
      itemIndex = state.findIndex(x => x === action.address);
      return [...state.slice(0,itemIndex), ...state.slice(itemIndex+1, state.length)];
    
    case RESET_CURRENT_ORDER:
    debug.log('RESET_CURRENT_ORDER');
    return [];

    default:
      return state;
  }
};

export default currentOrderReducer;