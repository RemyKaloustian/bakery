export const getFood = () => ({
  type: 'GET_FOOD',
});

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  item,
})

export const toggleRemoveFromCart = (item, isRemoved) => ({
  type: 'TOGGLE_REMOVE_FROM_CART',
  item,
  isRemoved,
})

export const changeQuantity = (item, additionalQuantity) => ({
  type: 'CHANGE_QUANTITY', 
  item,
  additionalQuantity,
})

export const resetCartReducer = () => ({
  type: 'RESET_CART_REDUCER',
})

export const cleanRemovedItems = () => ({
  type: 'CLEAN_REMOVED_ITEMS',
})
  
  