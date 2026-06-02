import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductsList } from '../store/selectors';

export default function ProductPage({ match }) {
  const { id } = match.params;
  const products = useSelector(selectProductsList);
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div>
        <p>Товар не найден. Сначала откройте список и загрузите данные.</p>
        <Link to="/products">← К списку товаров</Link>
      </div>
    );
  }

  return (
    <article className="product-page">
      <Link to="/products">← К списку</Link>
      <h1>{product.title}</h1>
      {product.images?.[0] && (
        <img
          className="product-page-img"
          src={product.images[0]}
          alt={product.title}
        />
      )}
      <p className="product-page-price">${product.price}</p>
      {product.description && <p>{product.description}</p>}
    </article>
  );
}
