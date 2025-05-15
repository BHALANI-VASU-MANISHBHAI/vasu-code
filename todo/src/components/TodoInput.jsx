import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '0.5rem', width: '60%' }}
      />
      <button type="submit" style={{ padding: '0.5rem' }}>Add</button>
    </form>
  );
};

export default TodoInput;
