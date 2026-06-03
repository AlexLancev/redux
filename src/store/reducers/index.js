import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { themeReducer } from './themeReducer';
import { modalReducer } from './modalReducer';
import { searchReducer } from './searchReducer';
import { cartProductReducer } from './cartProductReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  theme: themeReducer,
  modal: modalReducer,
  search: searchReducer,
  cart: cartProductReducer,
});
