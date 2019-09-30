import { 
  CART_FINALIZE_ORDER_MODAL, 
  MODAL_HIDDEN_CLASS,
  SETTINGS_ADDRESS_REMOVAL_MODAL,
} from '../../../utils/modalsConstants';
import { ADD_MODAL, TOGGLE_MODAL, UPDATE_ON_VALIDATE_MODAL } from '../../../actions/constants';
import { toNewDisplayClass } from './modalsReducerHelper';
import debug from '../../../utils/debug';

const modalsItems = [
    { id: CART_FINALIZE_ORDER_MODAL, displayClass: MODAL_HIDDEN_CLASS },
   ];
  
const modalsReducer = (state = modalsItems, action) => {
  let itemIndex = 0;
  switch (action.type) {

    case ADD_MODAL: 
      debug.log(ADD_MODAL, action.modalId);
      return [{ id: action.modalId, isVisible: false} , ...state];
    
    case TOGGLE_MODAL:
      itemIndex = state.findIndex(x=> x.id === action.modalId);

      const newVisibility = action.isVisible !== undefined ? 
        action.isVisible : !state[itemIndex].isVisible;
      
      return [...state.slice(0,itemIndex), 
        {...state[itemIndex], isVisible: newVisibility},
        ...state.slice(itemIndex+1, state.length)];
    
    case UPDATE_ON_VALIDATE_MODAL:
      itemIndex = state.findIndex(x=> x.id === action.modalId);
      debug.log(UPDATE_ON_VALIDATE_MODAL, action.validationObject);
      return [...state.slice(0,itemIndex), 
        {...state[itemIndex], validationObject: action.validationObject},
        ...state.slice(itemIndex+1, state.length)];

    default:
      //state = [];
      return state;
  }
};
  
export default modalsReducer;