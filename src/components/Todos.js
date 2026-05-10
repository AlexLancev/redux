import PropTypes from 'prop-types';

Todos.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
};

export default function Todos({ data, error }) {
  return (
    <>
      {error && <p className="todos-error">{error}</p>}
      <ul className="todos-list">
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
