import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import QuantityCounter from './QuantityCounter';
import { useSelector } from 'react-redux';

const UNIT_VALUE = '$';

export default function Card({ product: { id, title, images, price } }) {
  const products = useSelector((state) => state.cart.products);
  console.log(products, 'products')
  const productUrl = `/products/${id}`;
  const product = products.find((product) => product.id === id);

  return (
    <div className="card-container">
      <Link to={productUrl} className="card">
        <img className="card-img" src={images[0]} alt={title} />
        <strong className="card-title">{title}</strong>
      </Link>
      <div className="card-price">
        <span className="card-price-price">{UNIT_VALUE}{price}</span>
        {product ? (
          <QuantityCounter data={product} />
        ) : (
          <AddToCartButton id={id} />
        )}
      </div>
    </div>
  );
}