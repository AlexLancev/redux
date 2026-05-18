export default function Card({ product }) {
  console.log(product);

  return (
    <div className="card-container">
      <a href='/' className="card">
        <img className="card-img" src={product.images[0]} alt={product.title} />
      </a>
      <strong className="card-title">{product.title}</strong>
      <div className="card-price">
        <span className="card-price-price">${product.price}</span>
        <button className="card-price-btn">Заказать</button>
      </div>
    </div>
  );
}