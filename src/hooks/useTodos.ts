import { useEffect, useState } from 'react';

const STORAGE_KEY = 'todo-pwa.todos';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

function readStoredTodos(): Todo[] {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);

    if (!value) {
      return [];
    }

    const parsed = JSON.parse(value) as Todo[];

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => readStoredTodos());
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch {
      setError('Unable to save your todos on this device.');
    }
  }, [todos]);

  const addTodo = (value: string) => {
    const text = value.trim();

    if (!text) {
      setError('Enter a task before adding it.');
      return false;
    }

    const alreadyExists = todos.some(
      (todo) => todo.text.toLowerCase() === text.toLowerCase(),
    );

    if (alreadyExists) {
      setError('That task is already on your list.');
      return false;
    }

    setTodos((current) => [
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
      ...current,
    ]);
    setError('');

    return true;
  };

  const toggleTodo = (id: string) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
