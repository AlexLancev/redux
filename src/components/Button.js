import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequested } from '../store/actions';
import { selectProducts } from '../store/selectors';

export default function Button() {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectProducts);

  return (
    <button
      type="button"
      onClick={() => dispatch(fetchProductsRequested())}
      disabled={loading}
    >
      {loading ? 'Загрузка...' : 'Загрузить данные'}
    </button>
  );
}
