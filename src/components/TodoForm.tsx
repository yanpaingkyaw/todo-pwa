import { FormEvent, useState } from 'react';

type TodoFormProps = {
  onSubmit: (value: string) => boolean;
  error: string;
};

function TodoForm({ onSubmit, error }: TodoFormProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSubmit(value)) {
      setValue('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form-row">
        <input
          aria-label="New todo"
          className="todo-input"
          maxLength={120}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Add a task"
          value={value}
        />
        <button className="primary-button" type="submit">
          Add
        </button>
      </div>

      {error ? <p className="form-error">{error}</p> : null}
    </form>
  );
}

export default TodoForm;
