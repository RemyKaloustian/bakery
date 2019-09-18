import { 
  CART_FINALIZE_ORDER_MODAL, 
  MODAL_HIDDEN_CLASS,
  MODAL_VISIBLE_CLASS, 
} from "../../utils/modalsConstants";
import { TOGGLE_MODAL_VISIBILITY } from "../../actions/constants";
import debug from '../../utils/debug';

const modalsItems = [
    { id: CART_FINALIZE_ORDER_MODAL, displayClass: MODAL_HIDDEN_CLASS },
   ];
  
  const modalsReducer = (state = modalsItems, action) => {
    let itemIndex = 0;
    switch (action.type) {
      case TOGGLE_MODAL_VISIBILITY :
        debug.log('in modals reducer', TOGGLE_MODAL_VISIBILITY);
        itemIndex = state.findIndex(x=> x.id === action.modalId);
        const newVisiblility = toNewDisplayClass(state[itemIndex].displayClass);

        return [...state.slice(0,itemIndex), 
          {...state[itemIndex], displayClass:newVisiblility},
          ...state.slice(itemIndex+1, state.length)];
      default:
        return state;
    }
  };

  const toNewDisplayClass = (oldDisplayClass) => {
    return oldDisplayClass === MODAL_HIDDEN_CLASS ? MODAL_VISIBLE_CLASS : MODAL_HIDDEN_CLASS;
  }
  
  export default modalsReducer;