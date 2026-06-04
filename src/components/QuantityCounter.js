import { useDispatch } from "react-redux"
import { quantityCounter } from "../store/actions";

export default function QuantityCounter({ quantity, id }) {
  const dispatch = useDispatch();

  return (
    <div className="card-price-count">

      <button 
        className="card-price-count-btn" 
        onClick={() => dispatch(quantityCounter(quantity - 1, id))}
      >
        -
      </button>

      <span className="card-price-count-value">{quantity}</span>

      <button
        className="card-price-count-btn"
        onClick={() => dispatch(quantityCounter(quantity + 1, id))}
      >
        +
      </button>

    </div>
  )
}