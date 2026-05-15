import { useSelector } from 'react-redux';

import Button from './components/Button';
import ThemeSelect from './components/ThemeSelect';
import Modal from './components/Modal';
import ModalButton from './components/ModalButton';
import Search from './components/Search';
import Products from './components/Products';

import {
  selectProductsData,
  selectVisibleProducts,
  selectSearchQuery,
  selectProducts,
} from './store/selectors';
import { selectTheme } from './store/reducers/themeReducer';

function App() {
  const visibleProducts = useSelector(selectVisibleProducts);
  const { error, loading } = useSelector(selectProducts);
  const productData = useSelector(selectProductsData);
  const query = useSelector(selectSearchQuery);
  const theme = useSelector(selectTheme);

  const products = productData?.products;

  const trimmedQuery = query.trim();

  const showNoMatches =
    trimmedQuery.length > 0 &&
    Array.isArray(products) &&
    products.length > 0 &&
    visibleProducts.length === 0;

  return (
    <div className={`app-root app-root--${theme}`}>
      <header className="app-header">
        <h1 className="app-title">Todos + Redux Saga</h1>
        <ThemeSelect />
      </header>
      <main className="app-main">
        <Button />
        <Search />
        <Products
          data={visibleProducts}
          error={error}
          loading={loading}
          emptyHint={showNoMatches ? 'Ничего не найдено по запросу.' : null}
        />
        <ModalButton
          labelOpen="Модальное окно"
          labelClose="Скрыть"
        />
        <Modal />
      </main>
    </div>
  );
}

export default App;
