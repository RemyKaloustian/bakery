import { ADD_ADDRESS } from "../../actions/constants";
import debug from "../../utils/debug";
//temporary, will have its own file
const addresses = [
    'Yob', 'mpkd',
    ];
  

  const addressReducer = (state = addresses, action) => {
    switch (action.type) {
      case ADD_ADDRESS:
        debug.log('Adding an address in reducer', action.address);
        return [...state, action.address];
      default:
        return state;
    }
  };
  
  export default addressReducer;