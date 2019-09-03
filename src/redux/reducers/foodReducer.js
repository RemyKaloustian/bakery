import debug from '../../utils/debug';

//temporary, will have its own file
const foodItems = [
  'croissant', 
  'pain-au-chocolat', 
  'croissant-au-nutella',
  'brioche'];

const foodReducer = (state = foodItems, action) => {
  switch (action.type) {
    case 'GET_FOOD':
      debug.log('In foodReducer','GET_FOOD');
      return [...state, "yolo"];
    default:
      return state;
  }
};

export default foodReducer;