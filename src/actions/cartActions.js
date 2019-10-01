import { 
  ADD_TO_CART,
  TOGGLE_REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  CLEAN_REMOVED_ITEMS,
  EMPTY_CART,
  ADD_ORDER,
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

export const emptyCart = () => ({
  type: EMPTY_CART,
})

export const cleanRemovedItems = () => ({
  type: CLEAN_REMOVED_ITEMS,
})

export const addOrder= (items, addresses) => ({
  type: ADD_ORDER,
  items,
  addresses,
})