import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequested } from '../store/actions';

export default function Button() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todos);

  return (
    <button
      type="button"
      onClick={() => dispatch(fetchTodosRequested())}
      disabled={loading}
    >
      {loading ? 'Загрузка...' : 'Загрузить данные'}
    </button>
  );
}
