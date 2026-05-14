export function selectTodosData(state) {
  return state.todos.data;
}

export function selectSearchQuery(state) {
  return state.search.query;
}

export function selectVisibleTodos(state) {
  const data = state.todos.data;
  const q = (state.search.query || '').trim().toLowerCase();

  if (!Array.isArray(data)) {
    return [];
  }
  if (!q) {
    return data;
  }

  return data.filter(
    (todo) =>
      todo &&
      typeof todo.title === 'string' &&
      todo.title.toLowerCase().includes(q)
  );
}
