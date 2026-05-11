import { readStoredModalOpen } from '../modal';
import { MODAL_CLOSE, MODAL_TOGGLE } from '../types';

const initialState = {
  open: readStoredModalOpen(),
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_CLOSE:
      return { ...state, open: false };

    case MODAL_TOGGLE:
      return { ...state, open: !state.open };

    default:
      return state;
  }
}
