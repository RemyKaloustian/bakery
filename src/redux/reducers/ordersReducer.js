import { ADD_ORDER } from '../../actions/constants';

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
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