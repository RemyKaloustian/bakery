export const getFood = () => ({
  type: 'GET_FOOD',
});

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  item,
})

export const removeFromCart =(item) => ({
  type: 'REMOVE_FROM_CART',
  item,
})
  