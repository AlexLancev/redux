import {
  PRODUCTS_FETCH_REQUESTED,
  PRODUCTS_FETCH_SUCCEEDED,
  PRODUCTS_FETCH_FAILED,
} from '../types';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function productsReducer(state = initialState, action) {
  
  switch (action.type) {
    case PRODUCTS_FETCH_REQUESTED:
      return { ...state, loading: true, error: null };

    case PRODUCTS_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case PRODUCTS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
