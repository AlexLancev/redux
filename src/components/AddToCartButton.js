import { useDispatch } from "react-redux";
import { addToCart } from '../store/actions';

export default function AddToCartButton({ id }) {
  const dispatch = useDispatch();

  return (
    <button
      className="card-price-btn"
      onClick={() => dispatch(addToCart(id))}
    >
      Заказать
    </button>
  )
}