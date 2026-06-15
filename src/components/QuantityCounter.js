import { useDispatch } from "react-redux";
import { quantityCounter } from "../store/actions";

export default function QuantityCounter({ data: product }) {
  const dispatch = useDispatch();
  
  // Берем текущее количество напрямую из Redux-данных (гарантирует актуальность)
  const currentQuantity = product.quantity || 1;

  const incrementQuantityProduct = () => {
    // Кнопка минус: уменьшаем количество, но не позволяем упасть ниже 1
    const newQuantity = currentQuantity - 1;
    if (newQuantity < 1) return; // или вызовите экшен удаления из корзины
    
    dispatch(quantityCounter({ ...product, quantity: newQuantity }));
  };

  const decrementQuantityProduct = () => {
    // Кнопка плюс: увеличиваем количество на 1
    const newQuantity = currentQuantity + 1;
    
    dispatch(quantityCounter({ ...product, quantity: newQuantity }));
  };

  return (
    <div className="card-price-count">
      <button className="card-price-count-btn" onClick={incrementQuantityProduct}>
        -
      </button>
      <span className="card-price-count-value">{currentQuantity}</span>
      <button className="card-price-count-btn" onClick={decrementQuantityProduct}>
        +
      </button>
    </div>
  );
}
