const createItem = (name) => {
  return {  name,
            qty: 1, 
            isRemoved:false,
  };
}

export const addToCart = (itemName, state) => {
  if (state.some(item=> item.name === itemName)) {
    let objectToUpdate = state.find(o=>o.name===itemName);
    objectToUpdate.qty += 1;
    return state;
  }
  else{
    return [...state, createItem(itemName)];
  }
}