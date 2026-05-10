import { useCallback, useState } from "react";

const defaultUrl = 'https://jsonplaceholder.typicode.com/todos';

export const useFetchData = (url = defaultUrl) => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsloading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error('ошибка:', error)
    }
    finally {
      setIsloading(false)
    }

  }, [url])

  return { todos, fetchData, isLoading };
};
