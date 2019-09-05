
//temporary, will have its own file
const foodItems = [
  'croissant', 
  'pain-au-chocolat', 
  'croissant-au-nutella',
  'brioche'];

const foodReducer = (state = foodItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default foodReducer;