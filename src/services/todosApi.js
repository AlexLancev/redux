const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTodos(url = DEFAULT_URL) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error('Ошибка сервера');
    return res.json();
  });
}
