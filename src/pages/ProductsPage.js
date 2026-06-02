import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products';
import { fetchProductsRequested } from '../store/actions';
import { useEffect } from 'react';
import { 
  selectProducts, 
  selectProductsList, 
  selectSearchQuery, 
  selectVisibleProducts 
} from '../store/selectors';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const query = useSelector(selectSearchQuery);
  const { error, loading } = useSelector(selectProducts);
  const allProducts = useSelector(selectProductsList);
  const visibleProducts = useSelector(selectVisibleProducts);

  const trimmedQuery = query.trim();

  const showNoMatches =
    trimmedQuery.length > 0 &&
    allProducts.length > 0 &&
    visibleProducts.length === 0;

  useEffect(() => {
    dispatch(fetchProductsRequested());
  }, [dispatch]);

  return (
    <Products
      data={visibleProducts}
      error={error}
      loading={loading}
      emptyHint={showNoMatches ? 'Ничего не найдено по запросу.' : null}
    />
  );
}