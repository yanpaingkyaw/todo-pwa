import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, error } = useTodos();
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <main className="app-shell">
      <section className="app-card">
        <p className="eyebrow">Todo App PWA</p>
        <h1>Stay on top of the essentials.</h1>
        <p className="subtitle">
          Add tasks, mark them done, and keep them available offline after the
          first load.
        </p>

        <TodoForm onSubmit={addTodo} error={error} />

        <div className="summary" aria-live="polite">
          <span>{todos.length} total</span>
          <span>{completedCount} completed</span>
        </div>

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </section>
    </main>
  );
}

export default App;
