import debug from '../../../utils/debug';

let defaultFood = [
  {name:'croissant', details:'The classic pastry',},
  {name:'brioche', details:'The classic pastry',},
  {name:'pain-au-chocolat', details:'The classic pastry',},
  {name:'croissant-au-nutella', details:'The classic pastry',},
];

const foodReducer = (state = defaultFood, action) => {
  switch (action.type) {
   
    //Here returning the defaultFood instead of state because the 
    //plugin redux-persist saves the state and uses this saved value
    //to reset it at every app restart.
    //Therefore the state never gets set to the defaultFood but to the last saved
    //value of the state. This is why we return defaultFood instead.
    default:
      return state ;
  }
};


export default foodReducer;