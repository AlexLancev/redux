import {
  THEME_SET,
  MODAL_CLOSE,
  MODAL_TOGGLE,
  SEARCH_QUERY_SET,
  PRODUCTS_FETCH_SUCCEEDED,
  PRODUCTS_FETCH_FAILED,
  PRODUCTS_FETCH_REQUESTED,
} from './types';

export const fetchProductsRequested = () => ({
  type: PRODUCTS_FETCH_REQUESTED,
});

  export const fetchProductsSucceeded = (products) => ({
  type: PRODUCTS_FETCH_SUCCEEDED,  
  payload: products,
});

export const fetchProductsFailed = (message) => ({
  type: PRODUCTS_FETCH_FAILED,
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

export const setSearchQuery = (query) => ({
  type: SEARCH_QUERY_SET,
  payload: typeof query === 'string' ? query : '',
});
