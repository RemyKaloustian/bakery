import { 
  CART_FINALIZE_ORDER_MODAL, 
  MODAL_HIDDEN_CLASS,
} from '../../../utils/modalsConstants';
import { TOGGLE_MODAL_VISIBILITY } from '../../../actions/constants';
import { toNewDisplayClass } from './modalsReducerHelper';

const modalsItems = [
    { id: CART_FINALIZE_ORDER_MODAL, displayClass: MODAL_HIDDEN_CLASS },
   ];
  
const modalsReducer = (state = modalsItems, action) => {
  let itemIndex = 0;
  switch (action.type) {
    case TOGGLE_MODAL_VISIBILITY :
      itemIndex = state.findIndex(x=> x.id === action.modalId);
      const newDisplayClass = toNewDisplayClass(state[itemIndex].displayClass);
      
      return [...state.slice(0,itemIndex), 
        {...state[itemIndex], displayClass: newDisplayClass},
        ...state.slice(itemIndex+1, state.length)];

    default:
      return state;
  }
};
  
export default modalsReducer;