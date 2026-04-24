import { Todo } from '../hooks/useTodos';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={`todo-item${todo.completed ? ' is-complete' : ''}`}>
      <label className="todo-main">
        <input
          checked={todo.completed}
          className="todo-toggle"
          onChange={() => onToggle(todo.id)}
          type="checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </label>

      <button
        aria-label={`Delete ${todo.text}`}
        className="icon-button"
        onClick={() => onDelete(todo.id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
