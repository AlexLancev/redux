import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { themeReducer } from './themeReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
  modal: modalReducer,
});
