import { 
  MODAL_HIDDEN_CLASS,
  MODAL_VISIBLE_CLASS, 
} from '../../../utils/modalsConstants';

export const toNewDisplayClass = (oldDisplayClass) => {
  return oldDisplayClass === MODAL_HIDDEN_CLASS ? MODAL_VISIBLE_CLASS : MODAL_HIDDEN_CLASS;
}
