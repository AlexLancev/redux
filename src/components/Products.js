import PropTypes from 'prop-types';
import Card from './Card';

Products.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  loading: PropTypes.bool,
  emptyHint: PropTypes.string,
};

Products.defaultProps = {
  loading: false,
  emptyHint: null,
};

export default function Products({ data, error, loading, emptyHint }) {
  return (
    <>
    
      {error && <p className="todos-error">{error}</p>}

      {!error && !loading && emptyHint && data.length === 0 && (
        <p className="todos-empty">{emptyHint}</p>
      )}

      <ul className="products-list">
        {data.map((product) => {
          if (!product) return null;
          
          return (
            <li key={product.id}>
              <Card product={product} />
            </li>
          )
        })}
      </ul>

    </>
  );
}
