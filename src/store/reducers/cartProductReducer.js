import { ADD_TO_CART_SUCCEEDED, REMOVE_FROM_CART, UPDATE_CART_PRODUCT_QUANTITY } from "../types";

const initialState = {
  products: [],
};

export function cartProductReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCEEDED:
      return { ...state, products: [...state.products, action.payload] };

    case REMOVE_FROM_CART:
        return { ...state, products: state.products.filter((product) => product.id !== action.payload) };

    case UPDATE_CART_PRODUCT_QUANTITY:
      return { ...state, products: state.products.map((product) => product.id === action.payload.id ? { ...product, quantity: action.payload.quantity } : product) };

    default:
      return state;
  }
}