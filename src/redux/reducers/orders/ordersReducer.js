import { ADD_ORDER } from '../../../actions/constants';
import { getAddedOrder } from './ordersReducerHelper';

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [getAddedOrder(action), ...state];
      
    default:
      return state;
  }
};

export default ordersReducer;