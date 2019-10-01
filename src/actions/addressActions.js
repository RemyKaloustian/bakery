import { 
  TOGGLE_ADDRESS_SELECTION_IN_ORDER,
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  REMOVE_ADDRESS,
} from './constants';

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  address,
})

export const toggleAddressSelectionInOrder = (address, isSelected) => ({
  type: TOGGLE_ADDRESS_SELECTION_IN_ORDER,
  address,
  isSelected,
})

export const updateAddress = (oldAddress,newAddress) => ({
  type: UPDATE_ADDRESS,
  oldAddress,
  newAddress,
})

export const removeAddress = (address) => ({
  type: REMOVE_ADDRESS,
  address,
})