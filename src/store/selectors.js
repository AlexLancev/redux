import { createSelector } from 'reselect';

const EMPTY_PRODUCTS = [];

export const selectProducts = (state) => state.products;
export const selectProductsData = (state) => state.products.data;
export const selectSearchQuery = (state) => state.search.query;

export const selectProductsList = createSelector(
  [selectProductsData],
  (data) => (Array.isArray(data?.products) ? data.products : EMPTY_PRODUCTS)
);

export const selectVisibleProducts = createSelector(
  [selectProductsList, selectSearchQuery],
  (products, query) => {
    const q = query?.trim().toLowerCase();
    
    if (!q) {
      return products;
    }
    
    return products.filter(
      (product) => 
        typeof product?.title === 'string' && 
        product.title.toLowerCase().includes(q)
    );
  }
);
