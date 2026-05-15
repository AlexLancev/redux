const DEFAULT_URL = 'https://dummyjson.com/products';

export async function fetchProducts(url = DEFAULT_URL) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error('Ошибка сервера');
    return res.json();
  });
}
