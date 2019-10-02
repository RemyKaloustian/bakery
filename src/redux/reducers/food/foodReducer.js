import { getFoodItems } from '../../../database/foodDatabase';
import { fireBaseInitialize } from '../../../database/fireBaseInitialize';

fireBaseInitialize();
const defaultFood = getFoodItems();

const foodReducer = (state = defaultFood, action) => {
  switch (action.type) {
   
    //Here returning the defaultFood instead of state because the 
    //plugin redux-persist saves the state and uses this saved value
    //to reset it at every app restart.
    //Therefore the state never gets set to the defaultFood but to the last saved
    //value of the state. This is why we return defaultFood instead.
    default:
      return defaultFood;
  }
};

export default foodReducer;