import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { TODOS_FETCH_REQUESTED, THEME_SET } from './types';
import {
  fetchTodosSucceeded,
  fetchTodosFailed,
} from './actions';
import { fetchTodos } from '../services/todosApi';
import { THEME_STORAGE_KEY } from './theme';

function* todosWorker() {
  try {
    const todos = yield call(fetchTodos);
    yield put(fetchTodosSucceeded(todos));
  } catch (err) {
    yield put(fetchTodosFailed(err.message));
  }
}

function* todosWatcher() {
  yield takeEvery(TODOS_FETCH_REQUESTED, todosWorker);
}

function persistThemeWorker(action) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, action.payload);
  } catch {}
}

function* themePersistenceWatcher() {
  yield takeEvery(THEME_SET, persistThemeWorker);
}

export default function* rootSaga() {
  yield all([fork(todosWatcher), fork(themePersistenceWatcher)]);
}
