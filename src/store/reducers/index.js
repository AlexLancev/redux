import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
});
