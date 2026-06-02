import { Link } from 'react-router-dom';

export default function Card({ product }) {
  const productUrl = `/products/${product.id}`;

  return (
    <div className="card-container">
      <Link to={productUrl} className="card">
        <img className="card-img" src={product.images[0]} alt={product.title} />
        <strong className="card-title">{product.title}</strong>
      </Link>
      <div className="card-price">
        <span className="card-price-price">${product.price}</span>
        <button className="card-price-btn">Заказать</button>
      </div>
    </div>
  );
}