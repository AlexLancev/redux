import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../store/actions';
import { selectSearchQuery } from '../store/selectors';

export default function Search() {
  const dispatch = useDispatch();
  const query = useSelector(selectSearchQuery);

  return (
    <input
      className="search-input"
      type="search"
      name="todoSearch"
      placeholder="Поиск по названию…"
      autoComplete="off"
      value={query}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      aria-label="Поиск задач по названию"
    />
  );
}
