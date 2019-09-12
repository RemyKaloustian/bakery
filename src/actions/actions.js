import { 
  ADD_TO_CART,
  TOGGLE_REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  RESET_CART_REDUCER,
  CLEAN_REMOVED_ITEMS,
  ADD_ADDRESS,
  SELECT_ADDRESS_FOR_ORDER,
  RESET_CURRENT_ORDER,
  REMOVE_ADDRESS_FROM_ORDER,
  TOGGLE_ADDRESS_SELECTION_IN_ORDER,
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

export const selectAddressForOrder = (address) => ({
  type: SELECT_ADDRESS_FOR_ORDER,
  address,
})


export const removeAddressFromOrder = (address) => ({
  type: REMOVE_ADDRESS_FROM_ORDER,
  address, 
})

export const toggleAddressSelectionInOrder = (address, isSelected) => ({
  type: TOGGLE_ADDRESS_SELECTION_IN_ORDER,
  address,
  isSelected,
})

export const resetCurrentOrder = (cart) => ({
  type: RESET_CURRENT_ORDER,
  cart,
})