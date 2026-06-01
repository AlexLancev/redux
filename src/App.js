import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';

import {
  selectVisibleProducts,
  selectProductsList,
  selectSearchQuery,
  selectProducts,
} from './store/selectors';
import { selectTheme } from './store/reducers/themeReducer';

function App() {
  const { error, loading } = useSelector(selectProducts);
  const allProducts = useSelector(selectProductsList);
  const visibleProducts = useSelector(selectVisibleProducts);
  const query = useSelector(selectSearchQuery);
  const theme = useSelector(selectTheme);

  const trimmedQuery = query.trim();

  const showNoMatches =
    trimmedQuery.length > 0 &&
    allProducts.length > 0 &&
    visibleProducts.length === 0;

  return (
    <div className={`app-root app-root--${theme}`}>
      <Header />

      <main className="app-main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products">
            <Products
              data={visibleProducts}
              error={error}
              loading={loading}
              emptyHint={showNoMatches ? 'Ничего не найдено по запросу.' : null}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
