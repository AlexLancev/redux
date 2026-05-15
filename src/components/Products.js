import PropTypes from 'prop-types';

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

      <ul className="todos-list">
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

    </>
  );
}
