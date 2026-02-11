import { useState } from 'react';

const TodoList = (props) => {
  const [elevate, setElevate] = useState({}); 
  const toggleCheckbox = (id, checked) => {
    setElevate(prev => ({
      ...prev,
      [id]: checked
    }));
  };

  const handleDelete = (todoId) => {
    props.deleteTodo(todoId);
  };

  return (
    props.todos.map(t =>
      <div key={t.id} className="todo">
        <div className="todoItem">

          <input
            type="checkbox"
            className="checkbox"
            onChange={(e) => toggleCheckbox(t.id, e.target.checked)}
          />

          <span className={elevate[t.id] ? 'todoName todoTitle' : 'todoTitle'}>
            {t.title}
          </span>

          <button className='deleteBtn' onClick={() => handleDelete(t.id)}>
            Delete
          </button>
        </div>
      </div>
    )
  );
};

export default TodoList;
