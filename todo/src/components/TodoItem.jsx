import React from 'react';
import { useTodo } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem',
      borderBottom: '1px solid #ccc'
    }}>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flexGrow: 1
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '1rem' }}>❌</button>
    </li>
  );
};

export default TodoItem;
