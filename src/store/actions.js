import {
  THEME_SET,
  MODAL_CLOSE,
  MODAL_TOGGLE,
  SEARCH_QUERY_SET,
  PRODUCTS_FETCH_SUCCEEDED,
  PRODUCTS_FETCH_FAILED,
  PRODUCTS_FETCH_REQUESTED,
  ADD_TO_CART,
  PRODUCTS_TO_CART_FAILED,
  ADD_TO_CART_SUCCEEDED,
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

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export const fetchProductsToCartFailed = (message) => ({
  type: PRODUCTS_TO_CART_FAILED,
  payload: message,
});

export const addToCartSucceeded = (product) => ({
  type: ADD_TO_CART_SUCCEEDED,
  payload: product,
});