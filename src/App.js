import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

import { selectTheme } from './store/reducers/themeReducer';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import BasketPage from './pages/BasketPage';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <div className={`app-root app-root--${theme}`}>
      <Header />
      <main className="app-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={BasketPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="/products/:id" component={ProductPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
