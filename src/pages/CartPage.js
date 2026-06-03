import { useSelector } from 'react-redux';
import Card from '../components/Card';

export default function CartPage() {
  const cartProducts = useSelector((state) => state.cart.products);

  return <div>
    <h1>Cart</h1>
    <ul className="products-list">
      {cartProducts.map((product) => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ))}
    </ul>
  </div>;
}