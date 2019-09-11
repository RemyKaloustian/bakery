import { 
  ADD_TO_CART,
  TOGGLE_REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  RESET_CART_REDUCER,
  CLEAN_REMOVED_ITEMS,
  ADD_ADDRESS,
  ADD_ADDRESS_TO_ORDER,
  RESET_CURRENT_ORDER,
  REMOVE_ADDRESS_FROM_ORDER,
} from './constants';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
})

export const toggleRemoveFromCart = (item, isRemoved) => ({
  type: TOGGLE_REMOVE_FROM_CART,
  item,
  isRemoved,
})

export const changeQuantity = (item, additionalQuantity) => ({
  type: CHANGE_QUANTITY, 
  item,
  additionalQuantity,
})

export const resetCartReducer = () => ({
  type: RESET_CART_REDUCER,
})

export const cleanRemovedItems = () => ({
  type: CLEAN_REMOVED_ITEMS,
})

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  address,
})

export const addAddressToOrder = (address) => ({
  type: ADD_ADDRESS_TO_ORDER,
  address,
})

export const resetCurrentOrder = () => ({
  type: RESET_CURRENT_ORDER,
})
  
export const removeAddressFromOrder = (address) => ({
  type: REMOVE_ADDRESS_FROM_ORDER,
  address, 
})
  