import { 
  ADD_MODAL,
  TOGGLE_MODAL,
  UPDATE_ON_VALIDATE_MODAL,
} from './constants';

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