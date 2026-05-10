import {
  TODOS_FETCH_REQUESTED,
  TODOS_FETCH_SUCCEEDED,
  TODOS_FETCH_FAILED,
} from '../types';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODOS_FETCH_REQUESTED:
      return { ...state, loading: true, error: null };

    case TODOS_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case TODOS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
