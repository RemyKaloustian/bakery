import { 
  ADD_TO_CART,
  TOGGLE_REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  CLEAN_REMOVED_ITEMS,
  ADD_ADDRESS,
  TOGGLE_ADDRESS_SELECTION_IN_ORDER,
  ADD_ORDER,
  EMPTY_CART,
  UPDATE_ADDRESS,
  ADD_MODAL,
  TOGGLE_MODAL,
  UPDATE_ON_VALIDATE_MODAL,
  REMOVE_ADDRESS,
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

export const cleanRemovedItems = () => ({
  type: CLEAN_REMOVED_ITEMS,
})

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  address,
})

export const toggleAddressSelectionInOrder = (address, isSelected) => ({
  type: TOGGLE_ADDRESS_SELECTION_IN_ORDER,
  address,
  isSelected,
})

export const addOrder= (items, addresses) => ({
  type: ADD_ORDER,
  items,
  addresses,
})

export const emptyCart = () => ({
  type: EMPTY_CART,
})

export const updateAddress = (oldAddress,newAddress) => ({
  type: UPDATE_ADDRESS,
  oldAddress,
  newAddress,
})

export const addModal = (modalId) => ({
  type: ADD_MODAL,
  modalId,
})

export const toggleModal = (modalId, isVisible) => ({
  type: TOGGLE_MODAL,
  modalId,
  isVisible,
})

export const updateOnValidateModal = (modalId, validationObject) => ({
  type: UPDATE_ON_VALIDATE_MODAL,
  modalId,
  validationObject,
})

export const removeAddress = (address) => ({
  type: REMOVE_ADDRESS,
  address,
})