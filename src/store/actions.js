import {
  TODOS_FETCH_REQUESTED,
  TODOS_FETCH_SUCCEEDED,
  TODOS_FETCH_FAILED,
  THEME_SET,
  MODAL_CLOSE,
  MODAL_TOGGLE,
} from './types';

export const fetchTodosRequested = () => ({
  type: TODOS_FETCH_REQUESTED,
});

export const fetchTodosSucceeded = (todos) => ({
  type: TODOS_FETCH_SUCCEEDED,
  payload: todos,
});

export const fetchTodosFailed = (message) => ({
  type: TODOS_FETCH_FAILED,
  payload: message,
});

export const setTheme = (theme) => ({
  type: THEME_SET,
  payload: theme,
});

export const closeModal = () => ({
  type: MODAL_CLOSE,
});

export const toggleModal = () => ({
  type: MODAL_TOGGLE,
});
