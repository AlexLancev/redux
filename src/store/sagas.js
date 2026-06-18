import { all, call, fork, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { THEME_SET, MODAL_CLOSE, MODAL_TOGGLE, PRODUCTS_FETCH_REQUESTED, ADD_TO_CART, UPDATE_CART_PRODUCT_QUANTITY } from './types';
import { fetchProductsSucceeded, fetchProductsFailed, fetchProductsToCartFailed, addToCartSucceeded, quantityUpdate } from './actions';
import { fetchProducts } from '../services/productsApi';
import { THEME_STORAGE_KEY } from './theme';
import { writeStoredModalOpen } from './modal';



function* productsWorker() {
  try {
    const products = yield call(fetchProducts);
    yield put(fetchProductsSucceeded(products));
  } catch (err) {
    yield put(fetchProductsFailed(err.message));
  }
}

function* productsWatcher() {
  yield takeEvery(PRODUCTS_FETCH_REQUESTED, productsWorker);
}



function persistThemeWorker(action) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, action.payload);
  } catch {}
}

function* themePersistenceWatcher() {
  yield takeEvery(THEME_SET, persistThemeWorker);
}



function* persistModalAfterChange() {
  const { open } = yield select((state) => state.modal);
  writeStoredModalOpen(open);
}

function* modalPersistenceWatcher() {
  yield takeLatest([MODAL_CLOSE, MODAL_TOGGLE], persistModalAfterChange);
}



function* addToCartWorker(action) {
  try {
    const id = action.payload;
    const { products } = yield select((state) => state.products.data);
    const product = products.find((product) => product.id === id);
    yield put(addToCartSucceeded(product));
  } catch (err) {
    yield put(fetchProductsToCartFailed(err.message));
  }
}

function* addToCartWatcher() {
  yield takeEvery(ADD_TO_CART, addToCartWorker);
}




function* quantityCounterWorker(action) {
  const { id } = action.payload;
  const products = yield select((state) => state.cart.products);
  const product = products.find((product) => product.id === id);
  yield put(quantityUpdate(product))
}

function* quantityCounterWatcher() {
  yield takeEvery(UPDATE_CART_PRODUCT_QUANTITY, quantityCounterWorker)
}



export default function* rootSaga() {
  yield all([
    fork(productsWatcher),
    fork(themePersistenceWatcher),
    fork(modalPersistenceWatcher),
    fork(addToCartWatcher),
    fork(quantityCounterWatcher),
  ]);
}