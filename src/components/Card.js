import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import QuantityCounter from './QuantityCounter';

const UNIT_VALUE = '$';

export default function Card({ product: { id, title, images, price } }) {
  const productUrl = `/products/${id}`;

  return (
    <div className="card-container">
      <Link to={productUrl} className="card">
        <img className="card-img" src={images[0]} alt={title} />
        <strong className="card-title">{title}</strong>
      </Link>
      <div className="card-price">
        <span className="card-price-price">{UNIT_VALUE}{price}</span>

        <AddToCartButton id={id} />

        <QuantityCounter />

      </div>
    </div>
  );
}