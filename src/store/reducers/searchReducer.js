import { SEARCH_QUERY_SET } from '../types';

const initialState = {
  query: '',
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_QUERY_SET:
      return { ...state, query: action.payload };

    default:
      return state;
  }
}
