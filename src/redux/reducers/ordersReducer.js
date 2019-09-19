import { ADD_ORDER } from '../../actions/constants';
import debug from '../../utils/debug';

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      debug.log(ADD_ORDER, {items: action.items, addresses:action.addresses});
      let d = new Date();
      return [{
          items: action.items, 
          addresses: action.addresses,
          date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
        }, 
        ...state];
    default:
      return state;
  }
};

export default ordersReducer;