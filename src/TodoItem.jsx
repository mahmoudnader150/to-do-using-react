export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li key={id} className={`todo-item ${completed ? "completing" : ""}`}>
      <label htmlFor={`todo-${id}`}>
        <input
          id={`todo-${id}`}
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span className="task-text">{title}</span>
      </label>

      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
